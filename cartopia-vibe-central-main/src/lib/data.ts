
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
    image: "/product-1.jpg",
    category: "lighting",
    featured: true
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    description: "Hand-crafted ceramic pour-over coffee set with minimalist wood accents.",
    price: 89,
    image: "/product-2.jpg",
    category: "kitchen",
    featured: true
  },
  {
    id: "3",
    name: "Wool Throw Blanket",
    description: "Ultra-soft merino wool throw blanket in a modern geometric pattern.",
    price: 149,
    image: "/product-3.jpg",
    category: "home",
    featured: true
  },
  {
    id: "4",
    name: "Minimalist Wall Clock",
    description: "Silent wall clock with clean lines and premium materials.",
    price: 79,
    image: "/product-4.jpg", 
    category: "decor"
  },
  {
    id: "5",
    name: "Modern Planter Set",
    description: "Set of three geometric planters in varying sizes for indoor plants.",
    price: 65,
    image: "/product-5.jpg",
    category: "decor",
    featured: true
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Fast-charging wireless pad with premium fabric finish and cable management.",
    price: 59,
    image: "/product-6.jpg",
    category: "tech"
  },
  {
    id: "7",
    name: "Minimalist Desk Organizer",
    description: "Modular desk organizer with compartments for all your essentials.",
    price: 45,
    image: "/product-7.jpg",
    category: "office"
  },
  {
    id: "8",
    name: "Ceramic Mug Set",
    description: "Set of four handcrafted ceramic mugs with unique minimalist designs.",
    price: 38,
    image: "/product-8.jpg",
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
