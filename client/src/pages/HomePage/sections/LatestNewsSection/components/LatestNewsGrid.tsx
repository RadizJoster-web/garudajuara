import ArticleCard from "../../../../../components/ui/ArticleCard";
import SectionHeader from "../../../../../components/ui/SectionHeader";
import { LATEST_NEWS_DATA } from "../../../../../assets/dataDummy/latestNewsSection";

export default function LatestNewsGrid() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <SectionHeader subTitle="UPDATE" title="Berita Terbaru" />

      {/* Grid 2 Kolom untuk Artikel Terbaru */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {LATEST_NEWS_DATA.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            slug={article.slug}
            category={article.category}
            image={article.image}
            author={article.author}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}
