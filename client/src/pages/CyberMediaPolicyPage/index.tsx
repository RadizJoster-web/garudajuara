import { CYBER_MEDIA_POLICY_DATA } from "../../assets/dataContent/cyberMediaPolicyData";
import PolicyHero from "./components/PolicyHero";
import PolicyContent from "./components/PolicyContent";

export default function CyberMediaPolicyPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12">
        <PolicyHero
          badge={CYBER_MEDIA_POLICY_DATA.badge}
          title={CYBER_MEDIA_POLICY_DATA.title}
          description={CYBER_MEDIA_POLICY_DATA.description}
          lastUpdated={CYBER_MEDIA_POLICY_DATA.lastUpdated}
        />
        <PolicyContent articles={CYBER_MEDIA_POLICY_DATA.articles} />
      </div>
    </div>
  );
}
