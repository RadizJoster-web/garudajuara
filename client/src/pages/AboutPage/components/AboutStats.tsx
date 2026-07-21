import type { AboutStatItem } from "../../../assets/dataContent/aboutData";

interface AboutStatsProps {
  items: AboutStatItem[];
}

export default function AboutStats({ items }: AboutStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl border border-gray-200/80 dark:border-neutral-800">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center gap-1">
          <span className="text-3xl sm:text-4xl font-display font-black text-primary">
            {item.value}
          </span>
          <span className="text-xs font-mono font-semibold text-gray-600 dark:text-gray-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
