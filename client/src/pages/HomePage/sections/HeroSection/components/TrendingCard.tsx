import { Link } from "react-router-dom";
import type { Article } from "../../../../../assets/dataDummy/heroNews";

interface TrendingCardProps {
  article: Article;
}

export default function TrendingCard({ article }: TrendingCardProps) {
  return (
    <Link
      to={`/berita/${article.slug}`}
      className="group flex items-center gap-3 py-2.5 transition-all"
    >
      {/* Thumbnail Image */}
      <div className="w-20 h-16 sm:w-24 sm:h-18 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Text Info */}
      <div className="flex flex-col justify-center gap-1 min-w-0">
        <span className="text-[10px] font-display font-black tracking-wider text-primary uppercase">
          {article.category}
        </span>
        <h3 className="text-xs sm:text-sm font-display font-bold text-dark dark:text-light line-clamp-2 leading-snug group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}
