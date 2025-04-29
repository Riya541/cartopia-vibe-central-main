import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/data";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge bg-primary/10 text-primary mb-4">Curated Design</span>
            <h1 className="heading-xl mb-6">
              Beautifully Crafted Objects for Everyday Living
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Our curated collection brings together thoughtfully designed products 
              that combine form and function for a more intentional lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/products">
                  Shop Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">About Our Collection</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1536936812504-0e77dc3f0b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxVjhLVHpON2d5WXx8ZW58MHx8fHx8"
              alt="Featured product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="badge bg-primary/10 text-primary mb-4">Featured Collection</span>
              <h2 className="heading-lg">Curated Favorites</h2>
            </div>
            <Link 
              to="/products" 
              className="hidden md:flex items-center text-primary hover:opacity-80 transition-opacity"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button asChild>
              <Link to="/products">
                View All Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=60"
              alt="Our design philosophy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary/10 text-primary mb-4">Our Philosophy</span>
            <h2 className="heading-lg mb-6">
              Design That Enhances Everyday Experience
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe that good design should be accessible, functional, and bring joy to daily living.
              Every product in our collection is chosen for its thoughtful design, quality craftsmanship, 
              and ability to stand the test of time.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Learn More About Our Approach</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center max-w-3xl">
          <span className="badge bg-white/20 mb-4">Stay Updated</span>
          <h2 className="heading-lg mb-6">
            Subscribe For New Product Announcements
          </h2>
          <p className="text-white/80 mb-8">
            Be the first to know about new arrivals, special collections, and exclusive offers.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              required
            />
            <Button variant="secondary" className="h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
