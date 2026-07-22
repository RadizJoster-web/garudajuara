import type { AboutMilestoneItem } from "../../../../assets/dataContent/aboutData";

interface AboutMilestonesProps {
  tagline: string;
  heading: string;
  items: AboutMilestoneItem[];
}

export default function AboutMilestones({
  tagline,
  heading,
  items,
}: AboutMilestonesProps) {
  return (
    <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800">
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {items.map((milestone, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3"
          >
            <div className="font-mono text-2xl font-extrabold text-primary">
              {milestone.year}
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              {milestone.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
