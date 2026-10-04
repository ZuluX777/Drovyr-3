import type { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy policy",
  description: "How Drovyr collects, uses, and protects information on this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">Privacy policy</h1>
        <p className="mt-4 text-sm text-operational">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-operational">
          <div className="rounded-lg border border-operational/20 p-5 text-sm">
            This page is a plain-language description of this website&rsquo;s actual data
            practices. It is <strong className="text-elevation">not legal advice</strong>, and
            should be reviewed by a qualified attorney before this site is treated as fully
            compliant with laws that may apply to your visitors (for example, GDPR or CCPA/CPRA).
          </div>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Information we collect</h2>
            <p className="mt-3">
              When you submit the free AI &amp; ops assessment form, we collect the information you
              provide: your name, company, work email, phone number, company website, industry,
              company size, and anything you write in the challenge and current-tools fields. We do
              not require an account and do not collect payment information on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">How we use it</h2>
            <p className="mt-3">
              We use the information you submit to respond to your request, schedule a
              conversation, and evaluate whether Drovyr is a good fit for your business. We do not
              sell your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Cookies and analytics</h2>
            <p className="mt-3">
              This site uses a small amount of local storage to remember your cookie preference. We
              use Vercel Analytics, which is cookieless and collects aggregated page views without
              identifying you. If Google Analytics is enabled, it loads only after you accept
              analytics cookies. See our{" "}
              <a href="/cookies" className="text-link">
                Cookie policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Third parties we use</h2>
            <p className="mt-3">
              Form submissions are delivered by email using Resend. This site is hosted on Vercel.
              We use these providers only to host the site and deliver your message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Data retention</h2>
            <p className="mt-3">
              We retain form submissions for as long as reasonably necessary to respond to your
              request and maintain business records, and delete or anonymize it when it&rsquo;s no
              longer needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Your choices</h2>
            <p className="mt-3">
              You can reject non-essential cookies at any time from the cookie banner or the
              &ldquo;Cookie preferences&rdquo; link in the footer. To ask what information we hold
              about you, or to request deletion, email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-link">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Contact</h2>
            <p className="mt-3">
              Drovyr is based in {siteConfig.location}. For privacy questions, contact{" "}
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
