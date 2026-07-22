import { FiCheckCircle } from "react-icons/fi";

export interface LegalContentSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
}

interface LegalContentProps {
  sections: LegalContentSection[];
}

export default function LegalContent({ sections }: LegalContentProps) {
  return (
    <div className="space-y-10">
      {sections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          className="scroll-mt-28 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4 hover:border-primary/40 transition-colors"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">
              {sec.number}
            </span>
            <h2 className="font-display font-bold text-xl text-dark dark:text-light">
              {sec.title}
            </h2>
          </div>

          <p className="font-body text-xs font-medium text-slate-500 italic border-l-2 border-primary/40 pl-3 py-0.5">
            {sec.summary}
          </p>

          <ul className="space-y-3 pt-2">
            {sec.content.map((paragraph, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 font-body text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <FiCheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
