import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { createPageMetadata, processSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "How it works",
  description:
    "How a Drovyr engagement starts with a free AI and ops assessment and moves from understanding the operation to adjusting how the work gets done.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">How it works</h1>
          <p className="mt-5 text-lg text-operational">
            We start small and build on what we actually find. The free AI &amp; ops assessment is
            the first conversation.
          </p>
        </div>

        <ol className="mt-16 space-y-10">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-operational/20 pt-8 md:grid-cols-[120px_1fr] md:gap-10"
            >
              <span className="font-display text-3xl font-semibold text-operational">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-elevation">{step.title}</h2>
                <p className="mt-2 max-w-xl text-operational">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-operational/20 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">It starts with a conversation</h2>
            <p className="mt-2 text-operational">
              The free AI &amp; ops assessment is how we learn your operation and figure out whether
              we can help.
            </p>
          </div>
          <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
        </div>
      </div>
    </div>
  );
}
