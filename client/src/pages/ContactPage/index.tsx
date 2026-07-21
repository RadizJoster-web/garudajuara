import { CONTACT_DATA } from "../../assets/dataContent/contactData";
import ContactHero from "./components/ContactHero";
import ContactInfoCards from "./components/ContactInfoCards";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        <ContactHero
          badge={CONTACT_DATA.badge}
          title={CONTACT_DATA.title}
          description={CONTACT_DATA.description}
        />
        <ContactInfoCards channels={CONTACT_DATA.channels} />
        <ContactForm
          heading={CONTACT_DATA.formHeading}
          description={CONTACT_DATA.formDescription}
        />
      </div>
    </div>
  );
}
