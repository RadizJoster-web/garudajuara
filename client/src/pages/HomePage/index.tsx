// Sections
import HeroSection from "./sections/HeroSection";
import PopularSection from "./sections/PopularSection";
import LatestNewsSection from "./sections/LatestNewsSection";
import CategoryVisualSection from "./sections/CategoryVisualSection";

// Google Baner Adsanse
import AdBanner from "../../components/ui/Ads/AdBanner";

export default function HomePage() {
  return (
    <div className="bg-light dark:bg-dark transition-colors duration-200">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-8">
        <AdBanner size="fluid" />
      </div>
      <PopularSection />
      <LatestNewsSection />
      <CategoryVisualSection />
      <div className="max-w-7xl min-h-50 mx-auto px-8">
        <AdBanner size="fluid" />
      </div>
    </div>
  );
}
