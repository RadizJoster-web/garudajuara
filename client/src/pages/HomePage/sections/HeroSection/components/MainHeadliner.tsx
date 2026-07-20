import { Link } from "react-router-dom";
import type { Article } from "../../../../../assets/dataDummy/heroNews";
import Badge from "../../../../../components/ui/Badge";

interface MainHeadlinerProps {
  article: Article;
}

export default function MainHeadliner({ article }: MainHeadlinerProps) {
  return (
    <Link
      to={`/berita/${article.slug}`}
      className="group relative w-full h-[380px] sm:h-[450px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg block select-none bg-neutral-900"
    >
      {/* Gambar Utama (Hero Image) */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Dark Gradient Overlay agar teks selalu terbaca jelas */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Konten Teks di Atas Gambar */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col items-start gap-3 z-10">
        <Badge variant="primary">{article.category}</Badge>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-light leading-tight group-hover:text-red-100 transition-colors">
          {article.title}
        </h1>

        {/* Metadata (Tanpa Jumlah Dibaca) */}
        <div className="flex items-center gap-2 text-xs font-body text-gray-300">
          <span className="font-semibold text-light">{article.author}</span>
          <span>•</span>
          <span>{article.publishedAt}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
