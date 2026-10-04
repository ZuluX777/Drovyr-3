import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "DROVYR works with operationally complex service businesses across Central Texas — commercial cleaning, HVAC, facility services, construction, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            Industries
          </h1>
          <p className="mt-5 text-lg text-elevation-muted">
            We work with operationally complex service businesses — these are examples of where
            we&rsquo;re starting, not a limit on who we work with.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="rounded-lg border border-focus-border p-6">
              <h2 className="font-medium text-elevation">{industry.name}</h2>
              <p className="mt-2 text-sm text-elevation-muted">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-elevation">
            Don&rsquo;t see your industry?
          </h2>
          <p className="mt-3 text-elevation-muted">
            If your business runs on scheduling, dispatch, estimates, recurring service, or any
            operation with a lot of moving parts, there&rsquo;s a good chance the same problems
            apply. The Ops Audit will tell you quickly whether it&rsquo;s a fit.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-xl border border-focus-border bg-focus-card p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              Find out if it applies to your business
            </h2>
            <p className="mt-2 text-elevation-muted">Start with a free ops audit.</p>
          </div>
          <CTAButton href="/contact">Get Your Free Ops Audit</CTAButton>
        </div>
      </div>
    </div>
  );
}
