import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From understanding your operation to measuring results — how a DROVYR engagement moves from first conversation to ongoing improvement.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            How it works
          </h1>
          <p className="mt-5 text-lg text-elevation-muted">
            No long onboarding, no big upfront commitment. We start by understanding your
            operation — everything after that is built on what we actually find.
          </p>
        </div>

        <ol className="mt-16 space-y-10">
          {processSteps.map((step, index) => (
            <li key={step.title} className="grid gap-4 border-t border-focus-border pt-8 md:grid-cols-[120px_1fr] md:gap-10">
              <span className="font-display text-3xl font-semibold text-momentum">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-elevation">{step.title}</h2>
                <p className="mt-2 max-w-xl text-elevation-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-focus-border bg-focus-card p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              Step one starts with a conversation
            </h2>
            <p className="mt-2 text-elevation-muted">
              The Free Ops Audit is how we understand your operation.
            </p>
          </div>
          <CTAButton href="/contact">Get Your Free Ops Audit</CTAButton>
        </div>
      </div>
    </div>
  );
}
