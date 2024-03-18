import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DiningDropDown() {
  return (
    <div className="hidden md:flex">
      <Select>
        <SelectTrigger className="w-[150px] outline-none border font-semibold border-primary text-primary">
          <SelectValue placeholder={"Dinning Option"} />
        </SelectTrigger>
        <SelectContent className="text-primary">
          <SelectItem value={"Dine In"}>Dine In</SelectItem>
          <SelectItem value={"Take Away"}>Take Away</SelectItem>
          <SelectItem value={"Delivery"}>Delivery</SelectItem>
          <SelectItem value={"Reservation"}>Reservation</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DiningDropDown;
