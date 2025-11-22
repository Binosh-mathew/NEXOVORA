import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const products = [
    {
      name: "PrintSpark",
      description: "Digital print management platform revolutionizing campus printing",
      icon: "🖨️",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      name: "Mini ADAS",
      description: "Driver assistance prototype enhancing road safety with AI",
      icon: "🚗",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4,
    },
    {
      name: "AI Traffic Controller",
      description: "Smart signal management optimizing traffic flow in real-time",
      icon: "🚦",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden [perspective:1000px]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-premium/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" 
          />
        </div>

        {/* 3D Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center [transform-style:preserve-3d]">
          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tight drop-shadow-2xl">
              NEXOVORA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8 leading-relaxed">
              Engineering <span className="text-accent font-semibold">Impact</span>. 
              Building the <span className="text-premium font-semibold">Future</span>.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108, 99, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-lg transition-all"
                >
                  Explore Innovation
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-lg backdrop-blur-sm transition-all hover:border-white/50"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
        </motion.div>
      </section>

      {/* Products Preview Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-premium font-semibold tracking-widest uppercase mb-4">Our Innovations</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Shaping Tomorrow's Technology</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: product.delay }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-10 rounded-bl-full transition-all group-hover:scale-150 group-hover:opacity-20`} />
                
                <div className="text-6xl mb-6 relative z-10">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{product.name}</h3>
                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">
                  {product.description}
                </p>
                
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-white font-semibold group-hover:text-accent transition-colors"
                >
                  Learn more 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Founded", value: "2023" },
              { label: "Products", value: "3+" },
              { label: "Team Members", value: "10+" },
              { label: "Impact", value: "Unlimited" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 uppercase tracking-wider text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-premium/10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-panel p-12 rounded-[3rem]"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join us on our journey to revolutionize technology and create meaningful impact.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-premium to-accent rounded-full text-white font-bold text-xl shadow-lg shadow-premium/30"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
