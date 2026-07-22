import AdBanner from "../../../../components/ui/Ads/AdBanner";
import RelatedArticlesWidget from "./RelatedArticlesWidget";
import MostReadWidget from "../../../../components/ui/MostReadWidget";
import SocialMediaWidget from "../../../../components/ui/SocialMediaWidget";
import { MOST_READ_WEEKLY } from "../../../../assets/dataDummy/latestNewsSection";

interface DetailSidebarContainerProps {
  isLoggedIn?: boolean;
}

export default function DetailSidebarContainer({
  isLoggedIn = false,
}: DetailSidebarContainerProps) {
  return (
    <aside className="flex flex-col gap-6">
      {/* 1. Banner Iklan Vertikal/Kotak Large */}
      <AdBanner size="large" />

      {/* 2. 3 Artikel Related (Vertikal di Desktop, Horizontal/Grid di Mobile) */}
      <RelatedArticlesWidget />

      {/* 3. Artikel Paling Sering Dibaca */}
      <MostReadWidget articles={MOST_READ_WEEKLY} />

      {/* 4. Widget List Media Sosial */}
      <SocialMediaWidget />
    </aside>
  );
}
