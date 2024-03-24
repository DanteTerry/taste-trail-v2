import { z } from "zod";

export const CheckoutSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be more than 3 characters")
    .max(20, "Name must be less than 20 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.number().max(10, "Phone number must be 10 digits"),
  address: z.string().min(10, "Address must be more than 10 characters"),
});
