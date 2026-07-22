import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import type { AdPackage } from "../../../assets/dataContent/advertiseData";

interface AdvertisePackagesProps {
  tagline: string;
  heading: string;
  packages: AdPackage[];
}

export default function AdvertisePackages({
  tagline,
  heading,
  packages,
}: AdvertisePackagesProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
              pkg.isPopular
                ? "bg-slate-900 text-white border-2 border-primary shadow-xl shadow-primary/10"
                : "bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-dark dark:text-light"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white font-mono text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                {pkg.badge}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400">
                  {pkg.description}
                </p>
              </div>

              <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
                <span className="font-mono text-3xl font-extrabold text-primary">
                  {pkg.price}
                </span>
                <span className="font-body text-xs text-slate-500 ml-1">
                  / {pkg.period}
                </span>
              </div>

              <ul className="space-y-3">
                {pkg.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs font-body"
                  >
                    <FiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="#advertise-contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs font-semibold transition-colors cursor-pointer ${
                  pkg.isPopular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-md"
                    : "bg-slate-100 dark:bg-slate-800 text-dark dark:text-light hover:bg-primary hover:text-white"
                }`}
              >
                <span>Pilih Paket Ini</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
