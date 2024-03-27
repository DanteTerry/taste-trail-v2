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

export const SignUpSchema = z
  .object({
    name: z.string().min(3, "Name must be more than 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be more than 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be more than 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be more than 8 characters"),
});
