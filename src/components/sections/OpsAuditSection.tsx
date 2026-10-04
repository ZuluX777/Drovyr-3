import CTAButton from "@/components/CTAButton";

const receive = [
  "A clear map of where time, money, or opportunity is slipping through the cracks",
  "Specific automation and AI opportunities, ranked by likely impact",
  "A recommended starting point — not a 40-page report you'll never open",
];

export default function OpsAuditSection() {
  return (
    <section id="ops-audit" className="border-b border-focus-border/60 bg-focus-raised">
      <div className="container-content py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              Get Your Free Ops Audit
            </h2>
            <p className="mt-5 text-lg text-elevation-muted">
              We look at how work actually moves through your business, identify where time or
              revenue is being lost, and show you where AI and automation can create the highest
              impact.
            </p>
            <p className="mt-4 text-elevation-muted">
              It&rsquo;s a single conversation, usually 30–45 minutes, focused on your business —
              not a sales pitch.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact">Get Your Free Ops Audit</CTAButton>
            </div>
          </div>

          <div className="rounded-xl border border-focus-border bg-focus-card p-8">
            <h3 className="font-medium text-elevation">What you&rsquo;ll get</h3>
            <ul className="mt-5 space-y-4">
              {receive.map((item) => (
                <li key={item} className="flex gap-3 text-elevation-muted">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clarity" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-elevation-faint">
              We&rsquo;ll ask about lead capture and follow-up, scheduling, admin work, reporting,
              customer handoffs, billing workflows, and the systems you already use — no guaranteed
              outcomes promised, just a clear read on where the opportunity actually is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
