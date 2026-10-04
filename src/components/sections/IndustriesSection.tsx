import Link from "next/link";
import { industries } from "@/lib/site";

export default function IndustriesSection() {
  const featured = industries.slice(0, 6);

  return (
    <section className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              Service businesses we focus on
            </h2>
            <p className="mt-4 text-operational">
              These are where we&rsquo;re starting. They are not a record of past client work.
            </p>
          </div>
          <Link href="/industries" className="text-link text-sm font-medium">
            View all industries
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry) => (
            <div key={industry.name} className="rounded-lg border border-operational/20 p-6">
              <h3 className="font-medium text-elevation">{industry.name}</h3>
              <p className="mt-2 text-sm text-operational">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
