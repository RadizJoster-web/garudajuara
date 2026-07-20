import type { Article } from "../../../../../assets/dataDummy/heroNews";
import TrendingCard from "./TrendingCard";

interface TrendingSidebarProps {
  articles: Article[];
}

export default function TrendingSidebar({ articles }: TrendingSidebarProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-neutral-800">
        <span className="w-3 h-0.5 bg-primary rounded-full" />
        <h2 className="text-xs font-display font-black tracking-widest text-primary uppercase">
          TERKINI
        </h2>
      </div>

      {/* Articles List */}
      <div className="divide-y divide-gray-100 dark:divide-neutral-800/60">
        {articles.map((article) => (
          <TrendingCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
