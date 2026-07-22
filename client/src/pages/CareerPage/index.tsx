import { useState } from "react";
import { CAREER_DATA } from "../../assets/dataContent/careerData";
import type { PositionItem } from "../../assets/dataContent/careerData";
import CareerHero from "./components/CareerHero";
import CareerPerks from "./components/CareerPerks";
import CareerFilter from "./components/CareerFilter";
import CareerJobList from "./components/CareerJobList";
import CareerApplyModal from "./components/CareerApplyModal";

export default function CareerPage() {
  const [activeDept, setActiveDept] = useState("Semua");
  const [selectedPosition, setSelectedPosition] = useState<PositionItem | null>(
    null,
  );

  const filteredPositions =
    activeDept === "Semua"
      ? CAREER_DATA.positions
      : CAREER_DATA.positions.filter((p) => p.department === activeDept);

  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <CareerHero
          badge={CAREER_DATA.badge}
          title={CAREER_DATA.title}
          subtitle={CAREER_DATA.subtitle}
          description={CAREER_DATA.description}
        />

        <CareerPerks
          tagline={CAREER_DATA.benefitsTagline}
          heading={CAREER_DATA.benefitsHeading}
          benefits={CAREER_DATA.benefits}
        />

        <section className="space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
              // {CAREER_DATA.positionsTagline}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light">
              {CAREER_DATA.positionsHeading}
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {CAREER_DATA.positionsDescription}
            </p>
          </div>

          <CareerFilter
            departments={CAREER_DATA.departments}
            activeDept={activeDept}
            onSelectDept={setActiveDept}
          />

          <CareerJobList
            positions={filteredPositions}
            onApply={(pos) => setSelectedPosition(pos)}
          />
        </section>

        {selectedPosition && (
          <CareerApplyModal
            position={selectedPosition}
            onClose={() => setSelectedPosition(null)}
            careerEmail={CAREER_DATA.careerEmail}
          />
        )}
      </div>
    </div>
  );
}
