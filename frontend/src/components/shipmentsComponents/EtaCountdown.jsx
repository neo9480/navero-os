import { useEffect, useState } from "react";

function EtaCountdown({ eta }) {
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    if (!eta) return;
    const tick = () => {
      const diff = new Date(eta) - Date.now();
      if (diff <= 0) {
        setRemaining("Arrived");
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      setRemaining(`${d}d ${h}h ${m}m`);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [eta]);

  if (!eta) return null;

  return (
    <div className="bg-space_indigo-100 border p-4 text-platinum-500 rounded-2xl">
      <div
        className="uppercase text-xs text-platinum-500/50 tracking-wider mb-4">
        Estimated Arrival
      </div>
      <div 
      className="flex items-baseline gap-8">
        <span
        className="font-bold text-blue-400 text-sm tabular-nums">
          {remaining}
        </span>
        <span 
        className="text-platinum-500/50 text-sm">
          {new Date(eta).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}

export default EtaCountdown