import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 6, delay: 0 },
  { left: "18%", top: "42%", size: 5, delay: 0.8 },
  { left: "24%", top: "72%", size: 4, delay: 1.6 },
  { left: "46%", top: "12%", size: 5, delay: 0.4 },
  { left: "58%", top: "34%", size: 6, delay: 1.2 },
  { left: "72%", top: "24%", size: 5, delay: 0.6 },
  { left: "80%", top: "66%", size: 4, delay: 1.8 },
  { left: "64%", top: "78%", size: 7, delay: 0.2 },
  { left: "38%", top: "54%", size: 4, delay: 1.4 },
  { left: "12%", top: "84%", size: 5, delay: 0.7 },
  { left: "88%", top: "42%", size: 5, delay: 1.1 },
  { left: "50%", top: "88%", size: 6, delay: 0.3 },
];

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#0E0B12]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A170D] via-[#111111] to-[#08131C]" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb orb-1"
          animate={{ y: [0, -28, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb orb-2"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="orb orb-3"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          className="hero-wave"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 520 C280 520 420 420 760 460 C1120 500 1280 620 1440 540"
            fill="none"
            stroke="rgba(231,199,138,0.18)"
            strokeWidth="1.5"
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 420 C240 400 520 320 840 380 C1120 440 1320 520 1440 470"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.g
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M0 300 C260 340 520 220 780 310 C1040 400 1250 290 1440 340"
              fill="none"
              stroke="rgba(167,139,250,0.14)"
              strokeWidth="1.2"
            />
          </motion.g>
        </motion.svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6 + index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default HeroBackground;
