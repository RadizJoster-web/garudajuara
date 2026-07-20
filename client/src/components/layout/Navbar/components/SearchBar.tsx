import { useState, useRef, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function SearchBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isMobileOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMobileOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* 1. Desktop Search Input (Hidden di Mobile) */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative w-full max-w-xs hidden md:block"
      >
        <input
          type="text"
          placeholder="Cari berita olahraga..."
          className="w-full pl-9 pr-4 py-1.5 text-sm font-body bg-gray-100 dark:bg-neutral-800 text-dark dark:text-light rounded-full border border-transparent focus:border-primary focus:bg-light dark:focus:bg-dark-bg focus:outline-none transition-all duration-200"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
      </form>

      {/* 2. Mobile Search Icon Trigger (Muncul di Mobile) */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        type="button"
        aria-label="Cari Berita"
        className="md:hidden p-2 rounded-lg text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        {isMobileOpen ? (
          <FiX className="text-xl text-primary" />
        ) : (
          <FiSearch className="text-xl" />
        )}
      </button>

      {/* 3. Mobile Full-Width Search Overlay */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-light dark:bg-dark-bg border-b border-gray-200 dark:border-neutral-800 p-3 shadow-xl md:hidden animate-in slide-in-from-top-2 duration-200 z-50">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari berita, atlet, atau event..."
              className="w-full pl-10 pr-10 py-2.5 text-sm font-body bg-gray-100 dark:bg-neutral-800 text-dark dark:text-light rounded-xl border border-transparent focus:border-primary focus:outline-none"
            />
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />

            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-dark dark:hover:text-light"
            >
              <FiX className="text-base" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
