import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { code: "8471", mfn: 10, fta: 0 }, { code: "8517", mfn: 15, fta: 5 },
  { code: "8703", mfn: 25, fta: 10 }, { code: "7208", mfn: 7.5, fta: 2.5 },
  { code: "3004", mfn: 5, fta: 0 }, { code: "2709", mfn: 2.5, fta: 0 },
  { code: "5208", mfn: 20, fta: 8 },
];

const BulletChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">FTA vs. MFN Duty Gap</CardTitle>
      <CardDescription className="text-platinum-500/60">MFN rates compared with available FTA rates by HS code.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="code" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip /><Legend />
          <Bar dataKey="mfn" name="MFN rate" fill="#F26354" radius={[3, 3, 0, 0]} />
          <Bar dataKey="fta" name="FTA rate" fill="#34C48A" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default BulletChart;
