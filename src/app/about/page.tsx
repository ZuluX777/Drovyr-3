import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Drovyr is an AI operations and implementation company for service businesses. We fix the operational problem first, then automate it.",
  path: "/about",
});

const values = [
  { name: "Clarity", description: "Turn complexity into what matters." },
  { name: "Motion", description: "Intelligence should lead to action." },
  { name: "Connection", description: "Work across the systems already in place." },
  { name: "Operator-first", description: "Solve real operational friction." },
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
            Built for the people who run the work.
          </h1>
          <p className="mt-5 text-lg text-operational">
            Drovyr connects what is happening across a business with what needs to happen next. We
            work with service-business owners and operators to find where work breaks down, improve
            the process, connect the systems already in place, and apply AI and automation where it
            makes execution more reliable.
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">Why we exist</h2>
          <p className="mt-4 text-operational">
            Most operational problems don&rsquo;t come from a lack of software. They show up in the
            gaps: a lead nobody followed up, a handoff that didn&rsquo;t happen, a schedule that only
            one person understands.
          </p>
          <p className="mt-4 text-operational">We fix the process first, then make it run reliably.</p>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            What we operate by
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="rounded-xl border border-operational/20 p-6">
                <h3 className="font-medium text-elevation">{value.name}</h3>
                <p className="mt-2 text-sm text-operational">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-xl border border-operational/20 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-elevation">
              Want to see where this applies in your operation?
            </h2>
            <p className="mt-2 text-operational">Book your free assessment.</p>
          </div>
          <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
        </div>
      </div>
    </div>
  );
}
