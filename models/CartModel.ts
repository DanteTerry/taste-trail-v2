import { IMenuItem } from "@/types/types";
import { Schema, model, models } from "mongoose";

interface ICartItem extends IMenuItem {
  isInCart: boolean;
}

const CartSchema = new Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  isInCart: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const CartItemsModel =
  models.CartItem || model<ICartItem>("CartItem", CartSchema);
