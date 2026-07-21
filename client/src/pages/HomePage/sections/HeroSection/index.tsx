import {
  MAIN_HEADLINER,
  TRENDING_NEWS,
} from "../../../../assets/dataDummy/heroNews";
import MainHeadliner from "./components/MainHeadliner";
import TrendingSidebar from "./components/TrendingSidebar";

export default function HeroSection() {
  return (
    <section id="beranda" className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Headliner (8 Kolom) */}
          <div className="lg:col-span-8">
            <MainHeadliner article={MAIN_HEADLINER} />
          </div>

          {/* Trending Sidebar (4 Kolom) */}
          <div className="lg:col-span-4">
            <TrendingSidebar articles={TRENDING_NEWS} />
          </div>
        </div>
      </div>
    </section>
  );
}
