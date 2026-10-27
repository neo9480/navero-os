import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { stage: "Booked", shipments: 2840, fill: "#4DA0F0" },
  { stage: "Origin Pickup", shipments: 2710, fill: "#34C48A" },
  { stage: "At Sea", shipments: 2680, fill: "#F59E3B" },
  { stage: "Destination Port", shipments: 2520, fill: "#D97706" },
  { stage: "Delivered", shipments: 2340, fill: "#14785A" },
];

const FunnelChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Shipment Status Pipeline</CardTitle>
      <CardDescription className="text-platinum-500/60">Shipments progressing from booking through delivery.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 12 }}>
          <XAxis type="number" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis dataKey="stage" type="category" width={105} tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <Tooltip />
          <Bar dataKey="shipments" name="Shipments" radius={[0, 4, 4, 0]}>
            {data.map((stage) => <Cell key={stage.stage} fill={stage.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default FunnelChart;
