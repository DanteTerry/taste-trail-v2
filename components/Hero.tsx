import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="w-full lg:h-[100vh] p-4  md:px-16 flex flex-col justify-between lg:flex-row">
      <div className=" flex flex-col lg:w-1/2 gap-3 md:gap-5 text-justify justify-center">
        <h1 className="md:text-5xl text-3xl">
          Welcome to <span className="text-primary">TasteTrail</span>
        </h1>
        <p className=" text-xl md:-widest md:text-2xl lg:pr-5">
          Your one-stop culinary destination, where you can delight in an
          exquisite array of flavors, from timeless classics to innovative
          creations. Join us and elevate your dining experience to new heights
          in one place.
        </p>

        <div className="flex mb-5 gap-5">
          <Button
            size={"lg"}
            className="bg-primary md:text-lg text-white py-3 px-8 rounded-lg"
          >
            Order Now
          </Button>

          <Button
            size={"lg"}
            variant={"outline"}
            className=" text-primary md:text-lg py-3 px-8 rounded-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 flex items-start justify-center">
        <Image
          src={"/icons/meals.png"}
          alt="food with plate"
          height={0}
          width={0}
          sizes="100%"
          className="w-2/3"
        />
      </div>
    </section>
  );
}

export default Hero;

{
  /* <div className="flex flex-col md:flex-row  gap-5 items-center">
  <div className="flex">
    {customerImg.map((customer: string) => (
      <Image
        src={`/customers/${customer}`}
        alt={customer}
        width={50}
        height={50}
        sizes="100%"
        className="rounded-full -ml-3 border-white border-2"
        key={customer}
      />
    ))}
  </div>

  <div className="flex flex-col">
    <p className="">
      {" "}
      <span className="text-primary text-lg font-semibold">3,000+ </span> meals
      delivered this year!
    </p>

    <p className="flex items-center  gap-3">
      <FaHeart className="text-red-500" /> 4.6 (10.9K Reviews)
    </p>
  </div>
</div>; */
}
