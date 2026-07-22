import { useState } from "react";
import { PRIVACY_POLICY_DATA } from "../../../assets/dataContent/privacyData";
import LegalHeader from "./components/LegalHeader";
import LegalSidebar from "./components/LegalSidebar";
import LegalContent from "./components/LegalContent";

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState(
    PRIVACY_POLICY_DATA.sections[0]?.id || "",
  );

  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <LegalHeader
          badge={PRIVACY_POLICY_DATA.badge}
          title={PRIVACY_POLICY_DATA.title}
          subtitle={PRIVACY_POLICY_DATA.subtitle}
          description={PRIVACY_POLICY_DATA.description}
          lastUpdated={PRIVACY_POLICY_DATA.lastUpdated}
          effectiveDate={PRIVACY_POLICY_DATA.effectiveDate}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <LegalSidebar
              sections={PRIVACY_POLICY_DATA.sections}
              activeId={activeId}
              onSelectSection={setActiveId}
            />
          </div>

          <div className="lg:col-span-8">
            <LegalContent sections={PRIVACY_POLICY_DATA.sections} />
          </div>
        </div>
      </div>
    </div>
  );
}
