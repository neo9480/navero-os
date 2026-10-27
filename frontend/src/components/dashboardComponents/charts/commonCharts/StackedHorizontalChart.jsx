import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { buyer: "Buyer A", days0to30: 2.1, days31to60: 0.8, days61to90: 0.4, days90plus: 0.2 },
  { buyer: "Buyer B", days0to30: 1.4, days31to60: 0.9, days61to90: 0.3, days90plus: 0.4 },
  { buyer: "Buyer C", days0to30: 0.8, days31to60: 0.4, days61to90: 0.2, days90plus: 0.1 },
  { buyer: "Buyer D", days0to30: 0.5, days31to60: 0.2, days61to90: 0.1, days90plus: 0.05 },
  { buyer: "Buyer E", days0to30: 0.3, days31to60: 0.1, days61to90: 0.05, days90plus: 0.02 },
];

const StackedHorizontalChart = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Receivables Aging</CardTitle>
      <CardDescription className="text-platinum-500/60">Outstanding balances by buyer and aging bucket.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid stroke="#ffffff18" horizontal={false} />
          <XAxis type="number" tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}M`} />
          <YAxis dataKey="buyer" type="category" width={70} tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <Tooltip /><Legend />
          <Bar dataKey="days0to30" name="0–30 days" stackId="aging" fill="#34C48A" />
          <Bar dataKey="days31to60" name="31–60 days" stackId="aging" fill="#F59E3B" />
          <Bar dataKey="days61to90" name="61–90 days" stackId="aging" fill="#F26354" />
          <Bar dataKey="days90plus" name="90+ days" stackId="aging" fill="#C0392B" radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default StackedHorizontalChart;
