import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "10K+", title: "Active Users" },
    { number: "500K+", title: "AI Conversations" },
    { number: "99.9%", title: "Uptime" },
    { number: "24/7", title: "AI Availability" },
  ];

  return (
    <section className="bg-[#02040c] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#94a3b8]">Performance Metrics</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Trusted by modern teams.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#c5b08b]">
            Built for fast AI workflows, Aether AI delivers enterprise-grade reliability and growth-ready performance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[2rem] border border-white/10 bg-[#0b1220]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <p className="text-5xl font-black text-white">{item.number}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#c5b08b]">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
