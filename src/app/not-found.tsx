import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Page not found",
  description: "This page is not on the Drovyr site.",
  path: "/",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-sm text-operational">404</p>
      <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold text-elevation md:text-4xl">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-md text-operational">The page you requested is not here.</p>
      <CTAButton href="/" className="mt-8">
        Return home
      </CTAButton>
    </div>
  );
}
