import { FiMail } from "react-icons/fi";
import type { TeamMember } from "../../../assets/dataContent/editorialData";

interface EditorialBoardProps {
  tagline: string;
  heading: string;
  members: TeamMember[];
}

export default function EditorialBoard({
  tagline,
  heading,
  members,
}: EditorialBoardProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="group rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white font-semibold uppercase">
                  {member.category}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-dark dark:text-light group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-display text-xs font-semibold text-primary">
                    {member.role}
                  </p>
                </div>
                <p className="font-body text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
                <div className="pt-2">
                  <span className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Fokus: {member.specialty}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-primary transition-colors"
              >
                <FiMail className="w-3.5 h-3.5" />
                <span>{member.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
