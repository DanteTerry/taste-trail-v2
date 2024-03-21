"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cart from "./Cart";
import { IMenuItem } from "@/types/types";
import { useEffect, useState } from "react";

interface CardProps {
  menuData: IMenuItem;
}

function Card({ menuData }: CardProps) {
  const [cart, setCart] = useState<IMenuItem[]>([]); // Corrected type for cart state

  const { name, image, price, description } = menuData;

  function handleClick() {
    const cartData = JSON.parse(localStorage.getItem("menuData") || "[]");

    if (!cartData.find((item: IMenuItem) => item._id === menuData._id)) {
      cartData.push(menuData);
      localStorage.setItem("menuData", JSON.stringify(cartData));
    } else {
      console.log("Item already in cart");
    }
  }

  useEffect(() => {
    const getData = localStorage.getItem("menuData");

    if (getData) {
      setCart(JSON.parse(getData));
    }
  }, []);

  return (
    <div className="w-[300px] rounded-xl bg-white p-4">
      <div className="h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <Image
          src={image}
          alt="food"
          width={0}
          sizes="100%"
          height={0}
          className=" h-full w-full object-cover"
          priority={true}
        />
      </div>

      <div className="flex justify-between  gap-4 p-2">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="rounded-full bg-green-500 px-2 text-lg font-bold text-white">
          ₹ {price}
        </p>
      </div>

      <p className="px-2 text-justify">{description}</p>

      <div className=" mt-4 w-full px-2">
        <Sheet>
          <SheetTrigger className="w-full" asChild>
            <Button
              className="w-full bg-primary text-white"
              onClick={handleClick}
            >
              Add To cart
            </Button>
          </SheetTrigger>
          <SheetContent className="xs:max-w-full p-0 sm:max-w-full md:max-w-[500px] ">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Card;
