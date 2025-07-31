"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-80">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 320"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#e5e7eb" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path
                  d="M80 60 Q200 80 320 100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M60 160 Q200 140 340 160"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M100 260 Q200 240 300 220"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M200 60 L200 160"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <path
                  d="M200 160 L200 260"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  opacity="0.4"
                />
              </svg>

              <div className="absolute top-8 left-12 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <div className="absolute top-8 right-12 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <div className="absolute top-32 left-4 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <div className="absolute bottom-16 left-16 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand" />
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand rounded-full shadow-xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Makes Connect the Best Choice for You?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Vetted Developers
                  </h3>
                  <p className="text-gray-600">
                    Connect with pre-screened, top-tier developers who have been
                    thoroughly vetted for technical skills and professionalism.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600">
                    Enjoy secure, hassle-free payments with encrypted
                    transactions, convenient payment scheduling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Project Management
                  </h3>
                  <p className="text-gray-600">
                    Track progress, manage deadlines, and collaborate
                    efficiently with integrated project management tools.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              Connect offers expert solutions, streamlined processes, and secure
              access—empowering you to manage your projects effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
