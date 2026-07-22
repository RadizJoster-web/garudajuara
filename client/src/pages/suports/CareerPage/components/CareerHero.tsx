import { FiBriefcase } from "react-icons/fi";

interface CareerHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function CareerHero({
  badge,
  title,
  subtitle,
  description,
}: CareerHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800">
      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-mono font-semibold uppercase tracking-wider">
          <FiBriefcase className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        <p className="font-display text-lg sm:text-xl font-medium text-primary">
          {subtitle}
        </p>
        <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
    </section>
  );
}
