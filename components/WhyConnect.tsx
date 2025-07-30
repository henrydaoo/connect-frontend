import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Users, Zap, Target, Globe2, Award } from "lucide-react";
import developerImage from "@/assets/developer-professional.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

const WhyConnect = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Vetted Talent",
      description: "All developers go through rigorous technical screening and background checks.",
    },
    {
      icon: Zap,
      title: "Fast Matching",
      description: "Our AI-powered matching connects you with the right opportunities in hours, not weeks.",
    },
    {
      icon: Target,
      title: "Perfect Fit",
      description: "Advanced algorithms ensure skill and culture alignment for long-term success.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Access talent from around the world or find local opportunities in your area.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers guide you through the entire hiring process.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "30-day satisfaction guarantee with full replacement if you're not happy.",
    },
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
            Why Choose Connect?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re more than just a job board. We&apos;re your partner in building exceptional tech teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Companies
              </h3>
              <p className="text-muted-foreground mb-6">
                Hire pre-vetted developers who are ready to contribute from day one
              </p>
            </div>
            
            <div className="relative">
              <Image
                src={teamImage}
                alt="Team collaboration"
                className="rounded-xl shadow-card w-full h-64 object-cover"
                width={800}
                height={256}
                priority
              />
            </div>

            <div className="grid gap-4">
              {features.slice(0, 3).map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="bg-brand p-2 rounded-lg">
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* For Developers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Developers
              </h3>
              <p className="text-muted-foreground mb-6">
                Access exclusive opportunities with top-tier companies worldwide
              </p>
            </div>
            
            <div className="relative">
              <Image
                src={developerImage}
                alt="Professional developer"
                className="rounded-xl shadow-card w-full h-64 object-cover"
                width={800}
                height={256}
                priority
              />
            </div>

            <div className="grid gap-4">
              {features.slice(3, 6).map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="bg-brand p-2 rounded-lg">
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyConnect;