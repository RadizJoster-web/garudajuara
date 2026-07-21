import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Deteksi scroll posisi halaman
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handler untuk scroll kembali ke paling atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Kembali ke atas"
      className="fixed z-50 bottom-5 right-5 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark border border-neutral-700/50 dark:border-neutral-300/50 shadow-xl shadow-black/20 dark:shadow-white/10 hover:bg-primary dark:hover:bg-primary hover:text-light dark:hover:text-light hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer group"
    >
      <FaArrowUp className="text-sm sm:text-base group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
