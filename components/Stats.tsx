import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Vetted Developers",
      description: "Ready to join your team",
    },
    {
      number: "5,000+",
      label: "Companies",
      description: "Trust our platform",
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Successful long-term matches",
    },
    {
      number: "24hrs",
      label: "Average Match Time",
      description: "From posting to first candidates",
    },
  ];

  return (
    <section className="py-20 bg-brand-gradient text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing community of successful developers and companies building the future together
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
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;