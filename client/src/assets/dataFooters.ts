export interface FooterLink {
  label: string;
  href: string;
}

export const perusahaanLinks: FooterLink[] = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Redaksi", href: "/redaksi" },
  { label: "Karier", href: "/karier" },
  { label: "Kontak", href: "/kontak" },
];

export const kebijakanLinks: FooterLink[] = [
  { label: "Pedoman Media Siber", href: "/pedoman-media-siber" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const kategoriLinks: FooterLink[] = [
  { label: "Timnas Indonesia", href: "/kategori/timnas" },
  { label: "Sepak Bola", href: "/kategori/sepak-bola" },
  { label: "Bulu Tangkis", href: "/kategori/bulutangkis" },
  { label: "Esports", href: "/kategori/e-sports" },
];

export const lainnyaLinks: FooterLink[] = [
  { label: "Advertise dengan Kami", href: "/iklan" },
  { label: "Bantuan", href: "/bantuan" },
];
