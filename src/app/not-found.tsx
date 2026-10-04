import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-sm uppercase tracking-[0.2em] text-clarity">404</p>
      <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold text-elevation md:text-4xl">
        Looks like you&rsquo;ve veered off course.
      </h1>
      <p className="mt-4 max-w-md text-elevation-muted">
        A clearer path is this way.
      </p>
      <CTAButton href="/" className="mt-8">
        Return Home
      </CTAButton>
    </div>
  );
}
