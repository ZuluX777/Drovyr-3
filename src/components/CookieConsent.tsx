"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "drovyr_cookie_consent";
const OPEN_EVENT = "open-cookie-preferences";

type Consent = "accepted_all" | "rejected_non_essential";

export function reopenCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_EVENT));
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    // Reading localStorage must happen after mount (it isn't available
    // during server rendering), so this one-time sync on mount is intentional.
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      setAnalyticsEnabled(stored === "accepted_all");
    }

    const handler = () => {
      setVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  function persist(consent: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      // localStorage unavailable (e.g. blocked) — consent simply won't persist across visits.
    }
    setVisible(false);
    setShowPreferences(false);
    // Reload so analytics scripts correctly initialize/uninitialize based on the new choice.
    window.location.reload();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-operational/20 bg-focus"
    >
      <div className="container-content flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-sm text-operational">
          <p>
            We use essential cookies to run this site, and optional analytics cookies to understand
            how it&rsquo;s used. Read our{" "}
            <Link href="/cookies" className="text-link">
              Cookie policy
            </Link>
            .
          </p>

          {showPreferences && (
            <div className="mt-4 rounded-md border border-operational/20 bg-focus p-4">
              <label className="flex items-start gap-3 text-sm text-elevation">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-momentum"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                />
                <span>
                  <span className="font-medium">Analytics cookies</span>
                  <br />
                  <span className="text-operational">
                    Helps us understand site usage. Not required for the site to function.
                  </span>
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {showPreferences ? (
            <button
              type="button"
              onClick={() => persist(analyticsEnabled ? "accepted_all" : "rejected_non_essential")}
              className="rounded-md bg-momentum px-5 py-2.5 text-sm font-semibold text-elevation hover:opacity-90"
            >
              Save preferences
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => persist("rejected_non_essential")}
                className="rounded-md border border-operational/20 px-5 py-2.5 text-sm font-medium text-operational hover:text-elevation"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-md border border-operational/20 px-5 py-2.5 text-sm font-medium text-operational hover:text-elevation"
              >
                Preferences
              </button>
              <button
                type="button"
                onClick={() => persist("accepted_all")}
                className="rounded-md bg-momentum px-5 py-2.5 text-sm font-semibold text-elevation hover:opacity-90"
              >
                Accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
