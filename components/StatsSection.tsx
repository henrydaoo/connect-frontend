"use client";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      value: "90M+",
      label: "Active Users",
      description: "developers worldwide"
    },
    {
      value: "200K+",
      label: "Companies",
      description: "trust our platform"
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "guaranteed availability"
    },
    {
      value: "150+",
      label: "Countries",
      description: "global presence"
    }
  ];

  return (
    <section className="py-20 bg-brand text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Join Our Amazing Network
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with millions of developers and thousands of companies worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-200">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;