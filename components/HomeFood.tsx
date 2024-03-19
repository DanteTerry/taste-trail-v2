import React from "react";
import Card from "./Card";
import Image from "next/image";
import { cuisineImg } from "@/constants/constant";

function HomeFood() {
  return (
    <div className=" bg-neutral-100 py-10 md:px-16 p-4">
      <h2 className="md:text-[2.4vw] text-center text-primary font-semibold leading-8 text-[5vw]">
        Try our popular dishes
      </h2>

      <div className="mt-5  md:mt-10 flex gap-4 justify-center items-center flex-wrap">
        <Card img={"/icons/food1.jpg"} />
        <Card img={"/icons/food2.jpg"} />
        <Card img={"/icons/food3.jpg"} />
        <Card img={"/icons/food4.jpg"} />
      </div>

      <h2 className="md:text-[2.4vw] mt-5 md:mt-10 text-center text-primary font-semibold leading-8 text-[5vw]">
        We offer a wide range of cuisines
      </h2>

      <div className="mt-5 w-full  md:mt-10 flex gap-8 justify-center items-center flex-wrap">
        {cuisineImg.map((cuisine, index) => (
          <div key={index} className="relative flex justify-between">
            <Image
              key={index}
              src={`/icons/${cuisine}.jpg`}
              alt={cuisine}
              height={200}
              width={200}
              className="rounded-lg"
            />

            <p className="text-primary capitalize px-2 rounded-full absolute bottom-2 right-2 text-xl bg-white text-center font-semibold">
              {cuisine}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFood;
