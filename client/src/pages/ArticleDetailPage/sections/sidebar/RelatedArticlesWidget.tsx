import { Link } from "react-router-dom";
import Badge from "../../../../components/ui/Badge";
import type { ArticleItem } from "../../../../assets/dataDummy/latestNewsSection";

// Data Dummy 3 Related Articles
export const RELATED_ARTICLES_DATA: ArticleItem[] = [
  {
    id: 301,
    title:
      "Head to Head Indonesia vs Thailand: Dominasi Merah Putih di Dekade Terakhir",
    slug: "head-to-head-indonesia-vs-thailand",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    author: "Rizky Pratama",
    publishedAt: "2 jam lalu",
  },
  {
    id: 302,
    title:
      "Kondisi Fisik Pemain Timnas Membaik Jelang Laga Final Piala AFF 2026",
    slug: "kondisi-fisik-pemain-timnas-membaik-jelang-final",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80",
    author: "Fajar Nugroho",
    publishedAt: "4 jam lalu",
  },
  {
    id: 303,
    title: "Daftar Top Skor Sementara Piala AFF 2026: Striker Garuda Memimpin",
    slug: "daftar-top-skor-sementara-piala-aff-2026",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    author: "Wulan Sari",
    publishedAt: "6 jam lalu",
  },
];

export default function RelatedArticlesWidget() {
  return (
    <div className="bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <span className=" w-3 h-0.5 bg-primary rounded-full" />
        <h3 className="text-xs font-display font-black tracking-widest text-primary uppercase">
          ARTIKEL TERKAIT
        </h3>
      </div>

      {/* Grid Responsif: 
          - Mobile/Tablet (< lg): 1 Kolom (atau 3 kolom di md) 
          - Desktop (lg): 1 Kolom Vertikal di Sidebar 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
        {RELATED_ARTICLES_DATA.map((article) => (
          <Link
            key={article.id}
            to={`/berita/${article.slug}`}
            className="group flex flex-col gap-2.5 select-none"
          >
            {/* Image Thumbnail */}
            <div className="w-full h-32 sm:h-28 lg:h-36 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title & Metadata */}
            <div className="flex flex-col gap-1.5">
              <span>
                <Badge variant="primary">{article.category}</Badge>
              </span>
              <h4 className="text-xs sm:text-sm font-display font-bold text-dark dark:text-light group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {article.title}
              </h4>
              <span className="text-[10px] font-mono text-gray-400">
                {article.publishedAt}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
