import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart as RechartsScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

const normalValues = [
  { declared: 100, assessed: 102 }, { declared: 250, assessed: 248 }, { declared: 180, assessed: 183 },
  { declared: 320, assessed: 318 }, { declared: 80, assessed: 81 }, { declared: 420, assessed: 425 },
  { declared: 150, assessed: 154 }, { declared: 280, assessed: 276 }, { declared: 360, assessed: 362 },
];
const flaggedValues = [{ declared: 200, assessed: 140 }, { declared: 380, assessed: 230 }, { declared: 290, assessed: 185 }];

const ScatterChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Under-Valuation Detection</CardTitle>
      <CardDescription className="text-platinum-500/60">Declared and assessed unit values; flagged declarations need review.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsScatterChart>
          <CartesianGrid stroke="#ffffff18" />
          <XAxis type="number" dataKey="declared" name="Declared value" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis type="number" dataKey="assessed" name="Assessed value" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <ZAxis range={[55, 75]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Normal" data={normalValues} fill="#4DA0F0" />
          <Scatter name="Suspected" data={flaggedValues} fill="#F26354" />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ScatterChart;
