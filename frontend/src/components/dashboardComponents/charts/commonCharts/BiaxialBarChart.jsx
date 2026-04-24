import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MONTHLY_DATA, MONTHLY_DATA_CONFIG } from "@/constants/analytics";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const BiaxialBarChart = ({ className }) => {
  const monthlyData = MONTHLY_DATA;
  const monthlyDataConfig = MONTHLY_DATA_CONFIG;
  return (
    <Card
      className={cn(
        "bg-space_indigo-100 text-platinum-500 h-[60vh] w-[38vw]",
        className,
      )}>
      <CardContent>
        <div>
          <p className="font-light text-platinum-500/60">
            Revenue & Volume Overview
          </p>
          <div className="flex gap-2">
            <p className="text-3xl font-bold">$4,682,193.26</p>
            <p className="flex text-green-500 text-sm  items-center">
              <ArrowUpRight className="size-4" />
              +15%
            </p>
          </div>
        </div>
        <ChartContainer config={monthlyDataConfig}>
          <BarChart
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            style={{ height: "50vh", aspectRatio: "1.618" }}
            responsive
            data={monthlyData}>
            <CartesianGrid
              strokeLinecap={"3 3"}
              stroke="#edf2f46b"
              horizontal={true}
              vertical={false}
              strokeOpacity={1}
            />
            <XAxis dataKey={"month"} />
            <YAxis
              width="100"
              domain={[0, 220]}
              ticks={[0, 55, 110, 165, 220]}
            />
            {/* <YAxis dataKey={"revenue"} orientation='' width="auto" height="auto"/> */}
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className={"bg-space_indigo-100 text-platinum-500"}
                  hideLabel
                  labelClassName={"text-platinum-500"}
                />
              }
            />
            <Bar
              dataKey={"revenue"}
              className="rounded-2xl"
              fill="#edf2f4"
              radius={[10, 10, 0, 0]}
            />
            {/* <Bar /> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BiaxialBarChart;
