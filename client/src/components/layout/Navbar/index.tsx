import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import AuthButtons from "./components/AuthButtons";
import ProfileDropdown from "./components/ProfileDropdown";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLoggedIn] = useState<boolean>(true);

  return (
    // Di src/components/layout/Navbar/index.tsx
    <header className="sticky top-0 z-40 w-full bg-light/95 dark:bg-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* LEFT: Brand Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* CENTER: Desktop Search Bar Only */}
        <div className="hidden md:flex flex-1 justify-center max-w-xs">
          <SearchBar />
        </div>

        {/* RIGHT ACTION GROUP (Desktop & Mobile Thumb Zone) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Mobile Search Trigger dipindah ke dalam Right Group */}
          <div className="md:hidden">
            <SearchBar />
          </div>

          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />

          <div className="h-5 w-px bg-gray-200 dark:bg-neutral-800 hidden sm:block mx-1" />

          {isLoggedIn ? <ProfileDropdown /> : <AuthButtons />}
        </div>
      </div>
    </header>
  );
}
