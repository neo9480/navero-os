import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

const suppliers = [
  { name: "Supplier A", spend: 4.8, risk: 24, shipments: 38 }, { name: "Supplier B", spend: 3.9, risk: 38, shipments: 30 },
  { name: "Supplier C", spend: 3.2, risk: 18, shipments: 25 }, { name: "Supplier D", spend: 2.8, risk: 62, shipments: 22 },
  { name: "Supplier E", spend: 2.1, risk: 47, shipments: 18 }, { name: "Supplier F", spend: 1.7, risk: 72, shipments: 14 },
  { name: "Supplier G", spend: 1.2, risk: 33, shipments: 10 }, { name: "Supplier H", spend: 0.9, risk: 84, shipments: 8 },
];

const BubbleChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Supplier Spend vs. Risk</CardTitle>
      <CardDescription className="text-platinum-500/60">Bubble size represents shipment count; elevated risk scores warrant review.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid stroke="#ffffff18" />
          <XAxis type="number" dataKey="spend" name="Spend ($M)" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis type="number" dataKey="risk" name="Risk score" domain={[0, 100]} tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <ZAxis type="number" dataKey="shipments" range={[60, 300]} name="Shipments" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Suppliers" data={suppliers} fill="#4DA0F0" />
        </ScatterChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default BubbleChart;
