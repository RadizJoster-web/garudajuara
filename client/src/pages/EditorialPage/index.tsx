import { EDITORIAL_DATA } from "../../assets/dataContent/editorialData";
import EditorialHero from "./components/EditorialHero";
import EditorialEthics from "./components/EditorialEthics";
import EditorialBoard from "./components/EditorialBoard";
import EditorialWorkflow from "./components/EditorialWorkflow";
import EditorialCorrection from "./components/EditorialCorrection";

export default function EditorialPage() {
  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <EditorialHero
          badge={EDITORIAL_DATA.badge}
          title={EDITORIAL_DATA.title}
          subtitle={EDITORIAL_DATA.subtitle}
          description={EDITORIAL_DATA.description}
        />
        <EditorialEthics
          tagline={EDITORIAL_DATA.ethicsTagline}
          heading={EDITORIAL_DATA.ethicsHeading}
          items={EDITORIAL_DATA.ethicsPillars}
        />
        <EditorialBoard
          tagline={EDITORIAL_DATA.boardTagline}
          heading={EDITORIAL_DATA.boardHeading}
          members={EDITORIAL_DATA.members}
        />
        <EditorialWorkflow
          tagline={EDITORIAL_DATA.workflowTagline}
          heading={EDITORIAL_DATA.workflowHeading}
          steps={EDITORIAL_DATA.workflowSteps}
        />
        <EditorialCorrection
          tagline={EDITORIAL_DATA.correctionTagline}
          heading={EDITORIAL_DATA.correctionHeading}
          text={EDITORIAL_DATA.correctionText}
          contactEmail={EDITORIAL_DATA.contactEmail}
          contactLocation={EDITORIAL_DATA.contactLocation}
        />
      </div>
    </div>
  );
}
