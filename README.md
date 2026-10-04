# Drovyr — Website

Production codebase for the Drovyr marketing site: Next.js 16 (App Router), TypeScript, Tailwind CSS. Built for deployment on Vercel.

---

## 1. Local development

Requirements: Node.js 18.18+ (Node 20 recommended), npm.

```bash
npm install
cp .env.example .env.local   # fill in what you have — see section 3 below
npm run dev
```

Visit http://localhost:3000.

Other commands:

```bash
npm run build       # production build
npm run start        # run the production build locally
npm run typecheck    # TypeScript, no emit
npm run lint          # ESLint
```

`npm run build` and `npm run lint` both currently pass clean with zero errors and zero npm audit vulnerabilities (verified at time of delivery — re-run `npm audit` periodically, since new advisories appear over time).

---

## 2. What was built

- **Pages:** Home, Solutions, How it works, Industries, About, Contact (free AI & ops assessment lead form), Privacy policy, Terms and conditions, Cookie policy, custom 404.
- **Lead form:** client + server validation (shared Zod schema), honeypot spam field, basic in-memory rate limiting, loading/success/error states, keyboard accessible, sends email via Resend.
- **SEO:** unique metadata + Open Graph/Twitter cards per page, dynamic `sitemap.xml` and `robots.txt` from `NEXT_PUBLIC_SITE_URL` (fallback `https://drovyr.com`), JSON-LD (`Organization` + `WebSite`, no address, phone, or price range), semantic heading hierarchy (one `<h1>` per page). No keywords meta tag.
- **Security:** CSP + full security header set (see `next.config.js`), no secrets in client code, server-side validation/sanitization on the API route, rate limiting, honeypot.
- **Cookie consent:** Accept / Reject non-essential / Preferences banner, no dark patterns, gates GA4 (Vercel Analytics is cookieless and loads regardless).
- **Brand assets:** logo, favicon, and touch icons in `public/`. The Open Graph image is a flat navy field with the wordmark and the tagline.
- **Accessibility:** skip-to-content link, visible focus states, labeled form fields with error messages, `prefers-reduced-motion` respected, semantic landmarks.

---

## 3. Environment variables

Copy `.env.example` to `.env.local` for local dev. In Vercel: **Project → Settings → Environment Variables.**

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes for lead delivery. Public URLs fall back to `https://drovyr.com` if unset. | Canonical URLs, sitemap, robots, and Open Graph. Set `https://drovyr.com` in production. |
| `RESEND_API_KEY` | Yes, to deliver leads | No fallback. If it is missing, `/api/lead` returns an error and the form shows that error. |
| `LEAD_NOTIFICATION_EMAIL` | Yes, to deliver leads | Inbox that receives form submissions. No default address is hard-coded. |
| `RESEND_FROM_EMAIL` | Yes, to deliver leads | Must be an address on a domain verified in Resend. No shared testing sender is hard-coded. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Leave blank to skip GA4 entirely. Do not invent an ID. Vercel Analytics needs no key. |

---

## 4. Email configuration — what's left to do

The lead form is fully built and tested against a live local server, **except actual email delivery**, which needs your Resend credentials (I don't have them, and won't fabricate a "tested" result).

1. Create a [Resend](https://resend.com) account.
2. Add and verify the sending domain in Resend before expecting delivery. Resend will give you specific DNS records (typically DKIM/TXT, sometimes a Return-Path CNAME).
   **Add these alongside your existing DNS records — do not delete or replace any current MX, SPF, DKIM, or DMARC records used by your business email.**
3. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_NOTIFICATION_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in Vercel. All four are required. The route does not fall back to a personal inbox or a shared testing sender.
4. Redeploy, then submit a real test through the live form and confirm it arrives in the inbox you configured.

If any of those four variables is missing, the form shows a visible error ("Something went wrong and your request wasn't sent. Please try again shortly.") and does not report success. The server log names which variables are missing. It does not store the submission as a substitute for email delivery.

---

## 5. Spam / bot protection

Currently implemented:
- **Honeypot field** (`hp_field`) — invisible to real users, and bots that fill it get a normal-looking success response with no email sent.
- **Server-side rate limiting** — 5 submissions per IP per minute.

**Known limitation:** the rate limiter is in-memory (see comments in `src/lib/rateLimit.ts`). Vercel serverless functions can run as multiple instances, so this doesn't share state across instances/regions and resets on cold start. It stops casual repeat-submission abuse but isn't a real distributed limiter. If lead-form spam becomes a problem, the two straightforward upgrades are:
- **Cloudflare Turnstile or hCaptcha** (a checkbox challenge — not wired up), or
- **Upstash Redis + `@upstash/ratelimit`** for real distributed rate limiting, or Vercel's own Firewall rate-limiting rules.

Neither is wired up — flagging so you can prioritize if/when it's actually needed rather than guessing at a solution you may not need yet.

---

## 6. Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel: **New Project → Import** the repo. Framework preset auto-detects as Next.js.
3. Add the environment variables from section 3 before the first deploy (or redeploy after adding them).
4. Deploy.

### Custom domain (drovyr.com, registered at Namecheap)

No application code is involved in this section — it's entirely Vercel dashboard + Namecheap DNS. `NEXT_PUBLIC_SITE_URL` already defaults to `https://drovyr.com` in code, so nothing changes on the app side once the domain is live.

1. In Vercel: **Project → Settings → Domains → Add** → `drovyr.com`.
2. Add `www.drovyr.com` as well. When Vercel asks how to handle it, choose **Redirect to `drovyr.com`** (not "add as separate domain") — this makes `www.drovyr.com` → `https://drovyr.com` automatic, at the edge, with no code needed.
3. Vercel will show you the exact DNS records to add (typically an A record or ALIAS/ANAME for the apex `@`, and a CNAME for `www`). **Use the values Vercel actually shows you at the time** — don't reuse values from a guide, they can change.
4. In Namecheap: **Domain List → Manage → Advanced DNS**, add only the records Vercel gave you.
   **Do not delete or modify any existing MX, TXT (SPF/DKIM/DMARC), or other records** — those belong to your business email and/or Resend, and are unrelated record types that coexist fine with the new A/CNAME entries. If Namecheap already has a conflicting A or CNAME record on the same host (`@` or `www`), replace only that specific conflicting record — leave everything else untouched.
5. Wait for DNS propagation, then confirm in Vercel that both domains show "Valid Configuration."
6. Confirm the SSL certificate issues automatically (Vercel handles this once DNS is verified).
7. In Vercel's domain settings, confirm `drovyr.com` (not `www`) is set as the **primary/production domain**, matching `NEXT_PUBLIC_SITE_URL`.
8. Test:
   - `http://drovyr.com` → redirects to `https://drovyr.com`
   - `https://www.drovyr.com` → redirects to `https://drovyr.com`
   - `/sitemap.xml`, `/robots.txt` load and reference `drovyr.com`
   - Submit the live form once Resend is configured
   - Share a link in Slack/iMessage to confirm the OG preview image renders
   - Confirm analytics events register (see section 7)
   - Confirm business email (MX) and any existing SPF/DKIM/DMARC records still resolve correctly (`dig MX drovyr.com`, `dig TXT drovyr.com`) — nothing here should have changed them, but worth a direct check

---

## 7. Analytics

- **Vercel Analytics**: zero-config. It activates automatically once deployed on Vercel with the `@vercel/analytics` package installed (already in `package.json`). No environment variable needed. It's cookieless, so it loads regardless of cookie consent.
- **GA4 (optional)**: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable it. It only loads client-side **after** a visitor accepts non-essential cookies (see `src/components/Analytics.tsx` and `CookieConsent.tsx`).

Events wired up and firing (see `src/lib/analytics.ts`, called from `Header`, `LeadForm`):
- `ops_audit_cta_click`
- `ops_audit_form_start`
- `ops_audit_form_submit`

Not yet instrumented (straightforward to add if you want them): `contact_click`, `solution_view`.

---

## 8. Security features implemented

- Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, and HSTS headers on every response (`next.config.js`).
- No secrets in client-side code — `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_NOTIFICATION_EMAIL` are read only inside the server-only `src/lib/email.ts`, imported only from the route handler.
- Server-side validation and sanitization on `/api/lead` (Zod schema — the same one the client uses, so there's no drift between what the browser checks and what the server enforces).
- Honeypot + basic rate limiting (see section 5 for the limitation).
- HTTPS is enforced by Vercel automatically once the custom domain is configured; no HTTP asset references exist in the codebase.
- `npm audit`: 0 vulnerabilities at time of delivery, on Next.js 16.3.4 (the project was originally scaffolded on 14.2.x, then upgraded after `npm audit` flagged an unpatched critical DoS/RCE advisory chain in that line — see git history / this note for why the version looks unusually current).

Not implemented (flagged, not silently skipped): a nonce-based CSP (currently uses `'unsafe-inline'` for scripts/styles, which is standard for a site like this but is a further hardening option); a distributed rate limiter (see section 5); a bot-challenge service like Turnstile (env placeholders exist, not wired up).

---

## 9. SEO features implemented

- Unique `<title>` and meta description per page.
- Canonical URL on every indexable page.
- Open Graph + Twitter Card metadata, using a generated social preview image (`public/og-image.jpg`) built from your approved brand lookbook.
- `sitemap.xml` and `robots.txt` generated dynamically from `src/app/sitemap.ts` / `robots.ts` (disallows `/api/`).
- JSON-LD structured data: `Organization` + `WebSite` (`src/components/JsonLd.tsx`). Name, URL, logo, description, and slogan only. No address, phone, email, price range, or service-area claim in the structured data.
- Semantic HTML, one `<h1>` per page, logical heading order.
- Header wordmark `alt="Drovyr home"`; footer wordmark `alt="Drovyr"`. Decorative SVG is `aria-hidden`.
- No keywords meta tag.

---

## 10. What could NOT actually be tested

Being direct about this rather than claiming a false "all green":

- **Live email delivery** — no Resend credentials were available. The integration is built and the failure path is verified (honest error, not a fake success), but a real end-to-end send was not performed.
- **Production Lighthouse scores** — scores depend on real network conditions and Vercel's CDN; I optimized for them (self-hosted fonts, compressed images, no heavy client JS, static generation on every page except the form API) but haven't measured against a live deploy. Run Lighthouse yourself once it's live.
- **DNS / domain / SSL steps** — I don't have access to your Vercel or Namecheap accounts. Section 6 tells you exactly what to do; none of it has been executed.
- **Cross-browser/device visual QA** — I verified layout logic and responsive breakpoints in code and via a local server, but didn't visually test on real iOS/Android devices or older browsers.
- **GA4** — untested beyond confirming the script loads correctly post-consent, since no `NEXT_PUBLIC_GA_MEASUREMENT_ID` was provided.

What **was** verified directly against a running local production build: every page returns the correct HTTP status (including 404 handling), all internal links resolve, the lead API's validation/honeypot/rate-limiting/error paths all behave as designed, security headers are present on responses, and `npm run build` / `npm run lint` / `npm run typecheck` all pass clean.

---

## 11. File structure

```
drovyr/
├── README.md
├── .env.example
├── package.json
├── next.config.js            # security headers, CSP
├── tailwind.config.ts        # brand color tokens
├── src/
│   ├── app/
│   │   ├── layout.tsx        # fonts, metadata, header/footer/consent/analytics
│   │   ├── page.tsx          # homepage
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── not-found.tsx     # custom 404
│   │   ├── solutions/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx  # lead form page
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── cookies/page.tsx
│   │   └── api/lead/route.ts # form submission handler
│   ├── components/
│   │   ├── Header.tsx, Footer.tsx, CTAButton.tsx
│   │   ├── CookieConsent.tsx, Analytics.tsx, JsonLd.tsx
│   │   ├── LeadForm.tsx, PathTrail.tsx (original hero graphic)
│   │   └── sections/         # homepage section components
│   └── lib/
│       ├── site.ts           # nav, copy, solutions/industries content
│       ├── validation.ts     # shared Zod schema (client + server)
│       ├── email.ts          # Resend integration (server-only)
│       ├── rateLimit.ts
│       └── analytics.ts
└── public/                   # logo, favicon, icons, OG image
```

---

## 12. Pre-launch checklist

- [ ] Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `LEAD_NOTIFICATION_EMAIL`, and verify the sending domain in Resend. There is no hard-coded recipient or sender.
- [ ] Confirm which inbox should receive leads, and whether `office@drovyr.com` is a real mailbox, before publishing that address as the contact channel.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to `https://drovyr.com` in Vercel
- [ ] Connect domain in Vercel, add DNS records in Namecheap, verify SSL
- [ ] Set canonical domain + redirect (www ↔ apex)
- [ ] Submit one real test lead through the live form and confirm the email arrives
- [ ] Share the URL in a chat app to confirm the OG image renders
- [ ] Run Lighthouse against the live URL
- [ ] Decide whether to add GA4 or a bot-challenge service (sections 5 & 7)
- [ ] Legal review of the privacy policy, terms and conditions, and cookie policy before public launch
- [ ] Add a real LinkedIn URL to the footer if/when one exists (deliberately omitted — brief said no fake social links)
