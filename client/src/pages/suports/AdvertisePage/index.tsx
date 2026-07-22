import { ADVERTISE_DATA } from "../../../assets/dataContent/advertiseData";
import AdvertiseHero from "./components/AdvertiseHero";
import AdvertiseStats from "./components/AdvertiseStats";
import AdvertiseDemographics from "./components/AdvertiseDemographics";
import AdvertisePlacementPreview from "./components/AdvertisePlacementPreview";
import AdvertisePackages from "./components/AdvertisePackages";
import AdvertiseContactForm from "./components/AdvertiseContactForm";

export default function AdvertisePage() {
  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <AdvertiseHero
          badge={ADVERTISE_DATA.badge}
          title={ADVERTISE_DATA.title}
          subtitle={ADVERTISE_DATA.subtitle}
          description={ADVERTISE_DATA.description}
          contactEmail={ADVERTISE_DATA.contactEmail}
        />

        <AdvertiseStats metrics={ADVERTISE_DATA.metrics} />

        <AdvertiseDemographics
          tagline={ADVERTISE_DATA.demographicsTagline}
          heading={ADVERTISE_DATA.demographicsHeading}
          description={ADVERTISE_DATA.demographicsDescription}
          ageBreakdown={ADVERTISE_DATA.ageBreakdown}
          genderBreakdown={ADVERTISE_DATA.genderBreakdown}
          sportsInterests={ADVERTISE_DATA.sportsInterests}
        />

        <AdvertisePlacementPreview
          tagline={ADVERTISE_DATA.placementTagline}
          heading={ADVERTISE_DATA.placementHeading}
          description={ADVERTISE_DATA.placementDescription}
          placements={ADVERTISE_DATA.placements}
        />

        <AdvertisePackages
          tagline={ADVERTISE_DATA.packagesTagline}
          heading={ADVERTISE_DATA.packagesHeading}
          packages={ADVERTISE_DATA.packages}
        />

        <AdvertiseContactForm
          heading={ADVERTISE_DATA.contactHeading}
          description={ADVERTISE_DATA.contactDescription}
          contactEmail={ADVERTISE_DATA.contactEmail}
        />
      </div>
    </div>
  );
}
