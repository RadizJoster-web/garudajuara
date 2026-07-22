import { FiMail, FiMapPin } from "react-icons/fi";

interface EditorialCorrectionProps {
  tagline: string;
  heading: string;
  text: string;
  contactEmail: string;
  contactLocation: string;
}

export default function EditorialCorrection({
  tagline,
  heading,
  text,
  contactEmail,
  contactLocation,
}: EditorialCorrectionProps) {
  return (
    <section className="p-8 rounded-3xl bg-gradient-to-r from-red-950/20 via-slate-900 to-slate-900 border border-slate-800 text-white space-y-6">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl font-bold text-white">{heading}</h2>
      </div>

      <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
        {text}
      </p>

      <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <FiMail className="w-4 h-4 text-primary" />
          <span>Surat Pembaca / Hak Jawab: <strong className="text-white">{contactEmail}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="w-4 h-4 text-primary" />
          <span>{contactLocation}</span>
        </div>
      </div>
    </section>
  );
}
