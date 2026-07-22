import { FcGoogle } from "react-icons/fc";

interface AuthSocialButtonsProps {
  onGoogleClick?: () => void;
  text?: string;
}

export default function AuthSocialButtons({
  onGoogleClick,
  text = "Daftar dengan Google",
}: AuthSocialButtonsProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <button
        type="button"
        onClick={onGoogleClick}
        className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-200 dark:border-neutral-700 bg-light dark:bg-dark hover:bg-gray-50 dark:hover:bg-neutral-800/80 text-dark dark:text-light font-display font-semibold text-xs shadow-sm transition-all duration-200"
      >
        <FcGoogle className="text-lg" />
        <span>{text}</span>
      </button>

      {/* Divider "Atau" */}
      <div className="relative flex items-center justify-center my-2">
        <div className="w-full border-t border-gray-200 dark:border-neutral-800" />
        <span className="absolute bg-light dark:bg-dark px-3 text-[10px] font-mono text-gray-400 uppercase">
          Atau gunakan email
        </span>
      </div>
    </div>
  );
}
