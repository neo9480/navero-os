import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Filter = ({ filterValuesArr }) => {
  const [selected, setSelected] = useState("All");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md" asChild>
        <div className="flex justify-between w-[9vw] bg-space_indigo-100 p-2 text-sm font-extralight border rounded-md items-center">
          <p>{selected}</p>
          <ChevronDown className="size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          <DropdownMenuRadioItem value="All">
            All
          </DropdownMenuRadioItem>
          {filterValuesArr.map(({ id, label, type }) => (
            <DropdownMenuRadioItem
              key={id}
              value={type}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
