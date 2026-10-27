import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", asiaEurope: 820, transPacific: 640, intraAsia: 380 },
  { month: "Feb", asiaEurope: 760, transPacific: 620, intraAsia: 360 },
  { month: "Mar", asiaEurope: 890, transPacific: 680, intraAsia: 410 },
  { month: "Apr", asiaEurope: 840, transPacific: 650, intraAsia: 390 },
  { month: "May", asiaEurope: 920, transPacific: 720, intraAsia: 440 },
  { month: "Jun", asiaEurope: 870, transPacific: 690, intraAsia: 420 },
  { month: "Jul", asiaEurope: 950, transPacific: 760, intraAsia: 470 },
  { month: "Aug", asiaEurope: 900, transPacific: 730, intraAsia: 450 },
  { month: "Sep", asiaEurope: 980, transPacific: 790, intraAsia: 490 },
  { month: "Oct", asiaEurope: 930, transPacific: 770, intraAsia: 470 },
  { month: "Nov", asiaEurope: 1020, transPacific: 820, intraAsia: 510 },
  { month: "Dec", asiaEurope: 990, transPacific: 800, intraAsia: 500 },
];

const GanttUtilizationBand = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Monthly Volume by Lane</CardTitle>
      <CardDescription className="text-platinum-500/60">TEU volume stacked by trade lane across the year.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <Tooltip /><Legend />
          <Bar dataKey="asiaEurope" name="Asia-Europe" stackId="lane" fill="#4DA0F0" />
          <Bar dataKey="transPacific" name="Trans-Pacific" stackId="lane" fill="#34C48A" />
          <Bar dataKey="intraAsia" name="Intra-Asia" stackId="lane" fill="#F59E3B" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default GanttUtilizationBand;
