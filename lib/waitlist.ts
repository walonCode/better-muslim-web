import { z } from "zod";

export const waitlistPlatformSchema = z.enum(["android", "ios", "both"]);
export const waitlistSourceSchema = z.enum(["store_modal"]);

export const waitlistFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .transform((value) => value.toLowerCase()),
  platform: waitlistPlatformSchema,
});

export const waitlistRequestSchema = waitlistFormSchema.extend({
  source: waitlistSourceSchema.default("store_modal"),
});

export type WaitlistPlatform = z.infer<typeof waitlistPlatformSchema>;
export type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;
export type WaitlistRequest = z.infer<typeof waitlistRequestSchema>;

export function getFieldError(
  fieldErrors: Record<string, string[] | undefined>,
  fieldName: keyof WaitlistFormValues,
) {
  return fieldErrors[fieldName]?.[0];
}
