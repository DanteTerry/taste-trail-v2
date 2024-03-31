import { IMenuItem } from "@/types/types";
import Image from "next/image";
import React from "react";

function OrderItem({ item }: { item: IMenuItem }) {
  return (
    <div className=" flex justify-between">
      <div className="flex gap-2">
        <Image
          src={item.images}
          alt={item.name}
          height={55}
          width={55}
          className="rounded"
        />
        <div className="flex flex-col justify-between text-muted-foreground">
          <p className="text-muted-foreground">{item.name}</p>
          <p className="text-muted-foreground">
            Qnt: <span className="text-primary">{item.quantity}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between text-muted-foreground">
        <p className="text-muted-foreground">
          Price: <span className="text-primary">{item.price}</span>
        </p>
        <p className="text-muted-foreground">
          Total:{" "}
          <span className="text-primary">{item.price * item.quantity}</span>
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
