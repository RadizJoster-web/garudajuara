import MostReadWidget from "./MostReadWidget";
import FifaRankingWidget from "./FifaRankingWidget";
import Liga1StandingWidget from "./Liga1StandingWidget";
import SidebarAdWidget from "../../../../../../components/ui/Ads/SidebarAdWidget";
import SocialMediaWidget from "./SocialMediaWidget";
import {
  MOST_READ_WEEKLY,
  FIFA_RANKINGS_DATA,
  LIGA1_STANDINGS_DATA,
} from "../../../../../../assets/dataDummy/latestNewsSection";

export default function SidebarContainer() {
  return (
    <aside className="flex flex-col gap-6">
      {/* 1. Most Read Minggu Ini */}
      <MostReadWidget articles={MOST_READ_WEEKLY} />

      {/* 2. FIFA Ranking Timnas */}
      <FifaRankingWidget rankings={FIFA_RANKINGS_DATA} />

      {/* 3. Sponsored Ad Sidebar */}
      <SidebarAdWidget />

      {/* 4 . Klasemen Liga 1 */}
      <Liga1StandingWidget standings={LIGA1_STANDINGS_DATA} />

      {/* 5. List Sosial Media */}
      <SocialMediaWidget />
    </aside>
  );
}
