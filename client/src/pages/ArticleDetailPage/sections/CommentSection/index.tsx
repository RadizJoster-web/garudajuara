import { useState } from "react";
import LockedCommentOverlay from "./LockedCommentOverlay";
import Button from "../../../../components/ui/Button";

interface CommentSectionProps {
  isLoggedIn?: boolean; // State autentikasi
}

export default function CommentSection({
  isLoggedIn = false,
}: CommentSectionProps) {
  const [commentText, setCommentText] = useState("");

  return (
    <section className="w-full pt-6 my-6 border-t border-gray-200/80 dark:border-neutral-800">
      {/* Title Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-3 h-0.5 bg-primary rounded-full" />
        <h3 className="text-sm sm:text-base font-display font-black tracking-wider text-dark dark:text-light uppercase">
          KOMENTAR PEMBACA (2)
        </h3>
      </div>

      {/* Jika Belum Login: Tampilkan Overlay Blur */}
      {!isLoggedIn ? (
        <LockedCommentOverlay
          onLoginClick={() => alert("Redirect ke Popup Login")}
        />
      ) : (
        /* Jika Sudah Login: Tampilkan Form Komentar Aktif */
        <div className="flex flex-col gap-4 mb-8">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Tuliskan pendapat atau analisis Anda tentang pertandingan ini..."
            rows={3}
            className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/60 border border-gray-200 dark:border-neutral-700 text-sm text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <div className="flex justify-end">
            <Button
              variant="primary"
              size="md"
              disabled={!commentText.trim()}
              onClick={() => {
                alert("Komentar terkirim!");
                setCommentText("");
              }}
            >
              Kirim Komentar
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
