import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendLeadNotification, EmailNotConfiguredError } from "@/lib/email";

export const runtime = "nodejs";

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429, headers: retryAfterSeconds ? { "Retry-After": String(retryAfterSeconds) } : undefined }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Some fields need attention.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  // Honeypot triggered — silently report success to avoid tipping off the bot,
  // without sending a notification or doing any further work.
  if (parsed.data.hp_field) {
    return NextResponse.json({ message: "Received." }, { status: 200 });
  }

  const { hp_field, ...lead } = parsed.data;

  try {
    await sendLeadNotification(lead);
    return NextResponse.json({ message: "Received." }, { status: 200 });
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) {
      console.error(
        "[api/lead] Email not configured — lead was NOT delivered. Missing:",
        err.missing.join(", ")
      );
      return NextResponse.json(
        {
          message: "Something went wrong and your request wasn't sent. Please try again shortly.",
        },
        { status: 503 }
      );
    }

    console.error("[api/lead] Failed to send lead notification:", err);
    return NextResponse.json(
      { message: "Something went wrong and your request wasn't sent. Please try again shortly." },
      { status: 500 }
    );
  }
}
