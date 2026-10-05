export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'filter' | 'signatures' | 'bakery' | 'kitchen' | 'beans';
  description: string;
  price: number;
  tastingNotes?: string[];
  dietary?: string[];
  origin?: string;
  process?: string;
  image?: string;
  popular?: boolean;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Brew Guides' | 'Origin & Sourcing' | 'Coffee Science' | 'Bakery & Pairings' | 'Cafe Culture';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlight?: string;
      recipeTable?: {
        step?: string;
        time?: string;
        water?: string;
        details?: string;
      }[];
    }[];
    conclusion: string;
    brewRecipe?: {
      method: string;
      coffeeGrams: number;
      waterGrams: number;
      ratio: string;
      grindSize: string;
      waterTemp: string;
      brewTime: string;
    };
  };
  likes: number;
  comments: {
    id: string;
    author: string;
    date: string;
    text: string;
  }[];
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  selectedMilk?: string;
  selectedSize?: string;
  grindOption?: string;
  notes?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Sunlit Window Patio' | 'Communal Roastery Bench' | 'Cozy Reading Nook' | 'Espresso Bar Counter';
  notes?: string;
  status: 'confirmed';
}
