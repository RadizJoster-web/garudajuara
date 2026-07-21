// src/components/layout/Navbar/components/ProfileDropdown.tsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiBookmark, FiSettings, FiLogOut } from "react-icons/fi";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 p-0.5 rounded-full border-2 border-primary hover:border-primary-dark transition-colors duration-200 cursor-pointer"
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
          alt="User Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>

      {/* Popup Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-light dark:bg-dark border border-gray-200 dark:border-neutral-800 rounded-xl shadow-xl py-2 z-50 font-body transition-all">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-neutral-800">
            <p className="text-sm font-semibold text-dark dark:text-light font-display">
              Radiz Dirganta
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              redaksi@garudajuara.id
            </p>
          </div>

          <div className="py-1">
            <Link
              to="#profile"
              className="flex items-center gap-2.5 px-4 py-2 text-sm text-dark dark:text-light hover:bg-red-tint dark:hover:bg-neutral-800 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FiUser className="text-base" /> Profil Saya
            </Link>
            <Link
              to="#saved"
              className="flex items-center gap-2.5 px-4 py-2 text-sm text-dark dark:text-light hover:bg-red-tint dark:hover:bg-neutral-800 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FiBookmark className="text-base" /> Berita Tersimpan
            </Link>
            <Link
              to="#settings"
              className="flex items-center gap-2.5 px-4 py-2 text-sm text-dark dark:text-light hover:bg-red-tint dark:hover:bg-neutral-800 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FiSettings className="text-base" /> Pengaturan
            </Link>
          </div>

          <div className="pt-1 border-t border-gray-100 dark:border-neutral-800">
            <button
              onClick={() => alert("Logout")}
              type="button"
              className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-primary hover:bg-red-tint dark:hover:bg-neutral-800 transition-colors text-left font-semibold cursor-pointer"
            >
              <FiLogOut className="text-base" /> Keluar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
