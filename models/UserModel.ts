import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = models.User || model("User", UserSchema);
