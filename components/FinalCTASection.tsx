"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-brand-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Take Your Teamwork to the Next Level
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of developers and companies who trust Connect to build the future of technology together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand min-w-[200px]">
              Get Started
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-brand hover:bg-blue-50 min-w-[200px]">
              Learn More
            </Button>
          </div>

          <div className="pt-8 text-blue-200">
            <p>Join 50,000+ developers and 5,000+ companies worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;