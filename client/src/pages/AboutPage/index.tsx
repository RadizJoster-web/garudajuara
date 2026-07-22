import   { ABOUT_DATA } from "../../assets/dataContent/aboutData";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutVision from "./components/AboutVision";
import AboutValues from "./components/AboutValues";
import AboutMilestones from "./components/AboutMilestones";

export default function AboutPage() {
  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <AboutHero
          badge={ABOUT_DATA.badge}
          title={ABOUT_DATA.title}
          subtitle={ABOUT_DATA.subtitle}
          description={ABOUT_DATA.description}
        />
        <AboutStats items={ABOUT_DATA.stats} />
        <AboutVision data={ABOUT_DATA.vision} />
        <AboutValues
          tagline={ABOUT_DATA.valuesTagline}
          heading={ABOUT_DATA.valuesHeading}
          description={ABOUT_DATA.valuesDescription}
          items={ABOUT_DATA.values}
        />
        <AboutMilestones
          tagline={ABOUT_DATA.milestonesTagline}
          heading={ABOUT_DATA.milestonesHeading}
          items={ABOUT_DATA.milestones}
        />
      </div>
    </div>
  );
}
