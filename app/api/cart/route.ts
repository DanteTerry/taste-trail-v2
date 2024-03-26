import { connectDB } from "@/database/db";
import { CartItemsModel } from "@/models/CartModel";
import { NextRequest } from "next/server";
import { MenuItemModel } from "@/models/MenuModel";
import { revalidatePath } from "next/cache";

export const GET = async () => {
  try {
    await connectDB();
    const data = await CartItemsModel.find();
    const menuData = JSON.stringify(data);

    return new Response(menuData, {
      status: 200,
    });
  } catch (error: any) {
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

    data.isInCart = true;

    const existingData = await CartItemsModel.findOne(data);
    if (existingData) {
      return new Response("Data already exists", {
        status: 400,
      });
    }

    const cartData = await CartItemsModel.create(data);

    await MenuItemModel.findOneAndUpdate(
      { name: data.name },
      {
        isInCart: true,
      },
    );

    revalidatePath("/", "page");

    return new Response(JSON.stringify(cartData), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
    });
  }
};
