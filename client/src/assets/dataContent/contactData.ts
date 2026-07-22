export interface ContactChannel {
  iconName: "mail" | "phone" | "map-pin" | "briefcase" | "file-text" | "help-circle";
  title: string;
  subtitle: string;
  value: string;
  link?: string;
  badge: string;
}

export interface ContactData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  channels: ContactChannel[];
  formHeading: string;
  formDescription: string;
  categories: string[];
  officeHours: string;
  locationAddress: string;
  googleMapEmbedUrl: string;
}

export const CONTACT_DATA: ContactData = {
  badge: "HUBUNGI KAMI",
  title: "Pintu Komunikasi Terbuka Garuda Juara",
  subtitle: "Kami Siap Mendengar Masukan, Hak Jawab, Maupun Proposal Kemitraan Strategis Anda.",
  description:
    "Pilih saluran komunikasi yang paling sesuai di bawah ini atau gunakan formulir langsung untuk terhubung dengan tim redaksi dan bisnis kami.",
  channels: [
    {
      iconName: "file-text",
      title: "Meja Redaksi & Hak Jawab",
      subtitle: "Koreksi berita, hak jawab pers, dan pers rilis",
      value: "redaksi@garudajuara.com",
      link: "mailto:redaksi@garudajuara.com",
      badge: "Respons 1x24 Jam",
    },
    {
      iconName: "briefcase",
      title: "Iklan & Sponsor Bisnis",
      subtitle: "Sponsorship, media kit, & kemitraan brand",
      value: "bisnis@garudajuara.com",
      link: "mailto:bisnis@garudajuara.com",
      badge: "Proposal Ready",
    },
    {
      iconName: "help-circle",
      title: "Dukungan Pembaca & Pertanyaan",
      subtitle: "Pertanyaan seputar akun, newsletter, & RSS",
      value: "support@garudajuara.com",
      link: "mailto:support@garudajuara.com",
      badge: "Layanan Pembaca",
    },
    {
      iconName: "map-pin",
      title: "Lokasi Operasional Utama",
      subtitle: "Depok, Jawa Barat, Indonesia",
      value: "Jl. Margonda No. 88, Depok",
      badge: "Kantor Pusat",
    },
  ],
  formHeading: "Kirim Pesan Langsung",
  formDescription:
    "Isi formulir di bawah ini. Tim kami akan memverifikasi dan memberikan tanggapan melalui email yang Anda daftarkan.",
  categories: [
    "Meja Redaksi / Ralat Berita",
    "Iklan & Media Kit",
    "Kerjasama Event / Media Partner",
    "Saran & Masukan Platform",
    "Lainnya",
  ],
  officeHours: "Senin - Jumat, 09.00 - 18.00 WIB (Redaksi Liputan Berjalan 24/7)",
  locationAddress: "Garuda Juara Media HQ, Jl. Margonda Raya No. 88, Kota Depok, Jawa Barat 16424",
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126887.89626359556!2d106.7725916!3d-6.3920959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb965a31a541%3A0xb30cf406086f68c3!2sDepok%2C%20Depok%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
};