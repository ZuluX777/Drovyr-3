import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { capabilityAreas, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "What we work on",
  description:
    "Lead intake and follow-up, scheduling, admin work and connected systems, and visibility for service businesses.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            What we work on
          </h1>
          <p className="mt-5 text-lg text-operational">
            Four areas where service businesses lose time. We recommend what fits your operation,
            not the whole list. These are examples of work we look at, not fixed packages.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {capabilityAreas.map((area) => (
            <div
              key={area.slug}
              id={area.slug}
              className="grid gap-8 border-t border-operational/20 pt-10 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <h2 className="font-display text-2xl font-semibold text-elevation">{area.name}</h2>
              <p className="max-w-2xl text-operational">{area.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-operational">
          Where it fits, we also look at AI assistance for routine questions and internal knowledge.
        </p>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-operational/20 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">Not sure where to start?</h2>
            <p className="mt-2 text-operational">That&rsquo;s what the free assessment is for.</p>
          </div>
          <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
        </div>
      </div>
    </div>
  );
}
