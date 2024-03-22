import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ICartItem, IMenuItem } from "@/types/types";

function CartItem({ item }: { item: IMenuItem }) {
  const { name, price, image, cuisine } = item;
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 ">
        <Image
          src={image}
          alt="Food"
          width={100}
          height={100}
          className=" rounded-lg "
        />

        <div className="w-max">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{cuisine}</p>

          <h4 className="w-max text-lg font-semibold">Price</h4>
          <p className="w-max rounded-full  bg-green-500 px-3 text-sm   text-white">
            $ {price}
          </p>
        </div>
      </div>

      <div className="flex w-[110px] items-center justify-between self-end">
        <Button size={"sm"} className=" text-2xl" onClick={handleDecrement}>
          -
        </Button>
        <span className="text-xl font-semibold">{quantity}</span>
        <Button size={"sm"} onClick={handleIncrement} className=" text-2xl">
          +
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
