import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  return (
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
          <p className="w-max rounded-full  bg-green-500 px-3 text-sm   text-white">
            $ 20
          </p>
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
  );
}

export default CartItem;
