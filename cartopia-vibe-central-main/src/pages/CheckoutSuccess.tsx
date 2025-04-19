
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  useEffect(() => {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 min-h-[80vh] flex items-center">
      <div className="container-custom max-w-lg text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-primary mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10" />
          </div>
          
          <h1 className="heading-lg mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. We've received your order and will process it right away.
            You'll receive a confirmation email shortly.
          </p>
          
          <div className="py-6 px-4 mb-8 bg-secondary/50 rounded-lg">
            <p className="font-medium mb-1">Order #MINIMAL-4829</p>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-4">
            <Button size="lg" className="w-full" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
