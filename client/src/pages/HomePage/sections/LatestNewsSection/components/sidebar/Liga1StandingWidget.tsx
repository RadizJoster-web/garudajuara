import type { Liga1Rank } from "../../../../../../assets/dataDummy/latestNewsSection";

interface Liga1StandingWidgetProps {
  standings: Liga1Rank[];
}

export default function Liga1StandingWidget({ standings }: Liga1StandingWidgetProps) {
  return (
    <div className="bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-primary rounded-full" />
          <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase">
            KLASEMEN LIGA 1
          </h3>
        </div>
        <span className="text-[10px] font-mono text-gray-400">TOP 5</span>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-neutral-800/60 font-body">
        {standings.map((item) => (
          <div
            key={item.rank}
            className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-xs font-bold w-4 text-center ${
                  item.rank === 1 ? "text-primary font-black" : "text-gray-400"
                }`}
              >
                {item.rank}
              </span>
              <span className="text-xs">{item.logo}</span>
              <span className="text-xs font-display font-bold text-dark dark:text-light">
                {item.club}
              </span>
            </div>

            <span className="font-mono text-xs font-bold text-primary bg-red-tint dark:bg-neutral-800 px-2 py-0.5 rounded-md">
              {item.points} <span className="text-[9px] font-normal">pts</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}