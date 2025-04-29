
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container-custom max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge bg-primary/10 text-primary mb-4">Our Story</span>
            <h1 className="heading-xl mb-6">
              Beautifully Crafted Objects for Everyday Living
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We curate products that embody our belief that thoughtful design can transform everyday experiences.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Design Philosophy */}
      <section className="mb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary/10 text-primary mb-4">Our Philosophy</span>
            <h2 className="heading-lg mb-6">
              Design That Matters
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe that good design should be accessible, functional, and bring joy to daily living.
              Our collection represents our commitment to thoughtful curation of products that are:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">1</span>
                <div>
                  <h3 className="font-medium">Functional & Beautiful</h3>
                  <p className="text-sm text-muted-foreground">Products that solve real problems while looking great.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">2</span>
                <div>
                  <h3 className="font-medium">Thoughtfully Made</h3>
                  <p className="text-sm text-muted-foreground">Created with attention to detail and quality craftsmanship.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">3</span>
                <div>
                  <h3 className="font-medium">Timeless, Not Trendy</h3>
                  <p className="text-sm text-muted-foreground">Designed to last and stay relevant for years to come.</p>
                </div>
              </li>
            </ul>
            
            <Button asChild>
              <Link to="/products">
                Explore Our Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]"
          >
            <img
              src="/product-2.jpg"
              alt="Our design philosophy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom max-w-5xl text-center">
          <span className="badge bg-primary/10 text-primary mb-4">Sustainability</span>
          <h2 className="heading-lg mb-6">
            Committed to Responsible Practices
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We believe good design and sustainability go hand in hand. We're committed to reducing our environmental impact through thoughtful choices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121 19 19m-7-7 7-7m-7 7-7 7m7-7-7-7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Mindful Materials</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize products made from sustainable, renewable, or recycled materials.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 22v-2m0-12V6m0-4V2m19 0v2m0 12v2m0 4v2M3 12h18" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Built to Last</h3>
              <p className="text-sm text-muted-foreground">
                Durable products mean less waste. Everything we offer is designed for longevity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Ethical Sourcing</h3>
              <p className="text-sm text-muted-foreground">
                We partner with suppliers who share our values of ethical production and fair labor practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Experience the Difference of Thoughtful Design
            </h2>
            <p className="text-muted-foreground mb-8">
              Join us in our commitment to a more considered way of living through beautifully designed, purposeful products.
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                Shop the Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
