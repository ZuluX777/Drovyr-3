import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions — Operational Intelligence & AI Automation",
  description:
    "Ops Intel, Process AI, LeadFlow, and Workflow Hub — how DROVYR connects your existing systems, automates repetitive work, and gives you visibility into your operation.",
  alternates: { canonical: "/solutions" },
};

const voiceAssist = {
  name: "Voice & Assist",
  tagline: "AI teammates for communication and assistance.",
  description:
    "Where it fits your operation, AI can help handle routine communication and internal support — always positioned to make your team more capable, not to replace them.",
  note: "This area is earlier in development than our other solutions. We'll only recommend it where it's genuinely ready for your use case.",
};

export default function SolutionsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            Solutions
          </h1>
          <p className="mt-5 text-lg text-elevation-muted">
            Four capability areas, connected to the systems you already run. We recommend what
            fits your operation — not the whole list.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {solutions.map((solution) => (
            <div
              key={solution.slug}
              id={solution.slug}
              className="grid gap-8 border-t border-focus-border pt-10 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-elevation">{solution.name}</h2>
                <p className="mt-2 text-clarity">{solution.tagline}</p>
              </div>
              <div>
                <p className="max-w-2xl text-elevation-muted">{solution.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {solution.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-3 text-sm text-elevation-muted">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-momentum"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="grid gap-8 border-t border-focus-border pt-10 lg:grid-cols-[280px_1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-elevation">{voiceAssist.name}</h2>
              <p className="mt-2 text-clarity">{voiceAssist.tagline}</p>
            </div>
            <div>
              <p className="max-w-2xl text-elevation-muted">{voiceAssist.description}</p>
              <p className="mt-4 max-w-2xl text-sm text-elevation-faint">{voiceAssist.note}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-focus-border bg-focus-card p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              Not sure which of this applies to you?
            </h2>
            <p className="mt-2 text-elevation-muted">
              That&rsquo;s what the Ops Audit is for. We&rsquo;ll tell you.
            </p>
          </div>
          <CTAButton href="/contact">Get Your Free Ops Audit</CTAButton>
        </div>
      </div>
    </div>
  );
}
