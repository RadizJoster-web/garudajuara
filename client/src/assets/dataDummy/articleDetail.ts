export interface AuthorDetail {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  donationUrl?: string;
}

export interface MatchStat {
  label: string;
  homeValue: string | number;
  awayValue: string | number;
}

export interface MatchScore {
  homeTeam: string;
  homeFlag: string;
  homeScore: number;
  awayTeam: string;
  awayFlag: string;
  awayScore: number;
  tournament: string;
  matchDate: string;
  stats?: MatchStat[];
}

export interface ArticleDetailData {
  id: number;
  title: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  breadcrumb: { label: string; path: string }[];
  author: AuthorDetail;
  publishedAt: string;
  readTime: string;
  featuredImage: {
    url: string;
    caption: string;
  };
  tags: { name: string; slug: string }[];
  matchResult?: MatchScore;
}

export const DUMMY_ARTICLE_DETAIL: ArticleDetailData = {
  id: 1,
  title:
    "Drama 90 Menit, Timnas Indonesia Tundukkan Vietnam 2–1 dan Pastikan Tiket Semifinal Piala AFF 2026",
  slug: "drama-90-menit-timnas-indonesia-tekuk-vietnam-2-1",
  category: {
    name: "TIMNAS INDONESIA",
    slug: "timnas",
  },
  breadcrumb: [
    { label: "Beranda", path: "/" },
    { label: "Timnas Indonesia", path: "/kategori/timnas" },
    { label: "Indonesia vs Vietnam Semifinal Piala AFF", path: "" },
  ],
  publishedAt: "20 Juli 2026 • 18:30 WIB",
  readTime: "5 menit baca",
  author: {
    id: "aut-101",
    name: "Rizky Pratama",
    role: "Senior Sports Journalist",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    bio: "Jurnalis olahraga spesialis sepak bola nasional dan Asia Tenggara dengan pengalaman lebih dari 8 tahun meliput Timnas Indonesia.",
    donationUrl: "https://saweria.co",
  },
  featuredImage: {
    url: "https://th.bing.com/th/id/OIP.QdyR1Gt5hFYDuXFW_XGxBAHaE7?w=304&h=202&c=7&r=0&o=7&pid=1.7&rm=3",
    caption:
      "Para pemain Timnas Indonesia merayakan gol penentu kemenangan usai menundukkan Vietnam di laga krusial semifinal Piala AFF 2026.",
  },
  tags: [
    { name: "Timnas Day", slug: "timnas-day" },
    { name: "Piala AFF 2026", slug: "piala-aff-2026" },
    { name: "Shin Tae-yong", slug: "shin-tae-yong" },
    { name: "Vietnam", slug: "vietnam" },
  ],
  matchResult: {
    tournament: "Piala AFF 2026 — Semifinal Leg 2",
    matchDate: "20 Juli 2026",
    homeTeam: "INDONESIA",
    homeFlag: "🇮🇩",
    homeScore: 2,
    awayTeam: "VIETNAM",
    awayFlag: "🇻🇳",
    awayScore: 1,
    stats: [
      { label: "Penguasaan Bola", homeValue: "58%", awayValue: "42%" },
      { label: "Tembakan Tepat Sasaran", homeValue: 7, awayValue: 3 },
      { label: "Pelanggaran", homeValue: 12, awayValue: 16 },
      { label: "Akurasi Operan", homeValue: "84%", awayValue: "76%" },
    ],
  },
};
