import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the DROVYR website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-content max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-elevation md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-elevation-faint">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-elevation-muted">
          <div className="rounded-lg border border-momentum/40 bg-focus-card p-5 text-sm">
            This is a general terms template for an informational B2B website and should be
            reviewed by a qualified attorney before launch, particularly once DROVYR begins
            delivering paid services under a separate services agreement.
          </div>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Use of this website</h2>
            <p className="mt-3">
              This website provides information about DROVYR&rsquo;s operational intelligence and
              AI automation services. By using this site, you agree to use it only for lawful
              purposes and not to attempt to disrupt or gain unauthorized access to it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">No guaranteed outcomes</h2>
            <p className="mt-3">
              Descriptions of DROVYR&rsquo;s solutions and the Free Ops Audit are informational.
              They do not guarantee any specific financial result, time savings, or business
              outcome. Actual results depend on your business and are discussed individually.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Intellectual property</h2>
            <p className="mt-3">
              The DROVYR name, logo, and the content of this site are the property of DROVYR
              unless otherwise noted, and may not be copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Separate service agreements</h2>
            <p className="mt-3">
              Any paid engagement, implementation, or ongoing service with DROVYR will be governed
              by a separate written agreement. These website terms do not, by themselves, create a
              service relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Limitation of liability</h2>
            <p className="mt-3">
              This website and its content are provided &ldquo;as is,&rdquo; without warranties of
              any kind, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the site after changes
              means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-elevation">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
