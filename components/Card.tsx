"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Cart from "./Cart";
import { IMenuItem } from "@/types/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { use, useEffect, useState } from "react";

interface CardProps {
  menuData: IMenuItem;
}

function Card({ menuData }: CardProps) {
  const [isInCart, setIsInCart] = useState(false);

  const { name, image, price, description } = menuData;

  menuData.quantity = 1;

  function handleAddToCart() {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    const isItemInCart = cartData.some(
      (item: IMenuItem) => item._id === menuData._id,
    );

    if (isItemInCart) {
      setIsInCart(true);
      cartData.forEach((item: IMenuItem) => {
        if (item._id === menuData._id) {
          item.isInCart = true;
        } else {
          item.isInCart = false;
        }
      });
    } else {
      setIsInCart(true);
      cartData.push({ ...menuData, isInCart: true });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    const isItemInCart = cartData.some(
      (item: IMenuItem) => item._id === menuData._id,
    );

    if (isItemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [menuData._id]);

  // get data from local storage and check if the item is in the cart or not if it is in the cart then set the isInCart to true else set it to false

  return (
    <div className="w-[300px] rounded-xl bg-white p-4">
      <div className="h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <div className="h-[200px] w-[268px] overflow-hidden">
          <Image
            src={image}
            alt="food"
            width={0}
            height={0}
            sizes="100%"
            className=" h-full w-full overflow-hidden object-cover"
            priority={true}
          />
        </div>
      </div>

      <div className="flex justify-between  gap-4 p-2">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="rounded-full bg-green-500 px-2 text-lg font-bold text-white">
          ₹ {price}
        </p>
      </div>

      <p className="px-2 text-justify tracking-tighter">{description}</p>

      <div className=" mt-4 w-full px-2">
        <Sheet>
          <SheetTrigger className="w-full" asChild>
            <Button
              className="w-full bg-primary text-white"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart ? "Added" : "Add to Cart"}
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
