import { Link } from "react-router-dom";
import Badge from "./Badge";

export interface ArticleCardProps {
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
}

export default function ArticleCard({
  title,
  slug,
  category,
  image,
  author,
  publishedAt,
}: ArticleCardProps) {
  return (
    <Link
      to={`/berita/${slug}`}
      className="group flex flex-col h-full bg-light dark:bg-dark rounded-2xl border border-gray-200/80 dark:border-neutral-800/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 select-none"
    >
      {/* Thumbnail Gambar (Bersih Tanpa Label Overlay) */}
      <div className="w-full h-44 sm:h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col justify-between flex-1 p-4 sm:p-5 gap-3">
        <div className="flex flex-col gap-2 items-start">
          {/* Label Kategori Ditaruh di Sini (Di Luar/Atas Gambar) */}
          <Badge variant="primary">{category}</Badge>

          {/* Judul Artikel */}
          <h3 className="text-sm sm:text-base font-display font-bold text-dark dark:text-light line-clamp-2 leading-snug group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        {/* Metadata Penulis & Waktu */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-neutral-800/60">
          <span className="truncate">{author}</span>
          <span>•</span>
          <span className="whitespace-nowrap">{publishedAt}</span>
        </div>
      </div>
    </Link>
  );
}
