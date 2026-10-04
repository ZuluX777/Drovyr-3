import Link from "next/link";
import { capabilityAreas } from "@/lib/site";

export default function SolutionsSection() {
  return (
    <section className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              What we work on
            </h2>
            <p className="mt-4 text-operational">
              Four areas where service businesses lose time. We recommend what fits your operation,
              not the whole list.
            </p>
          </div>
          <Link href="/solutions" className="text-link text-sm font-medium">
            See what we work on
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilityAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/solutions#${area.slug}`}
              className="group rounded-xl border border-operational/20 p-8"
            >
              <h3 className="font-display text-xl font-semibold text-elevation">{area.name}</h3>
              <p className="mt-4 text-operational">{area.description}</p>
              <span className="text-link mt-5 inline-block text-sm font-medium">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
