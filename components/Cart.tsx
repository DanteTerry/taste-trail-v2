"use client";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useCartStore } from "@/lib/store/cart-store";
import { useForm } from "react-hook-form";
import { IMenuItem } from "@/types/types";
import { getUser } from "@/utils/userRequestHandler";

// user type from data coming from database

interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const { data: session } = useSession();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const router = useRouter();
  const [step, setStep] = useState(1);

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1;

  const handleData = async (data: any) => {
    const { name, email, phone, address, city, pinCode } = data;
    const user = await getUser();

    const currentUser = user.find(
      (user: IUser) => user.email === session?.user?.email,
    );

    const order = {
      user: {
        userId: currentUser?._id,
        name,
        email,
        phone,
        address,
        city,
        pinCode,
      },
      items: cart,
      amount: {
        subtotal,
        tax,
        total: subtotal + tax,
      },
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCALHOST}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderData: order }),
        },
      );

      const data = await res.json();

      if (data.url) router.push(data.url);
    } catch (error) {
      console.error("An error occurred during payment:", error);
    }
  };

  return (
    <div className="h-full py-4 md:p-4">
      <h3 className="border-b-2  px-4 pb-2 text-xl font-semibold md:px-0">
        Add Order to cart
      </h3>

      <div className="flex h-full flex-col justify-between">
        {step === 1 && (
          <div
            className={cn(
              "mt-5 flex  flex-col gap-5 rounded-lg border-b-2 bg-neutral-100 px-2 py-4 md:px-4 ",
              cart.length > 3 && "h-[370px] overflow-y-auto",
            )}
          >
            {cart.length === 0 ? (
              <h3 className="text-center text-lg font-semibold text-black">
                Cart is empty
              </h3>
            ) : (
              cart.map((item, index) => <CartItem key={index} item={item} />)
            )}
          </div>
        )}
        <div
          className={cn("mb-5  w-full p-4  md:mt-5 ", step === 2 && "h-full")}
        >
          {step === 1 ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-lg">
                <h3 className="text-lg font-semibold text-black">Sub Total</h3>
                <p className="font-semibold text-primary ">czk {subtotal}</p>
              </div>

              <div className="flex justify-between border-b-2 border-dashed border-primary pb-3 text-lg">
                <h3 className="text-lg font-semibold text-black">
                  Delivery Charges
                </h3>
                <p className="font-semibold text-primary "> czk {50}</p>
              </div>

              <div className="flex justify-between text-lg md:mt-3">
                <h3 className="text-lg font-semibold text-black">Total</h3>
                <p className="font-semibold text-primary ">
                  ₹ {subtotal + tax}
                </p>
              </div>
            </div>
          ) : (
            <form
              className="flex h-full flex-col justify-between"
              onSubmit={handleSubmit(handleData)}
            >
              <div className="flex h-full flex-col  gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                  {...register("name", { required: true })}
                  defaultValue={session?.user?.name || ""}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                  {...register("email", { required: true })}
                  defaultValue={session?.user?.email || ""}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Phone"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                  {...register("phone", { required: true })}
                  defaultValue={8840320906}
                />
                {errors.phone && (
                  <span className="text-red-500">This field is required</span>
                )}
                <input
                  type="text"
                  placeholder="Address line"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                  {...register("address", { required: true })}
                  defaultValue={"buddheshwar"}
                />
                {errors.address && (
                  <span className="text-red-500">This field is required</span>
                )}

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/2 rounded-lg border-2 border-neutral-200 p-3"
                    {...register("city", { required: true })}
                    defaultValue={"lucknow"}
                  />
                  {errors.city && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Pin code"
                    className="w-1/2 rounded-lg border-2 border-neutral-200 p-3"
                    {...register("pinCode", { required: true })}
                    defaultValue={226001}
                  />
                  {errors.pinCode && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <Button
                disabled={isSubmitting}
                className="mt-3 w-full rounded-lg bg-primary p-3 text-lg text-white md:mt-5"
              >
                Proceed to payment
              </Button>
            </form>
          )}

          {step === 1 && (
            <Button
              disabled={cart.length === 0}
              className="mt-3 w-full rounded-lg bg-primary p-3 text-lg text-white md:mt-5"
              onClick={() => {
                if (!session) {
                  toast.error("Please sign in to add items to cart");
                  return;
                }

                if (cart.length === 0) {
                  toast.error("Please add items to cart before checkout");
                  return;
                }
                setStep(2);
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
