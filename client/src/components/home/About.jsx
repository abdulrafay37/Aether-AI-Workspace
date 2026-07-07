import { motion } from "framer-motion";

function About() {
  const stats = [
    { value: "100%", label: "Focus on AI-first experiences" },
    { value: "24/7", label: "Built for continuous iteration" },
    { value: "3+", label: "Core product pillars" },
    { value: "1", label: "Mission: Make AI simple" },
  ];

  return (
    <section id="about" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#E7C78A]/30 bg-[#E7C78A]/10 px-4 py-1 text-sm text-[#E7C78A]">
            About Aether AI
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built with curiosity, consistency, and ambition.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            Aether AI is a modern AI workspace designed to make intelligent tools feel simple, elegant, and useful from the very first interaction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
            className="rounded-[32px] border border-[#E7C78A]/20 bg-[#0b1220]/80 p-8 shadow-[0_0_70px_rgba(231,199,138,0.12)] backdrop-blur-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-3xl font-semibold text-[#E7C78A]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="rounded-[32px] border border-[#E7C78A]/20 bg-gradient-to-br from-[#101726] to-[#0b1220] p-8 shadow-[0_0_70px_rgba(231,199,138,0.12)]"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#E7C78A]">Founder</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Abdul Rafay</h3>
            <p className="mt-3 text-lg leading-8 text-gray-300">
              Computer Science Student at COMSATS University
            </p>
            <p className="mt-4 text-base leading-8 text-gray-400">
              Founder of Aether AI, building thoughtful AI experiences that feel natural, fast, and human-centered.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
