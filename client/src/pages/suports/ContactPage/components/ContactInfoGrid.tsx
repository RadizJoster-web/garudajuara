import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiFileText,
  FiHelpCircle,
} from "react-icons/fi";
import type { ContactChannel } from "../../../../assets/dataContent/contactData";

interface ContactInfoGridProps {
  channels: ContactChannel[];
}

export default function ContactInfoGrid({ channels }: ContactInfoGridProps) {
  const getIcon = (iconName: ContactChannel["iconName"]) => {
    switch (iconName) {
      case "mail":
      case "file-text":
        return <FiFileText className="w-6 h-6 text-primary" />;
      case "briefcase":
        return <FiBriefcase className="w-6 h-6 text-primary" />;
      case "help-circle":
        return <FiHelpCircle className="w-6 h-6 text-primary" />;
      case "map-pin":
        return <FiMapPin className="w-6 h-6 text-primary" />;
      case "phone":
        return <FiPhone className="w-6 h-6 text-primary" />;
      default:
        return <FiMail className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {channels.map((channel, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {getIcon(channel.iconName)}
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500 uppercase font-semibold">
                {channel.badge}
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-dark dark:text-light">
                {channel.title}
              </h3>
              <p className="font-body text-xs text-slate-500">
                {channel.subtitle}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
            {channel.link ? (
              <a
                href={channel.link}
                className="font-mono text-xs font-semibold text-primary hover:underline break-all"
              >
                {channel.value}
              </a>
            ) : (
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                {channel.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
