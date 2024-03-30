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

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const { data: session } = useSession();

  const router = useRouter();
  const [step, setStep] = useState(1);

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1;

  const handlePayment = async () => {
    const res = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItem: cart }),
    });

    const data = await res.json();

    if (data.url) router.push(data.url);
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
                <p className="font-semibold text-primary ">₹ {subtotal}</p>
              </div>

              <div className="flex justify-between border-b-2 border-dashed border-primary pb-3 text-lg">
                <h3 className="text-lg font-semibold text-black">Tax (10%)</h3>
                <p className="font-semibold text-primary "> ₹ {tax}</p>
              </div>

              <div className="flex justify-between text-lg md:mt-3">
                <h3 className="text-lg font-semibold text-black">Total</h3>
                <p className="font-semibold text-primary ">
                  ₹ {subtotal + tax}
                </p>
              </div>
            </div>
          ) : (
            <form className="flex h-full flex-col justify-between">
              <div className="flex h-full flex-col  gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="rounded-lg border-2 border-neutral-200 p-3"
                />
              </div>
              <SheetClose className="w-full" asChild>
                <Button
                  className="mt-3 w-full rounded-lg bg-primary p-3 text-lg text-white md:mt-5"
                  onClick={handlePayment}
                >
                  Proceed to payment
                </Button>
              </SheetClose>
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
