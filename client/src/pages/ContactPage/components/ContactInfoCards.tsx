import { FiMail, FiBriefcase, FiMapPin } from "react-icons/fi";
import type { ContactChannel } from "../../../assets/dataContent/contactData";

interface ContactInfoCardsProps {
  channels: ContactChannel[];
}

export default function ContactInfoCards({ channels }: ContactInfoCardsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "mail":
        return <FiMail className="text-xl text-primary" />;
      case "business":
        return <FiBriefcase className="text-xl text-primary" />;
      case "location":
        return <FiMapPin className="text-xl text-primary" />;
      default:
        return <FiMail className="text-xl text-primary" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
      {channels.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-3 p-6 rounded-2xl bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 text-start shadow-sm"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center self-start">
            {getIcon(item.iconName)}
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-base font-display font-bold text-dark dark:text-light">
              {item.title}
            </h3>
            <span className="text-[11px] font-mono text-gray-400">
              {item.subtitle}
            </span>
          </div>
          {item.link ? (
            <a
              href={item.link}
              className="text-xs font-mono font-bold text-primary hover:underline pt-1 truncate"
            >
              {item.value}
            </a>
          ) : (
            <span className="text-xs font-mono font-semibold text-dark dark:text-light pt-1">
              {item.value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
