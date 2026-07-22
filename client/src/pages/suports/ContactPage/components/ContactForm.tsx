import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

interface ContactFormProps {
  heading: string;
  description: string;
  categories: string[];
}

export default function ContactForm({
  heading,
  description,
  categories,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: categories[0] || "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div className="space-y-2">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark dark:text-light">
          {heading}
        </h2>
        <p className="font-body text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
          <FiCheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
          <h3 className="font-display font-bold text-xl text-dark dark:text-light">
            Pesan Berhasil Terkirim!
          </h3>
          <p className="font-body text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Terima kasih telah menghubungi Garuda Juara. Tim kami akan merespons pesan Anda ke <strong>{formData.email}</strong> secepatnya.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                placeholder="nama@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Kategori Pesan *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Subjek Pesan *
              </label>
              <input
                type="text"
                required
                placeholder="Topik atau judul pesan"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
              Isi Pesan *
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tuliskan secara detail maksud atau pertanyaan Anda..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer shadow-md shadow-primary/20"
          >
            <FiSend className="w-4 h-4" />
            <span>Kirim Pesan Sekarang</span>
          </button>
        </form>
      )}
    </div>
  );
}
