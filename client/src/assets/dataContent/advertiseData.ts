export interface AudienceMetric {
  value: string;
  label: string;
  change: string;
  iconName: "users" | "bar-chart" | "clock" | "globe";
}

export interface DemographicBreakdown {
  category: string;
  percentage: number;
  label: string;
}

export interface AdPlacementOption {
  id: string;
  name: string;
  dimensions: string;
  description: string;
  recommendedFor: string;
  previewType: "header" | "article" | "sponsored" | "takeover";
}

export interface AdPackage {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface AdvertiseData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: AudienceMetric[];
  demographicsTagline: string;
  demographicsHeading: string;
  demographicsDescription: string;
  ageBreakdown: DemographicBreakdown[];
  genderBreakdown: { male: number; female: number };
  sportsInterests: DemographicBreakdown[];
  placementTagline: string;
  placementHeading: string;
  placementDescription: string;
  placements: AdPlacementOption[];
  packagesTagline: string;
  packagesHeading: string;
  packages: AdPackage[];
  contactHeading: string;
  contactDescription: string;
  contactEmail: string;
}

export const ADVERTISE_DATA: AdvertiseData = {
  badge: "MEDIA KIT & IKLAAN 2026",
  title: "Jangkau Jutaan Pencinta Olahraga Berdaya Beli Tinggi",
  subtitle: "Solusi Periklanan Digital Berbasis Data & Engagement Tinggi untuk Brand Anda.",
  description:
    "Garuda Juara menawarkan platform media digital olahraga modern dengan audiens yang loyal, aktif, dan didominasi oleh generasi muda urban yang antusias terhadap olahraga, gaya hidup sehat, serta teknologi.",
  metrics: [
    { value: "2.5M+", label: "Pembaca Aktif Bulanan", change: "+42% YoY", iconName: "users" },
    { value: "8.2M+", label: "Total Impresi Pageview", change: "+65% YoY", iconName: "bar-chart" },
    { value: "4m 12s", label: "Rata-rata Durasi Sesi", change: "Top Media", iconName: "clock" },
    { value: "1.2M+", label: "Pengikut Media Sosial", change: "Multi-channel", iconName: "globe" },
  ],
  demographicsTagline: "AUDIENCE INSIGHT",
  demographicsHeading: "Demografi & Profil Pembaca Garuda Juara",
  demographicsDescription:
    "Pembaca kami didominasi oleh usia produktif (18-35 tahun) dengan minat kuat pada perlengkapan olahraga, kendaraan, gadget, finansial, dan produk gaya hidup.",
  ageBreakdown: [
    { category: "18 - 24 Tahun", percentage: 38, label: "Mahasiswa & Early Career" },
    { category: "25 - 34 Tahun", percentage: 44, label: "Profesional Muda & Decision Makers" },
    { category: "35 - 44 Tahun", percentage: 12, label: "Senior Professionals" },
    { category: "45+ Tahun", percentage: 6, label: "Sports Enthusiasts" },
  ],
  genderBreakdown: { male: 78, female: 22 },
  sportsInterests: [
    { category: "Sepak Bola (Timnas & Europe)", percentage: 88, label: "Top Interest" },
    { category: "Bulu Tangkis (Badminton)", percentage: 74, label: "High Engagement" },
    { category: "Esports & Gaming", percentage: 62, label: "Fast Growing" },
    { category: "Balap Motor (MotoGP/F1)", percentage: 48, label: "Urban Audience" },
  ],
  placementTagline: "PREVIEW SLOT IKILAN",
  placementHeading: "Format Periklanan Interaktif",
  placementDescription: "Pilih format penempatan yang tepat untuk memaksimalkan brand awareness dan konversi campaign Anda.",
  placements: [
    {
      id: "slot-header",
      name: "Header Leaderboard Billboard Banner",
      dimensions: "970x250 px / 728x90 px",
      description: "Posisi paling atas di seluruh halaman utama dan artikel. Visibilitas maksimal 100% pada impresi pertama pembaca.",
      recommendedFor: "Brand Awareness, Launching Produk Baru, Big Campaign",
      previewType: "header",
    },
    {
      id: "slot-article",
      name: "In-Article Native Widget Banner",
      dimensions: "300x250 px / Responsive Sticky Card",
      description: "Terintegrasi secara alami di tengah paragraf artikel berita yang berkinerja tinggi (high click-through rate).",
      recommendedFor: "Traffic Generation, App Install, Direct Response",
      previewType: "article",
    },
    {
      id: "slot-sponsored",
      name: "Sponsored Article / Native Content",
      dimensions: "Editorial Full Article",
      description: "Artikel ulasan khusus yang ditulis oleh tim redaksi Garuda Juara dengan gaya penulisan engaging dan optimasi SEO.",
      recommendedFor: "Brand Storytelling, Product Review, Thought Leadership",
      previewType: "sponsored",
    },
    {
      id: "slot-takeover",
      name: "Matchday Special Event Takeover",
      dimensions: "Full Custom Branding + Social Post",
      description: "Dominasi penuh tampilan situs saat matchday Timnas Indonesia atau final turnamen besar plus promosi di Instagram & TikTok.",
      recommendedFor: "High Impact Event Sponsor, Tournament Campaign",
      previewType: "takeover",
    },
  ],
  packagesTagline: "PAKET SPONSORSHIP",
  packagesHeading: "Pilihan Paket Kampanye Media",
  packages: [
    {
      id: "pkg-starter",
      name: "Starter Awareness",
      price: "Rp 7.500.000",
      period: "per bulan",
      description: "Cocok untuk UMKM atau brand baru yang ingin mengenalkan produk ke pencinta olahraga.",
      features: [
        "Banner In-Article (500.000 Guaranteed Impressions)",
        "1x Article Press Release",
        "Laporan Analisis Performa Kampanye",
        "Standard Support",
      ],
    },
    {
      id: "pkg-growth",
      name: "Growth Campaign",
      badge: "PALING POPULER",
      price: "Rp 18.500.000",
      period: "per bulan",
      description: "Solusi seimbang untuk peningkatan konversi dan jangkauan luas audiens urban.",
      features: [
        "Leaderboard Header + In-Article Banner (2M Impressions)",
        "2x Sponsored Article Native oleh Redaksi",
        "1x Carousel Post Instagram / TikTok Garuda Juara",
        "Optimasi SEO & Keyword Targeting",
        "Dedicated Campaign Manager",
      ],
      isPopular: true,
    },
    {
      id: "pkg-championship",
      name: "Championship Premium",
      price: "Rp 45.000.000",
      period: "per event / bulan",
      description: "Dominasi penuh media saat event olahraga terbesar berlangsung.",
      features: [
        "Exclusive Site Takeover & Live Match Branding",
        "5M Guaranteed Display Impressions",
        "4x Sponsored Feature Stories + Infografis Custom",
        "Multi-Platform Social Media Coverage (Feed + Story + Reels)",
        "VIP Accreditation Event Pass Access",
      ],
    },
  ],
  contactHeading: "Mulai Dapatkan Proposal Rate Card",
  contactDescription:
    "Diskusikan kebutuhan kampanye media Anda dengan tim bisnis Garuda Juara. Kami siap membuat custom proposal dalam waktu 24 jam.",
  contactEmail: "bisnis@garudajuara.com",
};
