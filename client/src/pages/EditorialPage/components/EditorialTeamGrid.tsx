import { FiMail } from "react-icons/fi";
import type { TeamMember } from "../../../assets/dataContent/editorialData";

interface EditorialTeamGridProps {
  members: TeamMember[];
}

export default function EditorialTeamGrid({ members }: EditorialTeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-light dark:bg-dark rounded-2xl border border-gray-200/80 dark:border-neutral-800 shadow-sm hover:border-primary/40 transition-colors"
        >
          <img
            src={member.avatar}
            alt={member.name}
            className="w-20 h-20 rounded-2xl object-cover ring-2 ring-primary/20 flex-shrink-0"
          />
          <div className="flex flex-col gap-1.5 text-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              {member.role}
            </span>
            <h3 className="text-lg font-display font-bold text-dark dark:text-light">
              {member.name}
            </h3>
            <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed">
              {member.bio}
            </p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-primary transition-colors pt-2"
              >
                <FiMail className="text-sm" />
                <span>{member.email}</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
