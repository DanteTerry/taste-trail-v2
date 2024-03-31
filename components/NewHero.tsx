import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function NewHero() {
  return (
    <div className="grid h-[70vh] w-full  overflow-hidden px-3 py-2 md:h-[92.5vh] md:grid-cols-2">
      <div className=" flex w-full flex-col items-center justify-center gap-3 text-justify md:gap-5">
        <h1 className="text-3xl md:text-4xl">
          Welcome to{" "}
          <span className="font-semibold text-primary md:text-4xl">
            Taste-Trail
          </span>
        </h1>
        <p className=" md:leading-widest text-xl text-muted-foreground md:w-3/4 md:text-xl">
          Embark on a culinary journey with Taste Trail! Explore an enticing
          array of flavors, from cherished classics to daring innovations, all
          conveniently delivered to your doorstep. Join us today!
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
            className=" rounded-lg border-primary px-8 py-3 text-primary md:text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="hidden w-full overflow-hidden md:flex">
        <Image
          src={"/icons/hero2.jpg"}
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
