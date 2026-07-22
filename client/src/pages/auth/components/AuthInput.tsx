import type { InputHTMLAttributes, ReactNode } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;   
}

export default function AuthInput({
  label,
  icon,
  error,
  className = "",
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1.5 text-start w-full">
      <label className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3.5 text-gray-400 text-base">
            {icon}
          </span>
        )}
        <input
          className={`w-full py-3 pr-4 rounded-xl bg-light dark:bg-dark border text-xs text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors ${
            icon ? "pl-10" : "pl-4"
          } ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 dark:border-neutral-700"
          } ${className}`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[11px] font-mono text-red-500">{error}</span>
      )}
    </div>
  );
}
