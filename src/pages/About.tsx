import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Genesis",
      description:
        "Nexovora emerged from the crucible of academic innovation, founded with a singular vision: to bridge the gap between theoretical brilliance and practical impact.",
    },
    {
      year: "2024",
      title: "First Breakthroughs",
      description:
        "Launch of PrintSpark and the unveiling of our Mini ADAS prototype. We moved from concept to reality, proving that student-led innovation can rival industry standards.",
    },
    {
      year: "2025",
      title: "Global Horizons",
      description:
        "Scaling our operations and refining our AI Traffic Controller. We are now poised to redefine urban mobility and educational infrastructure on a global scale.",
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
              Our <span className="text-accent">Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              From the halls of academia to the forefront of technological evolution. 
              We are <span className="text-premium font-semibold">Nexovora</span> — 
              architects of the future, builders of the impossible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-3xl border-l-4 border-accent">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To engineer digital solutions that transcend boundaries. We don't just write code; 
                  we craft ecosystems that solve critical problems in education, mobility, and infrastructure. 
                  We believe technology is the ultimate lever for human progress.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl border-l-4 border-premium">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A world where technology is seamless, intelligent, and universally accessible. 
                  We envision Nexovora as the catalyst for a smarter, safer, and more connected tomorrow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-premium to-accent opacity-20 blur-3xl rounded-full" />
              <div className="glass-panel p-10 rounded-[2rem] relative border border-white/10">
                <h3 className="text-3xl font-display font-bold mb-8 text-center text-white">Core Values</h3>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: "Innovation", desc: "Relentless pursuit of the new." },
                    { title: "Impact", desc: "Measuring success by lives improved." },
                    { title: "Integrity", desc: "Building trust through transparency." },
                    { title: "Excellence", desc: "Good enough is never enough." }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="flex items-center p-4 rounded-xl transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mr-6 border border-white/10">
                        <span className="text-xl font-bold text-accent">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{value.title}</h4>
                        <p className="text-gray-400">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium to-accent">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-24">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between w-full ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-5/12" />
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-accent shadow-[0_0_20px_rgba(233,69,96,0.5)]">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="w-5/12">
                    <div className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-colors group">
                      <span className="text-5xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-accent/20 transition-colors">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                      <p className="text-gray-400 relative z-10">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
