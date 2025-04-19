
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Parse query params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category") || "all";
    
    setSelectedCategory(categoryParam);
    setProducts(getProductsByCategory(categoryParam));
    
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.search]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    if (category === "all") {
      navigate("/products");
    } else {
      navigate(`/products?category=${category}`);
    }
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    
    let sortedProducts = [...products];
    
    switch (value) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default is featured/recommended
        sortedProducts = getProductsByCategory(selectedCategory);
    }
    
    setProducts(sortedProducts);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="heading-lg mb-4">Shop Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of minimalist products designed to enhance your everyday living experience.
          </p>
        </div>
        
        {/* Filters section */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
          {/* Mobile filter button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader className="mb-6">
                <SheetTitle>Filter & Sort</SheetTitle>
                <SheetDescription>
                  Narrow down products by category and sort by your preference.
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        onClick={() => handleCategoryChange(category.id)}
                        className="justify-start"
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Sort By</h3>
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="name-a-z">Name: A-Z</SelectItem>
                      <SelectItem value="name-z-a">Name: Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Desktop category filters */}
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Desktop sort */}
          <div className="hidden sm:block w-60">
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="name-a-z">Name: A-Z</SelectItem>
                <SelectItem value="name-z-a">Name: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Products grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any products in this category.
            </p>
            <Button onClick={() => handleCategoryChange("all")}>
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
