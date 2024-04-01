"use client";

import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FindTaste() {
  const searchParams = useSearchParams();

  const searchText = searchParams.get("search");

  let pathName = usePathname();
  const router = useRouter();
  pathName = pathName.replace("/", "");
  const [search, setSearch] = useState(searchText || "");
  const [sort, setSort] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");

  const [query] = useDebounce(search, 500);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const queryParams = new URLSearchParams();
    if (query) {
      queryParams.set("search", query);
    }
    if (sort) {
      queryParams.set("sort", sort);
    }
    if (cuisine) {
      queryParams.set("cuisine", cuisine);
    }
    if (rating) {
      queryParams.set("rating", rating);
    }

    const queryString = queryParams.toString();
    const url = queryString ? `/${pathName}?${queryString}` : `/${pathName}`;
    router.push(url);
  }, [query, router, pathName, sort, cuisine, rating]);

  return (
    <section className="fixed  top-[70px] mx-auto flex w-full flex-col items-center gap-y-5 border-t-0 bg-white py-2  md:grid md:grid-cols-2 md:gap-x-10 md:border-b md:px-4 lg:w-[91vw]">
      <div className="flex w-full items-center border-b-2 px-4  py-1 text-primary  md:border-b-0  md:border-r ">
        <Search size={"25"} />

        <input
          type="text"
          className="w-full px-4 py-1 text-lg  outline-none placeholder:text-primary"
          placeholder={`Search ${pathName}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex w-full items-center gap-1 px-3 md:gap-4">
        <Select onValueChange={(value) => setSort(value)}>
          <SelectTrigger className="w-full border border-primary font-semibold text-primary outline-none">
            <SelectValue placeholder={"Sort"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="priceLowToHigh">Cost: Low to High</SelectItem>
            <SelectItem value="priceHighToLow">Cost: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setCuisine(value)}>
          <SelectTrigger className="w-full border border-primary font-semibold text-primary outline-none">
            <SelectValue placeholder={"Cuisines"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Italian">Italian</SelectItem>
            <SelectItem value="Mexican">Mexican</SelectItem>
            <SelectItem value="Czech">Czech</SelectItem>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Japanese">Japanese</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setRating(value)}>
          <SelectTrigger className="w-full border border-primary font-semibold text-primary outline-none">
            <SelectValue placeholder={"Rating"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">⭐ Any</SelectItem>
            <SelectItem value="3.5">⭐ 3.5</SelectItem>
            <SelectItem value="4.0">⭐ 4.0</SelectItem>
            <SelectItem value="4.5">⭐ 4.5</SelectItem>
            <SelectItem value="5">⭐ 5.0</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}

export default FindTaste;
