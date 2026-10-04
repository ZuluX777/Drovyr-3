import { frameworkSteps } from "@/lib/site";

export default function FrameworkSection() {
  return (
    <section className="border-b border-focus-border/60 bg-focus-raised">
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            A simple framework for operational intelligence
          </h2>
          <p className="mt-4 text-elevation-muted">
            Every engagement moves through the same four stages, in order.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {frameworkSteps.map((step, index) => (
            <li key={step.key} className="relative border-t-2 border-momentum pt-6">
              <span className="font-display text-sm text-clarity">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-elevation">{step.title}</h3>
              <p className="mt-2 text-sm text-elevation-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
