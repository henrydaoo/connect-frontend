"use client";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Globe, Shield } from "lucide-react";

const JobCategories = () => {
  const categories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue, Angular, TypeScript",
      jobs: "15,234 jobs",
      color: "bg-blue-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, Java, Go",
      jobs: "12,456 jobs",
      color: "bg-green-500",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "AWS, Docker, Kubernetes, CI/CD",
      jobs: "8,901 jobs",
      color: "bg-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      jobs: "6,789 jobs",
      color: "bg-orange-500",
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "End-to-end web development",
      jobs: "9,876 jobs",
      color: "bg-indigo-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security audits, penetration testing",
      jobs: "4,321 jobs",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Popular Job Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities across the most in-demand tech specializations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 group-hover:border-brand/50">
                  <div className="flex items-start gap-4">
                    <div className={`${category.color} p-3 rounded-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <p className="text-sm font-medium text-brand">
                        {category.jobs}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;