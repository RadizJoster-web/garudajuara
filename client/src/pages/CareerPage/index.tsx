import { CAREER_DATA } from "../../assets/dataContent/careerData";
import CareerHero from "./components/CareerHero";
import CareerBenefits from "./components/CareerBenefits";
import CareerPositions from "./components/CareerPositions";

export default function CareerPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        <CareerHero
          badge={CAREER_DATA.badge}
          title={CAREER_DATA.title}
          description={CAREER_DATA.description}
        />
        <CareerBenefits
          tagline={CAREER_DATA.benefitsTagline}
          heading={CAREER_DATA.benefitsHeading}
          benefits={CAREER_DATA.benefits}
        />
        <CareerPositions
          heading={CAREER_DATA.positionsHeading}
          description={CAREER_DATA.positionsDescription}
          positions={CAREER_DATA.positions}
          careerEmail={CAREER_DATA.careerEmail}
        />
      </div>
    </div>
  );
}
