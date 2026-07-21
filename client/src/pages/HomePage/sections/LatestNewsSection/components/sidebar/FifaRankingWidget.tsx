import type { FifaRank } from "../../../../../../assets/dataDummy/latestNewsSection";

interface FifaRankingWidgetProps {
  rankings: FifaRank[];
}

export default function FifaRankingWidget({ rankings }: FifaRankingWidgetProps) {
  return (
    <div className="bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-primary rounded-full" />
          <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase">
            RANKING FIFA TIMNAS
          </h3>
        </div>
        <span className="text-[10px] font-mono text-gray-400">UPDATE MINGGU INI</span>
      </div>

      <div className="flex flex-col gap-1.5 font-body">
        {rankings.map((item) => (
          <div
            key={item.rank}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
              item.isIndonesia
                ? "bg-primary text-light shadow-md shadow-primary/25 scale-[1.02] font-semibold"
                : "bg-gray-50 dark:bg-neutral-800/50 text-dark dark:text-light"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-xs font-bold w-7 ${
                  item.isIndonesia ? "text-light" : "text-gray-400 dark:text-gray-500"
                }`}
              >
                #{item.rank}
              </span>
              <span className="text-sm">{item.flag}</span>
              <span className="text-xs font-display font-bold uppercase tracking-wide">
                {item.country}
              </span>
            </div>

            <span
              className={`font-mono text-xs ${
                item.isIndonesia ? "text-light font-bold" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {item.points} <span className="text-[9px]">pts</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}   