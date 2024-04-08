import { connectDB } from "@/database/db";
import Order from "@/models/OrderModel";
import { NextRequest } from "next/server";

export const GET = async (
  _req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  },
) => {
  try {
    await connectDB();
    const order = await Order.find({ user: params.id });
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.error("Error in getting Orders", error);
    return new Response("Error in getting Orders", { status: 500 });
  }
};
