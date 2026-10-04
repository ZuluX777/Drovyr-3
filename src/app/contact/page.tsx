import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Book your free assessment",
  description:
    "Tell us what's getting in the way in your operation and we'll reply by email to set up a conversation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
              Book your free assessment
            </h1>
            <p className="mt-5 text-lg text-operational">
              Tell us what&rsquo;s getting in the way in your operation. We&rsquo;ll reply by email
              to set up a conversation.
            </p>
            <p className="mt-6 text-sm text-operational">
              Prefer email? Reach us at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-link">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-operational/20 p-6 md:p-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
