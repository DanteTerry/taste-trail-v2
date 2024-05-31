import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectElProps {
  option: {
    placeHolder: string;
    value: string[];
    title: string[];
  };
}

const SelectEl: React.FC<SelectElProps> = ({ option }) => {
  return (
    <Select>
      <SelectTrigger className="w-full border border-primary font-semibold text-primary outline-none">
        <SelectValue placeholder={option.placeHolder} />
      </SelectTrigger>
      <SelectContent>
        {option.title.map((title: string) => (
          <SelectItem value={title} key={title}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectEl;
