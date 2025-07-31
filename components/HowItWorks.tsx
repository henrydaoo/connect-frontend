"use client";
import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your profile and tell us about your skills or hiring needs",
      forDevelopers: "Build your developer profile with skills, experience, and portfolio",
      forCompanies: "Set up your company profile and describe your ideal candidates",
    },
    {
      icon: CheckCircle,
      title: "Get Verified",
      description: "Our team reviews and verifies your profile for quality assurance",
      forDevelopers: "Complete technical assessments and background verification",
      forCompanies: "Verify your company details and hiring requirements",
    },
    {
      icon: Handshake,
      title: "Connect",
      description: "Get matched with opportunities or candidates that fit perfectly",
      forDevelopers: "Receive curated job opportunities from top companies",
      forCompanies: "Get introduced to pre-screened, qualified developers",
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
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process to connect the best talent with the best opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative mx-auto w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand to-brand/30 transform translate-x-8"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detailed steps for each user type */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              For Developers
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={`dev-${index}`} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.forDevelopers}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              For Companies
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={`comp-${index}`} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.forCompanies}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;