import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";
import Pagination from "./Pagination";  
import type { CategoryArticleItem } from "../../../assets/dataDummy/categoryData";
import { FiClock, FiUser } from "react-icons/fi";

interface CategoryLatestListProps {
  articles: CategoryArticleItem[];
}

export default function CategoryLatestList({
  articles,
}: CategoryLatestListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200/80 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-primary rounded-full" />
          <h2 className="text-xs font-display font-black tracking-widest text-primary uppercase">
            BERITA TERBARU
          </h2>
        </div>
        <span className="text-xs font-mono text-gray-400">
          Total {articles.length} Berita
        </span>
      </div>

      {/* Articles Cards Container */}
      <div className="flex flex-col gap-4">
        {currentArticles.map((article) => (
          <Link
            key={article.id}
            to={`/berita/${article.slug}`}
            className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 rounded-2xl bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 shadow-sm hover:border-primary/50 transition-colors"
          >
            {/* Thumbnail Image */}
            <div className="w-full sm:w-48 sm:h-32 h-44 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Article Details */}
            <div className="flex flex-col justify-between gap-2 flex-1 text-start">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{article.category}</Badge>
                  <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                    <FiClock className="text-xs text-primary" />{" "}
                    {article.publishedAt}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-dark dark:text-light group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs font-body text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read Time Metadata */}
              <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400 pt-2 border-t border-gray-100 dark:border-neutral-800/80">
                <span className="flex items-center gap-1">
                  <FiUser className="text-primary" /> {article.author}
                </span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
