"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    // Handle form submission
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@connect.dev",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Come say hello!",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly",
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
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Get in <span className="text-brand">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Developer Support">
                        Developer Support
                      </option>
                      <option value="Company Support">Company Support</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Press">Press</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="bg-brand p-3 rounded-lg">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-brand font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand text-white rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-blue-100 mb-6">
                  Check our help center for quick answers to common questions.
                </p>
                <Button
                  variant="outline"
                  className="w-full text-white border-white hover:bg-white hover:text-brand"
                >
                  Visit Help Center
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with the latest news and updates from Connect.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-brand hover:text-brand-dark">
                    Twitter
                  </a>
                  <a href="#" className="text-brand hover:text-brand-dark">
                    LinkedIn
                  </a>
                  <a href="#" className="text-brand hover:text-brand-dark">
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about Connect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">
                How do I get started as a developer?
              </h3>
              <p className="text-muted-foreground">
                Simply apply to join our network, complete our technical
                assessment, and create your profile. We'll then match you with
                relevant opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">
                How much does it cost to hire developers?
              </h3>
              <p className="text-muted-foreground">
                We offer flexible pricing plans starting from free for small
                teams to custom enterprise solutions. Check our pricing page for
                details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">
                What is your vetting process?
              </h3>
              <p className="text-muted-foreground">
                All developers go through rigorous technical screenings,
                portfolio reviews, and background checks to ensure only the top
                3% join our network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">
                Do you offer any guarantees?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer a 30-day satisfaction guarantee. If you're not
                happy with your hire, we'll provide a free replacement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
