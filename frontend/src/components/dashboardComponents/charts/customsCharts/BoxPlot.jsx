import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const channels = [
  { name: "Green", min: 1.2, q1: 2.4, median: 3.8, q3: 4.6, max: 7.1 },
  { name: "Orange", min: 5.2, q1: 8.5, median: 12.4, q3: 16.8, max: 23.5 },
  { name: "Red", min: 12.4, q1: 19.2, median: 28.1, q3: 35.6, max: 48.0 },
];

function position(value) {
  return `${(value / 50) * 100}%`;
}

const BoxPlot = ({ className }) => (
  <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
    <CardHeader>
      <CardTitle className="text-sm font-light text-platinum-500/60">Clearance Time Distribution</CardTitle>
      <CardDescription className="text-platinum-500/60">Clearance-hour quartiles and ranges by risk channel.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-1 flex-col justify-center space-y-5 pb-6">
      {channels.map((channel) => (
        <div key={channel.name} className="grid grid-cols-[64px_1fr] items-center gap-3 text-xs">
          <span className="text-platinum-500/70">{channel.name}</span>
          <div className="relative h-8">
            <span className="absolute top-1/2 h-px -translate-y-1/2 bg-platinum-500/50" style={{ left: position(channel.min), width: `calc(${position(channel.max)} - ${position(channel.min)})` }} />
            <span className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-platinum-500/70" style={{ left: position(channel.min) }} />
            <span className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-platinum-500/70" style={{ left: position(channel.max) }} />
            <span className="absolute top-1/2 h-6 -translate-y-1/2 rounded border border-rose-400/80 bg-rose-500/20" style={{ left: position(channel.q1), width: `calc(${position(channel.q3)} - ${position(channel.q1)})` }} />
            <span className="absolute top-1/2 h-6 w-0.5 -translate-y-1/2 bg-rose-300" style={{ left: position(channel.median) }} />
          </div>
        </div>
      ))}
      <div className="flex justify-between pl-[76px] text-[10px] text-platinum-500/50"><span>0 hrs</span><span>25 hrs</span><span>50 hrs</span></div>
    </CardContent>
  </Card>
);

export default BoxPlot;
