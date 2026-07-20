import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-block px-2.5 py-1 text-[10px] font-display font-extrabold tracking-wider uppercase rounded-md";
  const variants = {
    primary: "bg-primary text-light",
    secondary: "bg-gray-200 dark:bg-neutral-800 text-dark dark:text-light",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
