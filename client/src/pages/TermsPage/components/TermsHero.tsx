import Badge from "../../../components/ui/Badge";

interface TermsHeroProps {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
}

export default function TermsHero({
  badge,
  title,
  description,
  lastUpdated,
}: TermsHeroProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto border-b border-gray-200/80 dark:border-neutral-800 pb-8">
      <Badge variant="primary">{badge}</Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-dark dark:text-light tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-sm sm:text-base font-body text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      <span className="text-xs font-mono text-gray-400 pt-1">
        • {lastUpdated} •
      </span>
    </div>
  );
}
    