import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../../../../../assets/dataDummy/latestNewsSection";

export default function SocialMediaWidget() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return <FaInstagram className="text-pink-600 text-base" />;
      case "twitter":
        return <FaTwitter className="text-sky-500 text-base" />;
      case "youtube":
        return <FaYoutube className="text-red-600 text-base" />;
      case "tiktok":
        return <FaTiktok className="text-dark dark:text-light text-base" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <span className="w-3 h-0.5 bg-primary rounded-full" />
        <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase">
          IKUTI KAMI
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 bg-gray-50 dark:bg-neutral-800/50 hover:bg-red-tint dark:hover:bg-neutral-800 rounded-xl transition-colors border border-transparent hover:border-primary/20 group"
          >
            <div className="p-1.5 rounded-lg bg-light dark:bg-dark shadow-sm">
              {getIcon(social.icon)}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-display font-bold text-dark dark:text-light truncate group-hover:text-primary transition-colors">
                {social.name}
              </span>
              <span className="text-[9px] font-mono text-gray-400 truncate">
                {social.handle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
