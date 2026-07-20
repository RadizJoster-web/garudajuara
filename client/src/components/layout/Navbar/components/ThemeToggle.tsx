// src/components/layout/Navbar/components/ThemeToggle.tsx
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({
  isDarkMode,
  onToggle,   
}: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="p-2 rounded-lg text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
    >
      {isDarkMode ? (
        <FiSun className="text-lg text-amber-400" />
      ) : (
        <FiMoon className="text-lg text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}
