import { useState } from "react";
import type { FormEvent } from "react";

import { useNavigate, Link } from "react-router-dom";
import { FiSearch, FiChevronRight } from "react-icons/fi";

interface SearchHeaderProps {
  query: string;
  totalResults: number;
}

export default function SearchHeader({
  query,
  totalResults,
}: SearchHeaderProps) {
  const [keyword, setKeyword] = useState(query);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/pencarian?q=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <div className="flex flex-col gap-5 border-b border-gray-200/80 dark:border-neutral-800 pb-6">
      {/* Breadcrumb Direktori */}
      <nav className="flex items-center gap-2 text-xs font-mono text-gray-400">
        <Link to="/" className="hover:text-primary transition-colors">
          BERANDA
        </Link>
        <FiChevronRight className="text-gray-300 dark:text-neutral-700 text-xs" />
        <span className="text-primary font-bold tracking-wider uppercase">
          HASIL PENCARIAN
        </span>
      </nav>

      {/* Input Form Search Bar */}
      <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari kata kunci berita, klub, atau nama atlet..."
          className="w-full py-3.5 pl-11 pr-28 rounded-2xl bg-light dark:bg-dark border border-gray-200 dark:border-neutral-700 text-sm text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary shadow-sm transition-colors"
        />
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-primary text-light font-display font-bold text-xs hover:bg-primary/90 transition-colors"
        >
          Cari
        </button>
      </form>

      {/* Meta Keterangan Hasil */}
      <div className="flex items-center justify-between pt-1">
        <h1 className="text-base sm:text-lg font-display font-bold text-dark dark:text-light">
          Menampilkan hasil untuk:{" "}
          <span className="text-primary font-black">
            "{query || "Semua Berita"}"
          </span>
        </h1>
        <span className="text-xs font-mono text-gray-400">
          Ditemukan{" "}
          <strong className="text-dark dark:text-light">{totalResults}</strong>{" "}
          berita
        </span>
      </div>
    </div>
  );
}
