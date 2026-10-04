import { processSteps } from "@/lib/site";

export default function HowItWorksSection() {
  return (
    <section className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-operational">
            We start by understanding the operation. Everything after that is based on what we
            actually find.
          </p>
        </div>

        <ol className="mt-14 space-y-6">
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex gap-6 border-b border-operational/20 pb-6 last:border-none">
              <span className="font-display text-2xl font-semibold text-operational">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-elevation">{step.title}</h3>
                <p className="mt-1 text-operational">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
