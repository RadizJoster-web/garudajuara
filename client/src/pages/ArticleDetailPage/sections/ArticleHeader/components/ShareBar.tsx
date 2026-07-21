import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Toast from "../../../../../components/ui/Toast";

interface ShareBarProps {
  title: string;
}

export default function ShareBar({ title }: ShareBarProps) {
  const [showToast, setShowToast] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 pt-1">
        {/* Tombol Social Share */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400 uppercase font-bold mr-1 hidden sm:inline-block">
            Bagikan:
          </span>
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors"
            title="Bagikan ke WhatsApp"
          >
            <FaWhatsapp className="text-sm" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
            title="Bagikan ke X"
          >
            <FaXTwitter className="text-sm" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
            title="Bagikan ke Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a>
        </div>

        {/* Tombol Copy Link (Icon Segitiga Share Kanan) */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="p-2 rounded-xl text-gray-500 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          title="Salin Tautan Artikel"
        >
          <FiShare2 className="text-base" />
        </button>
      </div>

      {/* Toast Popup Notifikasi */}
      <Toast
        message="Link artikel berhasil disalin!"
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
