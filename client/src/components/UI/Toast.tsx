import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  isOpen,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 bg-dark dark:bg-light text-light dark:text-dark text-xs font-display font-bold rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
      <FiCheckCircle className="text-emerald-400 dark:text-emerald-600 text-sm" />
      <span>{message}</span>
    </div>
  );
}
    