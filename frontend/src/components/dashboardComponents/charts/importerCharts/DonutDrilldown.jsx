import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { country: "China", value: 34 }, { country: "Germany", value: 18 }, { country: "USA", value: 14 },
  { country: "Japan", value: 12 }, { country: "South Korea", value: 8 }, { country: "Others", value: 14 },
];
const colors = ["#4DA0F0", "#34C48A", "#F59E3B", "#8B82F5", "#F26354", "#8B92A8"];

const DonutDrilldown = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Country-of-Origin Mix</CardTitle>
      <CardDescription className="text-platinum-500/60">Import value share by source country.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="country" innerRadius="54%" outerRadius="80%" paddingAngle={2}>
            {data.map((country, index) => <Cell key={country.country} fill={colors[index]} />)}
          </Pie>
          <Tooltip /><Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default DonutDrilldown;
