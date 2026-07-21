import { Link } from "react-router-dom";
import type { ArticleItem } from "../../../../../../assets/dataDummy/latestNewsSection";

interface MostReadWidgetProps {
  articles: ArticleItem[];
}

export default function MostReadWidget({ articles }: MostReadWidgetProps) {
  return (
    <div className="bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <span className="w-3 h-0.5 bg-primary rounded-full" />
        <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase">
          MOST READ MINGGU INI
        </h3>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-neutral-800/60">
        {articles.map((item, index) => (
          <Link
            key={item.id}
            to={`/berita/${item.slug}`}
            className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0 select-none"
          >
            <span className="font-display font-black text-base text-primary font-mono w-5">
              0{index + 1}
            </span>
            <p className="text-xs sm:text-sm font-display font-bold text-dark dark:text-light leading-snug group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
