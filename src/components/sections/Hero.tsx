import CTAButton from "@/components/CTAButton";
import PathTrail from "@/components/PathTrail";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-focus-border/60">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <PathTrail className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-focus/40 to-focus" />

      <div className="container-content relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-clarity">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-elevation md:text-5xl lg:text-6xl">
            Turn complexity into clarity.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-elevation-muted">
            Operational intelligence and AI automation for growing service businesses —
            built to work with the systems you already run, not replace them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CTAButton href="/contact">{siteConfig.ctaPrimary}</CTAButton>
            <CTAButton href="/how-it-works" variant="secondary">
              {siteConfig.ctaSecondary}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
