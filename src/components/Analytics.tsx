"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { hasAnalyticsConsent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen after mount (it isn't available
    // during server rendering), so this one-time sync is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsented(hasAnalyticsConsent());
  }, []);

  return (
    <>
      {/* Vercel Web Analytics is cookieless and first-party; loaded regardless of
          the non-essential cookie preference below. */}
      <VercelAnalytics />

      {/* GA4 only loads once the visitor has accepted non-essential cookies,
          and only if NEXT_PUBLIC_GA_MEASUREMENT_ID is configured. */}
      {GA_ID && consented && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
              window.gtag = gtag;
            `}
          </Script>
        </>
      )}
    </>
  );
}
