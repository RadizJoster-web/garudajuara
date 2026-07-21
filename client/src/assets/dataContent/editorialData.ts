export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  email?: string;
}

export interface EditorialData {
  badge: string;
  title: string;
  description: string;
  members: TeamMember[];
  policyTagline: string;
  policyHeading: string;
  policyText: string;
  contactEmail: string;
  contactLocation: string;
}

export const EDITORIAL_DATA: EditorialData = {
  badge: "DEWAN REDAKSI",
  title: "Struktur Redaksi & Penanggung Jawab Media",
  description:
    "Garuda Juara dikelola oleh tim profesional yang berdedikasi menyajikan berita olahraga nasional dan internasional secara independen, adil, dan mengedepankan etika jurnalisme siber.",
  members: [
    {
      id: "ed-1",
      name: "Radiz Dirganta",
      role: "Pemimpin Redaksi / Managing Editor",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Menanggung jawab seluruh kebijakan redaksi, kualitas konten, dan pengembangan produk media Garuda Juara.",
      email: "radiz@garudajuara.com",
    },
    {
      id: "ed-2",
      name: "Tim Riset & Editor Konten",
      role: "Senior Sports Researcher",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Memverifikasi data statistik pertandingan, fakta lapangan, dan melakukan riset mendalam sebelum artikel diterbitkan.",
      email: "riset@garudajuara.com",
    },
  ],
  policyTagline: "STANDAR KUALITAS",
  policyHeading: "Independensi & Integritas Pemberitaan",
  policyText:
    "Setiap jurnalis dan editor Garuda Juara terikat pada Pedoman Pemberitaan Media Siber dan Kode Etik Jurnalistik. Kami menolak segala bentuk campur tangan pihak luar, isu hoaks, serta kompromi terhadap akurasi berita.",
  contactEmail: "redaksi@garudajuara.com",
  contactLocation: "Depok, Jawa Barat, Indonesia",
};
