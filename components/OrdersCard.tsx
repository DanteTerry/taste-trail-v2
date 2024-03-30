import React from "react";
import { Badge } from "@/components/ui/badge";
import OrderItem from "./OrderItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

function OrdersCard() {
  return (
    <div className="w-[350px] rounded-xl border bg-white px-4 py-4 shadow-md">
      <Badge className="bg-green-500">order id: #4545</Badge>

      <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-white mt-3 flex h-[150px] flex-col gap-3 overflow-y-scroll px-2">
        <OrderItem />
        <Separator className="" />
        <OrderItem />
        <Separator className="" />
        <OrderItem />
        <Separator className="" />
      </div>
      <div className="mt-3 flex justify-between text-lg">
        <h3 className="text-lg font-semibold text-black">Order Date</h3>
        <p className="font-semibold text-primary ">2022-01-01</p>
      </div>
      <div className="flex justify-between text-lg">
        <h3 className="text-lg font-semibold text-black">Order Time</h3>
        <p className="font-semibold text-primary ">12:00 PM</p>
      </div>

      <Separator className="mt-2" />

      <div className="mt-2">
        <div className="flex justify-between text-lg">
          <h3 className="text-lg font-semibold text-black">Sub Total</h3>
          <p className="font-semibold text-primary ">₹ 200</p>
        </div>

        <div className="flex justify-between border-b-2 border-dashed border-primary pb-3 text-lg">
          <h3 className="text-lg font-semibold text-black">Tax (10%)</h3>
          <p className="font-semibold text-primary "> ₹ 20</p>
        </div>

        <div className="flex justify-between text-lg md:mt-3">
          <h3 className="text-lg font-semibold text-black">Total</h3>
          <p className="font-semibold text-primary "> ₹ 220</p>
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
