import React from "react";
import Card from "./Card";

function HomeFood() {
  return (
    <div className=" bg-neutral-100 py-10 md:px-16 p-4">
      <h2 className="md:text-[2.4vw] text-center text-primary font-semibold leading-8 text-[5vw]">
        Inspiration for your first order
      </h2>

      <div className="mt-5  md:mt-10 flex gap-4 justify-center items-center flex-wrap">
        <Card img={"/icons/food1.jpg"} />
        <Card img={"/icons/food2.jpg"} />
        <Card img={"/icons/food3.jpg"} />
        <Card img={"/icons/food4.jpg"} />
      </div>
    </div>
  );
}

export default HomeFood;
