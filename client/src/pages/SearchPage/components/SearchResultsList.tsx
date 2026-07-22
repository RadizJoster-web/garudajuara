import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";
import Pagination from "../../CategoryPage/components/Pagination";
import type { SearchArticleItem } from "../../../assets/dataDummy/searchData";
import { FiClock, FiUser, FiInbox } from "react-icons/fi";

interface SearchResultsListProps {
  articles: SearchArticleItem[];
}

export default function SearchResultsList({
  articles,
}: SearchResultsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 150, behavior: "smooth" });
  };

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-3 bg-gray-50 dark:bg-neutral-800/30 rounded-2xl border border-dashed border-gray-200 dark:border-neutral-800">
        <FiInbox className="text-4xl text-gray-400" />
        <h3 className="text-base font-display font-bold text-dark dark:text-light">
          Berita Tidak Ditemukan
        </h3>
        <p className="text-xs font-body text-gray-400 max-w-sm">
          Coba gunakan kata kunci yang berbeda atau periksa kembali ejaan kata
          pencarian Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Article List Cards */}
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

            {/* Article Content */}
            <div className="flex flex-col justify-between gap-2 flex-1 text-start">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{article.category}</Badge>
                  <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                    <FiClock className="text-xs text-primary" />{" "}
                    {article.publishedAt}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-display font-bold text-dark dark:text-light group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-xs font-body text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Metadata Author */}
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

      {/* Pagination Component */}
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
