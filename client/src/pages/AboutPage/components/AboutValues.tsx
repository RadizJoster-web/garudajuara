import { FiZap, FiShield, FiAward } from "react-icons/fi";
import type { AboutValueItem } from "../../../assets/dataContent/aboutData";

interface AboutValuesProps {
  tagline: string;
  heading: string;
  items: AboutValueItem[];
}

export default function AboutValues({
  tagline,
  heading,
  items,
}: AboutValuesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <FiZap className="text-xl text-primary" />;
      case "shield":
        return <FiShield className="text-xl text-primary" />;
      case "award":
        return <FiAward className="text-xl text-primary" />;
      default:
        return <FiZap className="text-xl text-primary" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          {tagline}
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-dark dark:text-light">
          {heading}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 p-6 rounded-2xl bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 text-start shadow-sm hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center self-start">
              {getIcon(val.iconName)}
            </div>
            <h4 className="text-base font-display font-bold text-dark dark:text-light">
              {val.title}
            </h4>
            <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
