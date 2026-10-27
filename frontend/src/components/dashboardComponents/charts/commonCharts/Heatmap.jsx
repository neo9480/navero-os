import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ports = ["JNPT", "Mundra", "Chennai", "Kolkata", "Vizag"];
const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
const values = [
  [4.2, 5.1, 6.3, 5.8, 4.9, 4.1], [5.5, 6.8, 8.2, 7.1, 5.9, 5.2],
  [3.8, 4.2, 5.0, 4.7, 3.9, 3.5], [6.1, 7.3, 9.1, 8.4, 7.0, 6.2],
  [4.5, 5.0, 5.8, 5.3, 4.6, 4.0],
];

function dwellColor(days) {
  if (days < 5) return "bg-emerald-500/50";
  if (days < 7) return "bg-amber-500/60";
  return "bg-rose-500/70";
}

const Heatmap = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Port Dwell Time Heatmap</CardTitle>
      <CardDescription className="text-platinum-500/60">Average dwell days by port and month.</CardDescription>
    </CardHeader>
    <CardContent className="pb-6">
      <div className="grid grid-cols-[auto_repeat(6,minmax(0,1fr))] gap-1 text-[10px]">
        <span />
        {months.map((month) => <span key={month} className="text-center text-platinum-500/60">{month}</span>)}
        {ports.map((port, row) => (
          <div key={port} className="contents">
            <span className="flex items-center pr-2 text-platinum-500/70">{port}</span>
            {values[row].map((days, column) => (
              <span key={`${port}-${months[column]}`} title={`${port}, ${months[column]}: ${days} days`} className={cn("flex min-h-9 items-center justify-center rounded-sm text-platinum-500", dwellColor(days))}>
                {days.toFixed(1)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Heatmap;
