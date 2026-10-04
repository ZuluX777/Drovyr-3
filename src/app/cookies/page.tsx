import type { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie policy",
  description: "What cookies this website uses, and how to control them.",
  path: "/cookies",
});

const cookieTable = [
  {
    category: "Essential",
    example: "drovyr_cookie_consent (localStorage)",
    purpose: "Remembers your cookie preference. Required for the site to function correctly.",
  },
  {
    category: "Analytics (optional)",
    example: "Vercel Analytics",
    purpose:
      "Cookieless, aggregated page-view analytics. Loads regardless of consent because it does not use cookies or store personal identifiers.",
  },
  {
    category: "Analytics (optional)",
    example: "Google Analytics (if enabled)",
    purpose: "Understands how visitors use the site. Only loads after you accept non-essential cookies.",
  },
];

export default function CookiesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">Cookie policy</h1>
        <p className="mt-4 text-sm text-operational">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-operational">
          <p>
            This site uses a limited number of cookies and similar local-storage technology,
            described below. You can accept or reject non-essential cookies from the banner shown
            on your first visit, or at any time from the &ldquo;Cookie preferences&rdquo; link in
            the footer.
          </p>

          <div className="overflow-hidden rounded-lg border border-operational/20">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium text-elevation">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-elevation">
                    Example
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-elevation">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {cookieTable.map((row) => (
                  <tr key={row.example} className="border-t border-operational/20">
                    <td className="px-4 py-3 align-top">{row.category}</td>
                    <td className="px-4 py-3 align-top">{row.example}</td>
                    <td className="px-4 py-3 align-top">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Managing cookies in your browser</h2>
            <p className="mt-3">
              Most browsers let you block or delete cookies through their settings. Blocking
              essential storage may affect how this site remembers your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-link">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
