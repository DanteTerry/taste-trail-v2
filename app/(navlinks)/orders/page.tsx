import OrdersCard from "@/components/OrdersCard";
import { IMenuItem } from "@/types/types";
import { authOptions } from "@/utils/authOption";
import { getOrder } from "@/utils/orderRequestHandler";
import { getServerSession } from "next-auth";

import Image from "next/image";
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
  const session = await getServerSession(authOptions);
  // @ts-ignore
  const userId = session?.user?.id ?? null;

  const orders: IOrder[] | [] = await getOrder(userId);

  return (
    <div className="container  h-full w-full bg-neutral-100 py-10">
      <h1 className="text-center text-4xl font-semibold  text-primary ">
        Your Orders
      </h1>
      {orders?.length === 0 && (
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-center text-2xl font-semibold text-black">
            No Orders Found
          </h1>

          <Image
            src={"/icons/no-order.svg"}
            alt="no order graphic"
            width={330}
            height={330}
          />
        </div>
      )}
      <div
        className="mb-10 mt-10 grid w-full grid-cols-1 place-items-center gap-y-5 md:mb-0
       md:grid-cols-2 lg:grid-cols-3"
      >
        {orders?.map((order: IOrder) => (
          <OrdersCard key={order._id} orderData={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
