import Image from "next/image";
import React from "react";

function OrderItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Image
          src="/icons/indian.jpg"
          alt="product"
          height={55}
          width={55}
          className="rounded"
        />
        <div className="flex flex-col justify-between text-muted-foreground">
          <p className="text-muted-foreground">Indian food</p>
          <p className="text-muted-foreground">
            Qnt: <span className="text-primary">2</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between text-muted-foreground">
        <p className="text-muted-foreground">
          Price: <span className="text-primary">$20</span>
        </p>
        <p className="text-muted-foreground">
          Total: <span className="text-primary">$40</span>
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
