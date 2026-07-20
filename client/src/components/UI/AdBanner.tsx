import { useEffect } from "react";

interface AdBannerProps {
  dataAdSlot?: string; // ID Slot dari Google AdSense
  dataAdFormat?: "auto" | "fluid" | "rectangle" | "horizontal";
  className?: string;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  className = "",
}: AdBannerProps) {
  useEffect(() => {
    // Memanggil Script Google AdSense secara otomatis ketika komponen di-mount
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

  // 1. Jika belum ada AdSlot (Tahap Development/Lokal), Tampilkan Placeholder
  if (!dataAdSlot) {
    return (
      <aside
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 select-none ${className}`}
        aria-label="Iklan Sponsor"
      >
        <div className="w-full bg-gray-100 dark:bg-neutral-800/60 border border-dashed border-gray-300 dark:border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[120px] text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            — SPONSORED ADVERTISEMENT —
          </span>
          <p className="text-xs font-display font-semibold text-gray-500 dark:text-gray-400">
            Slot Iklan Banner (Google AdSense 728x90 / Leaderboard)
          </p>
        </div>
      </aside>
    );
  }

  // 2. Jika sudah Production & Punya AdSlot dari Google
  return (
    <aside
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center ${className}`}
      aria-label="Iklan Sponsor"
    >
      <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-1">
        IKLAN
      </span>
      <div className="w-full overflow-hidden rounded-xl">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Nanti diisi Client ID Google-mu
          data-ad-slot={dataAdSlot}
          data-ad-format={dataAdFormat}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
