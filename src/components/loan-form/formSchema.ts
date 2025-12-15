import { z } from "zod";

export const loanFormSchema = z.object({
  loanAmount: z.number().min(500, "Minimum amount is $500").max(10000, "Maximum amount is $10,000"),
  loanPurpose: z.string().min(1, "Please select a purpose"),
  creditRange: z.string().min(1, "Please select your credit range"),
  employmentStatus: z.string().min(1, "Please select employment status"),
  firstName: z.string().min(2, "First name must be at least 2 characters").regex(/^[a-zA-Z\s-]+$/, "Letters only"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").regex(/^[a-zA-Z\s-]+$/, "Letters only"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid phone number"),
  zipCode: z.string().regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms"),
});

export type LoanFormData = z.infer<typeof loanFormSchema>;

export const defaultFormValues: LoanFormData = {
  loanAmount: 2500,
  loanPurpose: "",
  creditRange: "",
  employmentStatus: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zipCode: "",
  agreeToTerms: false,
};

export const loanPurposes = [
  { value: "emergency-surgery", label: "Emergency Surgery" },
  { value: "routine-visit", label: "Routine Vet Visit" },
  { value: "medications", label: "Medications/Prescriptions" },
  { value: "dental", label: "Dental Procedures" },
  { value: "other", label: "Other Pet Expenses" },
];

export const creditRanges = [
  { value: "excellent", label: "Excellent", range: "720+", approvalOdds: "Very High", aprRange: "5.99% - 12.99%" },
  { value: "good", label: "Good", range: "660-719", approvalOdds: "High", aprRange: "10.99% - 18.99%" },
  { value: "fair", label: "Fair", range: "600-659", approvalOdds: "Moderate", aprRange: "15.99% - 25.99%" },
  { value: "poor", label: "Poor", range: "Below 600", approvalOdds: "Possible", aprRange: "20.99% - 35.99%" },
  { value: "unsure", label: "Not Sure", range: "Unknown", approvalOdds: "We'll Check", aprRange: "Varies" },
];

export const employmentStatuses = [
  { value: "full-time", label: "Employed Full-Time" },
  { value: "part-time", label: "Employed Part-Time" },
  { value: "self-employed", label: "Self-Employed" },
  { value: "retired", label: "Retired" },
  { value: "other", label: "Other" },
];
