import AdBanner from "../../../components/ui/Ads/AdBanner";
import SocialMediaWidget from "../../../components/ui/SocialMediaWidget";

export default function SearchSidebarAside() {
  return (
    <aside className="flex flex-col gap-6">
      {/* 1. Ad Banner Top Large */}
      <AdBanner size="large" />

      {/* 2. Reusable Social Media Widget */}
      <SocialMediaWidget />

      {/* 3. Ad Banner Bottom Medium */}
      <div className="w-full flex justify-center pt-2">
        <AdBanner size="medium" />
      </div>
    </aside>
  );
}
