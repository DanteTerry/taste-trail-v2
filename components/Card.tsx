
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cart from "./Cart";

function Card({ img }: { img: string }) {

  return (
    <div className="w-[300px] rounded-xl bg-white p-4">
      <div className="h-[200px] w-[268px] overflow-hidden rounded-lg ">
        <Image
          src={img}
          alt="food"
          width={0}
          sizes="100%"
          height={0}
          className=" h-full w-full object-cover"
          priority={true}
        />
      </div>

      <div className="flex justify-between  gap-4 p-2">
        <h2 className="text-xl font-bold text-primary">Chicken Roll</h2>
        <p className="rounded-full bg-green-500 px-2 text-lg font-bold text-white">
          $ 20
        </p>
      </div>

      <p className="px-2 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>

      <div className=" mt-4 w-full px-2">
        <Sheet>
          <SheetTrigger className="w-full" asChild>
            <Button className="w-full bg-primary text-white">
              Add To cart
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0 md:max-w-[450px]">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Card;
