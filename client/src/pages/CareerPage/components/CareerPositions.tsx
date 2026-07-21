import { FiMail, FiBriefcase, FiMapPin } from "react-icons/fi";
import type { PositionItem } from "../../../assets/dataContent/careerData";

interface CareerPositionsProps {
  heading: string;
  description: string;
  positions: PositionItem[];
  careerEmail: string;
}

export default function CareerPositions({
  heading,
  description,
  positions,
  careerEmail,
}: CareerPositionsProps) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <div className="flex flex-col gap-1 text-start">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-dark dark:text-light">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {positions.map((pos) => (
          <div
            key={pos.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-gray-50 dark:bg-neutral-800/40 border border-gray-200/80 dark:border-neutral-800 rounded-2xl text-start"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 bg-primary/10 rounded-md">
                  {pos.department}
                </span>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                  <FiBriefcase className="text-xs" /> {pos.type}
                </span>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                  <FiMapPin className="text-xs" /> {pos.location}
                </span>
              </div>

              <h3 className="text-base font-display font-bold text-dark dark:text-light">
                {pos.title}
              </h3>
              <p className="text-xs font-body text-gray-500 dark:text-gray-400">
                {pos.description}
              </p>
            </div>

            <a
              href={`mailto:${careerEmail}?subject=Lamaran: ${pos.title}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark dark:bg-light text-light dark:text-dark hover:bg-primary dark:hover:bg-primary hover:text-light dark:hover:text-light font-display font-bold text-xs transition-colors self-start sm:self-center flex-shrink-0"
            >
              <FiMail className="text-sm" />
              <span>Kirim Portofolio</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
