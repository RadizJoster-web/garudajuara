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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
      <div className="flex flex-col gap-4 text-start">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          {data.tagline}
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-black text-dark dark:text-light">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400 leading-relaxed">
          {data.paragraph1}
        </p>
        <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400 leading-relaxed">
          {data.paragraph2}
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-lg">
        <img
          src={data.imageUrl}
          alt={data.heading}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-6">
          <span className="text-xs font-mono text-light/90 italic">
            {data.imageCaption}
          </span>
        </div>
      </div>
    </div>
  );
}
