import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Get Your Free Ops Audit",
  description:
    "Request a free operational audit. Tell us about your business and the challenge you'd like us to look at, and we'll follow up to schedule a conversation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
              Get Your Free Ops Audit
            </h1>
            <p className="mt-5 text-lg text-elevation-muted">
              Tell us a bit about your business. We&rsquo;ll follow up to schedule a short
              conversation — usually 30–45 minutes — focused on where AI and automation could
              actually help.
            </p>
            <p className="mt-6 text-sm text-elevation-faint">
              Prefer email? Reach us at{" "}
              <a href="mailto:office@drovyr.com" className="text-clarity underline hover:text-elevation">
                office@drovyr.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-focus-border bg-focus-card p-6 md:p-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
