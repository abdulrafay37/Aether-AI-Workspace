import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Image,
  Mic,
  FileText,
  Sparkles,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI Chat",
      description: "Smart conversations powered by advanced AI.",
    },
    {
      icon: Code2,
      title: "Code Assistant",
      description: "Generate, debug and explain code instantly.",
    },
    {
      icon: FileText,
      title: "PDF Analyzer",
      description: "Summarize and understand documents in seconds.",
    },
    {
      icon: Mic,
      title: "Voice Assistant",
      description: "Talk naturally with AI using your voice.",
    },
    {
      icon: Image,
      title: "Image Generator",
      description: "Create beautiful AI-generated artwork.",
    },
    {
      icon: Sparkles,
      title: "AI Automation",
      description: "Automate repetitive tasks effortlessly.",
    },
  ];

  return (
    <section className="bg-[#02040c] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#94a3b8]">Core capabilities</p>
          <h2 className="mt-4 text-5xl font-bold text-white">Powerful features for every workflow</h2>
          <p className="mt-6 text-[#c5b08b] max-w-2xl mx-auto">
            Everything you need in one intelligent workspace. Build faster, automate smarter and create without limits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group rounded-[2rem] border border-white/10 bg-[#0b1220]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition hover:border-[#E7C78A]/40 hover:bg-[#111827]/95 cursor-pointer"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F7E7CE] to-[#E7C78A] text-[#0b1220] shadow-[0_18px_40px_rgba(231,199,138,0.2)]">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#c5b08b] leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;