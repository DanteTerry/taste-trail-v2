"use client";

import { Search, Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { FcRating } from "react-icons/fc";
import SelectEl from "./SelectEl";
import { selectOptions } from "@/constants/constant";
import { usePathname } from "next/navigation";

function FindTaste() {
  let pathName = usePathname();
  pathName = pathName.replace("/", "");
  return (
    <section className="w-full border-t-0 md:border-b py-2 flex flex-col items-center md:grid gap-y-5 md:gap-x-10 md:grid-cols-2">
      <div className="flex w-full md:border-r border-b-2 md:border-b-0  items-center px-4  py-1  text-primary ">
        <Search size={"25"} />
        <input
          type="text"
          className="w-full outline-none placeholder:text-primary text-lg  px-4 py-1"
          placeholder={`Search ${pathName}`}
        />
      </div>

      <div className="flex w-full gap-1 md:gap-4 items-center">
        {selectOptions.map((option) => (
          <SelectEl option={option} key={option.placeHolder} />
        ))}

        <Button>Apply</Button>
      </div>
    </section>
  );
}

export default FindTaste;
