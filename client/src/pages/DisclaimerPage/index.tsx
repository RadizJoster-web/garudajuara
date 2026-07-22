import { useState } from "react";
import { DISCLAIMER_DATA } from "../../assets/dataContent/disclaimerData";
import LegalHeader from "../PrivacyPage/components/LegalHeader";
import LegalSidebar from "../PrivacyPage/components/LegalSidebar";
import LegalContent from "../PrivacyPage/components/LegalContent";

export default function DisclaimerPage() {
  const [activeId, setActiveId] = useState(DISCLAIMER_DATA.sections[0]?.id || "");

  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <LegalHeader
          badge={DISCLAIMER_DATA.badge}
          title={DISCLAIMER_DATA.title}
          subtitle={DISCLAIMER_DATA.subtitle}
          description={DISCLAIMER_DATA.description}
          lastUpdated={DISCLAIMER_DATA.lastUpdated}
          effectiveDate={DISCLAIMER_DATA.effectiveDate}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <LegalSidebar
              sections={DISCLAIMER_DATA.sections}
              activeId={activeId}
              onSelectSection={setActiveId}
            />
          </div>

          <div className="lg:col-span-8">
            <LegalContent sections={DISCLAIMER_DATA.sections} />
          </div>
        </div>
      </div>
    </div>
  );
}