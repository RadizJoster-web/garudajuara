import { FiHeart } from "react-icons/fi";
import type { AuthorDetail } from "../../../../../assets/dataDummy/articleDetail";

interface AuthorDonationBarProps {
  author: AuthorDetail;
  publishedAt: string; // Menerima props tanggal publish
}

export default function AuthorDonationBar({
  author,
  publishedAt,
}: AuthorDonationBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3.5 px-4.5 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl border border-gray-200/80 dark:border-neutral-800/80 my-1">
      {/* Sisi Kiri: Foto Profil, Nama Author, & Tanggal Publish di Bawahnya */}
      <div className="flex items-center gap-3.5">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0"
        />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-display font-bold text-dark dark:text-light leading-snug">
            {author.name}
          </span>
          {/* Tanggal & Waktu Publish Tepat di Bawah Username */}
          <span className="text-xs font-mono text-gray-400">{publishedAt}</span>
        </div>
      </div>

      {/* Sisi Kanan: Tombol Donasi */}
      {author.donationUrl && (
        <a
          href={author.donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-display font-bold text-xs shadow-sm hover:shadow transition-all duration-200 active:scale-95 flex-shrink-0"
        >
          <FiHeart className="text-sm fill-current animate-pulse" />
          <span>Dukung Penulis</span>
        </a>
      )}
    </div>
  );
}
