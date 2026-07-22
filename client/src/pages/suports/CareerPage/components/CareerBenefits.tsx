import { FiGlobe, FiClock, FiZap } from "react-icons/fi";
import type { BenefitItem } from "../../../../assets/dataContent/careerData";

interface CareerBenefitsProps {
  tagline: string;
  heading: string;
  benefits: BenefitItem[];
}

export default function CareerBenefits({
  tagline,
  heading,
  benefits,
}: CareerBenefitsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "globe":
        return <FiGlobe className="text-xl text-primary" />;
      case "clock":
        return <FiClock className="text-xl text-primary" />;
      case "zap":
        return <FiZap className="text-xl text-primary" />;
      default:
        return <FiGlobe className="text-xl text-primary" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 pt-2">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          {tagline}
        </span>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-dark dark:text-light">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 p-6 rounded-2xl bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 text-start shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center self-start">
              {getIcon(item.iconName)}
            </div>
            <h3 className="text-base font-display font-bold text-dark dark:text-light">
              {item.title}
            </h3>
            <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
