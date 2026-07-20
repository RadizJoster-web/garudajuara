import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-lg cursor-pointer disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-light hover:bg-primary-dark shadow-sm",
    secondary:
      "bg-dark text-light hover:bg-opacity-90 dark:bg-light dark:text-dark",
    outline:
      "border border-primary text-primary hover:bg-red-tint dark:hover:bg-opacity-10",
    ghost: "text-dark hover:bg-gray-100 dark:text-light dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
