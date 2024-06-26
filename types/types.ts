import { CheckoutSchema, SignInSchema, SignUpSchema } from "@/lib/validation";
import { z } from "zod";

export interface IMenuItem {
  _id?: string;
  name: string;
  cuisine: string;
  images: string;
  price: number;
  description: string;
  isInCart: boolean;
  quantity: number;
  category: string;
  rating: number;
}

export type TCheckout = z.infer<typeof CheckoutSchema>;

export type TSignUp = z.infer<typeof SignUpSchema>;

export type TSignIn = z.infer<typeof SignInSchema>;
