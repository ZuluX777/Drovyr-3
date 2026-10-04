import Link from "next/link";
import { solutions } from "@/lib/site";

export default function SolutionsSection() {
  return (
    <section className="border-b border-focus-border/60 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              Where DROVYR fits in your operation
            </h2>
          </div>
          <Link href="/solutions" className="text-sm font-medium text-clarity hover:text-elevation">
            View all solutions
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions#${solution.slug}`}
              className="group rounded-xl border border-focus-border bg-focus-card p-8 transition-colors hover:border-momentum/60"
            >
              <h3 className="font-display text-xl font-semibold text-elevation">{solution.name}</h3>
              <p className="mt-1 text-sm text-clarity">{solution.tagline}</p>
              <p className="mt-4 text-elevation-muted">{solution.description}</p>
              <span className="mt-5 inline-block text-sm font-medium text-elevation-muted group-hover:text-clarity">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
