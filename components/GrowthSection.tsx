"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const GrowthSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Curved background container */}
          <div className="relative bg-brand rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Top circular element */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-brand-dark rounded-full shadow-2xl"></div>
            
            {/* Curved white notch at top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-white rounded-b-full"></div>

            {/* Content */}
            <div className="text-center space-y-8 px-8 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
                GROW BEYOND BORDERS WITH CONNECT
              </h2>

              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Whether You&apos;re Finding A Developer Or A Full Team Connection, Connect Makes It Simple, Fast, Secure, And With No Card Fees To Worry About.
              </p>

              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white hover:text-brand bg-transparent px-8 py-3 rounded-full">
                Explore More →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthSection;