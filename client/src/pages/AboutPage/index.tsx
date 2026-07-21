import { ABOUT_DATA } from "../../assets/dataContent/aboutData";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutVision from "./components/AboutVision";
import AboutValues from "./components/AboutValues";

export default function AboutPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        <AboutHero
          badge={ABOUT_DATA.badge}
          title={ABOUT_DATA.title}
          description={ABOUT_DATA.description}
        />
        <AboutStats items={ABOUT_DATA.stats} />
        <AboutVision data={ABOUT_DATA.vision} />
        <AboutValues
          tagline={ABOUT_DATA.valuesTagline}
          heading={ABOUT_DATA.valuesHeading}
          items={ABOUT_DATA.values}
        />
      </div>
    </div>
  );
}
