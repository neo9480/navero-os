import { Ship } from "lucide-react";
import React from "react";
import { InputSearch } from "../shadcn-studio/input/InputSearch";
import Filter from "../shadcn-studio/filter/Filter";
import FilterIconStart from "../shadcn-studio/filter/FilterIconStart";
import { FilterIcon } from "lucide-react";
import {
  shipmentOriginFilterParams,
  shipmentStatusFilterParams,
  statusColor,
  statusIcon,
} from "@/constants/shipments";
import { MapPinned } from "lucide-react";
import { useState } from "react";
import { dataTablefilterParams } from "@/constants/dashboardNavItems";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import TablePagination from "../shadcn-studio/pagination/Pagination";
import { ScrollArea } from "../ui/scroll-area";

const DataTable = ({ tableData, onRowClick, selectedId }) => {
  const [filter1, setFilter1] = useState(new Set());
  const [filter2, setFilter2] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const Icon = statusIcon;

  const totalDataForTable = tableData.length;
  const pageLength = Math.ceil(totalDataForTable / pageSize);
  const dataStart = currentPage * pageSize;
  const dataEnd = dataStart + pageSize;

  const handlePageSizeSelect = (value) => {
    setPageSize(parseInt(value, 10));
    setCurrentPage(0);
  };

  const handlePageChangeNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePageChangePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const handlePageChangeFirst = () => setCurrentPage(0);
  const handlePageChangeLast = () => setCurrentPage(pageLength - 1);

  const keys = Object.keys(tableData[0]);

  // toggle helper
  const toggleFilter = (setter) => (value, isChecked) => {
    setter((prev) => {
      const next = new Set(prev);
      isChecked ? next.add(value) : next.delete(value);
      return next;
    });
  };

  const formatEventType = (type) => {
    if (!type) return "—";
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="w-full bg-zinc-950 border gap-5 flex flex-col  rounded-xl p-5">
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
          <Filter filterValuesArr={dataTablefilterParams} />
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
      <ScrollArea>
        <div className="text-platinum-500 font-neue_montreal max-h-60vh]">
          <Table>
            <TableHeader className={"bg-zinc-900"}>
              <TableRow className="">
                {keys.map((key) => (
                  <TableHead key={key} className="capitalize text-platinum-500">
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData
                .slice(dataStart, dataEnd)
                .map(
                  ({
                    id,
                    origin,
                    destination,
                    events = [],
                    carrier,
                    eta,
                    docs,
                  }) => {
                    const isSelected = selectedId === id;
                    console.log(events[0]);
                    return (
                      <TableRow
                        key={id}
                        onClick={() =>
                          onRowClick?.({
                            id,
                            origin,
                            destination,
                            events,
                            carrier,
                            eta,
                            docs,
                          })
                        }
                        className={`cursor-pointer transition-colors ${
                          isSelected ?
                            "bg-blue-500/10 border-l-2 border-blue-500"
                          : "hover:bg-zinc-900"
                        }`}>
                        <TableCell>{id}</TableCell>
                        <TableCell>{origin}</TableCell>
                        <TableCell>{destination}</TableCell>
                        <TableCell>
                          <Badge
                            className={`flex gap-1 items-center 
                              ${events[0]?.type === "IN_TRANSIT" && statusColor.inTransit} 
                              ${events[0]?.type === "CUSTOMS_HOLD" && statusColor.customsHold} 
                              ${events[0]?.type === "DELAYED" && statusColor.delayed} 
                              ${events[0]?.type === "DELIVERED" && statusColor.delivered}
                              ${events[0]?.type === "LOCATION_UPDATE" && statusColor.locationUpdate}
                              ${events[0]?.type === "PICKED_UP" && statusColor.pickedUp}
                              ${events[0]?.type === "OUT_FOR_DELIVERY" && statusColor.outForDelivery}
                            `}>
                            {events[0]?.type === "IN_TRANSIT" ?
                              <Icon.inTransit />
                            : events[0]?.type === "CUSTOMS_HOLD" ?
                              <Icon.customsHold />
                            : events[0]?.type === "DELAYED" ?
                              <Icon.delayed />
                            : events[0]?.type === "DELIVERED" ?
                              <Icon.delivered />
                            : events[0]?.type === "LOCATION_UPDATE" ?
                              <Icon.locationUpdate />
                            : events[0]?.type === "PICKED_UP" ?
                              <Icon.pickedUp />
                            : events[0]?.type === "OUT_FOR_DELIVERY" && (
                                <Icon.outForDelivery />
                              )
                            }
                            {formatEventType(events[0]?.type)}
                          </Badge>
                        </TableCell>
                        <TableCell>{carrier}</TableCell>
                        <TableCell>{eta}</TableCell>
                        <TableCell>{docs}</TableCell>
                      </TableRow>
                    );
                  },
                )}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      <div className="pt-4 border-t-2">
        <TablePagination
          currentPage={currentPage}
          handlePageSizeSelect={handlePageSizeSelect}
          pageSize={pageSize}
          tableData={tableData}
          totalPages={pageLength}
          handlePageChangeNext={handlePageChangeNext}
          handlePageChangePrev={handlePageChangePrev}
          handlePageChange={handlePageChange}
          handlePageChangeFirst={handlePageChangeFirst}
          handlePageChangeLast={handlePageChangeLast}
          dataEnd={dataEnd}
          dataStart={dataStart}
          dataSize={totalDataForTable}
        />
      </div>
    </div>
  );
};

export default DataTable;
