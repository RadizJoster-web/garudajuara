import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";
import type { CategoryArticleItem } from "../../../assets/dataDummy/categoryData";
import { FiClock, FiUser, FiChevronRight } from "react-icons/fi";

interface CategoryHeadlineProps {
  article: CategoryArticleItem;
  slug?: string;
}

export default function CategoryHeadline({
  article,
  slug,
}: CategoryHeadlineProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* 1. DIRECTORY / BREADCRUMB HEADER (Clean & Modern) */}
      <nav className="flex items-center gap-2 text-xs font-mono text-gray-400">
        <Link to="/" className="hover:text-primary transition-colors">
          BERANDA
        </Link>
        <FiChevronRight className="text-gray-300 dark:text-neutral-700 text-xs" />
        <span className="text-gray-400">KATEGORI</span>
        <FiChevronRight className="text-gray-300 dark:text-neutral-700 text-xs" />
        <span className="text-primary font-bold tracking-wider uppercase">
          {slug}
        </span>
      </nav>

      {/* 2. MAIN HEADLINE BANNER CARD */}
      <Link
        to={`/berita/${article.slug}`}
        className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 shadow-md min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8"
      >
        {/* Background Image & Gradient Overlay */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

        {/* Content Details */}
        <div className="relative z-10 flex flex-col gap-3 max-w-3xl text-start">
          <div className="flex items-center gap-2">
            <Badge variant="primary">{article.category}</Badge>
            <span className="text-[11px] font-mono text-gray-300 flex items-center gap-1">
              <FiClock className="text-xs text-primary" /> {article.publishedAt}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-light group-hover:text-primary transition-colors leading-tight">
            {article.title}
          </h1>

          <p className="text-xs sm:text-sm font-body text-gray-300 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400 pt-1">
            <span className="flex items-center gap-1">
              <FiUser className="text-primary" /> {article.author}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
