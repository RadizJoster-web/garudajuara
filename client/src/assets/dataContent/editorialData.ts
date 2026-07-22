export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Senior Editors" | "Desk Chiefs";
  avatar: string;
  bio: string;
  email: string;
  specialty: string;
}

export interface EthicsPillar {
  iconName: "shield" | "check-circle" | "award" | "file-text";
  title: string;
  description: string;
}

export interface EditorialWorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface EditorialData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ethicsTagline: string;
  ethicsHeading: string;
  ethicsPillars: EthicsPillar[];
  boardTagline: string;
  boardHeading: string;
  members: TeamMember[];
  workflowTagline: string;
  workflowHeading: string;
  workflowSteps: EditorialWorkflowStep[];
  correctionTagline: string;
  correctionHeading: string;
  correctionText: string;
  contactEmail: string;
  contactLocation: string;
}

export const EDITORIAL_DATA: EditorialData = {
  badge: "DEWAN REDAKSI",
  title: "Struktur Redaksi & Etika Penulisan",
  subtitle: "Transparansi, Objektivitas, dan Standar Jurnalistik Siber Tertinggi.",
  description:
    "Garuda Juara dikelola oleh tim jurnalis profesional, editor data, dan peneliti olahraga independen. Kami berkomitmen penuh pada Kode Etik Jurnalistik (KEJ) serta Pedoman Pemberitaan Media Siber.",
  ethicsTagline: "STANDAR ETIS",
  ethicsHeading: "Empat Pilar Integritas Redaksi",
  ethicsPillars: [
    {
      iconName: "shield",
      title: "Independensi Mutlak",
      description:
        "Bebas dari tekanan politik, sponsor, maupun kepentingan kelompok tertentu. Penulisan berita murni berdasarkan fakta dan dampak bagi publik.",
    },
    {
      iconName: "check-circle",
      title: "Verifikasi Multi-Sumber",
      description:
        "Setiap kabar transfer, rumor, dan klaim statistik wajib diverifikasi minimal 2 sumber resmi independen sebelum ditayangkan.",
    },
    {
      iconName: "award",
      title: "Penolakan Konflik Kepentingan",
      description:
        "Seluruh jurnalis dan editor dilarang menerima imbalan, gratification, atau kompromi yang dapat memengaruhi netralitas analisis.",
    },
    {
      iconName: "file-text",
      title: "Pemisahan Iklan & Konten",
      description:
        "Artikel bersponsor atau konten promosi ditandai secara tegas dengan label [Advertorial / Sponsored] agar pembaca mendapat kejelasan.",
    },
  ],
  boardTagline: "TIM REDAKSI",
  boardHeading: "Jajaran Pemimpin & Editor Utama",
  members: [
    {
      id: "ed-1",
      name: "Radiz Dirganta",
      role: "Pemimpin Redaksi / Editor-in-Chief",
      category: "Leadership",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Berpengalaman lebih dari 10 tahun memimpin rubrik olahraga nasional. Bertanggung jawab atas arah strategis dan kualitas jurnalistik Garuda Juara.",
      email: "radiz@garudajuara.com",
      specialty: "Kebijakan Redaksi & Sepak Bola Nasional",
    },
    {
      id: "ed-2",
      name: "Bagas Pratama",
      role: "Managing Editor / Redaktur Pelaksana",
      category: "Leadership",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Mengoordinasikan operasional harian meja liputan, verifikasi berita breaking, serta distribusi liputan lapangan.",
      email: "bagas@garudajuara.com",
      specialty: "Jurnalisme Investigatif & Taktik",
    },
    {
      id: "ed-3",
      name: "Siti Rahmania",
      role: "Senior Sports Data Editor",
      category: "Senior Editors",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Pakar analisis statistik Opta & data performa atlet bulu tangkis serta balap motor internasional.",
      email: "siti@garudajuara.com",
      specialty: "Data Analytics & Badminton",
    },
    {
      id: "ed-4",
      name: "Dion Kusuma",
      role: "Head of Esports & Youth Sports Desk",
      category: "Desk Chiefs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Fokus mengawal perkembangan kompetisi esports nasional (MPL, PMPL) serta talenta usia muda Indonesia.",
      email: "dion@garudajuara.com",
      specialty: "Esports & Digital Trends",
    },
  ],
  workflowTagline: "PROSES JURNALISTIK",
  workflowHeading: "Dari Pengumpulan Informasi Hingga Tayang",
  workflowSteps: [
    {
      stepNumber: "01",
      title: "Riset & Penelusuran Fakta",
      description: "Tim reporter mengumpulkan data pertandingan, hasil konfirmasi lapangan, atau kutipan langsung dari konferensi pers.",
    },
    {
      stepNumber: "02",
      title: "Pemeriksaan Silang (Cross-Check)",
      description: "Editor melacak kredibilitas sumber informasi untuk memastikan bebas isu hoaks dan manipulasi data statistik.",
    },
    {
      stepNumber: "03",
      title: "Penyuntingan & Penyelarasan Bahasa",
      description: "Artikel diselaraskan dengan tata bahasa baku, panduan gaya selingkung Garuda Juara, serta kausa etis.",
    },
    {
      stepNumber: "04",
      title: "Penerbitan & Pemantauan Pasca-Publish",
      description: "Artikel diterbitkan dengan pemantauan update skor real-time dan evaluasi respon dari para pembaca.",
    },
  ],
  correctionTagline: "KEBIJAKAN KOREKSI",
  correctionHeading: "Hak Jawab & Ralat Berita",
  correctionText:
    "Garuda Juara berkomitmen segera memperbaiki kekeliruan fakta dalam berita secepat mungkin setelah ditemukan atau dilaporkan. Ralat artikel akan disertai catatan pengeditan yang jelas di bagian bawah berita untuk menjaga transparansi kepada pembaca.",
  contactEmail: "redaksi@garudajuara.com",
  contactLocation: "Depok, Jawa Barat, Indonesia",
};
