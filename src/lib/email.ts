import { Resend } from "resend";
import type { LeadFormValues } from "./validation";

// Server-side only. Never import this file from a client component.
// Delivery requires every variable below. There is no sender, recipient, or API-key fallback.

const REQUIRED_ENV_VARS = [
  "RESEND_API_KEY",
  "LEAD_NOTIFICATION_EMAIL",
  "RESEND_FROM_EMAIL",
  "NEXT_PUBLIC_SITE_URL",
] as const;

export class EmailNotConfiguredError extends Error {
  readonly missing: string[];

  constructor(missing: string[]) {
    super(`Email delivery is not configured (missing ${missing.join(", ")}).`);
    this.name = "EmailNotConfiguredError";
    this.missing = missing;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function requireEmailConfig() {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]?.trim());
  if (missing.length > 0) {
    throw new EmailNotConfiguredError([...missing]);
  }

  return {
    apiKey: process.env.RESEND_API_KEY!.trim(),
    to: process.env.LEAD_NOTIFICATION_EMAIL!.trim(),
    from: process.env.RESEND_FROM_EMAIL!.trim(),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL!.trim().replace(/\/+$/, ""),
  };
}

export async function sendLeadNotification(lead: Omit<LeadFormValues, "hp_field">) {
  const { apiKey, to, from, siteUrl } = requireEmailConfig();
  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Company", lead.company],
    ["Work email", lead.workEmail],
    ["Phone", lead.phone],
    ["Website", lead.companyWebsite || "—"],
    ["Industry", lead.industry],
    ["Company size", lead.companySize],
    ["What's getting in the way", lead.challenge],
    ["Current tools/systems", lead.currentTools || "—"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#8A94A6;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
          label
        )}</td><td style="padding:6px 12px;color:#0A0F1A;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
      <h2 style="color:#0A0F1A;">New free AI &amp; ops assessment request</h2>
      <p style="color:#8A94A6;">Submitted via ${escapeHtml(siteUrl)}</p>
      <table style="width:100%;border-collapse:collapse;background:#F8FAFC;border-radius:8px;">
        ${htmlRows}
      </table>
    </div>
  `;

  const text = [`Submitted via ${siteUrl}`, ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");

  const result = await resend.emails.send({
    from,
    to,
    replyTo: lead.workEmail,
    subject: `New free AI & ops assessment request — ${lead.company}`,
    html,
    text,
  });

  if (result.error) {
    throw new Error(result.error.message || "Email provider rejected the message.");
  }

  return result;
}
