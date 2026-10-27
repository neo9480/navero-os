import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "CIF Value", base: 0, amount: 280 }, { name: "Customs Duty", base: 280, amount: 42 },
  { name: "IGST", base: 322, amount: 38 }, { name: "Port Charges", base: 360, amount: 18 },
  { name: "Last-Mile", base: 378, amount: 12 }, { name: "Landed Cost", base: 0, amount: 390, total: true },
];

const WaterfallChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Landed Cost Waterfall</CardTitle>
      <CardDescription className="text-platinum-500/60">CIF value plus duties and logistics to total landed cost.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}M`} />
          <Tooltip />
          <Bar dataKey="base" stackId="cost" fill="transparent" isAnimationActive={false} />
          <Bar dataKey="amount" name="Cost ($M)" stackId="cost" radius={[3, 3, 0, 0]}>
            {data.map((item) => <Cell key={item.name} fill={item.total ? "#34C48A" : "#4DA0F0"} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default WaterfallChart;
