import Card from "@/components/Card";
import { IMenuItem } from "@/types/types";
import { getMenu } from "@/utils/menuRequestHandler";
import React from "react";

async function FoodPage() {
  const mainCourse = await getMenu();
  return (
    <section className=" bg-neutral-200 pt-24 md:pt-10 ">
      <div className="mx-auto flex w-[95%] flex-wrap items-center justify-between gap-y-8">
        {mainCourse.map((item: IMenuItem) => (
          <Card key={item._id} menuData={item} />
        ))}
      </div>
    </section>
  );
}

export default FoodPage;
