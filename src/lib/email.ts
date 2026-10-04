import { Resend } from "resend";
import type { LeadFormValues } from "./validation";

// Server-side only. Never import this file from a client component.
// RESEND_API_KEY and LEAD_NOTIFICATION_EMAIL are read from process.env at
// request time — they are never bundled into client JS because this module
// is only ever imported from a route handler.

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("Email delivery is not configured (missing RESEND_API_KEY).");
    this.name = "EmailNotConfiguredError";
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

export async function sendLeadNotification(lead: Omit<LeadFormValues, "hp_field">) {
  const apiKey = process.env.RESEND_API_KEY;
  // Falls back to the confirmed delivery address so a submission is never
  // lost just because LEAD_NOTIFICATION_EMAIL wasn't set in Vercel. Swap the
  // env var to office@drovyr.com once that inbox is ready — no code change
  // needed.
  const to = process.env.LEAD_NOTIFICATION_EMAIL || "williamzfore@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL || "DROVYR <onboarding@resend.dev>";

  if (!apiKey) {
    throw new EmailNotConfiguredError();
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Company", lead.company],
    ["Work email", lead.workEmail],
    ["Phone", lead.phone],
    ["Website", lead.companyWebsite || "—"],
    ["Industry", lead.industry],
    ["Company size", lead.companySize],
    ["Biggest operational challenge", lead.challenge],
    ["Current tools/systems", lead.currentTools || "—"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#64748B;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
          label
        )}</td><td style="padding:6px 12px;color:#0A0F1A;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
      <h2 style="color:#0A0F1A;">New Free Ops Audit Request</h2>
      <p style="color:#64748B;">Submitted via drovyr.com</p>
      <table style="width:100%;border-collapse:collapse;background:#F8FAFC;border-radius:8px;">
        ${htmlRows}
      </table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return resend.emails.send({
    from,
    to,
    replyTo: lead.workEmail,
    subject: `New Ops Audit Request — ${lead.company}`,
    html,
    text,
  });
}
