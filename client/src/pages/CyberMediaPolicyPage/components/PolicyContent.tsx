import type { PolicyArticle } from "../../../assets/dataContent/cyberMediaPolicyData";

interface PolicyContentProps {
  articles: PolicyArticle[];
}

export default function PolicyContent({ articles }: PolicyContentProps) {
  return (
    <div className="flex flex-col gap-8 text-start max-w-4xl mx-auto">
      {articles.map((article) => (
        <div
          key={article.number}
          className="flex flex-col gap-3 p-6 sm:p-8 bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-display font-black text-sm flex items-center justify-center flex-shrink-0">
              {article.number}
            </span>
            <h2 className="text-lg sm:text-xl font-display font-bold text-dark dark:text-light">
              {article.title}
            </h2>
          </div>

          <ul className="flex flex-col gap-2.5 pt-2 pl-2">
            {article.points.map((pt, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm font-body text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
