import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200/80 dark:border-neutral-800">
      {/* Indicator Status Halaman */}
      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
        Halaman{" "}
        <strong className="text-dark dark:text-light">{currentPage}</strong>{" "}
        dari <strong className="text-dark dark:text-light">{totalPages}</strong>
      </span>

      {/* Button Group Navigation */}
      <div className="flex items-center gap-1.5">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-xl border border-gray-200 dark:border-neutral-800 bg-light dark:bg-dark text-dark dark:text-light disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors"
          aria-label="Halaman Sebelumnya"
        >
          <FiChevronLeft className="text-base" />
        </button>

        {/* Number Buttons */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-colors ${
              currentPage === page
                ? "bg-primary text-light shadow-sm"
                : "border border-gray-200 dark:border-neutral-800 bg-light dark:bg-dark text-dark dark:text-light hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl border border-gray-200 dark:border-neutral-800 bg-light dark:bg-dark text-dark dark:text-light disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors"
          aria-label="Halaman Berikutnya"
        >
          <FiChevronRight className="text-base" />
        </button>
      </div>
    </div>
  );
}
