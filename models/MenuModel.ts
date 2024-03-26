import { IMenuItem } from "@/types/types";
import { Schema, model, models } from "mongoose";

// Define the interface for the Menu item

// Define the schema for the Menu item
const MenuSchema = new Schema<IMenuItem>({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true, maxlength: 50 },
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

// Create and export the Mongoose model for the Menu item
export const MenuItemModel =
  models.MenuItem || model<IMenuItem>("MenuItem", MenuSchema);
