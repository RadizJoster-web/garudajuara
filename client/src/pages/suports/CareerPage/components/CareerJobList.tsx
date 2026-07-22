import { FiMapPin, FiClock, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import type { PositionItem } from "../../../../assets/dataContent/careerData";

interface CareerJobListProps {
  positions: PositionItem[];
  onApply: (position: PositionItem) => void;
}

export default function CareerJobList({
  positions,
  onApply,
}: CareerJobListProps) {
  if (positions.length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-2">
        <p className="font-display font-bold text-dark dark:text-light">
          Tidak ada posisi terbuka untuk kategori ini.
        </p>
        <p className="font-body text-xs text-slate-500">
          Silakan pilih kategori lain atau kirimkan CV ke Talent Pool kami.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {positions.map((pos) => (
        <div
          key={pos.id}
          className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] font-semibold">
                  {pos.department}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                  {pos.type}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-dark dark:text-light group-hover:text-primary transition-colors">
                {pos.title}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1">
                  <FiMapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{pos.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-3.5 h-3.5 text-primary" />
                  <span>
                    Status: {pos.status === "open" ? "Tersedia" : "Talent Pool"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onApply(pos)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer self-start sm:self-center shadow-xs"
            >
              <span>Lamar Posisi Ini</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
            {pos.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-xs text-dark dark:text-light uppercase tracking-wider">
                Tanggung Jawab Utama:
              </h4>
              <ul className="space-y-1">
                {pos.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs font-body text-slate-600 dark:text-slate-400"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-xs text-dark dark:text-light uppercase tracking-wider">
                Persyaratan:
              </h4>
              <ul className="space-y-1">
                {pos.requirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs font-body text-slate-600 dark:text-slate-400"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
