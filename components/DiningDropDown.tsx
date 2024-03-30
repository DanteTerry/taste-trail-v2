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
      <Select defaultValue="EUR">
        <SelectTrigger className="w-max border border-primary  px-5 font-semibold text-primary outline-none">
          <SelectValue placeholder={"Currency"} />
        </SelectTrigger>
        <SelectContent className="text-primary">
          <SelectItem value={"EUR"}>EUR</SelectItem>
          <SelectItem value={"₹"}>₹</SelectItem>
          <SelectItem value={"INR"}>INR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DiningDropDown;
