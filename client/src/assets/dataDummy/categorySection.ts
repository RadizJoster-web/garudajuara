export interface VisualCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  totalNews: number;
}

export const VISUAL_CATEGORIES: VisualCategory[] = [
  {
    id: 1,
    name: "Timnas",
    slug: "timnas",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    totalNews: 328,
  },
  {
    id: 2,
    name: "Sepak Bola",
    slug: "sepak-bola",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    totalNews: 512,
  },
  {
    id: 3,
    name: "Bulu Tangkis",
    slug: "bulutangkis",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    totalNews: 204,
  },
  {
    id: 4,
    name: "Basket",
    slug: "basket",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    totalNews: 96,
  },
  {
    id: 5,
    name: "Voli",
    slug: "voli",
    image:
      "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=600&q=80",
    totalNews: 78,
  },
  {
    id: 6,
    name: "Esports",
    slug: "e-sports",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    totalNews: 241,
  },
  {
    id: 7,
    name: "Balap",
    slug: "balap",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    totalNews: 115,
  },
];
