import CTAButton from "@/components/CTAButton";

export default function FinalCTASection() {
  return (
    <section className="bg-focus">
      <div className="container-content flex flex-col items-center gap-6 py-24 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-clarity">
          A clearer path for what&rsquo;s next.
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold text-elevation md:text-4xl">
          Get Your Free Ops Audit.
        </h2>
        <CTAButton href="/contact" className="mt-2">
          Get Your Free Ops Audit
        </CTAButton>
      </div>
    </section>
  );
}
