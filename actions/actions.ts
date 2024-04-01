"use server";

import { connectDB } from "@/database/db";
import { MenuItemModel } from "@/models/MenuModel";

export const getData = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}) => {
  const skip = (page - 1) * limit;

  await connectDB();
  let data = await MenuItemModel.find().limit(limit).skip(skip);

  data = JSON.parse(JSON.stringify(data));

  return data;
};
