import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IMenuItem } from "@/types/types";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { useMenuStore } from "@/lib/store/menu-store";

interface CartItemProps {
  item: IMenuItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { _id, name, price, images, cuisine, quantity } = item;

  if (!_id) throw new Error("Item id is required");

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const changeMenu = useMenuStore((state) => state.changeMenu);

  const handleIncreaseQuantity = () => {
    if (quantity < 5) {
      increaseQuantity(item);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) {
      removeFromCart(item);
      changeMenu({ ...item, isInCart: false });
    } else {
      decreaseQuantity(item);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 ">
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

      <div className="flex  h-full flex-col justify-between">
        <Button
          className="w-max self-end"
          variant={"ghost"}
          size={"sm"}
          onClick={() => {
            changeMenu({ ...item, isInCart: false });
            removeFromCart(item);
          }}
        >
          <Trash2 size={"20px"} />
        </Button>
        <div className="flex  w-[110px] items-center  justify-between">
          <Button
            size="sm"
            className="text-2xl"
            onClick={handleDecreaseQuantity}
          >
            -
          </Button>
          <span className="text-xl font-semibold">{quantity}</span>
          <Button
            size="sm"
            onClick={handleIncreaseQuantity}
            className="text-2xl"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
