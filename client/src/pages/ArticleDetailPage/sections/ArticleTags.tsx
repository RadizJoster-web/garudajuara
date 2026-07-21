import { Link } from "react-router-dom";
import { FiTag } from "react-icons/fi";

interface Tag {
  name: string;
  slug: string;
}

interface ArticleTagsProps {
  tags: Tag[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-6 pb-4 border-t border-gray-100 dark:border-neutral-800">
      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 mr-1 select-none">
        <FiTag className="text-primary text-sm" />
        <span>TAGS:</span>
      </div>
      {tags.map((tag) => (
        <Link
          key={tag.slug}
          to={`/tag/${tag.slug}`}
          className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-neutral-800/80 hover:bg-primary dark:hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white text-xs font-display font-medium transition-all duration-200"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
}
