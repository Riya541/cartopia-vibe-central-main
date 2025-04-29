export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    description: "A sleek, adjustable desk lamp with wireless charging base and ambient light modes.",
    price: 129,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=60",
    category: "lighting",
    featured: true
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    description: "Hand-crafted ceramic pour-over coffee set with minimalist wood accents.",
    price: 89,
    image: "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "kitchen",
    featured: true
  },
  {
    id: "3",
    name: "Wool Throw Blanket",
    description: "Ultra-soft merino wool throw blanket in a modern geometric pattern.",
    price: 149,
    image: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=800&auto=format&fit=crop&q=60",
    category: "home",
    featured: true
  },
  {
    id: "4",
    name: "Minimalist Wall Clock",
    description: "Silent wall clock with clean lines and premium materials.",
    price: 79,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=800&auto=format&fit=crop&q=60", 
    category: "decor"
  },
  {
    id: "5",
    name: "Modern Planter Set",
    description: "Set of three geometric planters in varying sizes for indoor plants.",
    price: 65,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60",
    category: "decor",
    featured: true
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Fast-charging wireless pad with premium fabric finish and cable management.",
    price: 59,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=60",
    category: "tech"
  },
  {
    id: "7",
    name: "Minimalist Desk Organizer",
    description: "Modular desk organizer with compartments for all your essentials.",
    price: 45,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=60",
    category: "office"
  },
  {
    id: "8",
    name: "Ceramic Mug Set",
    description: "Set of four handcrafted ceramic mugs with unique minimalist designs.",
    price: 38,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=60",
    category: "kitchen"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "lighting", name: "Lighting" },
  { id: "kitchen", name: "Kitchen" },
  { id: "home", name: "Home Textiles" },
  { id: "decor", name: "Decor" },
  { id: "tech", name: "Tech Accessories" },
  { id: "office", name: "Office" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
}
