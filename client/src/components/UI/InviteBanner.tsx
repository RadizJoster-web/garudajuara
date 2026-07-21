import Button from "./Button";

interface InviteBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function InviteBanner({
  title,
  description,
  buttonText = "Masuk Sekarang",
  onButtonClick,
  variant = "primary",
  className = "",
}: InviteBannerProps) {
  return (
    <div
      className={`w-full p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none ${
        variant === "primary"
          ? "bg-red-tint dark:bg-neutral-800/80 border-primary/30 dark:border-primary/40"
          : "bg-gray-50 dark:bg-neutral-800/50 border-gray-200 dark:border-neutral-800"
      } ${className}`}
    >
      {/* Teks Informasi & Ajakan */}
      <div className="flex flex-col gap-0.5 max-w-xl">
        <h4 className="text-sm sm:text-base font-display font-bold text-dark dark:text-light leading-snug">
          {title}
        </h4>
        {description && (
          <p className="text-xs font-body text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      {/* Tombol Aksi Reusable */}
      <div className="w-full sm:w-auto flex-shrink-0">
        <Button
          variant="primary"
          size="md"
          onClick={onButtonClick}
          className="w-full sm:w-auto shadow-sm"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
