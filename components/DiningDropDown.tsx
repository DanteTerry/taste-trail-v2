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
        <SelectTrigger className="w-[150px] outline-none  border font-semibold border-primary text-primary">
          <SelectValue placeholder={"Currency"} />
        </SelectTrigger>
        <SelectContent className="text-primary">
          <SelectItem value={"EUR"}>Euro</SelectItem>
          <SelectItem value={"CZK"}>Czech Koruna</SelectItem>
          <SelectItem value={"INR"}>Indian Rupee</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DiningDropDown;
