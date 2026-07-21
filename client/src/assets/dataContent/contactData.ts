export interface ContactChannel {
  iconName: "mail" | "business" | "location";
  title: string;
  subtitle: string;
  value: string;
  link?: string;
}

export interface ContactData {
  badge: string;
  title: string;
  description: string;
  channels: ContactChannel[];
  formHeading: string;
  formDescription: string;
}

export const CONTACT_DATA: ContactData = {
  badge: "HUBUNGI KAMI",
  title: "Kami Siap Mendengar dari Anda",
  description:
    "Memiliki pertanyaan seputar pemberitaan, tawaran kerja sama, atau masukan untuk Garuda Juara? Silakan hubungi tim kami melalui saluran di bawah ini.",
  channels: [
    {
      iconName: "mail",
      title: "Redaksi & Pengaduan",
      subtitle: "Koreksi berita atau aduan pers",
      value: "redaksi@garudajuara.com",
      link: "mailto:redaksi@garudajuara.com",
    },
    {
      iconName: "business",
      title: "Iklan & Kemitraan",
      subtitle: "Sponsorship dan kerjasama media",
      value: "bisnis@garudajuara.com",
      link: "mailto:bisnis@garudajuara.com",
    },
    {
      iconName: "location",
      title: "Lokasi Operasional",
      subtitle: "Kantor tim kerja",
      value: "Depok, Jawa Barat, Indonesia",
    },
  ],
  formHeading: "Kirim Pesan Langsung",
  formDescription:
    "Isi formulir di bawah ini dan tim kami akan merespons pesan Anda dalam waktu 1x24 jam kerja.",
};
    