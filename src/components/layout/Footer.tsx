import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Products", path: "/products" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
    ],
  };

  return (
    <footer className="relative bg-background pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <motion.img
                src="NEXOVORAwhitelogo.png"
                alt="Nexovora Logo"
                className="h-12 w-auto mr-4"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">Nexovora</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              A next-gen tech company incubated in college, building impactful
              digital solutions in education, mobility, and infrastructure.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: IoLogoLinkedin, href: "https://linkedin.com/company/nexovora" },
                { icon: MdOutlineEmail, href: "mailto:info@nexovora.com" },
                { icon: IoLogoInstagram, href: "https://instagram.com/nexovora" },
                { icon: IoLogoGithub, href: "https://github.com/nexovora" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-premium hover:border-premium transition-all duration-300 shadow-lg hover:shadow-premium/30"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nexovora. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Designed with <span className="text-accent">♥</span> by Nexovora Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
