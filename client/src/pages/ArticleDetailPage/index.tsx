import ArticleHeader from "./sections/ArticleHeader";
import ArticleContent from "./sections/ArticleContent";
import ArticleTags from "./sections/ArticleTags";
import AuthorFullProfileCard from "./sections/AuthorFullProfileCard";
import CommentSection from "./sections/CommentSection";
import DetailSidebarContainer from "./sections/sidebar/DetailSidebarContainer";

import { DUMMY_ARTICLE_DETAIL } from "../../assets/dataDummy/articleDetail";

export default function ArticleDetailPage() {
  const isLoggedIn = false; // State Login Status

  return (
    <div className="w-full pb-16 pt-6 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Layout Grid 12 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Kolom Kiri: Main Article Area (8 Kolom) */}
          <article className="lg:col-span-8 flex flex-col gap-6">
            <ArticleHeader data={DUMMY_ARTICLE_DETAIL} />
            <ArticleContent data={DUMMY_ARTICLE_DETAIL} />
            <ArticleTags tags={DUMMY_ARTICLE_DETAIL.tags} />
            <AuthorFullProfileCard author={DUMMY_ARTICLE_DETAIL.author} />
            <CommentSection isLoggedIn={isLoggedIn} />
          </article>

          {/* Kolom Kanan: Sidebar Aside (4 Kolom) */}
          <div className="lg:col-span-4 sticky top-20">
            <DetailSidebarContainer isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
}
