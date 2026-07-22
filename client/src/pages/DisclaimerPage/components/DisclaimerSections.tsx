import type { DisclaimerSectionItem } from "../../../assets/dataContent/disclaimerData";

interface DisclaimerSectionsProps {
  sections: DisclaimerSectionItem[];
}

export default function DisclaimerSections({
  sections,
}: DisclaimerSectionsProps) {
  return (
    <div className="flex flex-col gap-8 text-start max-w-4xl mx-auto">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="flex flex-col gap-3 p-6 sm:p-8 bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl shadow-sm"
        >
          <h2 className="text-lg sm:text-xl font-display font-bold text-dark dark:text-light">
            {sec.title}
          </h2>

          <ul className="flex flex-col gap-2.5 pt-2 pl-2">
            {sec.content.map((text, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm font-body text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
