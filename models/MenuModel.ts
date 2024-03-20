import { IMenuItem } from "@/types/types";
import { Schema, model, models } from "mongoose";

// Define the interface for the Menu item

// Define the schema for the Menu item
const MenuSchema = new Schema<IMenuItem>({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true, maxlength: 20 },
});

// Create and export the Mongoose model for the Menu item
export const MenuItemModel =
  models.MenuItem || model<IMenuItem>("MenuItem", MenuSchema);
