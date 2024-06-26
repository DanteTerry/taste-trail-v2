import { getData } from "@/actions/actions";
import Card from "@/components/Card";
import { IMenuItem } from "@/types/types";
import Link from "next/link";
import React from "react";

interface IFoodItem {
  mainCourse: IMenuItem[];
  totalPage: number;
}

async function BeveragesPage({
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

  const beverageItem: IFoodItem = await getData({
    category: "Beverages",
    page,
    limit,
    query: search,
    sort,
    cuisine,
    rating,
  });

  const { mainCourse, totalPage } = beverageItem;

  return (
    <section className="h-full bg-neutral-200 pt-24 md:py-10">
      <div className="mx-auto flex w-[95%] flex-wrap items-center gap-x-8  gap-y-8">
        {mainCourse.map((item: IMenuItem) => (
          <Card key={item._id} menuData={item} />
        ))}
      </div>

      {totalPage > page && (
        <div className="mt-12 flex justify-center gap-10 pb-20">
          <Link
            className="rounded-lg bg-primary px-5 py-2 text-lg text-white"
            href={{
              pathname: "/beverage",
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
              pathname: "/beverage",
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

export default BeveragesPage;
