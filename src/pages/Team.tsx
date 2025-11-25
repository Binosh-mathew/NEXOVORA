import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    name: "Binosh T Mathew",
    role: "CEO & Founder",
    img: "/CEO.jpg",
    bio: "Visionary leader with a passion for innovation and growth.",
    socials: {
      linkedin: "https://www.linkedin.com/in/binoshtmathew/",
      github: "https://github.com/Binosh-mathew",
      instagram: "https://www.instagram.com/_binosh__?igsh=MXZleWRnMW9pdGlweQ==",
      email: "mailto:binoshmathew2004@gmail.com",
    },
  },
  {
    name: "Aromal Sunil",
    role: "CTO",
    img: "/Sunil.jpg",
    bio: "Tech enthusiast and architect of scalable solutions.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aromal-sunil/",
      github: "https://github.com/aromal0708",
      instagram: "https://www.instagram.com/_mr_spartan___?igsh=MTJvMHZlOW8zM3dudA==",
      website: "https://aromal.tech",
      email: "mailto:aromalsunil711@gmail.com",
    },
  },
  {
    name: "Aaromal K J",
    role: "Designer",
    img: "/KJ 2.jpg",
    bio: "Crafting beautiful and intuitive user experiences.",
    socials: {
      linkedin: "https://linkedin.com/in/aaromalkj",
      github: "https://github.com/aaromalkj",
      instagram: "https://www.instagram.com/unloosed_chunk",
      email: "mailto:aaromal@example.com",
    },
  },
  {
    name: "Evan Punnen Jaocb",
    role: "COO",
    img: "/Evan.jpg",
    bio: "Ensuring smooth operations and team synergy.",
    socials: {
      linkedin: "https://www.linkedin.com/in/evanpunnenjacob/",
      github: "https://github.com/evanjacob",
      instagram: "https://www.instagram.com/__evanjacob?igsh=MWZiMzUxajliMWY3Zg==",
      website: "https://evanpunnenjacob.tech",
      email: "mailto:evanpunnenjacob@gmail.com",
    },
  },
  {
    name: "Amal Xavier",
    role: "Content Creator",
    img: "/IMG_2190.JPG",
    bio: "Storyteller and creative content strategist.",
    socials: {
      linkedin: "https://linkedin.com/in/amalxavier41134@gmail.com",
      github: "https://github.com/Amal-Xavier",
      instagram: "https://www.instagram.com/amalxavier____111",
      email: "mailto:amalxavier@example.com",
    },
  },
  {
    name: "Dan Eldho Anil",
    role: "CFO",
    img: "/Dan.png",
    bio: "Master of numbers and financial planning.",
    socials: {
      linkedin: "https://www.linkedin.com/in/daneldhoanil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/_ohh.dan?igsh=MW4weHE3cGhlcmRoNQ%3D%3D&utm_source=qr",
      email: "mailto:daneldhoa@gmail.com",
    },
  },
  {
    name: "Amal George Mathew",
    role: "Media",
    img: "/amal.png",
    bio: "Capturing moments and building brand presence.",
    socials: {
      linkedin: "https://www.linkedin.com/in/amal-george-mathew-2a790026a/",
      instagram: "https://www.instagram.com/amal_georgemathew?igsh=Z2hwMWF6MWE5ZWRh",
      email: "mailto:amalgm03@gmail.com",
    },
  },
  {
    name: "Devanarayanan H",
    role: "CMO",
    img: "/WhatsApp Image 2025-07-08 at 22.38.09_48817f55.jpg",
    bio: "Driving growth through creative marketing.",
    socials: {
      linkedin: "https://www.linkedin.com/in/devanarayananh/",
      github: "https://github.com/devanh",
      email: "mailto:narayanan011010@gmail.com",
    },
  },
];

// Social icon components using React Icons
const socialIcons = {
  linkedin: <FaLinkedin className="w-5 h-5" />,
  github: <FaGithub className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  website: <FaGlobe className="w-5 h-5" />,
  email: <FaEnvelope className="w-5 h-5" />,
};

function Team() {
  const [selected, setSelected] = useState<null | (typeof team)[0]>(null);
  return (
    <div className="min-h-screen pt-20 bg-background text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-premium/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl">
              The <span className="text-accent">Visionaries</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Meet the minds behind the magic. A collective of innovators, dreamers, and doers shaping the future of Nexovora.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onClick={() => setSelected(member)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-premium to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl" />
                <div className="glass-card relative p-6 rounded-2xl h-full border border-white/10 hover:border-accent/50 transition-all duration-500 transform group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-premium to-accent rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                    <img
                      src={member.img}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-2 border-white/20 group-hover:border-white transition-colors duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-premium mb-3 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Icons - Slide up on hover */}
                  <div className="flex justify-center gap-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {Object.entries(member.socials).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {socialIcons[key as keyof typeof socialIcons]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup for Team Member Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative glass-panel w-full max-w-2xl rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{selected.name}</h3>
                  <p className="text-accent font-semibold text-lg mb-6">{selected.role}</p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {selected.bio}
                  </p>
                  
                  <div className="flex gap-4">
                    {Object.entries(selected.socials).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-white transition-all duration-300 border border-white/10"
                      >
                        {socialIcons[key as keyof typeof socialIcons]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Team;
