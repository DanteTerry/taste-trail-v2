import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="flex h-screen  w-full flex-col  p-4 md:px-16 lg:h-[100vh] lg:flex-row  lg:justify-center">
      <div className=" flex flex-col justify-center gap-3 text-justify md:gap-5 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl">
          Welcome to{" "}
          <span className="text-4xl font-semibold text-primary">
            TasteTrail
          </span>
        </h1>
        <p className=" md:-widest text-xl md:text-xl lg:pr-5">
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
      <div className="flex items-start justify-center lg:w-1/2">
        <Image
          src={"/icons/meals.png"}
          alt="food with plate"
          height={0}
          width={0}
          sizes="100%"
          priority={true}
          className="w-2/3 rotate-90 md:rotate-0"
        />
      </div>
    </section>
  );
}

export default Hero;
