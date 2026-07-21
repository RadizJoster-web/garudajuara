import LatestNewsGrid from "./components/LatestNewsGrid";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import InviteBanner from "../../../../components/ui/InviteBanner";
import AdBanner from "../../../../components/ui/Ads/AdBanner";

export default function LatestNewsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Sisi Kiri: Feed Berita Terbaru (8 Kolom / 2/3 Width) */}
        <div className="lg:col-span-8 space-y-6">
          <LatestNewsGrid />

          <InviteBanner
            title={"Gabung Komunitas Fans Garuda!"}
            description={
              "Diskusi dan berikan pendapatmu di komentar artikel bersama ratusan suporter lainya!"
            }
            onButtonClick={() => alert("Redirect ke Login")}
          />

          <AdBanner size="large" />
        </div>

        {/* Sisi Kanan: Multi-Widget Sidebar (4 Kolom / 1/3 Width) */}
        <div className="lg:col-span-4 sticky top-20">
          <SidebarContainer />
        </div>
      </div>
    </section>
  );
}
