import { frameworkSteps } from "@/lib/site";

export default function FrameworkSection() {
  return (
    <section className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-operational">SEE → DECIDE → DRIVE → ADAPT</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-elevation md:text-4xl">
            How we think about the work
          </h2>
          <p className="mt-4 text-operational">Every improvement follows the same loop.</p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {frameworkSteps.map((step, index) => (
            <li key={step.key} className="relative border-t border-operational/20 pt-6">
              <span className="font-display text-sm text-operational">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-elevation">{step.title}</h3>
              <p className="mt-2 text-sm text-operational">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
