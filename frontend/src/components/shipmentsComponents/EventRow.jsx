import { DEFAULT_EVENT, EVENT_CONFIG } from "@/constants/shipments";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

function EventRow({ event, isLast }) {
  const cfg = EVENT_CONFIG[event.type] ?? DEFAULT_EVENT;
  const time = new Date(event.createdAt);
  const Icon = cfg.icon;

  return (
    <div className="flex relative min-h-56">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center w-7 shrink-0">
        {/* Dot */}
        <div
          className={` rounded-full size-6 bg-[${cfg.bg}] border-2 flex items-center justify-center shrink-0 relative z-10 ${cfg.dot}`}>
          <Icon className={`size-4 ${cfg.text}`} />
        </div>
        {/* Vertical line downward */}
        {!isLast && (
          <Separator orientation="vertical" className={"bg-platinum-500"} />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${isLast ? "pb-0" : "pb-16"}`}>
        <span className={`text-md font-extralight text-[${cfg.color}]`}>
          {cfg.label}
        </span>

        {event.location && (
          <div className="flex items-center">
            <MapPin className="size-5" />
            <p className="text-sm">{event.location}</p>
          </div>
        )}
        {event.message && <div className="text-sm">{event.message}</div>}
      </div>
      <span className="text-platinum-500/60 whitespace-nowrap">
        {time.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })}
        {time.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}

export default EventRow;
