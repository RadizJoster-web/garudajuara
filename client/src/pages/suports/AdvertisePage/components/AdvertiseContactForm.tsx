import { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

interface AdvertiseContactFormProps {
  heading: string;
  description: string;
  contactEmail: string;
}

export default function AdvertiseContactForm({
  heading,
  description,
  contactEmail,
}: AdvertiseContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    contactPerson: "",
    email: "",
    budgetRange: "Rp 10jt - Rp 30jt",
    campaignGoal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="advertise-contact" className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // KEMITRAAN BRAND & MEDIA
        </div>
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
            Permohonan Rate Card Terkirim!
          </h3>
          <p className="font-body text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Tim Business Development Garuda Juara akan mengirimkan proposal media kit lengkap ke <strong>{formData.email}</strong> dalam 1x24 jam kerja.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
          >
            Kirim Form Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Nama Perusahaan / Brand *
              </label>
              <input
                type="text"
                required
                placeholder="misal: Nike Indonesia / XL Axiata"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Nama Contact Person *
              </label>
              <input
                type="text"
                required
                placeholder="Nama penanggung jawab"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Bisnis Resmi *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                Estimasi Anggaran Kampanye *
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
              >
                <option value="< Rp 10jt">&lt; Rp 10.000.000</option>
                <option value="Rp 10jt - Rp 30jt">Rp 10.000.000 - Rp 30.000.000</option>
                <option value="Rp 30jt - Rp 75jt">Rp 30.000.000 - Rp 75.000.000</option>
                <option value="> Rp 75jt">&gt; Rp 75.000.000</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
              Tujuan Kampanye & Kebutuhan Format Iklan
            </label>
            <textarea
              rows={4}
              placeholder="Ceritakan gambaran kampanye brand Anda dan format slot iklan yang diminati..."
              value={formData.campaignGoal}
              onChange={(e) => setFormData({ ...formData, campaignGoal: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-dark dark:text-light focus:outline-hidden focus:border-primary"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-slate-500">
              Email alternatif: <strong>{contactEmail}</strong>
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors cursor-pointer shadow-md shadow-primary/20"
            >
              <FiSend className="w-4 h-4" />
              <span>Minta Proposal Media Kit</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
