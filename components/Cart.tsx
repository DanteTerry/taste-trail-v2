"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="h-full p-4">
      <h3 className="border-b-2 pb-2 text-xl font-semibold">Add Order</h3>

      <div className="mt-2 rounded-lg bg-neutral-100 p-4">
        <div className="flex justify-between">
          <div className="flex gap-3 ">
            <Image
              src={"/icons/indian.jpg"}
              alt="Food"
              height={100}
              width={100}
              className="rounded-lg"
            />

            <div className="w-max">
              <h4 className="text-lg font-semibold">Chicken Roll</h4>
              <p className="text-sm text-gray-500">Indian</p>

              <h4 className=" text-lg font-semibold">Price</h4>
              <p className="text-sm text-gray-500">$ 20</p>
            </div>
          </div>

          <div className="flex w-[140px]  items-center justify-between self-end">
            <Button className="text-2xl" onClick={handleDecrement}>
              -
            </Button>
            <span className="text-lg font-semibold">{quantity}</span>
            <Button onClick={handleIncrement} className="text-2xl">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
