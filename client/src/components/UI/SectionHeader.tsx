import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface SectionHeaderProps {
  subTitle: string;
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({
  subTitle,
  title,
  viewAllLink = "/berita",
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6 pb-2 border-b border-gray-100 dark:border-neutral-800">
      <div className="flex flex-col gap-1">
        {/* Sub-tagline */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-primary rounded-full" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
            {subTitle}
          </span>
        </div>
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-display font-black text-dark dark:text-light tracking-tight">
          {title}
        </h2>
      </div>

      {/* Link Lihat Semua */}
      <Link
        to={viewAllLink}
        className="group inline-flex items-center gap-1.5 text-xs font-display font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors pb-1"
      >
        <span>Lihat Semua</span>
        <FiArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
