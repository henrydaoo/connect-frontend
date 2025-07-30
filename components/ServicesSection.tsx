"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const developerImage = "/developer-professional.jpg";
const teamImage = "/team-collaboration.jpg";
const globalImage = "/global-network.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Freelancers",
      description: "Connect with top-tier freelance developers ready to tackle your next project. Get access to vetted talent with proven track records.",
      image: developerImage,
      link: "/for-developers"
    },
    {
      title: "Businesses",
      description: "Scale your development team with our curated pool of professional developers. Perfect for startups and enterprises.",
      image: teamImage,
      link: "/for-companies"
    },
    {
      title: "Marketplaces",
      description: "Join our global marketplace where innovation meets opportunity. Connect, collaborate, and create the future of technology.",
      image: globalImage,
      link: "/jobs"
    }
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
            WHO WE SERVE
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting talent with opportunity across different segments
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-brand font-semibold hover:text-brand-dark transition-colors"
                >
                  Learn More →
                </a>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-section w-full h-80 object-cover"
                  width={800}
                  height={320}
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;