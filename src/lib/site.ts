export const siteConfig = {
  name: "DROVYR",
  tagline: "Intelligence in Motion.",
  secondaryLine: "A clearer path for what's next.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://drovyr.com",
  description:
    "DROVYR helps growing service businesses see what's happening across their operation, decide what matters, automate repetitive work, and move with confidence — using practical AI and automation.",
  location: "Austin, TX",
  serviceArea: "Austin, Round Rock, Georgetown, Cedar Park, Leander, Pflugerville, Hutto, Manor, and Central Texas",
  contactEmail: "office@drovyr.com",
  ctaPrimary: "Get Your Free Ops Audit",
  ctaSecondary: "See How It Works",
};

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export const footerLegalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Commercial Cleaning", description: "Route, crew, and account handoffs that stay consistent as you scale." },
  { name: "Facility Services", description: "Work orders, vendor coordination, and reporting across sites." },
  { name: "HVAC", description: "Faster dispatch, estimate follow-up, and service-history visibility." },
  { name: "Plumbing & Electrical", description: "Lead response, scheduling, and job documentation that don't rely on memory." },
  { name: "Roofing & Restoration", description: "Estimate-to-close tracking and insurance-driven paperwork." },
  { name: "Construction & Subcontractors", description: "Bid tracking, change orders, and job-to-job handoffs." },
  { name: "Landscaping & Property Services", description: "Seasonal scheduling, crew routing, and recurring-service billing." },
  { name: "Field Services", description: "Dispatch, technician updates, and customer communication in one flow." },
  { name: "Automotive Services", description: "Intake, estimates, and follow-up that don't fall through email." },
  { name: "Dental & Medical Practices", description: "Intake, scheduling, and administrative load off your front desk." },
  { name: "Professional Services", description: "Client intake, document workflows, and status reporting." },
];

export const solutions = [
  {
    slug: "ops-intel",
    name: "Ops Intel",
    tagline: "Turn operational data into decisions.",
    description:
      "Bring scattered data from across your systems into one clear picture — so owners and managers can see what's actually happening without asking around.",
    capabilities: [
      "Dashboards and operational reporting",
      "AI-generated summaries and briefings",
      "Alerts on the metrics that matter",
      "Cross-system visibility",
    ],
  },
  {
    slug: "process-ai",
    name: "Process AI",
    tagline: "Automate the repetitive work.",
    description:
      "Remove the manual steps that eat up your team's time — data entry, document handling, routing, and follow-up — so people can focus on higher-value work.",
    capabilities: [
      "Data entry and document processing",
      "Task creation and routing",
      "Automated notifications and follow-ups",
      "System-to-system workflows",
    ],
  },
  {
    slug: "leadflow",
    name: "LeadFlow",
    tagline: "Stop losing opportunities.",
    description:
      "Respond to leads the moment they arrive, qualify them automatically, and keep every opportunity moving instead of sitting in an inbox.",
    capabilities: [
      "Instant lead capture and response",
      "Qualification and appointment booking",
      "CRM creation and pipeline updates",
      "Lead routing and re-engagement",
    ],
  },
  {
    slug: "workflow-hub",
    name: "Workflow Hub",
    tagline: "Connect. Coordinate. Scale.",
    description:
      "Connect the systems you already use — CRM, accounting, scheduling, email — so information moves between them without someone re-typing it.",
    capabilities: [
      "Integration across existing tools",
      "Cross-team coordination",
      "Workflow orchestration",
      "Built to scale as you add systems",
    ],
  },
];

export const frameworkSteps = [
  { key: "SEE", title: "See", description: "Understand what's actually happening across your operation." },
  { key: "DECIDE", title: "Decide", description: "Know what matters most, and what can wait." },
  { key: "DRIVE", title: "Drive", description: "Turn insight into automated, consistent action." },
  { key: "ADAPT", title: "Adapt", description: "Keep improving as your business and conditions change." },
];

export const processSteps = [
  { title: "Understand the operation", description: "We look at how work actually moves through your business today." },
  { title: "Identify friction", description: "Pinpoint where time, money, or opportunity is being lost." },
  { title: "Prioritize opportunity", description: "Rank what's worth automating first, based on impact and effort." },
  { title: "Implement", description: "Build and connect the automation and reporting that fits your operation." },
  { title: "Measure and improve", description: "Track results and keep adjusting as your business changes." },
];
