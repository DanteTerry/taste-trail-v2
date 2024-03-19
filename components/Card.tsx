import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Card({ img }: { img: string }) {
  return (
    <div className="w-[300px] bg-white rounded-xl p-4">
      <div className="w-[268px] h-[200px] overflow-hidden rounded-lg ">
        <Image
          src={img}
          alt="food"
          width={268}
          height={178}
          className=" w-full h-full object-cover"
        />
      </div>

      <div className="p-2 flex  justify-between gap-4">
        <h2 className="text-xl text-primary font-bold">Chicken Roll</h2>
        <p className="text-lg bg-green-500 px-2 rounded-full text-white font-bold">
          $ 20
        </p>
      </div>

      <p className="text-justify px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className=" w-full px-2 mt-4">
        <Button className="bg-primary w-full text-white">Add To cart</Button>
      </div>
    </div>
  );
}

export default Card;
