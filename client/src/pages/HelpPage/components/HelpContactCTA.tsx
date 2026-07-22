import { FiMail, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface HelpContactCTAProps {
  heading: string;
  description: string;
  email: string;
}

export default function HelpContactCTA({
  heading,
  description,
  email,
}: HelpContactCTAProps) {
  return (
    <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="space-y-2 max-w-2xl">
        <h2 className="font-display font-bold text-2xl text-white">
          {heading}
        </h2>
        <p className="font-body text-sm text-slate-300">
          {description}
        </p>
        <div className="font-mono text-xs text-primary pt-1">
          Support Email: <strong className="text-white">{email}</strong>
        </div>
      </div>

      <Link
        to="/kontak"
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-dark transition-colors shrink-0 shadow-md shadow-primary/20"
      >
        <FiMail className="w-4 h-4" />
        <span>Hubungi Tim Support</span>
        <FiArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
