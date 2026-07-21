import { EDITORIAL_DATA } from "../../assets/dataContent/editorialData";
import EditorialHero from "./components/EditorialHero";
import EditorialTeamGrid from "./components/EditorialTeamGrid";
import EditorialPolicy from "./components/EditorialPolicy";

export default function EditorialPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        <EditorialHero
          badge={EDITORIAL_DATA.badge}
          title={EDITORIAL_DATA.title}
          description={EDITORIAL_DATA.description}
        />
        <EditorialTeamGrid members={EDITORIAL_DATA.members} />
        <EditorialPolicy
          tagline={EDITORIAL_DATA.policyTagline}
          heading={EDITORIAL_DATA.policyHeading}
          text={EDITORIAL_DATA.policyText}
          email={EDITORIAL_DATA.contactEmail}
          location={EDITORIAL_DATA.contactLocation}
        />
      </div>
    </div>
  );
}
