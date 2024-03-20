import mongoose, { Error, MongooseError } from "mongoose";
import { toast } from "sonner";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_STRING_URI) {
      throw new Error("Please provide Mongodb Connect String");
    }
    await mongoose.connect(process.env.MONGODB_STRING_URI);

    console.log("Connected To database");
  } catch (error: any) {
    toast(error.message);
  }
};
