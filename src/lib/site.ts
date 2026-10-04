import type { Metadata } from "next";

/** Used when NEXT_PUBLIC_SITE_URL is unset. The lead API does not use this fallback. */
export const SITE_URL_FALLBACK = "https://drovyr.com";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return SITE_URL_FALLBACK;
  return configured.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteConfig = {
  name: "Drovyr",
  tagline: "Intelligence in Motion.",
  supportingLine: "The intelligence that drives the operation.",
  url: getSiteUrl(),
  description:
    "Drovyr helps service businesses fix where work breaks down, then connect their tools and apply AI and automation. Book a free assessment.",
  // Location wording and the town list are unchanged pending a decision. See the PR notes.
  location: "Austin, TX",
  serviceArea:
    "Austin, Round Rock, Georgetown, Cedar Park, Leander, Pflugerville, Hutto, Manor, and Central Texas",
  contactEmail: "office@drovyr.com",
  ctaPrimary: "Book your free assessment",
  ctaSecondary: "See how it works",
  assessmentName: "Free AI & ops assessment",
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${siteConfig.name}`;
  const canonicalPath = path === "" ? "/" : path;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(noIndex ? {} : { alternates: { canonical: canonicalPath } }),
    openGraph: {
      type: "website",
      url: noIndex ? getSiteUrl() : absoluteUrl(canonicalPath),
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.jpg"],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export const footerLegalLinks = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms and conditions" },
  { href: "/cookies", label: "Cookie policy" },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Commercial Cleaning", description: "Route, crew, and account handoffs." },
  { name: "Facility Services", description: "Work orders, vendor coordination, and reporting across sites." },
  { name: "HVAC", description: "Dispatch, estimate follow-up, and service-history visibility." },
  {
    name: "Plumbing & Electrical",
    description: "Lead response, scheduling, and job documentation that don't rely on memory.",
  },
  { name: "Roofing & Restoration", description: "Estimate-to-close tracking and insurance-driven paperwork." },
  { name: "Construction & Subcontractors", description: "Bid tracking, change orders, and job-to-job handoffs." },
  {
    name: "Landscaping & Property Services",
    description: "Seasonal scheduling, crew routing, and recurring-service billing.",
  },
  { name: "Field Services", description: "Dispatch, technician updates, and customer communication in one flow." },
  { name: "Automotive Services", description: "Intake, estimates, and follow-up." },
  { name: "Dental & Medical Practices", description: "Intake, scheduling, and front-desk administration." },
  { name: "Professional Services", description: "Client intake, document workflows, and status reporting." },
];

export type CapabilityArea = {
  slug: string;
  name: string;
  description: string;
};

/** Plain capability areas. Named products are not listed until that decision is made. */
export const capabilityAreas: CapabilityArea[] = [
  {
    slug: "lead-intake",
    name: "Lead intake and follow-up",
    description:
      "Bringing inquiries into one place, routing them to the right person, and making sure quotes and estimates get followed up.",
  },
  {
    slug: "scheduling",
    name: "Scheduling and coordination",
    description:
      "Reminders, crew coordination, status updates, and spotting exceptions before they become problems.",
  },
  {
    slug: "admin-systems",
    name: "Admin work and connected systems",
    description:
      "Cutting down manual copying between forms, email, spreadsheets, CRM and calendars, and connecting the tools you already use.",
  },
  {
    slug: "visibility",
    name: "Visibility and reporting",
    description:
      "Making the right information visible to owners and managers, so they're not chasing updates.",
  },
];

export const frameworkSteps = [
  {
    key: "SEE",
    title: "See",
    description:
      "Make what's actually happening in the operation visible: where work comes in, who handles it, and where it stalls.",
  },
  {
    key: "DECIDE",
    title: "Decide",
    description:
      "Choose what matters most and what should happen next. Fix one useful problem before taking on everything.",
  },
  {
    key: "DRIVE",
    title: "Drive",
    description:
      "Put the improvement into practice by fixing the process, connecting the tools, and automating the steps that should run on their own.",
  },
  {
    key: "ADAPT",
    title: "Adapt",
    description: "Watch how it works in real use and adjust as the business changes.",
  },
];

export const processSteps = [
  {
    title: "Understand the operation",
    description: "We look at how work actually moves through your business today.",
  },
  { title: "Identify friction", description: "Find where the process stalls." },
  { title: "Prioritize what to look at", description: "Choose what to work on first." },
  { title: "Implement", description: "Build and connect what fits the operation." },
  {
    title: "Adjust",
    description: "Watch how it works in use and adjust as the business changes.",
  },
];
