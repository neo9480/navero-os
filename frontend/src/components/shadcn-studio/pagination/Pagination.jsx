import { useId } from "react";

import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EllipsisTooltip = ({ label }) => (
  <PaginationItem>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <PaginationEllipsis />
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </PaginationItem>
);

const TablePagination = ({
  currentPage,
  handlePageSizeSelect,
  totalPages,
  handlePageChangeNext,
  handlePageChangePrev,
  handlePageChangeFirst,
  handlePageChangeLast,
  handlePageChange,
  dataStart,
  dataEnd,
  dataSize,
}) => {
  const pages = [...Array(totalPages).keys()];
  const id = useId();

  // Show at most 5 page buttons around current page
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages;
    if (currentPage <= 2) return [0, 1, 2, 3, 4];
    if (currentPage >= totalPages - 3) return pages.slice(totalPages - 5);
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  };

  const visiblePages = getVisiblePages();
  const showLeftEllipsis = totalPages > 5 && visiblePages[0] > 0;
  const showRightEllipsis =
    totalPages > 5 && visiblePages[visiblePages.length - 1] < totalPages - 1;

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-6 max-sm:justify-center">
      <div className="flex items-center pl-2 gap-2">
        <Label htmlFor={id}>Rows per page</Label>
        <Select defaultValue="10" onValueChange={handlePageSizeSelect}>
          <SelectTrigger id={id} className="">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent className="h-full">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-muted-foreground flex grow items-center justify-end whitespace-nowrap max-sm:justify-center">
        <p
          className="text-platinum-500/70 text-sm whitespace-nowrap"
          aria-live="polite">
          Showing <span className="text-platinum-600">{dataStart}</span> to{" "}
          <span className="text-platinum-600">{dataEnd}</span> of{" "}
          <span className="text-platinum-600">{dataSize}</span> products
        </p>
      </div>
      <Pagination className="w-fit max-sm:mx-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              onClick={handlePageChangeFirst}
              href="#0"
              aria-label="Go to first page"
              size="icon"
              className={`rounded-full ${currentPage === 0 ? "pointer-events-none text-platinum-500/30" : ""}`}>
              <ChevronFirstIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={handlePageChangePrev}
              href="#0"
              aria-label="Go to previous page"
              size="icon"
              className={`rounded-full ${currentPage === 0 ? "pointer-events-none text-platinum-500/30" : ""}`}>
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          {/* Left ellipsis - only when not near the start */}
          {showLeftEllipsis && (
            <EllipsisTooltip label={`${visiblePages[0]} pages before`} />
          )}
          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`#${page}`}
                onClick={() => handlePageChange(page)}
                isActive={currentPage === page}
                className={`rounded-full ${currentPage === page ? "bg-platinum-500 text-space_indigo-100" : ""}`}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Right ellipsis - only when not near the end */}
          {showRightEllipsis && (
            <EllipsisTooltip
              label={`${totalPages - 1 - visiblePages[visiblePages.length - 1]} pages after`}
            />
          )}

          <PaginationItem>
            <PaginationLink
              onClick={handlePageChangeNext}
              disabled={currentPage === pages.length - 1}
              href="#"
              aria-label="Go to next page"
              size="icon"
              className={`rounded-full ${currentPage === pages.length - 1 ? "pointer-events-none text-platinum-500/30" : ""}`}>
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`#${pages.length - 1}`}
              disabled={currentPage === pages.length - 1}
              aria-label="Go to last page"
              onClick={handlePageChangeLast}
              size="icon"
              className={`rounded-full ${currentPage === pages.length - 1 ? "pointer-events-none text-platinum-500/30" : ""}`}>
              <ChevronLastIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default TablePagination;
