import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IMenuItem } from "@/types/types";

interface CartItemProps {
  item: IMenuItem;
  handleQuantityChange: (itemId: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, handleQuantityChange }) => {
  const { _id, name, price, image, cuisine, quantity } = item;

  if (!_id) throw new Error("Item id is required");

  const handleIncrement = () => {
    handleQuantityChange(_id, quantity + 1);

    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cartData.map((cartItem: IMenuItem) =>
      cartItem._id === _id ? { ...cartItem, quantity: quantity + 1 } : cartItem,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      handleQuantityChange(_id, quantity - 1);

      //update the cart to the recent quantity if quantity === 0  Delete the item from the cart if the quantity becomes 0

      const cartData = JSON.parse(localStorage.getItem("cart") || "[]");

      const updatedCart = cartData
        .map((cartItem: IMenuItem) =>
          cartItem._id === _id
            ? { ...cartItem, quantity: quantity - 1 }
            : cartItem,
        )
        .filter((cartItem: IMenuItem) => cartItem.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 ">
        <Image
          src={image}
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
            $ {price}
          </p>
        </div>
      </div>

      <div className="flex w-[110px] items-center justify-between self-end">
        <Button size="sm" className="text-2xl" onClick={handleDecrement}>
          -
        </Button>
        <span className="text-xl font-semibold">{quantity}</span>
        <Button size="sm" onClick={handleIncrement} className="text-2xl">
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
