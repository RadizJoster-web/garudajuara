import type { MatchStat } from "../../../../../assets/dataDummy/articleDetail";

interface MatchStatsGridProps { 
  stats: MatchStat[];
}

export default function MatchStatsGrid({ stats }: MatchStatsGridProps) {
  return (
    <div className="w-full bg-gray-50 dark:bg-neutral-800/50 border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 my-6">
      <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase mb-4 text-center">
        STATISTIK PERTANDINGAN
      </h3>

      <div className="flex flex-col gap-3 font-body">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-primary">{item.homeValue}</span>
              <span className="text-gray-500 dark:text-gray-400 font-normal">
                {item.label}
              </span>
              <span className="text-dark dark:text-light">
                {item.awayValue}
              </span>
            </div>
            {/* Visual Bar Comparison */}
            <div className="w-full h-1.5 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden flex">
              <div
                className="bg-primary h-full transition-all duration-500"
                style={{
                  width:
                    typeof item.homeValue === "string" &&
                    item.homeValue.includes("%")
                      ? item.homeValue
                      : "50%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
