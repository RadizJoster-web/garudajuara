import type { AboutStatItem } from "../../../../assets/dataContent/aboutData";

interface AboutStatsProps {
  items: AboutStatItem[];
}

export default function AboutStats({ items }: AboutStatsProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {items.map((stat, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-md"
        >
          <div className="font-mono text-xs font-semibold text-primary/80 mb-2">
            0{idx + 1} // METRIC
          </div>
          <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark dark:text-light mb-1 group-hover:text-primary transition-colors">
            {stat.value}
          </div>
          <div className="font-display font-semibold text-sm sm:text-base text-dark dark:text-light">
            {stat.label}
          </div>
          <div className="font-body text-xs text-slate-500 dark:text-slate-400 mt-1">
            {stat.sublabel}
          </div>
        </div>
      ))}
    </section>
  );
}
