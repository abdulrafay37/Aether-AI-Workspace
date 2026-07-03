import { motion } from "framer-motion";

function AIWorkspaceDemo() {
  return (
    <section className="bg-[#02040c] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7C78A]/50 bg-[#ffffff0d] px-4 py-2 text-sm font-semibold text-[#F7E7CE] shadow-[0_10px_30px_rgba(231,199,138,0.12)]">
                Live product demo
              </span>
              <h2 className="text-5xl font-extrabold text-white sm:text-6xl">
                Experience how Aether AI actually works
              </h2>
              <p className="max-w-xl text-lg leading-8 text-[#c5b08b]">
                Showcase a polished SaaS workflow with AI-powered chat, code assistance, and instant responses that feel real.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "AI Chat for natural dialogue",
                "Code Assistant that writes fast",
                "Voice AI responses in real time",
                "Professional interface for product buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#E7C78A] text-sm font-bold text-[#0b1220] shadow-[0_16px_40px_rgba(231,199,138,0.18)]">
                    ✓
                  </span>
                  <p className="text-base font-medium text-[#f8f4e3]">{item}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-10 py-4 text-base font-semibold text-[#0b1220] shadow-[0_18px_50px_rgba(231,199,138,0.22)] transition duration-200"
            >
              See the AI demo
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d16]/95 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_25%),radial-gradient(circle_at_80%_20%,_rgba(231,199,138,0.12),_transparent_26%)] opacity-80" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#0c1120]/90 px-4 py-4 text-sm text-[#c5b08b] shadow-sm">
                <div>
                  <p className="font-semibold text-white">AI Workspace Preview</p>
                  <p className="text-xs text-[#94a3b8]">Simulated assistant interface</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E7C78A]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E7C78A]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E7C78A]/50" />
                </div>
              </div>

              <div className="space-y-4 rounded-[1.75rem] bg-[#0b1220]/90 p-6 ring-1 ring-white/10">
                <div className="space-y-3">
                  <div className="rounded-[1.5rem] bg-[#111827] p-4 text-[#f8f4e3] shadow-sm ring-1 ring-white/5">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#94a3b8]">You</p>
                    <p className="mt-2 text-base leading-7">Create a login page</p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#121a2f] p-4 text-[#f8f4e3] shadow-sm ring-1 ring-white/5">
                    <div className="flex items-center justify-between text-sm font-semibold text-[#f8f4e3]">
                      <span>AI Assistant</span>
                      <span className="rounded-full bg-[#F7E7CE]/15 px-3 py-1 text-[#F7E7CE]">✅ React Code Generated</span>
                    </div>
                    <p className="mt-3 text-base leading-7 text-[#c5b08b]">
                      “Use form fields, validation, and a clean mobile-first layout for fast developer review.”
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="rounded-[1.5rem] bg-[#07111f]/90 p-4 shadow-inner shadow-[#E7C78A]/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[#E7C78A] animate-pulse" />
                    <span className="h-3 w-3 rounded-full bg-[#E7C78A]/70 animate-pulse delay-150" />
                    <span className="h-3 w-3 rounded-full bg-[#E7C78A]/50 animate-pulse delay-300" />
                    <p className="text-sm text-[#c5b08b]">AI is typing...</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-[#0d1420]/80 p-4">
                <button className="rounded-full bg-[#E7C78A] px-5 py-3 text-sm font-semibold text-[#0b1220] transition hover:bg-[#f5d47d]">
                  Copy
                </button>
                <button className="rounded-full border border-[#E7C78A]/40 bg-transparent px-5 py-3 text-sm font-semibold text-[#E7C78A] transition hover:bg-[#E7C78A]/15 hover:text-white">
                  Regenerate
                </button>
                <span className="ml-auto text-xs text-[#94a3b8]">Live preview</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AIWorkspaceDemo;
