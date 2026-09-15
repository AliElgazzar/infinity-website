import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid work email address.")
    .max(160, "Email is too long."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(120, "Company name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(40, "Phone number is too long.")
    .regex(/^[0-9+().\-\s]+$/, "Phone number contains invalid characters."),
  serviceNeeded: z.string().trim().min(1, "Select the service you need."),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please describe the project in at least 20 characters.")
    .max(4000, "Project description is too long."),
  preferredContactMethod: z.enum(["email", "phone", "either"]),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required before submitting.",
  }),
  /** Honeypot — must remain empty. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const serviceNeededOptions = [
  "Intelligent Material Handling",
  "Machine Manufacturing",
  "Automation and Assembly Lines",
  "Controls, PLC, HMI & SCADA",
  "Commissioning & Site Support",
  "Business Automation",
  "Engineering Outsourcing",
  "Not sure yet",
] as const;
