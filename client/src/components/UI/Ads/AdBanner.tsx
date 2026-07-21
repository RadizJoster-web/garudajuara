import { useEffect } from "react";

interface AdBannerProps {
  dataAdSlot?: string;
  dataAdFormat?: "auto" | "fluid" | "rectangle" | "horizontal";
  className?: string;
  size?: "horizontal" | "large"; // Props baru untuk kontrol ukuran
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  className = "",
  size = "horizontal",
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      }
    } catch (err) {
      console.error("AdSense Error:", err);
    }
  }, []);

  // Logika class dinamis berdasarkan size
  const isLarge = size === "large";

  const containerClasses = isLarge
    ? "min-h-[250px] aspect-square sm:aspect-video md:aspect-[4/3] w-full"
    : "min-h-[90px] sm:min-h-[120px] w-full";

  // 1. Placeholder (Development Mode)
  if (!dataAdSlot) {
    return (
      <aside
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 select-none ${className}`}
        aria-label="Iklan Sponsor"
      >
        <div
          className={`bg-gray-100 dark:bg-neutral-800/60 border border-dashed border-gray-300 dark:border-neutral-700 rounded-2xl p-4 flex flex-col items-center justify-center text-center ${containerClasses}`}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            — SPONSORED ADVERTISEMENT —
          </span>
          <p className="text-xs font-display font-semibold text-gray-500 dark:text-gray-400">
            {isLarge
              ? "Slot Iklan Kotak (300x250)"
              : "Slot Iklan Banner (728x90)"}
          </p>
        </div>
      </aside>
    );
  }

  // 2. Production Mode (Google AdSense)
  return (
    <aside
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center ${className}`}
      aria-label="Iklan Sponsor"
    >
      <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-1">
        IKLAN
      </span>
      <div className={`overflow-hidden rounded-2xl ${containerClasses}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={dataAdSlot}
          data-ad-format={isLarge ? "rectangle" : dataAdFormat}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
  