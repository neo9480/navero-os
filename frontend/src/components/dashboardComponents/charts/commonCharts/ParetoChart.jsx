import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { buyer: "Buyer A", revenue: 12.4, cumulative: 32 }, { buyer: "Buyer B", revenue: 8.1, cumulative: 53 },
  { buyer: "Buyer C", revenue: 5.9, cumulative: 68 }, { buyer: "Buyer D", revenue: 4.2, cumulative: 79 },
  { buyer: "Buyer E", revenue: 3.1, cumulative: 87 }, { buyer: "Buyer F", revenue: 2.4, cumulative: 93 },
  { buyer: "Buyer G", revenue: 1.8, cumulative: 97 }, { buyer: "Buyer H", revenue: 1.2, cumulative: 100 },
];

const ParetoChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Buyer Concentration</CardTitle>
      <CardDescription className="text-platinum-500/60">Top buyers by revenue and cumulative share.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="buyer" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis yAxisId="revenue" tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}M`} />
          <YAxis yAxisId="percent" orientation="right" domain={[0, 100]} tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip /><Legend />
          <Bar yAxisId="revenue" dataKey="revenue" name="Revenue ($M)" fill="#4DA0F0" radius={[3, 3, 0, 0]} />
          <Line yAxisId="percent" dataKey="cumulative" name="Cumulative %" stroke="#F26354" strokeWidth={2} dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ParetoChart;
