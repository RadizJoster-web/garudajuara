import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

interface InlineRelatedLinkProps {
  title: string;
  slug: string;
}

export default function InlineRelatedLink({
  title,
  slug,
}: InlineRelatedLinkProps) {
  return (
    <Link
      to={`/berita/${slug}`}
      className="group my-5 py-2 pl-4 border-l-2 border-primary flex items-center justify-between gap-4 transition-all duration-200 select-none block"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-xs font-mono font-bold text-primary flex-shrink-0">
          BACA JUGA:
        </span>
        <h4 className="text-xs sm:text-sm font-display font-bold text-dark dark:text-light group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
      </div>
      <FiArrowRight className="text-gray-400 group-hover:text-primary text-sm transform group-hover:translate-x-1 transition-all flex-shrink-0" />
    </Link>
  );
}
