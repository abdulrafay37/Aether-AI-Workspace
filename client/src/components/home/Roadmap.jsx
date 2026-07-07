import { motion } from "framer-motion";

function Roadmap() {
  const versions = [
    {
      title: "Version 1.0",
      status: "LIVE",
      statusTone: "border-[#E7C78A]/40 bg-[#E7C78A]/15 text-[#E7C78A]",
      accent: "border-[#E7C78A]/40 shadow-[0_0_70px_rgba(231,199,138,0.22)]",
      features: [
        { icon: "✨", label: "Premium Landing Page" },
        { icon: "🤖", label: "Gemini AI Chat" },
        { icon: "📱", label: "Responsive Design" },
        { icon: "⚡", label: "Live on Vercel" },
      ],
    },
    {
      title: "Version 1.5",
      status: "IN DEVELOPMENT",
      statusTone: "border-[#F7E7CE]/20 bg-[#F7E7CE]/10 text-[#F7E7CE]",
      accent: "border-[#F7E7CE]/20",
      features: [
        { icon: "🧭", label: "Functional Navbar" },
        { icon: "🔐", label: "Login System" },
        { icon: "🧠", label: "Better Workspace" },
        { icon: "🎞", label: "Improved Animations" },
      ],
    },
    {
      title: "Version 2.0",
      status: "COMING SOON",
      statusTone: "border-white/10 bg-white/5 text-gray-300",
      accent: "border-white/10",
      features: [
        { icon: "📄", label: "PDF Analyzer" },
        { icon: "🎤", label: "Voice AI" },
        { icon: "🖼", label: "Image Generation" },
        { icon: "🤝", label: "AI Agents" },
        { icon: "👥", label: "Team Collaboration" },
        { icon: "☁", label: "Cloud Sync" },
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#E7C78A]/30 bg-[#E7C78A]/10 px-4 py-1 text-sm text-[#E7C78A]">
            Roadmap
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building the future of Aether AI.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            A clear path from the current experience to the next generation of AI tools.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {versions.map((version, index) => (
            <motion.article
              key={version.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-[28px] border bg-[#0b1220]/80 p-8 shadow-[0_0_70px_rgba(231,199,138,0.08)] backdrop-blur-xl ${version.accent} ${index === 0 ? "scale-[1.02] lg:scale-[1.04]" : ""}`}
            >
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(231,199,138,0.16),_transparent_55%)] opacity-80" />
              <div className="absolute inset-x-10 bottom-6 h-20 rounded-full bg-[#E7C78A]/15 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{version.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${version.statusTone}`}>
                    {version.status}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {version.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-3 text-sm leading-7 text-gray-300">
                      <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E7C78A]/15 text-sm text-[#E7C78A]">
                        {feature.icon}
                      </span>
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#E7C78A]/30 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F7E7CE] transition hover:border-[#E7C78A]/50 hover:bg-white/10">
            Explore Updates
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
