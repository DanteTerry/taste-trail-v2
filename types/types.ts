import { CheckoutSchema } from "@/lib/validation";
import { z } from "zod";

export interface IMenuItem {
  _id?: string;
  name: string;
  cuisine: string;
  image: string;
  price: number;
  description: string;
  isInCart: boolean;
  quantity: number;
}

export type Checkout = z.infer<typeof CheckoutSchema>;
