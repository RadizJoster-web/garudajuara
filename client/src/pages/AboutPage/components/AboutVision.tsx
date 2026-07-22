interface AboutVisionProps {
  data: {
    tagline: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    imageUrl: string;
    imageCaption: string;
  };
}

export default function AboutVision({ data }: AboutVisionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-6 space-y-6">
        <div className="font-mono text-xs font-semibold text-primary tracking-widest uppercase">
          // {data.tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light leading-snug">
          {data.heading}
        </h2>
        <div className="space-y-4 font-body text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="relative group rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg">
          <img
            src={data.imageUrl}
            alt="Visi Garuda Juara"
            className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <p className="font-display italic text-sm text-slate-200">
              {data.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
