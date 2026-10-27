import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

const lowSeverity = [
  { month: 1, cases: 8, size: 12 }, { month: 2, cases: 11, size: 10 }, { month: 3, cases: 7, size: 14 },
  { month: 4, cases: 13, size: 9 }, { month: 5, cases: 9, size: 13 }, { month: 6, cases: 12, size: 11 },
  { month: 7, cases: 10, size: 12 }, { month: 9, cases: 8, size: 10 }, { month: 10, cases: 6, size: 11 },
  { month: 11, cases: 9, size: 12 }, { month: 12, cases: 7, size: 10 },
];
const highSeverity = [
  { month: 2, cases: 3, size: 8 }, { month: 4, cases: 2, size: 7 }, { month: 8, cases: 14, size: 15 },
  { month: 8, cases: 10, size: 13 }, { month: 9, cases: 4, size: 8 }, { month: 12, cases: 2, size: 6 },
];
const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TimelineSeverityBubble = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Client Filing Exceptions</CardTitle>
      <CardDescription className="text-platinum-500/60">Monthly exception volume and severity; larger points indicate more cases.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid stroke="#ffffff18" />
          <XAxis type="number" dataKey="month" domain={[1, 12]} ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} tickFormatter={(month) => monthLabels[month - 1]} tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <YAxis type="number" dataKey="cases" name="Cases" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <ZAxis type="number" dataKey="size" range={[45, 180]} />
          <Tooltip />
          <Scatter name="Routine" data={lowSeverity} fill="#4DA0F0" />
          <Scatter name="High severity" data={highSeverity} fill="#F26354" />
        </ScatterChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default TimelineSeverityBubble;
