import { useSearchParams } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import SearchResultsList from "./components/SearchResultsList";
import SearchSidebarAside from "./components/SearchSidebarAside";
import { DUMMY_SEARCH_RESULTS } from "../../assets/dataDummy/searchData";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Filter berita berdasarkan kata kunci pencarian (case-insensitive)
  const filteredArticles = DUMMY_SEARCH_RESULTS.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="w-full pb-16 pt-6 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* Header Search & Title Query */}
        <SearchHeader query={query} totalResults={filteredArticles.length} />

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Content (8 Kolom) */}
          <main className="lg:col-span-8 flex flex-col gap-6">
            <SearchResultsList articles={filteredArticles} />
          </main>

          {/* Sidebar Aside (4 Kolom) */}
          <div className="lg:col-span-4 sticky top-20">
            <SearchSidebarAside />
          </div>
        </div>
      </div>
    </div>
  );
}
