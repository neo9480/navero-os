import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MONTHLY_DATA } from "@/constants/analytics";
import { cn } from "@/lib/utils";
import React from "react";
import { Bar, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from "recharts";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#759bab",
  },
  shipments: {
    label: "Shipments",
    color: "#edf2f4",
  },
};

const BiaxialLineBarChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardContent>
      <div>
        <p className="font-light text-platinum-500/60">Revenue &amp; Volume Overview</p>
        <p className="text-3xl font-bold">$4,682,193.26</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[50vh] w-full">
        <ComposedChart
          data={MONTHLY_DATA}
          margin={{ top: 12, right: 12, bottom: 8, left: 0 }}
        >
          <CartesianGrid stroke="#edf2f46b" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="revenue"
            orientation="left"
            tickFormatter={(value) => `$${value}M`}
            stroke="#759bab"
          />
          <YAxis
            yAxisId="shipments"
            orientation="right"
            tickFormatter={(value) => `${value} MT`}
            stroke="#edf2f4"
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-space_indigo-100 text-platinum-500"
                labelClassName="text-platinum-500"
                formatter={(value, name) => [
                  name === "revenue" ? `$${value}M` : `${value} MT`,
                  name === "revenue" ? "Revenue" : "Shipments",
                ]}
              />
            }
          />
          <Bar
            yAxisId="revenue"
            dataKey="revenue"
            name="Revenue"
            fill="var(--color-revenue)"
            radius={[6, 6, 0, 0]}
          />
          <Line
            yAxisId="shipments"
            dataKey="shipments"
            name="Shipments"
            type="monotone"
            stroke="var(--color-shipments)"
            strokeWidth={2}
            dot={{ fill: "var(--color-shipments)", r: 3 }}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export default BiaxialLineBarChart;
