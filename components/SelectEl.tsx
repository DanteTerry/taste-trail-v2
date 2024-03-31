import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectEl({
  option,
}: {
  option: { placeHolder: string; value: string[]; title: string[] };
}) {
  return (
    <Select>
      <SelectTrigger className="w-full border border-primary font-semibold text-primary outline-none">
        <SelectValue placeholder={option.placeHolder} />
      </SelectTrigger>
      <SelectContent>
        {option.title.map((title: string) => {
          return (
            <SelectItem value={title} key={title}>
              {title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default SelectEl;
