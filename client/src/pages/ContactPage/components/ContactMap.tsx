import { FiMapPin, FiClock } from "react-icons/fi";

interface ContactMapProps {
  officeHours: string;
  address: string;
  embedUrl: string;
}

export default function ContactMap({
  officeHours,
  address,
  embedUrl,
}: ContactMapProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800">
      <div className="lg:col-span-5 space-y-6">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // LOKASI KANTOR
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Kunjungi HQ Garuda Juara
        </h3>

        <div className="space-y-4 font-body text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <FiMapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <div className="font-semibold text-white">Alamat Resmi:</div>
              <div>{address}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FiClock className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <div className="font-semibold text-white">Jam Operasional Kantor:</div>
              <div className="font-mono text-xs text-slate-400">{officeHours}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg h-72 sm:h-80">
        <iframe
          title="Lokasi Garuda Juara"
          src={embedUrl}
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>
    </section>
  );
}
