import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 3.2, volume: 9800 }, { month: "Feb", revenue: 3.8, volume: 11200 },
  { month: "Mar", revenue: 4.1, volume: 12000 }, { month: "Apr", revenue: 3.6, volume: 10500 },
  { month: "May", revenue: 4.8, volume: 13100 }, { month: "Jun", revenue: 4.4, volume: 12600 },
  { month: "Jul", revenue: 5.1, volume: 14200 }, { month: "Aug", revenue: 4.7, volume: 13000 },
  { month: "Sep", revenue: 5.5, volume: 15100 }, { month: "Oct", revenue: 4.9, volume: 13800 },
  { month: "Nov", revenue: 6.2, volume: 16900 }, { month: "Dec", revenue: 5.9, volume: 16200 },
];

const GroupedBarAreaChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Monthly Revenue vs. Volume</CardTitle>
      <CardDescription className="text-platinum-500/60">Invoice value and shipped volume across the year.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis yAxisId="revenue" tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}M`} />
          <YAxis yAxisId="volume" orientation="right" tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip /><Legend />
          <Bar yAxisId="revenue" dataKey="revenue" name="Revenue ($M)" fill="#4DA0F0" radius={[3, 3, 0, 0]} />
          <Line yAxisId="volume" dataKey="volume" name="Volume (MT)" stroke="#F59E3B" strokeWidth={2} dot={{ r: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default GroupedBarAreaChart;
