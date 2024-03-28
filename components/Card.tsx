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
  const { name, image, price, description, isInCart } = menuData;

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const changeMenu = useMenuStore((state) => state.changeMenu);

  function handleAddToCart() {
    const InCart = cart.some((item: IMenuItem) => item._id === menuData._id);
    if (InCart) return;
    changeMenu({ ...menuData, isInCart: true });
    addToCart(menuData);
  }

  console.log(cart);

  return (
    <div className="w-[300px] rounded-xl bg-white p-4">
      <div className="h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <div className="h-[200px] w-[268px] overflow-hidden">
          <Image
            src={image || "/icons/indian.jpg"}
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
