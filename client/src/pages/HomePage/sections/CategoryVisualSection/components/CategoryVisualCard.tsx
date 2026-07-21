import { Link } from "react-router-dom";
import type { VisualCategory } from "../../../../../assets/dataDummy/categorySection";

interface CategoryVisualCardProps {
  category: VisualCategory;
}

export default function CategoryVisualCard({
  category,
}: CategoryVisualCardProps) {
  return (
    <Link
      to={`/kategori/${category.slug}`}
      className="group relative flex-shrink-0 w-44 sm:w-52 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 select-none bg-neutral-900 block"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
      />

      {/* Dark Gradient Overlay (Menjamin Keterbacaan Teks) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content Text (Bottom Position) */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 flex flex-col justify-end z-10">
        <h3 className="text-sm sm:text-base font-display font-bold text-light group-hover:text-red-200 transition-colors leading-tight">
          {category.name}
        </h3>
        <span className="text-[10px] font-mono text-gray-300 mt-0.5">
          {category.totalNews} berita
        </span>
      </div>
    </Link>
  );
}
