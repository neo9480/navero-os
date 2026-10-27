import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { range: "0–10", declarations: 3200 }, { range: "11–20", declarations: 4100 },
  { range: "21–30", declarations: 5800 }, { range: "31–40", declarations: 6200 },
  { range: "41–50", declarations: 4900 }, { range: "51–60", declarations: 3800 },
  { range: "61–70", declarations: 2400 }, { range: "71–80", declarations: 1600 },
  { range: "81–90", declarations: 900 }, { range: "91–100", declarations: 420 },
];

const Histogram = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Risk Score Distribution</CardTitle>
      <CardDescription className="text-platinum-500/60">Customs declarations grouped by risk score.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={1}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="range" tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <Tooltip />
          <Bar dataKey="declarations" name="Declarations" fill="#F59E3B" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default Histogram;
