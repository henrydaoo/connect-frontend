import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
const heroImage = "/hero-collaboration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Connect Top{" "}
              <span className="text-brand bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                Developers
              </span>{" "}
              with Leading Tech Companies
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Join thousands of vetted software engineers and innovative
              companies building the future of technology together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="brand" size="lg" className="text-lg px-8 py-6">
              I&apos;m a Developer
            </Button>
            <Button
              variant="brand-outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              I&apos;m Hiring
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>50,000+ Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>5,000+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>95% Success Rate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <Image
              src={heroImage}
              alt="Developers collaborating"
              className="rounded-2xl shadow-section w-full h-auto"
              width={800}
              height={400}
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-card border"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">JS</span>
              </div>
              <div>
                <div className="font-semibold text-sm">JavaScript</div>
                <div className="text-xs text-muted-foreground">
                  15,000+ jobs
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-card border"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">PY</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Python</div>
                <div className="text-xs text-muted-foreground">
                  12,000+ jobs
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
