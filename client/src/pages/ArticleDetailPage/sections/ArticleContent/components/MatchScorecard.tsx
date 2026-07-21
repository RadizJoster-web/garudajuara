import type { MatchScore } from "../../../../../assets/dataDummy/articleDetail";

interface MatchScorecardProps {
  data: MatchScore;
}

export default function MatchScorecard({ data }: MatchScorecardProps) {
  return (
    <div className="w-full bg-light dark:bg-dark border border-gray-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 my-6 select-none transition-colors">
      {/* Header Turnamen */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 dark:border-neutral-800 text-xs font-mono">
        <span className="text-primary font-bold tracking-wider uppercase">
          {data.tournament}
        </span>
        <span className="text-gray-400">{data.matchDate}</span>
      </div>

      {/* Main Score Board (Menggunakan Bendera + Nama Negara) */}
      <div className="grid grid-cols-11 items-center gap-2 py-2">
        {/* Home Team (Kiri) */}
        <div className="col-span-4 flex items-center justify-end gap-2.5 text-right">
          <span className="text-sm sm:text-base font-display font-black text-dark dark:text-light tracking-tight">
            {data.homeTeam}
          </span>
          <span className="text-2xl sm:text-3xl flex-shrink-0">
            {data.homeFlag}
          </span>
        </div>

        {/* Display Skor Utama (Tengah) */}
        <div className="col-span-3 flex items-center justify-center">
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-gray-50 dark:bg-neutral-800/80 rounded-xl border border-gray-200/80 dark:border-neutral-700/60">
            <span className="text-2xl sm:text-3xl font-display font-black text-primary">
              {data.homeScore}
            </span>
            <span className="text-sm font-mono text-gray-400">-</span>
            <span className="text-2xl sm:text-3xl font-display font-black text-dark dark:text-light">
              {data.awayScore}
            </span>
          </div>
        </div>

        {/* Away Team (Kanan) */}
        <div className="col-span-4 flex items-center justify-start gap-2.5 text-left">
          <span className="text-2xl sm:text-3xl flex-shrink-0">
            {data.awayFlag}
          </span>
          <span className="text-sm sm:text-base font-display font-black text-dark dark:text-light tracking-tight">
            {data.awayTeam}
          </span>
        </div>
      </div>
    </div>
  );
}
