import { FiShield, FiMail, FiMapPin } from "react-icons/fi";

interface EditorialPolicyProps {
  tagline: string;
  heading: string;
  text: string;
  email: string;
  location: string;
}

export default function EditorialPolicy({
  tagline,
  heading,
  text,
  email,
  location,
}: EditorialPolicyProps) {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 bg-gray-50 dark:bg-neutral-800/40 rounded-2xl border border-gray-200/80 dark:border-neutral-800 text-start">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FiShield className="text-primary text-base" />
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            {tagline}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold text-dark dark:text-light">
          {heading}
        </h3>
        <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4 border-t border-gray-200/80 dark:border-neutral-700/60 text-xs font-mono text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <FiMail className="text-primary" />
          <span>
            Pengaduan Redaksi: <strong>{email}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="text-primary" />
          <span>
            Lokasi Operasional: <strong>{location}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
