interface AdBannerProps {
  dataAdSlot?: string;
  dataAdFormat?: "auto" | "fluid" | "rectangle" | "horizontal";
  className?: string;
  size?: "horizontal" | "vertical" | "medium" | "large" | "square" | "fluid";
}

export default function AdBanner({
  dataAdSlot = "1234567890",
  dataAdFormat = "auto",
  className = "",
  size = "medium",
}: AdBannerProps) {
  // Pilihan styling dimensi berdasarkan props size
  const getSizeStyles = () => {
    switch (size) {
      case "horizontal":
        return "w-full max-w-4xl min-h-[90px] sm:min-h-[120px]";
      case "large":
        return "w-full min-h-[300px] sm:min-h-[600px]";
      case "medium":
        return "w-full max-w-[336px] min-h-[280px]";
      case "square":
        return "w-full max-w-[250px] min-h-[250px]";
      case "vertical":
        return "w-full max-w-[160px] min-h-[600px]";
      case "fluid":
        return "w-full min-h-[150px]";
      default:
        return "w-full max-w-[336px] min-h-[280px]";
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed border-gray-300 dark:border-neutral-800 bg-gray-50/80 dark:bg-neutral-900/50 text-center transition-colors ${getSizeStyles()} ${className}`}
    >
      {/* Label Penanda Slot Iklan (Placeholder Visual) */}
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 dark:text-neutral-500 uppercase">
          — RUANG IKLAN ({size.toUpperCase()}) —
        </span>
        <span className="text-[10px] font-mono text-gray-400/80 dark:text-neutral-600">
          Google AdSense / Sponsorship
        </span>
      </div>

      {/* Tag Ins Resmi AdSense (Akan Aktif saat Production/Backend) */}
      <ins
        className="adsbygoogle block w-full h-full absolute inset-0 opacity-0 pointer-events-none"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Nanti diisi ID AdSense kamu
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
