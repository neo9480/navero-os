import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Area, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", contracted: 1100, high: 1280, low: 980 }, { month: "Feb", contracted: 1120, high: 1310, low: 1010 },
  { month: "Mar", contracted: 1090, high: 1260, low: 960 }, { month: "Apr", contracted: 1140, high: 1340, low: 1020 },
  { month: "May", contracted: 1160, high: 1420, low: 1100 }, { month: "Jun", contracted: 1180, high: 1380, low: 1060 },
  { month: "Jul", contracted: 1200, high: 1450, low: 1120 }, { month: "Aug", contracted: 1210, high: 1400, low: 1070 },
  { month: "Sep", contracted: 1230, high: 1480, low: 1140 }, { month: "Oct", contracted: 1220, high: 1390, low: 1060 },
  { month: "Nov", contracted: 1240, high: 1410, low: 1090 }, { month: "Dec", contracted: 1255, high: 1430, low: 1100 },
];

const LineConfidanceBand = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Freight Rate vs. Spot Market</CardTitle>
      <CardDescription className="text-platinum-500/60">Contracted rate compared with the spot-market range.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}`} />
          <Tooltip /><Legend />
          <Area dataKey="high" name="Spot high" stroke="none" fill="#F59E3B" fillOpacity={0.12} />
          <Area dataKey="low" name="Spot low" stroke="#8B92A8" strokeDasharray="4 3" fill="#0F1117" fillOpacity={1} />
          <Line dataKey="contracted" name="Contracted rate" stroke="#F59E3B" strokeWidth={2.5} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default LineConfidanceBand;
