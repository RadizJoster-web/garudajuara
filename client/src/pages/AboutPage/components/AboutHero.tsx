import { FiAward } from "react-icons/fi";

interface AboutHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function AboutHero({ badge, title, subtitle, description }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-red-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-red-950/20 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 lg:p-16">
      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-semibold uppercase tracking-wider">
          <FiAward className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-dark dark:text-light leading-tight">
          {title}
        </h1>
        <p className="font-display text-lg sm:text-xl font-medium text-primary">
          {subtitle}
        </p>
        <p className="font-body text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      {/* Decorative subtle background element */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    </section>
  );
}
