import { getData } from "@/actions/actions";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";
import { IMenuItem } from "@/types/types";
import Link from "next/link";
import React from "react";

interface IFoodItem {
  mainCourse: IMenuItem[];
  totalPage: number;
}

async function FoodPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = parseInt(searchParams.page as string) || 1;
  const limit =
    typeof searchParams.limit === "string" ? parseInt(searchParams.limit) : 8;
  const search = searchParams.search as string | undefined;
  const sort = searchParams.sort as string | undefined;
  const cuisine = searchParams.cuisine as string | undefined;
  const rating = searchParams.rating as string | undefined;

  const foodItem: IFoodItem = await getData({
    category: "Main Course",
    page,
    limit,
    query: search,
    sort,
    cuisine,
    rating,
  });

  const { mainCourse, totalPage } = foodItem;

  return (
    <section className="h-full bg-neutral-200 pt-24 md:py-10">
      <div className="mx-auto flex w-[95%] flex-wrap items-center gap-x-8  gap-y-8">
        {mainCourse.length === 0 && (
          <div className="w-full text-center text-2xl font-bold">
            No data found
          </div>
        )}
        {mainCourse.map((item: IMenuItem) => (
          <Card key={item._id} menuData={item} />
        ))}
      </div>

      {totalPage > page && (
        <div className="mt-12 flex justify-center gap-10 pb-20">
          <Link
            className={cn(
              "rounded-lg bg-primary px-5 py-2 text-lg text-white",
              page === 0 && "pointer-events-none opacity-50",
            )}
            href={{
              pathname: "/main",
              query: {
                ...(search ? { search } : {}),
                page: page > 1 ? page - 1 : 1,
                ...(sort ? { sort } : {}),
                ...(cuisine ? { cuisine } : {}),
                ...(rating ? { rating } : {}),
              },
            }}
          >
            Prev
          </Link>
          <Link
            className="rounded-lg bg-primary px-5 py-2 text-lg text-white"
            href={{
              pathname: "/main",
              query: {
                ...(search ? { search } : {}),
                page: page + 1,
                ...(sort ? { sort } : {}),
                ...(cuisine ? { cuisine } : {}),
                ...(rating ? { rating } : {}),
              },
            }}
          >
            Next
          </Link>
        </div>
      )}
    </section>
  );
}

export default FoodPage;
