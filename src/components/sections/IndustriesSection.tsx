import Link from "next/link";
import { industries } from "@/lib/site";

export default function IndustriesSection() {
  const featured = industries.slice(0, 6);

  return (
    <section className="border-b border-focus-border/60 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
              Built for operationally complex service businesses
            </h2>
            <p className="mt-4 text-elevation-muted">
              These are where we&rsquo;re starting — not the limit of who we work with.
            </p>
          </div>
          <Link href="/industries" className="text-sm font-medium text-clarity hover:text-elevation">
            View all industries
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry) => (
            <div key={industry.name} className="rounded-lg border border-focus-border p-6">
              <h3 className="font-medium text-elevation">{industry.name}</h3>
              <p className="mt-2 text-sm text-elevation-muted">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
