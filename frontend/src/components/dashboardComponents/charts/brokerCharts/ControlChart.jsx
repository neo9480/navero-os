import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", rate: 1.8 }, { month: "Feb", rate: 2.1 }, { month: "Mar", rate: 1.6 },
  { month: "Apr", rate: 1.9 }, { month: "May", rate: 1.4 }, { month: "Jun", rate: 1.7 },
  { month: "Jul", rate: 1.3 }, { month: "Aug", rate: 4.2 }, { month: "Sep", rate: 1.5 },
  { month: "Oct", rate: 1.2 }, { month: "Nov", rate: 1.4 }, { month: "Dec", rate: 1.1 },
];

const ControlChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Filing Accuracy SPC</CardTitle>
      <CardDescription className="text-platinum-500/60">Monthly discrepancy rate with upper and lower control limits.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <ReferenceLine y={3.5} stroke="#F26354" strokeDasharray="5 4" label={{ value: "UCL", fill: "#F26354", fontSize: 10 }} />
          <ReferenceLine y={1.8} stroke="#8B92A8" strokeDasharray="3 3" label={{ value: "CL", fill: "#8B92A8", fontSize: 10 }} />
          <ReferenceLine y={0.2} stroke="#34C48A" strokeDasharray="5 4" label={{ value: "LCL", fill: "#34C48A", fontSize: 10 }} />
          <Line dataKey="rate" name="Discrepancy rate" stroke="#D95FBB" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ControlChart;
