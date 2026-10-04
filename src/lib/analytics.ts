"use client";

// Lightweight event tracking helper.
// - Always safe to call; no-ops if analytics isn't loaded or consent hasn't been granted.
// - GA4 events only fire once the visitor has accepted non-essential cookies.

export type AnalyticsEvent =
  | "ops_audit_cta_click"
  | "ops_audit_form_start"
  | "ops_audit_form_submit"
  | "contact_click"
  | "solution_view";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("drovyr_cookie_consent") === "accepted_all";
  } catch {
    return false;
  }
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
