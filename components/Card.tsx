import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Card({ img }: { img: string }) {
  return (
    <div className="w-[300px] bg-white rounded-xl p-4">
      <div className="w-[268px] h-[200px] overflow-hidden rounded-lg ">
        <Image
          src={img}
          alt="food"
          width={0}
          sizes="100%"
          height={0}
          className=" w-full h-full object-cover"
          priority={true}
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
        tempor incididunt ut labore et dolore magna.
      </p>

      <div className=" w-full px-2 mt-4">
        <Sheet>
          <SheetTrigger className="w-full" asChild>
            <Button className="bg-primary w-full text-white">
              Add To cart
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Card;
