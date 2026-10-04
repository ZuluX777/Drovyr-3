import { z } from "zod";

// Shared schema used by both the client form and the server API route.
// Keeping one source of truth avoids client/server validation drift.

export const companySizeOptions = [
  "1-9 employees",
  "10-24 employees",
  "25-49 employees",
  "50-99 employees",
  "100+ employees",
] as const;

export const industryOptions = [
  "Commercial Cleaning",
  "Facility Services",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Restoration",
  "Construction / Subcontractor",
  "Property Services",
  "Field Services",
  "Automotive Services",
  "Dental / Medical Practice",
  "Professional Services",
  "Other",
] as const;

export const leadFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  company: z.string().trim().min(1, "Company is required").max(120),
  workEmail: z.string().trim().min(1, "Work email is required").email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/, "Enter a valid phone number"),
  companyWebsite: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => !val || /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(val),
      "Enter a valid website (e.g. yourcompany.com)"
    ),
  industry: z.enum(industryOptions, { errorMap: () => ({ message: "Select an industry" }) }),
  companySize: z.enum(companySizeOptions, { errorMap: () => ({ message: "Select a company size" }) }),
  challenge: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)").max(2000),
  currentTools: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree before submitting" }),
  }),
  // Honeypot field — real users never see or fill this in. A non-empty
  // value here is treated as spam by the API route (see app/api/lead),
  // which responds with a normal-looking success without sending a
  // notification — schema-level rejection would tip bots off that the
  // field is being checked.
  hp_field: z.string().max(200).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadFormDefaults: Omit<LeadFormValues, "consent"> & { consent: boolean } = {
  firstName: "",
  lastName: "",
  company: "",
  workEmail: "",
  phone: "",
  companyWebsite: "",
  industry: undefined as unknown as (typeof industryOptions)[number],
  companySize: undefined as unknown as (typeof companySizeOptions)[number],
  challenge: "",
  currentTools: "",
  consent: false,
  hp_field: "",
};
