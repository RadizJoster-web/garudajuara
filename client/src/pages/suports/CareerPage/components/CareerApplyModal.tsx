import { useState } from "react";
import { FiX, FiSend, FiCheckCircle } from "react-icons/fi";
import type { PositionItem } from "../../../../assets/dataContent/careerData";

interface CareerApplyModalProps {
  position: PositionItem | null;
  onClose: () => void;
  careerEmail: string;
}

export default function CareerApplyModal({
  position,
  onClose,
  careerEmail,
}: CareerApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolioUrl: "",
    coverLetter: "",
  });

  if (!position) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
        >
          <FiX className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
              <FiCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-dark dark:text-light">
              Aplikasi Terkirim!
            </h3>
            <p className="font-body text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Terima kasih telah melamar posisi{" "}
              <strong>{position.title}</strong>. Tim HR Garuda Juara akan
              meninjau berkas Anda dan menghubungi via email.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Tutup Modal
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-1 pr-8">
              <div className="font-mono text-xs font-semibold text-primary uppercase">
                // Form Lamaran Kerja
              </div>
              <h3 className="font-display font-bold text-xl text-dark dark:text-light">
                {position.title}
              </h3>
              <p className="font-mono text-xs text-slate-500">
                {position.department} • {position.type}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Tautan Portofolio / LinkedIn / Google Drive *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/..."
                  value={formData.portfolioUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, portfolioUrl: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Surat Pengantar Ringkas (Cover Letter)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan singkat mengenai pengalaman dan antusiasme Anda terhadap posisi ini..."
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-slate-400">
                  Atau email langsung: {careerEmail}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Kirim Lamaran</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
