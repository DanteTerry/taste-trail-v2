import OrdersCard from "@/components/OrdersCard";
import React from "react";

function OrdersPage() {
  return (
    <div className="container  w-full bg-neutral-100 py-10">
      <h1 className="text-center text-4xl font-semibold  text-primary ">
        Your Orders
      </h1>
      <div className="mt-10 grid grid-cols-3 place-items-center">
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
      </div>
    </div>
  );
}

export default OrdersPage;
