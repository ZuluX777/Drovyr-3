import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { createPageMetadata, industries, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "Drovyr works with service businesses: cleaning, HVAC, plumbing, electrical, roofing, landscaping, construction, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">Industries</h1>
          <p className="mt-5 text-lg text-operational">
            Service businesses we focus on. This list is where we&rsquo;re starting. It is not a
            record of past client work, and it is not a limit on who we can talk with.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="rounded-lg border border-operational/20 p-6">
              <h2 className="font-medium text-elevation">{industry.name}</h2>
              <p className="mt-2 text-sm text-operational">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-elevation">Don&rsquo;t see your industry?</h2>
          <p className="mt-3 text-operational">
            If your business runs on scheduling, dispatch, estimates, recurring service, or other
            moving parts, the same kinds of operational problems may apply. The free AI &amp; ops
            assessment is a conversation about whether it fits.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-xl border border-operational/20 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              See whether it applies to your business
            </h2>
            <p className="mt-2 text-operational">Start with a free AI &amp; ops assessment.</p>
          </div>
          <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
        </div>
      </div>
    </div>
  );
}
