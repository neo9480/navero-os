import { Ship } from "lucide-react";
import React from "react";
import { InputSearch } from "../shadcn-studio/input/InputSearch";
import Filter from "../shadcn-studio/filter/Filter";
import FilterIconStart from "../shadcn-studio/filter/FilterIconStart";
import { FilterIcon } from "lucide-react";
import {
  shipmentOriginFilterParams,
  shipmentStatusFilterParams,
} from "@/constants/shipments";
import { MapPinned } from "lucide-react";
import { useState } from "react";
import { dataTablefilterParams } from "@/constants/dashboardNavItems";

const DataTable = () => {
  const [filter1, setFilter1] = useState(new Set());
  const [filter2, setFilter2] = useState(new Set());

  // toggle helper
  const toggleFilter = (setter) => (value, isChecked) => {
    setter((prev) => {
      const next = new Set(prev);
      isChecked ? next.add(value) : next.delete(value);
      return next;
    });
  };
  return (
    <div className="w-full bg-space_indigo-200 border rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Ship />
          <p className="text-2xl">Shipments</p>
          <p className="bg-platinum-100/50 text-platinum-400 border-platinum-400 py-0.5 px-1 rounded-sm border">
            50
          </p>
        </div>
        <div className="flex items-center gap-4">
          <InputSearch />
          <Filter filterValuesArr={dataTablefilterParams}/>
          <FilterIconStart
            filterTriggerText={"Status"}
            icon={FilterIcon}
            label={"Filter by status"}
            filterParams={shipmentStatusFilterParams}
            checkedValues={filter1}
            onCheckedChange={toggleFilter(setFilter1)}
          />
          <FilterIconStart
            filterTriggerText={"Origin"}
            icon={MapPinned}
            label={"Payment method"}
            filterParams={shipmentOriginFilterParams}
            checkedValues={filter2}
            onCheckedChange={toggleFilter(setFilter2)}
          />
        </div>
      </div>
      <table></table>
      <div></div>
    </div>
  );
};

export default DataTable;
