import OrdersCard from "@/components/OrdersCard";
import { IMenuItem } from "@/types/types";
import { getOrder } from "@/utils/orderRequestHandler";
import React from "react";

export interface IOrder {
  _id: string;
  user: string;
  orderId: number;
  paymentInfo: {
    id: string;
    amountPaid: number;
    status: string;
  };
  orderItems: IMenuItem[];
  shippinginfo: {
    address: string;
    city: string;
    pinCode: string;
  };

  createdAt: string;
}

async function OrdersPage() {
  const orders: IOrder[] = await getOrder();
  console.log(orders);

  return (
    <div className="container  w-full bg-neutral-100 py-10">
      <h1 className="text-center text-4xl font-semibold  text-primary ">
        Your Orders
      </h1>
      <div
        className="mt-10 grid grid-cols-1 place-items-center gap-y-5
       md:grid-cols-2 lg:grid-cols-3"
      >
        {orders?.map((order: IOrder, index: number) => (
          <OrdersCard key={index} orderData={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
