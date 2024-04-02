import React from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { IMenuItem } from "@/types/types";

function CheckoutCartItem({
  cartItem,
  handleDelete,
}: {
  cartItem: IMenuItem;
  handleDelete: (id: string) => void;
}) {
  const { _id, name, price, images, cuisine, quantity } = cartItem;

  function handleDeleteButton() {
    handleDelete(_id as string);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={images}
          alt="Food"
          width={100}
          height={100}
          className="rounded-lg"
        />

        <div className="w-max">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{cuisine}</p>

          <h4 className="w-max text-lg font-semibold">Price</h4>
          <p className="w-max rounded-full bg-green-500 px-3 text-sm text-white">
            ₹ {price}
          </p>
        </div>
      </div>

      <div className="flex h-full flex-col  justify-between">
        <Button
          className="w-max self-end"
          variant={"ghost"}
          size={"sm"}
          onClick={handleDeleteButton}
        >
          <Trash2 size={"20px"} />
        </Button>

        <div className="flex items-center gap-3 self-end">
          <p className="text-sm text-gray-500">Quantity</p>
          <p className="text-lg font-semibold">{quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCartItem;
