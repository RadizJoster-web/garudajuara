import { FEATURED_NEWS } from "../../../../assets/dataDummy/featuredNews";
import ArticleCard from "../../../../components/ui/ArticleCard";
import SectionHeader from "./components/SectionHeader";

export default function FeaturedSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section Header */}
      <SectionHeader subTitle="FEATURED" title="Berita Pilihan" />

      {/* Grid List 4 Kolom Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {FEATURED_NEWS.map((article) => (
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
    </section>
  );
}
