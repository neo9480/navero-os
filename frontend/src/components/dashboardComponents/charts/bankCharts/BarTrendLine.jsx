import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { bank: "BNP Paribas", rate: 3.2 }, { bank: "HSBC", rate: 2.1 }, { bank: "SBI", rate: 4.8 },
  { bank: "DBS", rate: 1.9 }, { bank: "Citi", rate: 2.7 }, { bank: "StanChart", rate: 1.4 }, { bank: "ICICI", rate: 5.2 },
];

const BarTrendLine = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Bank Discrepancy Rate</CardTitle>
      <CardDescription className="text-platinum-500/60">Document discrepancy rate by issuing bank.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="bank" tick={{ fill: "#8B92A8", fontSize: 9 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <Bar dataKey="rate" name="Discrepancy rate" fill="#8B82F5" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default BarTrendLine;
