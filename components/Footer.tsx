import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { label: "For Developers", href: "/for-developers" },
      { label: "For Companies", href: "/for-companies" },
      { label: "Browse Jobs", href: "/jobs" },
      { label: "Post a Job", href: "/post-job" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
    Resources: [
      { label: "Help Center", href: "/help" },
      { label: "Pricing", href: "/pricing" },
      { label: "API Documentation", href: "/docs" },
      { label: "Status", href: "/status" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/connect", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/connect",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/connect", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@connect.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-brand mb-4 block">
              Connect
            </Link>
            <p className="text-muted-foreground mb-6">
              Connecting top developers with leading tech companies worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-brand transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm">
            © {(new Date()).getFullYear()} Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
