import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [{ name: "LC Utilization", utilization: 73.4, fill: "#8B82F5" }];

const GaugeChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">LC Utilization</CardTitle>
      <CardDescription className="text-platinum-500/60">Used share of sanctioned letter-of-credit limits.</CardDescription>
    </CardHeader>
    <CardContent className="relative h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={data} startAngle={180} endAngle={0} innerRadius="68%" outerRadius="92%">
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="utilization" cornerRadius={10} background />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-x-0 bottom-16 text-center text-3xl font-semibold">73.4%</div>
    </CardContent>
  </Card>
);

export default GaugeChart;
