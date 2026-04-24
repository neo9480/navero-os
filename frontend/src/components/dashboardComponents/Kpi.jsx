import { KPI } from "@/constants/analytics";
import { ArrowDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "../ui/separator";

const Kpi = () => {
  const kpiData = KPI;
  const perCalc = (value, prevValue) => {
    const parse = (str) => parseFloat(str.replace(/[^0-9.]/g, ""));
    const current = parse(value);
    const prev = parse(prevValue);
    const percentage = ((current - prev) / prev) * 100;
    return percentage.toFixed(1);
  };
  return (
    <div className="bg-space_indigo-100 border text-platinum-500 p-4 rounded-xl w-full h-[30vh]">
      <div className=" w-full h-full flex gap-2 justify-center items-center">
        {kpiData.map(({ id, label, icon: Icon, value, prevValue }) => (
          <>
            <div
              key={id}
              className="w-[17.5vw] p-4 h-full flex flex-col justify-between ">
              <div className="flex items-center text-platinum-500/80 gap-2">
                <Icon className="size-5" />
                <p>{label}</p>
              </div>
              <div>
                <p className="text-platinum-500/40">
                  {prevValue} previous month
                </p>
                <p className="text-3xl font-bold">{value}</p>
              </div>
              <div className="flex gap-2">
                <p
                  className={`flex ${parseFloat(perCalc(value, prevValue)) >= 0 ? "text-green-500" : "text-flag_red-500"} text-xs items-center`}>
                  {parseFloat(perCalc(value, prevValue)) >= 0 ?
                    <ArrowUpRight className="size-4" />
                  : <ArrowDownRight className="size-4" />}
                  {parseFloat(perCalc(value, prevValue)) >= 0 ?
                    `+${perCalc(value, prevValue)}`
                  : `${perCalc(value, prevValue)}`}{" "}
                  {/* already has minus sign */}%
                </p>
                <p className="text-xs text-platinum-500/40"> vs Last month</p>
              </div>
            </div>
            {id <= 2 ?
              <Separator orientation="vertical" />
            : <></>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Kpi;
