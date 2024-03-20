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
    <section className="flex w-full flex-col items-center gap-y-5 border-t-0 py-2 md:grid md:grid-cols-2 md:gap-x-10 md:border-b md:px-4">
      <div className="flex w-full items-center border-b-2 px-4  py-1 text-primary  md:border-b-0  md:border-r ">
        <Search size={"25"} />
        <input
          type="text"
          className="w-full px-4 py-1 text-lg  outline-none placeholder:text-primary"
          placeholder={`Search ${pathName}`}
        />
      </div>

      <div className="flex w-full items-center gap-1 px-3 md:gap-4">
        {selectOptions.map((option) => (
          <SelectEl option={option} key={option.placeHolder} />
        ))}

        <Button>Apply</Button>
      </div>
    </section>
  );
}

export default FindTaste;
