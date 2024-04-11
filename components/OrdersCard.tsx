import React from "react";
import { Badge } from "@/components/ui/badge";
import OrderItem from "./OrderItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { IOrder } from "@/app/(navlinks)/orders/page";
import { IMenuItem } from "@/types/types";
import { cn } from "@/lib/utils";

function OrdersCard({ orderData }: { orderData: IOrder }) {
  const newDate = new Date(orderData.createdAt);
  const time = newDate.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = newDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const subtotal = orderData.orderItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1;
  return (
    <div className="w-[350px] rounded-xl border bg-white px-4 py-4 shadow-md">
      <div className="flex justify-between">
        <Badge className="bg-green-500 capitalize">
          order id: {`#${orderData.orderId}`}
        </Badge>

        <Badge className="bg-primary capitalize">{"status : Delivered"}</Badge>
      </div>

      <div
        className={cn(
          "mt-3 flex h-[150px] flex-col gap-3  px-2",
          orderData.orderItems.length >= 3 &&
            "overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-primary",
        )}
      >
        {orderData.orderItems.map((item: IMenuItem) => (
          <>
            <OrderItem key={item._id} item={item} />
            <Separator />
          </>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-lg">
        <h3 className="text-lg font-semibold text-black">Order Date</h3>
        <p className="font-semibold text-primary ">{date}</p>
      </div>
      <div className="flex justify-between text-lg">
        <h3 className="text-lg font-semibold text-black">Order Time</h3>
        <p className="font-semibold text-primary ">{time}</p>
      </div>

      <Separator className="mt-2" />

      <div className="mt-2">
        <div className="flex justify-between text-lg">
          <h3 className="text-lg font-semibold text-black">Sub Total</h3>
          <p className="font-semibold text-primary ">czk {subtotal}</p>
        </div>

        <div className="flex justify-between border-b-2 border-dashed border-primary pb-3 text-lg">
          <h3 className="text-lg font-semibold text-black">Delivery Charges</h3>
          <p className="font-semibold text-primary "> czk {50}</p>
        </div>

        <div className="flex justify-between text-lg md:mt-3">
          <h3 className="text-lg font-semibold text-black">Total</h3>
          <p className="font-semibold text-primary "> czk {subtotal + 50}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white transition-all duration-300 hover:bg-green-700">
          Reorder
        </Button>

        <Button className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white transition-all duration-300 hover:bg-red-700">
          View More
        </Button>
      </div>
    </div>
  );
}

export default OrdersCard;
