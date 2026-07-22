import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import type { FAQItem } from "../../../assets/dataContent/faqData";

interface HelpAccordionProps {
  items: FAQItem[];
}

export default function HelpAccordion({ items }: HelpAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    items.filter((i) => i.isPopular).map((i) => i.id),
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  if (items.length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-2">
        <p className="font-display font-bold text-dark dark:text-light">
          Tidak ada pertanyaan yang sesuai dengan pencarian Anda.
        </p>
        <p className="font-body text-xs text-slate-500">
          Coba gunakan kata kunci lain atau kirim pesan ke tim support kami.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                {item.isPopular && (
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold shrink-0">
                    POPULER
                  </span>
                )}
                <h3 className="font-display font-bold text-base sm:text-lg text-dark dark:text-light">
                  {item.question}
                </h3>
              </div>

              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                {isOpen ? (
                  <FiChevronUp className="w-4 h-4" />
                ) : (
                  <FiChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
                <p>{item.answer}</p>
                <div className="pt-2 font-mono text-[11px] text-slate-400">
                  Kategori: {item.category}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
