import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MONTHLY_DATA, MONTHLY_DATA_CONFIG } from "@/constants/analytics";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const BiaxialLineChart = ({ className }) => {
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
          <LineChart
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            style={{ height: "50vh", aspectRatio: "1.618" }}
            responsive
            data={monthlyData}>
            <CartesianGrid strokeLinecap stroke="#edf2f46b" horizontal={false} />
            <XAxis dataKey={"month"} />
            <YAxis
              yAxisId={"right"}
              orientation="right"
              width={"auto"}
              height={"auto"}
            />
            <YAxis
              yAxisId={"left"}
              orientation="left"
              width={"auto"}
              height={"auto"}
            />
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
            <Line
              yAxisId={"right"}
              type={"monotone"}
              dataKey={"shipments"}
              stroke="#edf2f4"
            />
            <Line
              yAxisId={"left"}
              type={"monotone"}
              dataKey={"revenue"}
              stroke="#759bab"
              dot={{ fill: "#759bab" }}
              activeDot={{ stroke: "#759bab" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BiaxialLineChart;
