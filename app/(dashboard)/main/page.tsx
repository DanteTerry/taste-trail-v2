import { getData } from "@/actions/actions";
import Card from "@/components/Card";
import { IMenuItem } from "@/types/types";
import Link from "next/link";

import React from "react";

async function FoodPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = parseInt(searchParams.page as string) || 1;
  const limit =
    typeof searchParams.limit === "string" ? parseInt(searchParams.limit) : 8;

  const mainCourse = await getData({ page, limit });
  return (
    <section className=" bg-neutral-200 pt-24 md:py-10 ">
      <div className="mx-auto flex w-[95%] flex-wrap items-center justify-between gap-y-8">
        {mainCourse.map((item: IMenuItem) => (
          <Card key={item._id} menuData={item} />
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-10">
        <Link
          className="rounded-lg bg-primary px-5 py-2  text-lg text-white "
          href={`/main?page=${page > 1 ? page - 1 : 1}`}
        >
          Prev
        </Link>
        <Link
          className="rounded-lg bg-primary px-5 py-2  text-lg text-white "
          href={`/main?page=${page + 1}`}
        >
          Next
        </Link>
      </div>
    </section>
  );
}

export default FoodPage;
