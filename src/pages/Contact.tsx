import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "contactnexovora@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
      link: "mailto:contactnexovora@gmail.com",
    },
    {
      title: "Phone",
      value: "+91 7510782581",
      icon: <FaPhone className="text-2xl" />,
      link: "tel:+15551234567",
    },
    {
      title: "Location",
      value: "Kottayam, Kerala, India",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      link: "#",
    },
    {
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM",
      icon: <FaClock className="text-2xl" />,
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/nexovora",
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nexovora",
      icon: <FaTwitter className="text-xl" />,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/nexovora",
      icon: <FaGithub className="text-xl" />,
      color: "hover:text-gray-800",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nexovora",
      icon: <FaInstagram className="text-xl" />,
      color: "hover:text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-premium/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl">
              Let's <span className="text-accent">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start a conversation? Whether you have a question, a proposal, or just want to say hello, we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 outline-none"
                    placeholder="Nexovora Inc."
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors"
                  >
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white appearance-none outline-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-900">Select a subject</option>
                      <option value="general" className="bg-neutral-900">General Inquiry</option>
                      <option value="product" className="bg-neutral-900">Product Information</option>
                      <option value="partnership" className="bg-neutral-900">Partnership Opportunity</option>
                      <option value="career" className="bg-neutral-900">Career Inquiry</option>
                      <option value="support" className="bg-neutral-900">Technical Support</option>
                      <option value="media" className="bg-neutral-900">Media/Press</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-premium to-accent hover:shadow-[0_0_30px_rgba(233,69,96,0.4)] transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-[2rem] border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We're here to help and answer any questions you might have.
                  Reach out through any of the following channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mr-6 group-hover:scale-110 transition-transform border border-white/10">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">
                          {info.title}
                        </h3>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 rounded-[2rem] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent transition-all duration-300 border border-white/10"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-card p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-premium/20 to-transparent">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Sunday</span>
                    <span className="font-semibold text-accent">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about Nexovora and our services.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                question: "What types of partnerships does Nexovora explore?",
                answer:
                  "We're interested in strategic partnerships with educational institutions, technology companies, government agencies, and organizations that share our vision for impactful innovation.",
              },
              {
                question: "How can I schedule a demo of your products?",
                answer:
                  "You can request a demo by filling out our contact form above, selecting 'Product Information' as the subject, and mentioning which product you're interested in seeing.",
              },
              {
                question: "Do you offer internship programs?",
                answer:
                  "Yes! We regularly offer internships across engineering, design, product management, and research roles. Please contact us directly for current openings.",
              },
              {
                question: "Can I visit your office?",
                answer:
                  "Absolutely! We welcome visitors to our incubator space. Please reach out in advance to schedule a visit and we'll be happy to show you around.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl hover:border-accent/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-accent mr-3">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8 border-l-2 border-white/10">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
