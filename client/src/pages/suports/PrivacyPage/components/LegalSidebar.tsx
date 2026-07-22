import { FiList } from "react-icons/fi";

export interface LegalTocItem {
  id: string;
  number: string;
  title: string;
}

interface LegalSidebarProps {
  sections: LegalTocItem[];
  activeId: string;
  onSelectSection: (id: string) => void;
}

export default function LegalSidebar({
  sections,
  activeId,
  onSelectSection,
}: LegalSidebarProps) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24">
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-slate-800">
          <FiList className="w-4 h-4" />
          <span>Daftar Isi Dokumen</span>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection(sec.id);
                  const el = document.getElementById(sec.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`flex items-start gap-3 p-3 rounded-xl text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <span className="font-mono text-[10px] opacity-80 shrink-0 mt-0.5">
                  {sec.number}
                </span>
                <span className="font-display leading-tight">{sec.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
