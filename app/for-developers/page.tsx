"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";

const ForDevelopers = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Exclusive Job Opportunities",
      description:
        "Access to premium positions not available on public job boards",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Advance your career with mentorship and skill development programs",
    },
    {
      icon: Globe,
      title: "Remote Work",
      description:
        "Work from anywhere with companies that embrace remote culture",
    },
    {
      icon: Zap,
      title: "Fast Matching",
      description:
        "Get matched with relevant opportunities in hours, not weeks",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join a network of like-minded developers and industry experts",
    },
    {
      icon: Shield,
      title: "Vetted Companies",
      description:
        "All companies are pre-screened for culture, compensation, and growth",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply to Join",
      description: "Submit your application with portfolio and experience",
    },
    {
      number: "02",
      title: "Technical Assessment",
      description: "Complete our comprehensive technical evaluation",
    },
    {
      number: "03",
      title: "Profile Creation",
      description: "Build your professional developer profile",
    },
    {
      number: "04",
      title: "Get Matched",
      description: "Receive curated job opportunities from top companies",
    },
  ];

  return (
    <div>
      <section className="pt-20 pb-16 bg-brand-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Unlock Your <span className="text-brand">Developer</span>{" "}
                Potential
              </h1>
              <p className="text-xl text-muted-foreground">
                Join the top 3% of developers and access exclusive opportunities
                with leading tech companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="brand" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  View Requirements
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/developer-professional.jpg"
                alt="Professional Developer"
                className="rounded-2xl shadow-section w-full"
                width={600}
                height={400}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Top Developers Choose Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful developers who&apos;ve advanced their
              careers with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300"
                >
                  <div className="bg-brand p-3 rounded-lg w-fit mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
              How to Get Started
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our elite network of developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold">
              Ready to Level Up Your Career?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of developers who&apos;ve transformed their careers with
              Connect
            </p>
            <Button
              variant="outline"
              size="lg"
              className=" border-white hover:bg-white text-brand"
            >
              Apply to Join Network
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForDevelopers;
