/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F23", // Deep midnight blue
        secondary: "#1A1A2E", // Rich dark navy
        accent: "#E94560", // Premium crimson red
        highlight: "#F39C12", // Luxe gold
        premium: "#6C63FF", // Royal purple
        surface: "#16213E", // Elegant dark blue
        background: "#050510", // Very dark background for depth
        muted: "#94A3B8", // Slate 400
        subtle: "#64748B", // Slate 500
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-strong": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"], // For that "classic" feel
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)",
        "accent-gradient": "linear-gradient(135deg, #E94560 0%, #C0392B 100%)",
        "gold-gradient": "linear-gradient(135deg, #F39C12 0%, #D35400 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
        "mesh-gradient": "radial-gradient(circle at 50% 50%, #1A1A2E 0%, #0F0F23 100%)",
      },
      boxShadow: {
        premium: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        neon: "0 0 20px rgba(233, 69, 96, 0.5)",
        "gold-glow": "0 0 20px rgba(243, 156, 18, 0.3)",
        depth: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
        md: "12px",
        lg: "20px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
