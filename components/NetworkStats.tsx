"use client";
import { motion } from "framer-motion";

const NetworkStats = () => {
  const networkStats = [
    {
      value: "2500+",
      label: "Clients"
    },
    {
      value: "4700+",
      label: "Projects"
    },
    {
      value: "1800+",
      label: "Hours"
    },
    {
      value: "95%",
      label: "Success"
    }
  ];

  return (
    <section className="py-20 bg-brand-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Amazing Network
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connecting top talent with leading companies worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {networkStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkStats;