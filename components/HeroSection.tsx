"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Floating avatar elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-32 left-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-48 right-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-32 left-32 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-4xl mx-auto pt-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-brand rounded-full"></span>
            So Starting a Project
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Empower Your Team with{" "}
            <span className="text-brand">
              Seamless Collaboration
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring your team together, no matter where they are. Experience real-time collaboration, file sharing, and project management in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent outline-none flex-1 min-w-[250px] text-gray-700"
              />
            </div>
            <Button variant="brand" size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4">
              Get Started
            </Button>
          </div>

          {/* Company logos */}
          <div className="pt-16">
            <p className="text-sm text-gray-500 mb-8">More than 500+ companies used us</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-gray-400 font-bold">Discord</div>
              <div className="text-gray-400 font-bold">Evernote</div>
              <div className="text-gray-400 font-bold">Airtable</div>
              <div className="text-gray-400 font-bold">Dropbox</div>
              <div className="text-gray-400 font-bold">Square</div>
              <div className="text-gray-400 font-bold">Dropbox</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;