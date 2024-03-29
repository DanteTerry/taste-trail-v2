import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function NewHero() {
  return (
    <div className="grid h-[70vh] w-full  overflow-hidden px-3 py-2 md:h-[92.5vh] md:grid-cols-2">
      <div className=" flex w-full flex-col items-center justify-center gap-3 text-justify md:gap-5">
        <h1 className="text-3xl md:text-4xl">
          Welcome to{" "}
          <span className="text-4xl font-semibold text-primary">
            Taste-Trail
          </span>
        </h1>
        <p className=" md:leading-widest w-3/4 text-xl md:text-xl">
          Your one-stop culinary destination, where you can delight in an
          exquisite array of flavors, from timeless classics to innovative
          creations. Join us and elevate your dining experience to new heights
          in one place.
        </p>

        <div className="mb-5 flex gap-5">
          <Button
            size={"lg"}
            className="rounded-lg bg-primary px-8 py-3 text-white md:text-lg"
          >
            Order Now
          </Button>

          <Button
            size={"lg"}
            variant={"outline"}
            className=" rounded-lg px-8 py-3 text-primary md:text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="hidden w-full overflow-hidden md:flex">
        <Image
          src={"/icons/hero.jpg"}
          alt="food image"
          sizes="100%"
          height={0}
          width={0}
          priority={true}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default NewHero;
