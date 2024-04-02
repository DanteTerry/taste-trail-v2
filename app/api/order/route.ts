import { connectDB } from "@/database/db";
import Order from "@/models/OrderModel";

export const GET = async () => {
  try {
    await connectDB();
    const order = await Order.find();
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.error("Error in getting Orders", error);
    return new Response("Error in getting Orders", { status: 500 });
  }
};
