// Type definitions for 'react-router-hash-link' are not available in this project.
// Suppress TS error until @types/react-router-hash-link is added.
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import { FaTrophy } from "react-icons/fa6";

export default function Logo() {
  return (
    <HashLink
      smooth
      to="/#beranda"
      className="flex items-center gap-3 group select-none focus:outline-none"
      aria-label="Garuda Juara - Portal Sport Indonesia"
    >
      {/* Icon Container dengan Micro-interaction */}
      <div className="w-8 h-8 rounded-lg bg-primary text-light flex items-center justify-center shadow-sm shadow-primary/30 group-hover:bg-primary-dark group-hover:scale-105 transition-all duration-200">
        <FaTrophy className="text-sm" />
      </div>

      {/* Typography Brand & Sub-tagline */}
      <div className="flex flex-col justify-center leading-none">
        <div className="font-display font-black text-base tracking-tight text-dark dark:text-light uppercase flex items-center gap-1">
          <span>Garuda</span>
          <span className="text-primary">Juara</span>
        </div>
        <span className="font-mono text-[9px] font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mt-0.5">
          Portal Sport Indonesia
        </span>
      </div>
    </HashLink>
  );
}
