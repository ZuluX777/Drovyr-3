import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/site";

const topics = [
  "How work comes in, and who follows up",
  "How the schedule is kept",
  "Where handoffs between people or systems slip",
  "Which tools you already use",
];

export default function OpsAuditSection() {
  return (
    <section id="assessment" className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              {siteConfig.assessmentName}
            </h2>
            <p className="mt-5 text-lg text-operational">
              A conversation about your operation: what&rsquo;s getting in the way, what you&rsquo;ve
              already tried, and whether we&rsquo;re a good fit.
            </p>
            <p className="mt-4 text-sm text-operational">
              Every engagement is scoped separately after the assessment. No outcome is guaranteed.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
            </div>
          </div>

          <div className="rounded-xl border border-operational/20 p-8">
            <h3 className="font-medium text-elevation">What we ask about</h3>
            <ul className="mt-5 space-y-4">
              {topics.map((item) => (
                <li key={item} className="flex gap-3 text-operational">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-momentum" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
