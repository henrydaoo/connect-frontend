"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Shield, Zap, Target } from "lucide-react";
import Image from "next/image";

const ForCompanies = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Pre-Vetted Talent",
      description:
        "All developers pass rigorous technical and soft skills assessments",
    },
    {
      icon: Clock,
      title: "Faster Hiring",
      description:
        "Reduce time-to-hire from months to weeks with our streamlined process",
    },
    {
      icon: Target,
      title: "Perfect Matches",
      description: "AI-powered matching ensures cultural and technical fit",
    },
    {
      icon: Users,
      title: "Scalable Teams",
      description: "From single developers to entire development teams",
    },
    {
      icon: Zap,
      title: "Quick Onboarding",
      description: "Developers are ready to contribute from day one",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "30-day satisfaction guarantee with free replacements",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Tell Us Your Needs",
      description: "Share your project requirements and team culture",
    },
    {
      step: "02",
      title: "Get Matched",
      description: "Receive curated developer profiles within 24 hours",
    },
    {
      step: "03",
      title: "Interview & Select",
      description: "Interview pre-vetted candidates and make your choice",
    },
    {
      step: "04",
      title: "Start Building",
      description: "Onboard your new team member and start shipping code",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small teams",
      features: [
        "Post 1 job",
        "Basic candidate matching",
        "Email support",
        "30-day trial",
      ],
    },
    {
      name: "Professional",
      price: "$99/month",
      description: "For growing companies",
      features: [
        "Unlimited job posts",
        "Advanced matching",
        "Priority support",
        "Analytics dashboard",
        "Team collaboration tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom reporting",
        "White-label options",
      ],
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
                Hire the Top <span className="text-brand">3%</span> of
                Developers
              </h1>
              <p className="text-xl text-muted-foreground">
                Scale your development team with pre-vetted, world-class
                software engineers ready to make an immediate impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="brand" size="lg">
                  Start Hiring
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/team-collaboration.jpg"
                alt="Team Collaboration"
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
              Why Companies Trust Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of companies that have successfully scaled their
              teams
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
              How Our Hiring Process Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From requirement to hire in just a few simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your hiring needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-xl p-8 relative ${
                  plan.popular ? "border-brand shadow-brand" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-brand mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        size={20}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "brand" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
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
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-blue-100">
              Start hiring world-class developers today
            </p>
            <Button
              variant="outline"
              size="lg"
              className=" border-white hover:bg-white text-brand"
            >
              Post Your First Job
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
