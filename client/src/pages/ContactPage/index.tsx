import { CONTACT_DATA } from "../../assets/dataContent/contactData";
import ContactHero from "./components/ContactHero";
import ContactInfoGrid from "./components/ContactInfoGrid";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export default function ContactPage() {
  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <ContactHero
          badge={CONTACT_DATA.badge}
          title={CONTACT_DATA.title}
          subtitle={CONTACT_DATA.subtitle}
          description={CONTACT_DATA.description}
        />

        <ContactInfoGrid channels={CONTACT_DATA.channels} />

        <ContactForm
          heading={CONTACT_DATA.formHeading}
          description={CONTACT_DATA.formDescription}
          categories={CONTACT_DATA.categories}
        />

        <ContactMap
          officeHours={CONTACT_DATA.officeHours}
          address={CONTACT_DATA.locationAddress}
          embedUrl={CONTACT_DATA.googleMapEmbedUrl}
        />
      </div>
    </div>
  );
}
