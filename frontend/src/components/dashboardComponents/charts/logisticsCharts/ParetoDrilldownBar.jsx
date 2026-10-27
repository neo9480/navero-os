import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { cause: "Port congestion", count: 142, cumulative: 33 }, { cause: "Doc error", count: 98, cumulative: 56 },
  { cause: "Vessel delay", count: 76, cumulative: 74 }, { cause: "Customs hold", count: 54, cumulative: 86 },
  { cause: "Weather", count: 38, cumulative: 95 }, { cause: "Other", count: 22, cumulative: 100 },
];

const ParetoDrilldownBar = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Delay Root-Cause Pareto</CardTitle>
      <CardDescription className="text-platinum-500/60">Shipment delay causes with cumulative share.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="cause" tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <YAxis yAxisId="count" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis yAxisId="percent" orientation="right" domain={[0, 100]} tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <Bar yAxisId="count" dataKey="count" name="Shipments" fill="#F59E3B" radius={[3, 3, 0, 0]} />
          <Line yAxisId="percent" dataKey="cumulative" name="Cumulative %" stroke="#F26354" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ParetoDrilldownBar;
