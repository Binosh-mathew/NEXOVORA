import React from "react";
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const products = [
    {
      name: "PrintSpark",
      tagline: "Revolutionizing Campus Printing",
      description:
        "A comprehensive digital print management platform that transforms how educational institutions handle printing services. From queue management to cost optimization, PrintSpark makes printing smart, efficient, and user-friendly.",
      features: [
        "Smart queue management system",
        "Real-time printer status monitoring",
        "Cost tracking and budget controls",
        "Mobile app for seamless printing",
        "Analytics dashboard for administrators",
        "Eco-friendly printing suggestions",
      ],
      icon: "🖨️",
      color: "from-blue-500 to-cyan-500",
      category: "Education Technology",
      status: "Live",
    },
    {
      name: "Mini ADAS",
      tagline: "Advanced Driver Assistance System",
      description:
        "A prototype driver assistance system that enhances road safety through real-time monitoring and intelligent alerts. Mini ADAS represents our commitment to making transportation safer and smarter.",
      features: [
        "Lane departure warning system",
        "Forward collision detection",
        "Blind spot monitoring",
        "Driver drowsiness detection",
        "Real-time traffic analysis",
        "Emergency response integration",
      ],
      icon: "🚗",
      color: "from-green-500 to-emerald-500",
      category: "Mobility Solutions",
      status: "Prototype",
    },
    {
      name: "AI Traffic Controller",
      tagline: "Intelligent Signal Management",
      description:
        "An AI-powered traffic management system that optimizes signal timing and traffic flow in real-time. This smart solution reduces congestion, improves safety, and creates more efficient urban mobility.",
      features: [
        "Real-time traffic flow optimization",
        "Adaptive signal timing",
        "Emergency vehicle priority",
        "Pedestrian safety enhancement",
        "Data-driven insights dashboard",
        "Integration with city infrastructure",
      ],
      icon: "🚦",
      color: "from-yellow-500 to-orange-500",
      category: "Infrastructure",
      status: "Development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20 bg-background text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 w-[1000px] h-[1000px] bg-premium/5 rounded-full blur-[120px] transform -translate-x-1/2" />
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
              Innovation <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Engineering excellence for a smarter tomorrow. Explore our suite of solutions designed to transform industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-row-dense" : ""
                }`}
              >
                {/* Product Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6 space-x-4">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase ${
                        product.status === "Live"
                          ? "bg-accent/20 text-accent border border-accent/50"
                          : product.status === "Prototype"
                          ? "bg-premium/20 text-premium border border-premium/50"
                          : "bg-highlight/20 text-highlight border border-highlight/50"
                      }`}
                    >
                      {product.status}
                    </span>
                    <span className="text-sm text-gray-400 font-medium tracking-wide uppercase border-l border-gray-700 pl-4">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                    {product.name}
                  </h2>

                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-semibold mb-8">
                    {product.tagline}
                  </p>

                  <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                      <span className="w-8 h-[2px] bg-accent mr-4"></span>
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-300 group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 mr-3 group-hover:scale-150 transition-transform" />
                          <span className="text-base group-hover:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-accent hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(233,69,96,0.3)] hover:shadow-[0_0_30px_rgba(233,69,96,0.5)] hover:-translate-y-1">
                      Explore Solution
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                      Request Demo
                    </button>
                  </div>
                </div>

                {/* Product Visual */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5 }} 
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative perspective-1000"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-premium to-accent opacity-20 blur-3xl rounded-full" />
                    
                    <div className="glass-panel relative w-full aspect-square rounded-[2rem] flex items-center justify-center border border-white/10 overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="text-9xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        {product.icon}
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/10 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Powered by <span className="text-accent">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our stack leverages cutting-edge frameworks to ensure scalability, security, and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "AI/ML", icon: "🤖" },
              { name: "Cloud", icon: "☁️" },
              { name: "Mobile", icon: "📱" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center hover:border-accent/50 transition-colors group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <div className="text-sm font-bold text-gray-300 group-hover:text-white">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-premium/20 to-accent/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join the revolution. Whether you're an institution, a city planner, or an innovator, we have the tools you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-10 py-4 rounded-xl font-bold text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
