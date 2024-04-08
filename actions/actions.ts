import { connectDB } from "@/database/db";
import { MenuItemModel } from "@/models/MenuModel";
import { PipelineStage } from "mongoose";

export const getData = async ({
  category,
  query,
  page = 1,
  limit = 8,
  cuisine,
  sort,
  rating,
}: {
  query?: string;
  page?: number;
  limit?: number;
  category?: string;
  sort?: string;
  cuisine?: string;
  rating?: string;
}) => {
  const skip = (page - 1) * limit;

  const pipeline: PipelineStage[] = [];

  if (query) {
    pipeline.push({
      $match: {
        $or: [
          { name: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      },
    });
  }

  pipeline.push({
    $match: {
      category: category,
    },
  });

  if (sort === "priceLowToHigh") {
    pipeline.push({
      $sort: {
        price: 1,
      },
    });
  } else if (sort === "priceHighToLow") {
    pipeline.push({
      $sort: {
        price: -1,
      },
    });
  } else if (sort === "popularity") {
    pipeline.push({
      $sort: {
        rating: -1,
      },
    });
  }

  if (cuisine) {
    pipeline.push({
      $match: {
        cuisine: cuisine,
      },
    });
  }

  pipeline.push({ $skip: skip }, { $limit: limit });

  await connectDB();

  let data = await MenuItemModel.aggregate(pipeline);

  data = JSON.parse(JSON.stringify(data));

  // Count the total properties based on the entire pipeline
  const menuItemPipeLine = [...pipeline];
  menuItemPipeLine.pop(); // Remove the $limit stage
  const totalMenuItem = await MenuItemModel.aggregate([
    ...menuItemPipeLine,
    { $count: "total" },
  ]);

  const totalPage = Math.ceil(totalMenuItem[0]?.total / limit);

  return {
    mainCourse: data,
    totalPage,
  };
};
