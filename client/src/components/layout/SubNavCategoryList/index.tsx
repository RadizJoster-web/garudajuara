// src/components/layout/SubNavCategoryList/index.tsx
import CategoryItem from "./components/CategoryItem";

export interface Category {
  id: number;
  name: string;
  slug: string;
}

// Data Kategori (Sesuai dengan tabel categories di Supabase)
const CATEGORIES: Category[] = [
  { id: 0, name: "Semua Berita", slug: "" },
  { id: 1, name: "Sepak Bola", slug: "sepak-bola" },
  { id: 2, name: "Bulutangkis", slug: "bulutangkis" },
  { id: 3, name: "Basket", slug: "basket" },
  { id: 4, name: "E-Sports", slug: "e-sports" },
  { id: 5, name: "Balap", slug: "balap" },
  { id: 6, name: "Voli", slug: "voli" },
  { id: 7, name: "Ragam Olahraga", slug: "ragam-olahraga" },
];

export default function SubNavCategoryList() {
  return (
    // Di src/components/layout/SubNavCategoryList/index.tsx
    <nav className="w-full bg-light dark:bg-dark border-b border-gray-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Scroll Area (Hide Scrollbar Utilities Included) */}
        <div className="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar scroll-smooth">
          {CATEGORIES.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
