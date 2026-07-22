import type { DemographicBreakdown } from "../../../../assets/dataContent/advertiseData";

interface AdvertiseDemographicsProps {
  tagline: string;
  heading: string;
  description: string;
  ageBreakdown: DemographicBreakdown[];
  genderBreakdown: { male: number; female: number };
  sportsInterests: DemographicBreakdown[];
}

export default function AdvertiseDemographics({
  tagline,
  heading,
  description,
  ageBreakdown,
  genderBreakdown,
  sportsInterests,
}: AdvertiseDemographicsProps) {
  return (
    <section className="space-y-8 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
          {heading}
        </h2>
        <p className="font-body text-slate-300 text-sm sm:text-base max-w-3xl">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Age breakdown */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-4">
          <h3 className="font-display font-bold text-lg text-white">
            Distribusi Usia Pembaca
          </h3>
          <div className="space-y-3">
            {ageBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">
                    {item.category} ({item.label})
                  </span>
                  <span className="text-primary font-bold">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender & Sports Interest */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <h3 className="font-display font-bold text-lg text-white">
              Rasio Gender
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 text-center space-y-1">
                <div className="font-mono text-2xl font-extrabold text-primary">
                  {genderBreakdown.male}%
                </div>
                <div className="font-body text-xs text-slate-400">Pria</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 text-center space-y-1">
                <div className="font-mono text-2xl font-extrabold text-slate-200">
                  {genderBreakdown.female}%
                </div>
                <div className="font-body text-xs text-slate-400">Wanita</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <h3 className="font-display font-bold text-lg text-white">
              Minat Cabang Olahraga Utama
            </h3>
            <div className="space-y-2">
              {sportsInterests.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs font-mono p-2 rounded bg-slate-900/60"
                >
                  <span className="text-slate-300">{item.category}</span>
                  <span className="text-primary font-bold">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
