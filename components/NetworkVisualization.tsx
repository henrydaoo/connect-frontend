"use client";
import { motion } from "framer-motion";
import {
  Github,
  Slack,
  Figma,
  Chrome,
  FileText,
  Video,
  MessageSquare,
  Calendar,
} from "lucide-react";

const NetworkVisualization = () => {
  const appIcons = [
    { icon: Github, position: "top-12 left-16", delay: 0.1 },
    { icon: Slack, position: "top-16 right-20", delay: 0.2 },
    { icon: Figma, position: "top-1/3 left-8", delay: 0.3 },
    { icon: Chrome, position: "top-1/3 right-12", delay: 0.4 },
    { icon: FileText, position: "bottom-1/3 left-12", delay: 0.5 },
    { icon: Video, position: "bottom-1/3 right-8", delay: 0.6 },
    { icon: MessageSquare, position: "bottom-16 left-20", delay: 0.7 },
    { icon: Calendar, position: "bottom-12 right-16", delay: 0.8 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stay in Sync, <br />
            Communicate <span className="text-brand">Clearly</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Integrate seamlessly with all your favorite apps to build a unified,
            customized workspace that perfectly aligns with your team&apos;s
            needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-3xl p-12 min-h-[500px]">
            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 400"
            >
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
              <g opacity="0.4">
                <path
                  d="M300 200 L150 80"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L450 100"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L120 150"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L480 160"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L140 250"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L460 240"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L170 320"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
                <path
                  d="M300 200 L430 300"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
              </g>
            </svg>

            {appIcons.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: app.delay }}
                  viewport={{ once: true }}
                  className={`absolute ${app.position} w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow`}
                >
                  <IconComponent className="w-6 h-6 text-brand" />
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand rounded-full shadow-xl flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-brand rounded-full"></div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <div className="space-y-4">
                <div className="w-12 h-6 bg-brand rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="space-y-4">
                <div className="w-12 h-6 bg-brand rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkVisualization;
