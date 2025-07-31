"use client";
import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We believe great technology starts with great people. Every decision we make prioritizes our community of developers and companies.",
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in everything we do, from our vetting process to our platform experience.",
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      description:
        "We're constantly evolving and improving our platform to better serve the needs of our global community.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We're building bridges between talent and opportunity across borders, cultures, and time zones.",
    },
  ];

  const stats = [
    { value: "2018", label: "Founded" },
    { value: "50,000+", label: "Developers" },
    { value: "5,000+", label: "Companies" },
    { value: "150+", label: "Countries" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Former VP of Engineering at TechCorp with 15+ years in scaling engineering teams.",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Ex-Google engineer passionate about building tools that empower developers worldwide.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder with experience at GitHub and Stack Overflow, dedicated to developer success.",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Product leader focused on creating intuitive experiences that connect talent with opportunity.",
    },
  ];

  return (
    <div>
      <section className="pt-20 pb-16 bg-brand-gradient-subtle">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Building the Future of{" "}
              <span className="text-brand">Tech Hiring</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect was founded with a simple mission: to bridge the gap
              between exceptional developers and innovative companies building
              the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that great technology is built by great people. Our
                mission is to create a world where talented developers can
                easily connect with companies that value their skills,
                creativity, and potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By maintaining the highest standards for both developers and
                companies on our platform, we ensure that every connection made
                through Connect leads to meaningful, long-term professional
                relationships.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/team-collaboration.jpg"
                alt="Team Mission"
                className="rounded-2xl shadow-section w-full"
                width={600}
                height={400}
                priority
              />
            </motion.div>
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-card transition-all duration-300"
                >
                  <div className="bg-brand p-4 rounded-xl w-fit mx-auto mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
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
              Connect by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our growing community of developers and companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl lg:text-5xl font-bold text-brand">
                  {stat.value}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The people behind Connect&apos;s mission to transform tech hiring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-card transition-all duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  width={96}
                  height={96}
                  unoptimized
                />
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-brand font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio.replace(/'/g, "&apos;")}</p>
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
            <h2 className="text-4xl font-bold">Join Our Growing Community</h2>
            <p className="text-xl text-blue-100">
              Whether you&apos;re a developer looking for your next opportunity or a
              company building your dream team, Connect is here to help you
              succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                For Developers
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-brand transition-colors">
                For Companies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
