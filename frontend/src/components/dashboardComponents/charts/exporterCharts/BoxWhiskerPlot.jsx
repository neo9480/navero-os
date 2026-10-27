import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const groups = [
  { label: "Chemicals", min: 42, q1: 58, median: 71, q3: 84, max: 98 },
  { label: "Engineering", min: 35, q1: 49, median: 65, q3: 78, max: 93 },
  { label: "Textiles", min: 28, q1: 44, median: 59, q3: 72, max: 88 },
  { label: "Agriculture", min: 31, q1: 47, median: 62, q3: 76, max: 91 },
  { label: "Pharma", min: 51, q1: 66, median: 79, q3: 90, max: 100 },
];

const BoxWhiskerPlot = ({ className }) => {
  return (
    <Card className={cn("h-[60vh] w-full bg-space_indigo-100 text-platinum-500", className)}>
      <CardHeader>
        <CardTitle className="text-sm font-light text-platinum-500/60">Export Price Distribution</CardTitle>
        <CardDescription className="text-platinum-500/60">Unit-price range and quartiles by product group.</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[50vh] flex-col pb-6">
        <div className="flex min-h-0 flex-1 gap-2">
          <div className="relative w-7 shrink-0 text-[10px] text-platinum-500/50">
            {[0, 25, 50, 75, 100].map((tick) => (
              <span
                key={tick}
                className="absolute right-0 -translate-y-1/2"
                style={{ bottom: `${tick}%` }}
              >
                {tick}
              </span>
            ))}
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-5 border-b border-platinum-500/20 bg-[linear-gradient(to_top,transparent_calc(25%-0.5px),#ffffff18_25%,transparent_calc(25%+0.5px),transparent_calc(50%-0.5px),#ffffff18_50%,transparent_calc(50%+0.5px),transparent_calc(75%-0.5px),#ffffff18_75%,transparent_calc(75%+0.5px))]">
            {groups.map((group) => (
              <div key={group.label} className="relative border-l border-platinum-500/10 last:border-r">
                <span
                  className="absolute left-1/2 w-px -translate-x-1/2 bg-platinum-500/60"
                  style={{ bottom: `${group.min}%`, height: `${group.max - group.min}%` }}
                />
                <span
                  className="absolute left-1/2 h-px w-3 -translate-x-1/2 bg-platinum-500/60"
                  style={{ bottom: `${group.min}%` }}
                />
                <span
                  className="absolute left-1/2 h-px w-3 -translate-x-1/2 bg-platinum-500/60"
                  style={{ bottom: `${group.max}%` }}
                />
                <span
                  className="absolute left-1/2 w-5 -translate-x-1/2 rounded border border-sky-400/80 bg-sky-500/20"
                  style={{ bottom: `${group.q1}%`, height: `${group.q3 - group.q1}%` }}
                />
                <span
                  className="absolute left-1/2 h-0.5 w-5 -translate-x-1/2 bg-sky-300"
                  style={{ bottom: `${group.median}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-9 grid grid-cols-5 pt-2 text-center text-[10px] text-platinum-500/60">
          {groups.map((group) => <span key={group.label} className="truncate px-1">{group.label}</span>)}
        </div>
      </CardContent>
    </Card>
  );
};

export default BoxWhiskerPlot;
