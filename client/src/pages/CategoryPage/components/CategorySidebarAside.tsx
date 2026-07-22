import AdBanner from "../../../components/ui/Ads/AdBanner";
import MostReadWidget from "../../../components/ui/MostReadWidget";
import SocialMediaWidget from "../../../components/ui/SocialMediaWidget";
import { MOST_READ_WEEKLY } from "../../../assets/dataDummy/latestNewsSection";

export default function CategorySidebarAside() {
  // Mengambil 4 data teratas untuk Most Read Weekly
  const mostReadFourArticles = MOST_READ_WEEKLY.slice(0, 4);

  return (
    <aside className="flex flex-col gap-6">
      {/* 1. Ad Banner Vertikal / Large Top */}
      <AdBanner size="large" />

      {/* 2. Berita Paling Sering Dibaca (4 Data) */}
      <MostReadWidget articles={mostReadFourArticles} />

      {/* 3. Reusable Social Media Widget */}
      <SocialMediaWidget />

      {/* 4. Ad Banner Bottom */}
      <AdBanner />
    </aside>
  );
}
