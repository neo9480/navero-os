import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { currency: "USD", exposure: 18.2, hedged: 14.1 },
  { currency: "EUR", exposure: 8.4, hedged: 6.2 },
  { currency: "GBP", exposure: 4.1, hedged: 3.8 },
  { currency: "JPY", exposure: 2.3, hedged: 1.1 },
  { currency: "AED", exposure: 1.8, hedged: 1.4 },
];

const GroupedBar = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">FX Exposure vs. Hedging</CardTitle>
      <CardDescription className="text-platinum-500/60">Gross exposure compared with hedged notional by currency.</CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff18" vertical={false} />
          <XAxis dataKey="currency" tick={{ fill: "#8B92A8", fontSize: 10 }} />
          <YAxis tick={{ fill: "#8B92A8", fontSize: 10 }} tickFormatter={(value) => `$${value}M`} />
          <Tooltip /><Legend />
          <Bar dataKey="exposure" name="Gross exposure" fill="#4DA0F0" radius={[3, 3, 0, 0]} />
          <Bar dataKey="hedged" name="Hedged" fill="#34C48A" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default GroupedBar;
