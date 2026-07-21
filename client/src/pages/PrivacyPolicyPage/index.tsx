import { PRIVACY_POLICY_DATA } from "../../assets/dataContent/privacyPolicyData";
import PrivacyHero from "./components/PrivacyHero";
import PrivacySections from "./components/PrivacySections";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12">
        <PrivacyHero
          badge={PRIVACY_POLICY_DATA.badge}
          title={PRIVACY_POLICY_DATA.title}
          description={PRIVACY_POLICY_DATA.description}
          lastUpdated={PRIVACY_POLICY_DATA.lastUpdated}
        />
        <PrivacySections sections={PRIVACY_POLICY_DATA.sections} />
      </div>
    </div>
  );
}
