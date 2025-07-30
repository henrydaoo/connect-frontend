"use client";
import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Briefcase, Trophy } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Stay in Sync",
      subtitle: "Communicate Clearly",
      description: "Keep your team aligned with real-time collaboration tools and clear communication channels.",
      number: "01"
    },
    {
      icon: CheckCircle,
      title: "Get Verified",
      subtitle: "Assessment Testing",
      description: "Our rigorous testing process ensures only the top 3% of developers join our network.",
      number: "02"
    },
    {
      icon: Briefcase,
      title: "Start Working",
      subtitle: "Client Matching",
      description: "Get matched with projects that align with your skills and career goals.",
      number: "03"
    },
    {
      icon: Trophy,
      title: "Grow Together",
      subtitle: "Continuous Growth",
      description: "Build your career with ongoing support, training, and premium opportunities.",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-brand-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect with top opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand rounded-xl flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="text-center mt-2 text-sm font-bold text-brand">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-brand">
                    {step.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;