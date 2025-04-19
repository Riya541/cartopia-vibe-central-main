
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4 image-shine">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <Button
          size="icon"
          className="absolute bottom-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => addItem(product)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-muted-foreground text-sm mb-2">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>
      <p className="font-medium">₹{product.price}</p>
    </motion.div>
  );
};

export default ProductCard;
