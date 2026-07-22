import { FiUsers, FiBarChart2, FiClock, FiGlobe } from "react-icons/fi";
import type { AudienceMetric } from "../../../../assets/dataContent/advertiseData";

interface AdvertiseStatsProps {
  metrics: AudienceMetric[];
}

export default function AdvertiseStats({ metrics }: AdvertiseStatsProps) {
  const getIcon = (iconName: AudienceMetric["iconName"]) => {
    switch (iconName) {
      case "users":
        return <FiUsers className="w-5 h-5 text-primary" />;
      case "bar-chart":
        return <FiBarChart2 className="w-5 h-5 text-primary" />;
      case "clock":
        return <FiClock className="w-5 h-5 text-primary" />;
      case "globe":
        return <FiGlobe className="w-5 h-5 text-primary" />;
      default:
        return <FiUsers className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3 hover:border-primary/40 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              {getIcon(metric.iconName)}
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-mono text-[11px] font-bold">
              {metric.change}
            </span>
          </div>

          <div className="font-display text-3xl font-extrabold text-dark dark:text-light">
            {metric.value}
          </div>
          <div className="font-body text-xs font-semibold text-slate-500">
            {metric.label}
          </div>
        </div>
      ))}
    </section>
  );
}
