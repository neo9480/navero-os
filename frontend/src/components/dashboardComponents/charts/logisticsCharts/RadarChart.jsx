import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { metric: "On-Time %", clientA: 91, clientB: 84 }, { metric: "Doc Accuracy", clientA: 96, clientB: 90 },
  { metric: "Damage Rate", clientA: 98, clientB: 95 }, { metric: "Transit Days", clientA: 80, clientB: 72 },
  { metric: "Tracking Freq.", clientA: 85, clientB: 78 }, { metric: "Claim Res.", clientA: 82, clientB: 70 },
];

const RadarChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Customer SLA Scorecard</CardTitle>
      <CardDescription className="text-platinum-500/60">Service-level performance across six operating measures.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} outerRadius="70%">
          <PolarGrid stroke="#ffffff18" />
          <PolarAngleAxis dataKey="metric" tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <PolarRadiusAxis tick={false} axisLine={false} domain={[60, 100]} />
          <Radar name="Client A" dataKey="clientA" stroke="#F59E3B" fill="#F59E3B" fillOpacity={0.16} />
          <Radar name="Client B" dataKey="clientB" stroke="#4DA0F0" fill="#4DA0F0" fillOpacity={0.16} />
          <Tooltip /><Legend />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default RadarChart;
