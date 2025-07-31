import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import globalNetworkImage from "@/assets/global-network.jpg";

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url(${globalNetworkImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-6">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful developers and companies who&apos;ve found their perfect match through Connect. 
            Start your journey today and discover unlimited possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-brand hover:bg-white/90"
            >
              Join as Developer
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand"
            >
              Hire Developers
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-80">To join and get started</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Support available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Satisfaction guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;