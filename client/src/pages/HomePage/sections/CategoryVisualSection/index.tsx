import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { VISUAL_CATEGORIES } from "../../../../assets/dataDummy/categorySection";
import CategoryVisualCard from "./components/CategoryVisualCard";

export default function CategoryVisualSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk melakukan scroll halus ke Kiri/Kanan
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Jarak scroll dalam piksel
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section + Tombol Navigasi Desktop */}
      <div className="flex items-end justify-between mb-6 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-primary rounded-full" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
              JELAJAHI
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-black text-dark dark:text-light tracking-tight">
            Kategori Olahraga
          </h2>
        </div>

        {/* Tombol Panah Kiri & Kanan (Hanya Muncul di Desktop/Tablet: md:flex) */}
        <div className="hidden md:flex items-center gap-2 pb-1">
          <button
            onClick={() => handleScroll("left")}
            type="button"
            aria-label="Scroll Kiri"
            className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-neutral-800 text-dark dark:text-light hover:bg-primary hover:text-light dark:hover:bg-primary dark:hover:text-light flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            type="button"
            aria-label="Scroll Kanan"
            className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-neutral-800 text-dark dark:text-light hover:bg-primary hover:text-light dark:hover:bg-primary dark:hover:text-light flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {VISUAL_CATEGORIES.map((cat) => (
          <CategoryVisualCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
