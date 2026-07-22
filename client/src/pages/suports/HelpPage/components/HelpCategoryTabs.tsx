import type { FAQCategoryOption } from "../../../../assets/dataContent/faqData";

interface HelpCategoryTabsProps {
  categories: FAQCategoryOption[];
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export default function HelpCategoryTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: HelpCategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 pb-2 border-b border-slate-200/80 dark:border-slate-800">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
