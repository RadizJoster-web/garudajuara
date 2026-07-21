export interface PrivacySectionItem {
  id: string;
  title: string;
  content: string[];
}

export interface PrivacyPolicyData {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: PrivacySectionItem[];
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
  badge: "PERLINDUNGAN DATA",
  title: "Kebijakan Privasi",
  description:
    "Garuda Juara berkomitmen penuh untuk melindungi privasi dan data pribadi setiap pengunjung platform media kami.",
  lastUpdated: "Terakhir diperbarui: Juli 2026",
  sections: [
    {
      id: "sec-1",
      title: "1. Informasi yang Kami Kumpulkan",
      content: [
        "Informasi yang Anda Berikan: Seperti nama, alamat email, dan identitas profil saat Anda mendaftar akun, mengisi formulir kontak, atau memberikan komentar.",
        "Informasi Otomatis (Log Files & Cookies): Alamat IP, jenis peramban (browser), penyedia layanan internet (ISP), halaman rujukan/keluar, dan stempel tanggal/waktu untuk analisis statistik kunjungan.",
      ],
    },
    {
      id: "sec-2",
      title: "2. Penggunaan Cookie & Iklan Google AdSense",
      content: [
        "Garuda Juara menggunakan cookie untuk menyimpan preferensi pengunjung dan mengoptimalkan pengalaman membaca.",
        "Mitra pihak ketiga, termasuk Google (Google AdSense), menggunakan cookie DART untuk menayangkan iklan kepada pengguna berdasarkan kunjungan mereka ke Garuda Juara dan situs lainnya di internet.",
        "Pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi Jaringan Iklan dan Konten Google.",
      ],
    },
    {
      id: "sec-3",
      title: "3. Penggunaan Informasi Anda",
      content: [
        "Memelihara, mengoperasikan, dan meningkatkan performa serta kenyamanan platform Garuda Juara.",
        "Mengembangkan fitur berita, analisis, dan layanan baru yang relevan bagi pembaca.",
        "Mencegah tindakan penipuan, spam komentar, dan aktivitas siber ilegal di dalam platform.",
      ],
    },
    {
      id: "sec-4",
      title: "4. Perlindungan & Keamanan Data",
      content: [
        "Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data pribadi Anda dari akses, pengubahan, atau pengungkapan tanpa izin.",
        "Garuda Juara tidak akan pernah menjual, menyewakan, atau mendistribusikan data pribadi pengunjung kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum yang berlaku di Indonesia.",
      ],
    },
  ],
};
