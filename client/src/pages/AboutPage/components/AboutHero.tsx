import Badge from "../../../components/ui/Badge";

interface AboutHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function AboutHero({
  badge,
  title,
  description,
}: AboutHeroProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
      <Badge variant="primary">{badge}</Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-dark dark:text-light tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-sm sm:text-base font-body text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
