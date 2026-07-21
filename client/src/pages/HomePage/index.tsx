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
      <AdBanner />
      <PopularSection />
      <LatestNewsSection />
      <CategoryVisualSection />
      <AdBanner />
    </div>
  );
}
