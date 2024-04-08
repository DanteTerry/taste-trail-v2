"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { IMenuItem } from "@/types/types";
import { useCartStore } from "@/lib/store/cart-store";
import { useMenuStore } from "@/lib/store/menu-store";

interface CardProps {
  menuData: IMenuItem;
}

function Card({ menuData }: CardProps) {
  const { name, images, price, rating, description, cuisine } = menuData;

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const changeMenu = useMenuStore((state) => state.changeMenu);

  const isInCart = cart.some((item: IMenuItem) => item._id === menuData._id);

  function handleAddToCart() {
    const InCart = cart.some((item: IMenuItem) => item._id === menuData._id);

    if (InCart) return;
    addToCart(menuData);
  }

  return (
    <div className="mx-auto  w-[300px] rounded-xl bg-white p-4 md:mx-0">
      <div className="relative h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <div className="h-[200px] w-[268px] overflow-hidden">
          <Image
            src={images || "/icons/indian.jpg"}
            alt="food"
            width={0}
            height={0}
            sizes="100%"
            className="h-full w-full overflow-hidden object-cover"
            priority={true}
          />
        </div>
        <div className="absolute right-2 top-2 rounded bg-primary p-1 text-white">
          <p> ⭐ {rating}</p>
        </div>
      </div>

      <div className="flex justify-between  gap-4 p-2">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="rounded-full bg-green-500 px-2 text-lg font-bold text-white">
          czk {price}
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
