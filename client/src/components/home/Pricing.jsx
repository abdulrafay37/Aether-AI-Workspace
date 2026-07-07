import { motion } from "framer-motion";

function Pricing() {
  const plan = {
    name: "Free",
    price: "$0",
    description: "Everything you need to experience Aether AI.",
    features: [
      "Real AI Chat",
      "Beautiful Workspace",
      "Powered by Google Gemini",
      "Future Updates Included",
    ],
  };

  return (
    <section id="pricing" className="relative py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#E7C78A]/30 bg-[#E7C78A]/10 px-4 py-1 text-sm text-[#E7C78A]">
            Pricing
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple. Powerful. Built for everyone.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            Start free today and upgrade when you are ready.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.article
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-[#E7C78A]/20 bg-[#0b1220]/80 p-8 shadow-[0_0_80px_rgba(231,199,138,0.12)] backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(231,199,138,0.18),_transparent_55%)] opacity-80" />
            <div className="absolute inset-x-10 bottom-6 h-20 rounded-full bg-[#E7C78A]/20 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#E7C78A]">
                    {plan.name}
                  </p>
                  <h3 className="mt-3 text-5xl font-black text-white sm:text-6xl">
                    {plan.price}
                  </h3>
                </div>
                <div className="rounded-full border border-[#E7C78A]/20 bg-white/5 px-4 py-2 text-sm text-[#F7E7CE]">
                  No credit card required
                </div>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-base text-gray-200">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E7C78A]/15 text-[#E7C78A]">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button className="inline-flex items-center gap-2 rounded-full border border-[#E7C78A]/40 bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:scale-[1.02]">
                  Experience Aether
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
