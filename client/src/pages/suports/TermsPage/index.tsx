import { useState } from "react";
import { TERMS_DATA } from "../../../assets/dataContent/termsData";
import LegalHeader from "../PrivacyPage/components/LegalHeader";
import LegalSidebar from "../PrivacyPage/components/LegalSidebar";
import LegalContent from "../PrivacyPage/components/LegalContent";

export default function TermsPage() {
  const [activeId, setActiveId] = useState(TERMS_DATA.sections[0]?.id || "");

  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <LegalHeader
          badge={TERMS_DATA.badge}
          title={TERMS_DATA.title}
          subtitle={TERMS_DATA.subtitle}
          description={TERMS_DATA.description}
          lastUpdated={TERMS_DATA.lastUpdated}
          effectiveDate={TERMS_DATA.effectiveDate}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <LegalSidebar
              sections={TERMS_DATA.sections}
              activeId={activeId}
              onSelectSection={setActiveId}
            />
          </div>

          <div className="lg:col-span-8">
            <LegalContent sections={TERMS_DATA.sections} />
          </div>
        </div>
      </div>
    </div>
  );
}
