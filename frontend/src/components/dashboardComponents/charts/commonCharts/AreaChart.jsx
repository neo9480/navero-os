import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", collected: 58, budget: 60 }, { month: "Feb", collected: 62, budget: 60 },
  { month: "Mar", collected: 70, budget: 65 }, { month: "Apr", collected: 66, budget: 65 },
  { month: "May", collected: 74, budget: 70 }, { month: "Jun", collected: 71, budget: 70 },
  { month: "Jul", collected: 78, budget: 75 }, { month: "Aug", collected: 75, budget: 75 },
  { month: "Sep", collected: 82, budget: 80 }, { month: "Oct", collected: 80, budget: 80 },
  { month: "Nov", collected: 88, budget: 85 }, { month: "Dec", collected: 84, budget: 85 },
];

const AreaChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Revenue Collection vs. Budget</CardTitle>
      <CardDescription className="text-platinum-500/60">Monthly duty collections against budget targets.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `₹${value}Cr`} />
          <Tooltip />
          <Legend />
          <Area dataKey="collected" name="Collected (₹Cr)" type="monotone" stroke="#F26354" fill="#F26354" fillOpacity={0.2} />
          <Line dataKey="budget" name="Budget (₹Cr)" type="monotone" stroke="#8B92A8" strokeDasharray="5 4" dot={false} />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default AreaChart;
