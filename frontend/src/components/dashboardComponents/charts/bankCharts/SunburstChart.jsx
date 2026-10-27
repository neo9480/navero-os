import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "LC Commission", value: 32 }, { name: "BG Fees", value: 18 },
  { name: "Forex Spread", value: 24 }, { name: "PCF Interest", value: 16 },
  { name: "Bill Discounting", value: 10 },
];
const colors = ["#8B82F5", "#4DA0F0", "#34C48A", "#F59E3B", "#8B92A8"];

const SunburstChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Trade-Finance Revenue Attribution</CardTitle>
      <CardDescription className="text-platinum-500/60">Revenue contribution by finance product.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius="48%" outerRadius="78%" paddingAngle={2}>
            {data.map((entry, index) => <Cell key={entry.name} fill={colors[index]} />)}
          </Pie>
          <Tooltip /><Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default SunburstChart;
