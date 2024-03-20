import { connectDB } from "@/database/db";
import { MenuItemModel } from "@/models/MenuModel";

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
