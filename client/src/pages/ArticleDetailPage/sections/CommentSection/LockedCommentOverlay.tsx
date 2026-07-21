import { FiLock } from "react-icons/fi";
import Button from "../../../../components/ui/Button";

interface LockedCommentOverlayProps {
  onLoginClick?: () => void;
}

export default function LockedCommentOverlay({
  onLoginClick,
}: LockedCommentOverlayProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200/80 dark:border-neutral-800 p-6 my-6 select-none">
      {/* 1. Background Content Dummy yang Buram (Blur Effect) */}
      <div className="filter blur-md opacity-30 pointer-events-none space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-400" />
          <div className="flex flex-col gap-1 w-full">
            <div className="h-3 w-28 bg-gray-400 rounded" />
            <div className="h-2 w-16 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="h-3 w-3/4 bg-gray-400 rounded" />
        <div className="h-3 w-1/2 bg-gray-300 rounded" />

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-400" />
            <div className="flex flex-col gap-1 w-full">
              <div className="h-3 w-32 bg-gray-400 rounded" />
              <div className="h-2 w-20 bg-gray-300 rounded" />
            </div>
          </div>
          <div className="h-3 w-2/3 bg-gray-400 rounded mt-2" />
        </div>
      </div>

      {/* 2. Overlay Gembok & Tombol Login di Atasnya */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-light/60 dark:bg-dark/70 backdrop-blur-sm">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
          <FiLock className="text-xl" />
        </div>

        <h4 className="text-sm sm:text-base font-display font-bold text-dark dark:text-light mb-1">
          Ingin Bergabung dalam Diskusi?
        </h4>
        <p className="text-xs font-body text-gray-500 dark:text-gray-400 max-w-sm mb-4">
          Silakan masuk ke akun Garuda Juara Anda untuk memberikan komentar dan
          berinteraksi dengan pembaca lainnya.
        </p>

        <Button variant="primary" size="md" onClick={onLoginClick}>
          Masuk Akun
        </Button>
      </div>
    </div>
  );
}
