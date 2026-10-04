import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/site";

export default function FinalCTASection() {
  return (
    <section className="bg-focus">
      <div className="container-content flex flex-col items-center gap-6 py-24 text-center md:py-28">
        <p className="text-sm font-medium text-operational">{siteConfig.supportingLine}</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold text-elevation md:text-4xl">
          Book your free assessment.
        </h2>
        <CTAButton href="/contact" className="mt-2">
          {siteConfig.ctaPrimary}
        </CTAButton>
      </div>
    </section>
  );
}
