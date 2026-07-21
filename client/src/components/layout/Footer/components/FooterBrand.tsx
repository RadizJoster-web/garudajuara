import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

export default function FooterBrand() {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaXTwitter />, href: "https://x.com", label: "X (Twitter)" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaTiktok />, href: "https://tiktok.com", label: "TikTok" },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      {/* Brand Logo */}
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
          <div className="font-display font-black text-base tracking-tight text-light uppercase flex items-center gap-1">
            <span>Garuda</span>
            <span className="text-primary">Juara</span>
          </div>
          <span className="font-mono text-[9px] font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mt-0.5">
            Portal Sport Indonesia
          </span>
        </div>
      </HashLink>

      {/* Deskripsi Brand */}
      <p className="text-xs font-body text-gray-400 leading-relaxed">
        Portal berita olahraga Indonesia — cepat, akurat, dan terpercaya.
        Menemani perjalanan Merah Putih di kancah olahraga nasional dan
        internasional.
      </p>

      {/* Social Media Buttons */}
      <div className="flex items-center gap-2.5 mt-1">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/80 text-gray-300 hover:text-light hover:border-primary hover:bg-primary transition-all duration-200 flex items-center justify-center text-xs"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
