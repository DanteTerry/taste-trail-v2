"use client";

import { IMenuItem } from "@/types/types";
import React, { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState<IMenuItem[]>([]);

  const cartData = JSON.stringify(cart);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, [cartData]);

  return (
    <div className=" grid w-full px-5 lg:grid-cols-5">
      <div className="col-span-3 rounded-l-lg bg-green-400 px-5 py-5">
        <h2 className="text-3xl font-semibold text-primary">
          Enter your details
        </h2>
      </div>

      <div className="col-span-2 rounded-r-lg bg-red-500  px-5 py-5">
        <h2 className="text-center text-3xl font-semibold">Order Summary</h2>
      </div>
    </div>
  );
}

export default CartPage;
