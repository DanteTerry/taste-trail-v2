import Order from "@/models/OrderModel";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const order = await Order.find();
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.error("Error in getting products", error);
    return new Response("Error in getting products", { status: 500 });
  }
};
