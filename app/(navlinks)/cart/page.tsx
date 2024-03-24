"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSchema } from "@/lib/validation";
import CheckoutCartItem from "@/components/CheckoutCartItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Checkout, IMenuItem } from "@/types/types";

function CartPage() {
  const [cart, setCart] = useState<IMenuItem[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    } else {
      setCart([]);
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = cart.filter(
      (cartItem: IMenuItem) => cartItem._id !== id,
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<Checkout>({
    resolver: zodResolver(CheckoutSchema),
  });

  const onSubmit = (data: Checkout) => {
    const orderData = {
      ...data,
      cart,
    };
  
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <h3 className="text-center text-lg font-semibold text-black">
          Cart is empty
        </h3>
      );
    }

    return cart.map((item: IMenuItem) => (
      <CheckoutCartItem
        handleDelete={handleDelete}
        key={item._id}
        cartItem={item}
      />
    ));
  };

  return (
    <div className="grid w-full px-5 lg:grid-cols-5">
      <div className="rounded-l-lg py-5 lg:col-span-3 lg:px-16">
        <h2 className="text-3xl font-semibold text-primary">
          Enter your details
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex flex-col space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border-2 border-gray-300 p-3 text-lg text-primary outline-none"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border-2 border-gray-300 p-3 text-lg text-primary outline-none"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <input
            type="number"
            placeholder="Phone Number"
            className="rounded-lg border-2 border-gray-300 p-3 text-lg text-primary outline-none"
            {...register("phone", { valueAsNumber: true })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
          <input
            type="text"
            placeholder="Address"
            className="rounded-lg border-2 border-gray-300 p-3 text-lg text-primary outline-none"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
          <Button
            type="submit"
            className="rounded-lg bg-primary p-3 text-xl text-white disabled:bg-gray-700"
            disabled={isSubmitting || cart.length === 0}
          >
            Place Order
          </Button>
        </form>
      </div>

      <div className="px-5 py-5 lg:col-span-2">
        <h2 className="text-center text-3xl font-semibold">Order Summary</h2>
        <div className="mt-5 px-5">
          <div
            className={cn(
              "mt-5 flex  flex-col gap-5 rounded-lg border-b-2 bg-neutral-100 px-2 py-4 md:px-4 ",
              cart.length > 3 && "h-[370px] overflow-y-scroll",
            )}
          >
            {renderCartItems()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
