import { TERMS_DATA } from "../../assets/dataContent/termsData";
import TermsHero from "./components/TermsHero";
import TermsSections from "./components/TermsSections";

export default function TermsPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-12">
        <TermsHero
          badge={TERMS_DATA.badge}
          title={TERMS_DATA.title}
          description={TERMS_DATA.description}
          lastUpdated={TERMS_DATA.lastUpdated}
        />
        <TermsSections sections={TERMS_DATA.sections} />
      </div>
    </div>
  );
}
