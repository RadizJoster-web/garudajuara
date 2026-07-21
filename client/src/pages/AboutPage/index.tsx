import {
  FiZap,
  FiShield,
  FiAward,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import Badge from "../../components/ui/Badge";

export default function AboutPage() {
  const stats = [
    { value: "100%", label: "Independen & Objektif" },
    { value: "24/7", label: "Pembaruan Berita Real-Time" },
    { value: "15+", label: "Cabang Olahraga Diliput" },
  ];

  const values = [
    {
      icon: <FiZap className="text-xl text-primary" />,
      title: "Kecepatan Informasi",
      description:
        "Menyajikan kabar dan skor pertandingan terkini secara cepat tanpa mengorbankan kualitas analisis.",
    },
    {
      icon: <FiShield className="text-xl text-primary" />,
      title: "Akurasi & Anti-Hoax",
      description:
        "Setiap data statistik, kutipan, dan fakta berita melalui proses riset serta verifikasi yang ketat.",
    },
    {
      icon: <FiAward className="text-xl text-primary" />,
      title: "Perspektif Skuad Garuda",
      description:
        "Berkomitmen penuh mengawal perjuangan atlet Indonesia di kancah nasional maupun internasional.",
    },
  ];

  return (
    <div className="w-full py-10 sm:py-14 bg-light dark:bg-dark transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* 1. HERO HEADER */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <Badge variant="primary">TENTANG GARUDA JUARA</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-dark dark:text-light tracking-tight leading-tight">
            Rumah Utama Berita & Analisis Olahraga Indonesia
          </h1>
          <p className="text-sm sm:text-base font-body text-gray-500 dark:text-gray-400 leading-relaxed">
            Garuda Juara adalah portal berita olahraga independen yang hadir
            untuk memberikan ruang analisis mendalam, skor real-time, dan narasi
            perjuangan atlet Merah Putih secara cepat, akurat, dan terpercaya.
          </p>
        </div>

        {/* 2. STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-50 dark:bg-neutral-800/50 rounded-2xl border border-gray-200/80 dark:border-neutral-800">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl sm:text-4xl font-display font-black text-primary">
                {item.value}
              </span>
              <span className="text-xs font-mono font-semibold text-gray-600 dark:text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. VISI & NARRATIVE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
          <div className="flex flex-col gap-4 text-start">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              VISI KAMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-dark dark:text-light">
              Menghubungkan Jutaan Pendukung dengan Olahraga Favorit Mereka
            </h2>
            <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400 leading-relaxed">
              Kami percaya bahwa olahraga bukan sekadar pertandingan 90 menit
              atau perolehan poin di papan skor. Olahraga adalah tentang
              semangat, kerja keras, dan persatuan bangsa.
            </p>
            <p className="text-xs sm:text-sm font-body text-gray-500 dark:text-gray-400 leading-relaxed">
              Melalui platform digital yang modern dan intuitif, Garuda Juara
              berdedikasi menjadi jembatan informasi utama bagi para pencinta
              sepak bola, bulu tangkis, esports, hingga balap motor di tanah
              air.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
              alt="Stadion Olahraga"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono text-light/90 italic">
                "Semangat pantang menyerah untuk kejayaan olahraga Indonesia."
              </span>
            </div>
          </div>
        </div>

        {/* 4. CORE VALUES (3 PILAR) */}
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              PRINSIP REDAKSI
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-dark dark:text-light">
              Pilar Utama Penulisan Kami
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-light dark:bg-dark border border-gray-200/80 dark:border-neutral-800 text-start shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center self-start">
                  {val.icon}
                </div>
                <h4 className="text-base font-display font-bold text-dark dark:text-light">
                  {val.title}
                </h4>
                <p className="text-xs font-body text-gray-500 dark:text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
