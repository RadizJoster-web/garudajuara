// Sections
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";

// Google Baner Adsanse
import AdBanner from "../../components/ui/AdBanner";

export default function HomePage() {
  return (
    <div className="bg-light dark:bg-dark transition-colors duration-200">
      <HeroSection />
      <AdBanner />
      <FeaturedSection />
    </div>
  );
}
