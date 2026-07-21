import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs font-body text-gray-500 dark:text-gray-400 overflow-x-auto no-scrollbar"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          {index > 0 && (
            <FiChevronRight className="text-gray-400 text-xs flex-shrink-0" />
          )}
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-dark dark:text-light font-semibold truncate max-w-[200px] sm:max-w-xs">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
