import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import React from "react";

const FilterIconStart = ({
  filterTriggerText,
  icon: Icon,
  label,
  filterParams,
  checkedValues,
  onCheckedChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md" asChild>
        <div className="flex justify-between w-[6vw] bg-space_indigo-100 p-2 text-sm font-extralight border rounded-md items-center">
          <Icon className="size-5" />
          <p>{filterTriggerText}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-space_indigo-200/95 p-2 text-platinum-500 font-neue_montreal">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {filterParams.map(({ id, label, value }) => {
            return (
              <DropdownMenuCheckboxItem
                key={id}
                value={value}
                checked={checkedValues.has(value)}
                onCheckedChange={(isChecked) =>
                  onCheckedChange(value, isChecked)
                }
                onSelect={(e) => e.preventDefault()}>
                {label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterIconStart;
