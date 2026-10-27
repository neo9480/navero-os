import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ResponsiveContainer,
  Tooltip,
  Treemap as RechartsTreemap,
} from "recharts";

const data = [
  { name: "Chemicals", size: 28, fill: "#4DA0F0" },
  { name: "Engineering", size: 22, fill: "#34C48A" },
  { name: "Textiles", size: 18, fill: "#F59E3B" },
  { name: "Agriculture", size: 16, fill: "#8B82F5" },
  { name: "Pharma", size: 10, fill: "#F26354" },
  { name: "Other", size: 6, fill: "#8B92A8" },
];

const Treemap = ({ className }) => (
  <Card
    className={cn(
      "h-[60vh] w-full bg-space_indigo-100 text-platinum-500",
      className,
    )}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Product Mix by Revenue</CardTitle>
      <CardDescription className="text-platinum-500/60">
        Relative export revenue by product group.
      </CardDescription>
    </CardHeader>
    <CardContent className="h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsTreemap data={data} dataKey="size" stroke="#1A1D27">
          <Tooltip />
        </RechartsTreemap>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default Treemap;
