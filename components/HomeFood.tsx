"use client";
import React, { useEffect } from "react";
import Card from "./Card";
import Image from "next/image";
import { cuisineImg } from "@/constants/constant";

import { IMenuItem } from "@/types/types";
import { getMenu } from "@/utils/menuRequestHandler";
import { useMenuStore } from "@/lib/store/menu-store";

function HomeFood() {
  const setMenu = useMenuStore((state) => state.setMenu);
  const homeMenu = useMenuStore((state) => state.menu);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await getMenu();
      setMenu(res);
    };
    fetchMenu();
  }, [setMenu]);

  const homeMenuData = homeMenu.slice(0, 4);

  return (
    <div className=" bg-neutral-100 p-4 py-10 md:px-16">
      <h2 className="mt-5 text-center text-[5vw] font-semibold leading-8 text-primary md:mt-10 md:text-[2.4vw]">
        We offer a wide range of cuisines
      </h2>

      <div className="mt-5 grid  w-full grid-cols-2 gap-x-5 gap-y-5 md:mt-10  md:grid-cols-4">
        {cuisineImg?.map((cuisine, index) => (
          <div key={index} className="relative flex justify-between">
            <Image
              src={`/icons/${cuisine}.jpg`}
              alt={cuisine}
              height={0}
              width={0}
              sizes="100%"
              className="w-full rounded-lg"
            />

            <p className="absolute bottom-4 right-4 rounded-full bg-white px-2 text-center text-xl font-semibold capitalize text-primary">
              {cuisine}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-5  text-center text-[5vw] font-semibold leading-8 text-primary md:mt-16 md:text-[2.4vw]">
        Try our popular dishes
      </h2>

      <div className="mb-10 mt-5 flex flex-wrap items-center justify-center gap-4 md:mb-0 md:mt-8">
        {homeMenuData.map((menu: IMenuItem) => (
          <Card key={menu._id} menuData={menu} />
        ))}
      </div>
    </div>
  );
}

export default HomeFood;
