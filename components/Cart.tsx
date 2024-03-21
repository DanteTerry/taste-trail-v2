"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { cn } from "@/lib/utils";
import { IMenuItem } from "@/types/types";

function Cart() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const getData = localStorage.getItem("menuData");

    if (getData) {
      setCart(JSON.parse(getData));
    }
  }, []);

  let subTotal = cart.reduce(
    (total: number, item: IMenuItem) => total + item.price,
    0,
  );

  subTotal = subTotal * quantity;

  const tax = subTotal * 0.1;

  return (
    <div className="h-full py-4 md:p-4">
      <h3 className="border-b-2  px-4 pb-2 text-xl font-semibold md:px-0">
        Add Order to cart
      </h3>

      <div className="flex h-full flex-col justify-between">
        <div
          className={cn(
            "mt-5 flex flex-col gap-5 rounded-lg border-b-2 bg-neutral-100 px-2 py-4 md:px-4 ",
            cart.length > 3 && "overflow-y-scroll",
          )}
        >
          {cart.length === 0 ? (
            <h3 className="text-center text-lg font-semibold text-black">
              Cart is empty
            </h3>
          ) : (
            cart.map((item, index) => (
              <CartItem
                key={index}
                setQuantity={setQuantity}
                quantity={quantity}
                item={item}
              />
            ))
          )}
        </div>
        <div className="mb-5 w-full p-4  md:mt-5 ">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-lg">
              <h3 className="text-lg font-semibold text-black">Sub Total</h3>
              <p className="font-semibold text-primary ">$ {subTotal}</p>
            </div>

            <div className="flex justify-between border-b-2 border-dashed border-primary pb-3 text-lg">
              <h3 className="text-lg font-semibold text-black">Tax (10%)</h3>
              <p className="font-semibold text-primary "> $ {tax}</p>
            </div>

            <div className="flex justify-between text-lg md:mt-3">
              <h3 className="text-lg font-semibold text-black">Total</h3>
              <p className="font-semibold text-primary "> $ {subTotal + tax}</p>
            </div>
          </div>

          <button className=" mt-3 w-full rounded-lg bg-primary p-3 text-white md:mt-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
