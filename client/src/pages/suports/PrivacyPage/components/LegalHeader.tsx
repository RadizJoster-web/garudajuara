import { FiFileText, FiCalendar } from "react-icons/fi";

interface LegalHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
}

export default function LegalHeader({
  badge,
  title,
  subtitle,
  description,
  lastUpdated,
  effectiveDate,
}: LegalHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-6">
      <div className="relative z-10 max-w-4xl space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-mono font-semibold uppercase tracking-wider">
            <FiFileText className="w-4 h-4" />
            <span>{badge}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
            <FiCalendar className="w-3.5 h-3.5 text-primary" />
            <span>Diperbarui: {lastUpdated}</span>
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        <p className="font-display text-lg font-medium text-primary">
          {subtitle}
        </p>
        <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        Tanggal Efektif: <span className="text-white font-semibold">{effectiveDate}</span>
      </div>
    </section>
  );
}
