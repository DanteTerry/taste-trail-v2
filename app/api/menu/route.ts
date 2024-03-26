import { connectDB } from "@/database/db";
import { MenuItemModel } from "@/models/MenuModel";
import { NextRequest } from "next/server";

import { toast } from "sonner";

export const GET = async () => {
  try {
    await connectDB();
    const data = await MenuItemModel.find();
    const menuData = JSON.stringify(data);
    return new Response(menuData, {
      status: 200,
    });
  } catch (error: any) {
    toast(error.message);
    return new Response(error.message, {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  // posting data to the database
  await connectDB();

  try {
    const data = await req.json();

    const menuData = await MenuItemModel.create(data);

    return new Response(JSON.stringify(menuData), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
    });
  }
};
