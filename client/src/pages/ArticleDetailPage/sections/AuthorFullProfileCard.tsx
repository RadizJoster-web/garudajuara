import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import type { AuthorDetail } from "../../../assets/dataDummy/articleDetail";

interface AuthorFullProfileCardProps {
  author: AuthorDetail;
}

export default function AuthorFullProfileCard({
  author,
}: AuthorFullProfileCardProps) {
  return (
    <div className="w-full bg-gray-50 dark:bg-neutral-800/40 border border-gray-200/80 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 my-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
      {/* Avatar Author */}
      <img
        src={author.avatar}
        alt={author.name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-primary/20 flex-shrink-0"
      />

      {/* Info & Bio */}
      <div className="flex flex-col justify-between flex-1 gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
            DITULIS OLEH
          </span>
          <h3 className="text-base sm:text-lg font-display font-bold text-dark dark:text-light">
            {author.name}
          </h3>
          <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
            {author.bio}
          </p>
        </div>

        {/* Link Redirect ke Seluruh Artikel Author */}
        <Link
          to={`/author/${author.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-primary hover:underline self-start pt-1 group"
        >
          <span>Lihat Semua Artikel {author.name}</span>
          <FiArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
