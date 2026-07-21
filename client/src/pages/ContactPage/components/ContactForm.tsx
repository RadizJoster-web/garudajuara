import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

interface ContactFormProps {
  heading: string;
  description: string;
}

export default function ContactForm({
  heading,
  description,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Umum",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", subject: "Umum", message: "" });
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-6 sm:p-8 bg-gray-50 dark:bg-neutral-800/40 rounded-2xl border border-gray-200/80 dark:border-neutral-800 text-start">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-dark dark:text-light">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Masukkan nama Anda"
                className="w-full p-3 rounded-xl bg-light dark:bg-dark border border-gray-200 dark:border-neutral-700 text-xs text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
                Alamat Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="nama@email.com"
                className="w-full p-3 rounded-xl bg-light dark:bg-dark border border-gray-200 dark:border-neutral-700 text-xs text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
              Kategori Pesan
            </label>
            <select
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-light dark:bg-dark border border-gray-200 dark:border-neutral-700 text-xs text-dark dark:text-light focus:outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="Umum">Pertanyaan Umum</option>
              <option value="Redaksi">Redaksi & Koreksi Berita</option>
              <option value="Kerjasama">Kerjasama Iklan & Sponsorship</option>
              <option value="Teknis">Kendala Teknis Website</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300">
              Isi Pesan
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tuliskan pesan Anda secara jelas di sini..."
              className="w-full p-3 rounded-xl bg-light dark:bg-dark border border-gray-200 dark:border-neutral-700 text-xs text-dark dark:text-light placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="primary" size="md" type="submit">
              Kirim Pesan
            </Button>
          </div>
        </form>
      </div>

      <Toast
        message="Pesan Anda berhasil terkirim! Tim kami akan segera merespons."
        isOpen={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
