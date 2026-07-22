import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";

interface AuthCardLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCardLayout({
  title,
  subtitle,
  children,
}: AuthCardLayoutProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4 sm:px-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 sm:p-8 bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 rounded-2xl shadow-lg">
        {/* Header Logo / Badge */}
        <div className="flex flex-col items-center text-center gap-2">
          <Link to="/" className="inline-block mb-1">
            <Badge variant="primary">GARUDA JUARA</Badge>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-display font-black text-dark dark:text-light tracking-tight">
            {title}
          </h1>
          <p className="text-xs font-body text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Content Children */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
