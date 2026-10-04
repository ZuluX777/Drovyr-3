import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DROVYR collects, uses, and protects information on this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-elevation-faint">Last updated: September 2026</p>

        <div className="prose-invert mt-10 space-y-8 text-elevation-muted">
          <div className="rounded-lg border border-momentum/40 bg-focus-card p-5 text-sm">
            This page is a plain-language description of this website&rsquo;s actual data
            practices. It is <strong className="text-elevation">not legal advice</strong>, and
            should be reviewed by a qualified attorney before this site is treated as fully
            compliant with laws that may apply to your visitors (for example, GDPR or CCPA/CPRA).
          </div>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Information we collect</h2>
            <p className="mt-3">
              When you submit the &ldquo;Get Your Free Ops Audit&rdquo; form, we collect the
              information you provide: your name, company, work email, phone number, company
              website, industry, company size, and anything you write in the challenge and
              current-tools fields. We do not require an account and do not collect payment
              information on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">How we use it</h2>
            <p className="mt-3">
              We use the information you submit to respond to your request, schedule a
              conversation, and evaluate whether DROVYR is a good fit for your business. We do
              not sell your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Cookies and analytics</h2>
            <p className="mt-3">
              This site uses a small number of essential cookies required for it to function
              (including remembering your cookie preference). With your consent, it may also use
              analytics tools — Vercel Analytics and, if enabled, Google Analytics — to understand
              how visitors use the site. Analytics cookies are not set until you accept them in
              the cookie banner. See our{" "}
              <a href="/cookies" className="text-clarity underline hover:text-elevation">
                Cookie Policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Third parties we use</h2>
            <p className="mt-3">
              Form submissions are delivered by email using Resend, an email delivery service.
              This site is hosted on Vercel. Neither service is authorized to use your
              information for their own marketing.
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
              &ldquo;Cookie Preferences&rdquo; link in the footer. To ask what information we hold
              about you, or to request deletion, email{" "}
              <a href="mailto:office@drovyr.com" className="text-clarity underline hover:text-elevation">
                office@drovyr.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Contact</h2>
            <p className="mt-3">
              DROVYR is based in Austin, Texas. For privacy questions, contact{" "}
              <a href="mailto:office@drovyr.com" className="text-clarity underline hover:text-elevation">
                office@drovyr.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
