"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { IMenuItem } from "@/types/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store/store";
import { setMenu } from "@/utils/redux/slices/menuSlice";

interface CardProps {
  menuData: IMenuItem;
}

function Card({ menuData }: CardProps) {
  const { name, image, price, description, isInCart } = menuData;
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  function handleAddToCart() {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    const isItemInCart = cartData.some(
      (item: IMenuItem) => item._id === menuData._id,
    );

    if (!isItemInCart) {
      cartData.push({ ...menuData, isInCart: true });
      localStorage.setItem("cart", JSON.stringify(cartData));
      // find the current item in menu and set isInCart to true
      const updatedMenu = menu.map((item: IMenuItem) =>
        item._id === menuData._id ? { ...item, isInCart: true } : item,
      );
      dispatch(setMenu(updatedMenu));
    } else {
      // Item already exists in cart, do nothing
    }
  }

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    const isItemInCart = cartData.some(
      (item: IMenuItem) => item._id === menuData._id,
    );
    if (isItemInCart) {
      // Item is already in cart, set isInCart to true
      cartData.forEach((item: IMenuItem) => {
        if (item._id === menuData._id) {
          item.isInCart = true;
        } else {
          item.isInCart = false;
        }
      });
    }
  }, [menuData._id]);

  console.log(menu);

  return (
    <div className="w-[300px] rounded-xl bg-white p-4">
      <div className="h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <div className="h-[200px] w-[268px] overflow-hidden">
          <Image
            src={image || "/icons/food.jpg"}
            alt="food"
            width={0}
            height={0}
            sizes="100%"
            className="h-full w-full overflow-hidden object-cover"
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
        <Button
          className="w-full bg-primary text-white"
          disabled={isInCart}
          onClick={handleAddToCart}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}

export default Card;
