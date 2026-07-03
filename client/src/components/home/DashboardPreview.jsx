import { motion } from "framer-motion";

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="dashboard-preview relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(20,20,20,0.55)] p-6 shadow-[0_0_60px_rgba(255,170,70,0.12)] backdrop-blur-[24px]"
    >
      <div className="absolute -top-16 right-2 h-32 w-32 rounded-full bg-gradient-to-br from-[#F7E7CE]/20 to-transparent blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(247,231,206,0.12),transparent_45%)]" />
      <div className="absolute right-6 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-[#f7e5c0] backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.08)]">
        <span className="h-2 w-2 rounded-full bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.4)]" />
        Live preview
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between rounded-3xl bg-[#11131b]/90 px-5 py-4 shadow-sm border border-white/5">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#94a3b8]">Aether AI Workspace</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Workspace Hub</h2>
          </div>
          <div className="rounded-2xl bg-[#111827] px-3 py-2 text-xs font-semibold text-[#f8f8ff]/90">
            Live
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { value: "98.4%", label: "Accuracy", accent: "from-[#F7E7CE] to-[#E7C78A]" },
            { value: "4.8s", label: "Avg. response", accent: "from-[#7C3AED] to-[#60A5FA]" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/5 bg-white/5 p-4 backdrop-blur-lg">
              <p className="text-sm uppercase tracking-[0.22em] text-[#94a3b8]">{stat.label}</p>
              <p className={`mt-3 text-3xl font-semibold text-white bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {[
            { name: "AI Chat", description: "Chat with AI and get intelligent responses", icon: "💬" },
            { name: "Code Assistant", description: "Write, debug and optimize your code", icon: "</>" },
            { name: "PDF Analyzer", description: "Analyze and summarize any PDF instantly", icon: "📄" },
          ].map((item) => (
            <div key={item.name} className="group relative flex items-start gap-4 overflow-hidden rounded-[1.75rem] border border-white/5 bg-white/5 px-4 py-4 transition hover:-translate-y-1 hover:border-[#E7C78A]/40 hover:bg-[#ffffff12]">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-[#111827] text-xl text-[#F7E7CE] shadow-lg shadow-[#00000040]">
                {item.icon}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm leading-6 text-[#c5b08b]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/5 bg-[#0f1220]/80 p-4 backdrop-blur-lg">
          <div className="flex items-center justify-between text-sm text-[#94a3b8]">
            <span>AI Request Volume</span>
            <span className="text-white">+18.2%</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#c5b08b]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#F7E7CE]">Peak +23%</span>
            <div className="flex items-center gap-2">
              <div className="relative h-1 w-16 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-1 w-6 rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A]"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-7 top-0 h-1 w-4 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] opacity-90"
                  animate={{ x: [0, -6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                />
                <motion.div
                  className="absolute left-12 top-0 h-1 w-2 rounded-full bg-gradient-to-r from-[#A855F7] to-transparent"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
              </div>
              <span className="uppercase tracking-[0.18em] text-[#94a3b8]">trend</span>
            </div>
          </div>
          <div className="mt-4 h-24 overflow-hidden rounded-[1.5rem] bg-[#02040c]/90 p-3">
            <div className="relative flex h-full items-end gap-2">
              {[
                { height: "24%", color: "from-[#F7E7CE] to-transparent" },
                { height: "42%", color: "from-[#E7C78A] to-transparent" },
                { height: "34%", color: "from-[#A855F7] to-transparent" },
                { height: "56%", color: "from-[#38BDF8] to-transparent" },
                { height: "30%", color: "from-[#F7E7CE] to-transparent" },
                { height: "52%", color: "from-[#E7C78A] to-transparent" },
                { height: "20%", color: "from-[#60A5FA] to-transparent" },
              ].map((bar, index) => (
                <motion.div
                  key={index}
                  className={`relative h-full w-[8%] rounded-full bg-gradient-to-t ${bar.color} opacity-80`}
                  initial={{ scaleY: 0.4 }}
                  animate={{ scaleY: [0.4, 1, 0.4] }}
                  transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                  style={{ transformOrigin: "bottom" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardPreview;