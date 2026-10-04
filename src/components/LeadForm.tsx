"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  companySizeOptions,
  industryOptions,
  leadFormDefaults,
  leadFormSchema,
  type LeadFormValues,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<keyof LeadFormValues, string>>;

const inputClasses =
  "w-full rounded-md border border-operational/20 bg-focus px-4 py-3 text-elevation placeholder:text-operational focus:border-momentum";

const labelClasses = "block text-sm font-medium text-operational";

const requestNotSent =
  "Something went wrong and your request wasn't sent. Please try again shortly.";

export default function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(leadFormDefaults as LeadFormValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const hasStartedRef = useRef(false);
  const submittingRef = useRef(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === "error") {
      errorRef.current?.focus();
    }
  }, [status]);

  function update<K extends keyof LeadFormValues>(key: K, value: LeadFormValues[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("ops_audit_form_start");
    }
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent duplicate submissions from a double-click or double-enter.
    if (submittingRef.current) return;

    const result = leadFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof LeadFormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setServerError(null);
    setStatus("submitting");
    submittingRef.current = true;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(typeof data?.message === "string" ? data.message : requestNotSent);
        setStatus("error");
        submittingRef.current = false;
        return;
      }

      trackEvent("ops_audit_form_submit");
      setStatus("success");
    } catch {
      setServerError(requestNotSent);
      setStatus("error");
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div role="status" tabIndex={-1} className="rounded-xl border border-operational/20 p-10 text-center">
        <h2 className="font-display text-2xl font-semibold text-elevation">Request received</h2>
        <p className="mt-3 text-operational">
          Thanks, we got your request. We&rsquo;ll reply by email to set up a time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby={serverError ? "form-server-error" : undefined}>
      {/* Honeypot — hidden from sighted users and screen readers, but present in the DOM for bots. */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="hp_field">Leave this field blank</label>
        <input
          type="text"
          id="hp_field"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          value={values.hp_field}
          onChange={(e) => update("hp_field", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={inputClasses}
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1.5 text-sm text-red-400">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={inputClasses}
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1.5 text-sm text-red-400">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          className={inputClasses}
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1.5 text-sm text-red-400">
            {errors.company}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="workEmail" className={labelClasses}>
            Work email
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
            value={values.workEmail}
            onChange={(e) => update("workEmail", e.target.value)}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
          />
          {errors.workEmail && (
            <p id="workEmail-error" className="mt-1.5 text-sm text-red-400">
              {errors.workEmail}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClasses}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-400">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="companyWebsite" className={labelClasses}>
          Company website <span className="text-operational">(optional)</span>
        </label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          inputMode="url"
          placeholder="yourcompany.com"
          autoComplete="url"
          className={inputClasses}
          value={values.companyWebsite}
          onChange={(e) => update("companyWebsite", e.target.value)}
          aria-invalid={!!errors.companyWebsite}
          aria-describedby={errors.companyWebsite ? "companyWebsite-error" : undefined}
        />
        {errors.companyWebsite && (
          <p id="companyWebsite-error" className="mt-1.5 text-sm text-red-400">
            {errors.companyWebsite}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="industry" className={labelClasses}>
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            required
            className={inputClasses}
            value={values.industry ?? ""}
            onChange={(e) => update("industry", e.target.value as LeadFormValues["industry"])}
            aria-invalid={!!errors.industry}
            aria-describedby={errors.industry ? "industry-error" : undefined}
          >
            <option value="" disabled>
              Select industry
            </option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p id="industry-error" className="mt-1.5 text-sm text-red-400">
              {errors.industry}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="companySize" className={labelClasses}>
            Company size
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            className={inputClasses}
            value={values.companySize ?? ""}
            onChange={(e) => update("companySize", e.target.value as LeadFormValues["companySize"])}
            aria-invalid={!!errors.companySize}
            aria-describedby={errors.companySize ? "companySize-error" : undefined}
          >
            <option value="" disabled>
              Select company size
            </option>
            {companySizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.companySize && (
            <p id="companySize-error" className="mt-1.5 text-sm text-red-400">
              {errors.companySize}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className={labelClasses}>
          What&rsquo;s the biggest operational challenge you&rsquo;d like us to look at?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          required
          className={inputClasses}
          value={values.challenge}
          onChange={(e) => update("challenge", e.target.value)}
          aria-invalid={!!errors.challenge}
          aria-describedby={errors.challenge ? "challenge-error" : undefined}
        />
        {errors.challenge && (
          <p id="challenge-error" className="mt-1.5 text-sm text-red-400">
            {errors.challenge}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="currentTools" className={labelClasses}>
          What systems/tools do you currently use? <span className="text-operational">(optional)</span>
        </label>
        <textarea
          id="currentTools"
          name="currentTools"
          rows={3}
          className={inputClasses}
          value={values.currentTools}
          onChange={(e) => update("currentTools", e.target.value)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-operational">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-momentum"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked as unknown as true)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            I agree to be contacted by Drovyr about my free AI &amp; ops assessment request. See our{" "}
            <a href="/privacy" className="text-link">
              Privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      {serverError && (
        <p
          ref={errorRef}
          id="form-server-error"
          role="alert"
          tabIndex={-1}
          className="rounded-md border border-red-400 px-4 py-3 text-sm text-red-400"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-md bg-momentum px-6 py-3.5 text-sm font-semibold text-elevation transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
