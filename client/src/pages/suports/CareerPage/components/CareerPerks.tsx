import {
  FiGlobe,
  FiZap,
  FiAward,
  FiTrendingUp,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import type { BenefitItem } from "../../../../assets/dataContent/careerData";

interface CareerPerksProps {
  tagline: string;
  heading: string;
  benefits: BenefitItem[];
}

export default function CareerPerks({
  tagline,
  heading,
  benefits,
}: CareerPerksProps) {
  const getIcon = (iconName: BenefitItem["iconName"]) => {
    switch (iconName) {
      case "globe":
        return <FiGlobe className="w-6 h-6 text-primary" />;
      case "zap":
        return <FiZap className="w-6 h-6 text-primary" />;
      case "award":
        return <FiAward className="w-6 h-6 text-primary" />;
      case "trending-up":
        return <FiTrendingUp className="w-6 h-6 text-primary" />;
      case "clock":
        return <FiClock className="w-6 h-6 text-primary" />;
      case "users":
        return <FiUsers className="w-6 h-6 text-primary" />;
      default:
        return <FiGlobe className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 transition-all duration-300 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              {getIcon(item.iconName)}
            </div>
            <h3 className="font-display font-bold text-lg text-dark dark:text-light">
              {item.title}
            </h3>
            <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
