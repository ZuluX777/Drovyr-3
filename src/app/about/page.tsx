import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "DROVYR is an operational intelligence and AI automation company built in Austin, Texas — founded on clarity, adaptability, and real results over hype.",
  alternates: { canonical: "/about" },
};

const values = [
  { name: "Clarity", description: "Turn complexity into understanding." },
  { name: "Adaptability", description: "Help organizations respond intelligently to change." },
  { name: "Execution", description: "Insights should lead to action." },
  { name: "Growth", description: "Technology should create measurable business value." },
  { name: "People First", description: "AI should make people more capable, not simply replace them." },
  { name: "Real Results", description: "Prioritize outcomes over hype." },
  { name: "Responsible AI", description: "Build and deploy thoughtfully." },
  { name: "Simplicity", description: "Powerful technology should feel understandable." },
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            More than automation. A higher direction.
          </h1>
          <p className="mt-5 text-lg text-elevation-muted">
            DROVYR helps growing businesses see what&rsquo;s ahead, understand what matters, and
            move with confidence using practical AI and automation. Built for real operations.
            Designed for what&rsquo;s next.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-focus-border bg-focus-card p-8">
            <h2 className="font-display text-xl font-semibold text-elevation">William Fore</h2>
            <p className="mt-1 text-sm text-clarity">Founder, DROVYR</p>
            <p className="mt-4 text-elevation-muted">
              William Fore is an operations and technology leader whose background spans
              large-scale compute infrastructure, project delivery, procurement,
              service-business operations, and AI automation.
            </p>
            <p className="mt-4 text-elevation-muted">
              After seeing the same problem across very different operating environments
              &mdash; capable people slowed down by disconnected systems, repetitive work,
              and limited visibility &mdash; William began applying AI and automation to
              practical operational problems.
            </p>
            <p className="mt-4 text-elevation-muted">That work became DROVYR.</p>
            <p className="mt-4 text-elevation-muted">
              Built from an operator&rsquo;s perspective, DROVYR is focused on helping
              businesses understand what&rsquo;s happening, identify what matters, and turn
              intelligence into action.
            </p>
            <p className="mt-4 text-sm text-elevation-faint">
              William is a U.S. military veteran based in Austin, Texas.
            </p>
          </div>
          <div className="rounded-xl border border-focus-border bg-focus-card p-8">
            <h2 className="font-display text-xl font-semibold text-elevation">Why we exist</h2>
            <p className="mt-3 text-elevation-muted">
              Most businesses don&rsquo;t lose money because they lack software. They lose it in
              the gaps between systems — where information stalls, work gets duplicated, and no
              one has a clear view of what&rsquo;s actually happening. DROVYR exists to close
              those gaps.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            What we operate by
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-focus-border bg-focus-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="bg-focus-card p-6">
                <h3 className="font-medium text-elevation">{value.name}</h3>
                <p className="mt-2 text-sm text-elevation-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-focus-border bg-focus-card p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              Want to see how this applies to your operation?
            </h2>
            <p className="mt-2 text-elevation-muted">Start with a free ops audit.</p>
          </div>
          <CTAButton href="/contact">Get Your Free Ops Audit</CTAButton>
        </div>
      </div>
    </div>
  );
}
