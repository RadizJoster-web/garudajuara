import { useState } from "react";
import { FAQ_DATA } from "../../assets/dataContent/faqData";
import HelpHero from "./components/HelpHero";
import HelpCategoryTabs from "./components/HelpCategoryTabs";
import HelpAccordion from "./components/HelpAccordion";
import HelpContactCTA from "./components/HelpContactCTA";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");

  const filteredItems = FAQ_DATA.items.filter((item) => {
    const matchesCategory =
      activeCategory === "semua" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full py-10 sm:py-16 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <HelpHero
          badge={FAQ_DATA.badge}
          title={FAQ_DATA.title}
          subtitle={FAQ_DATA.subtitle}
          description={FAQ_DATA.description}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder={FAQ_DATA.searchPlaceholder}
        />

        <div className="space-y-8">
          <HelpCategoryTabs
            categories={FAQ_DATA.categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <HelpAccordion items={filteredItems} />
        </div>

        <HelpContactCTA
          heading={FAQ_DATA.supportHeading}
          description={FAQ_DATA.supportDescription}
          email={FAQ_DATA.supportEmail}
        />
      </div>
    </div>
  );
}
