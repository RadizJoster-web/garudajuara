import { useParams } from "react-router-dom";
import AdBanner from "../../components/ui/Ads/AdBanner";
import CategoryHeadline from "./components/CategoryHeadline";
import CategoryLatestList from "./components/CategoryLatestList";
import CategorySidebarAside from "./components/CategorySidebarAside";

import { DUMMY_CATEGORY_ARTICLES } from "../../assets/dataDummy/categoryData";
import type { CategoryArticleItem } from "../../assets/dataDummy/categoryData";

export default function CategoryPage() {
  const { slug } = useParams<{ slug?: string }>();

  const headlineArticle: CategoryArticleItem = DUMMY_CATEGORY_ARTICLES[0];
  const listArticles: CategoryArticleItem[] = DUMMY_CATEGORY_ARTICLES.slice(1);

  return (
    <div className="w-full pb-16 pt-6 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* 1. TOP AD BANNER (Kotak Kecil / Compact) */}
        <div className="w-full flex justify-center py-2">
          <AdBanner size="fluid" />
        </div>

        {/* Layout Grid Main Article Area (8 Kolom) + Sidebar Aside (4 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Content Area (8 Kolom) */}
          <main className="lg:col-span-8 flex flex-col gap-8">
            {/* 2. Headline Berita Kategori dengan Header Direktori */}
            <CategoryHeadline article={headlineArticle} slug={slug} />

            {/* 3. Berita Terbaru Kategori (5 Artikel per halaman + Pagination) */}
            <CategoryLatestList articles={listArticles} />
          </main>

          {/* Sidebar Aside (4 Kolom) */}
          <div className="lg:col-span-4 sticky top-20">
            <CategorySidebarAside />
          </div>
        </div>
      </div>
    </div>
  );
}
