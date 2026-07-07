import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import DashboardPreview from "./DashboardPreview";

function Hero({ onGetStarted }) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-20 pt-28 pb-16">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-[#E7C78A]/70 bg-[#0b1220]/70 px-5 py-2 text-sm font-medium text-[#E7C78A] backdrop-blur-sm shadow-[0_10px_30px_rgba(231,199,138,0.12)]">
              Powered by Artificial Intelligence
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              One Workspace.
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#FFD15C] via-[#F7E7CE] to-[#E7C78A] bg-clip-text">
                Infinite Intelligence.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#c5b08b]">
              Build, code, write and automate your workflow with Aether AI Workspace.
              Everything you need, powered by AI.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button
                onClick={onGetStarted}
                className="hero-primary-btn rounded-2xl bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-8 py-4 text-sm font-semibold text-[#0b1220] shadow-[0_20px_50px_rgba(231,199,138,0.22)] transition hover:scale-[1.02]"
              >
                Get Started
              </button>
              <button className="hero-secondary-btn rounded-2xl border border-[#E7C78A]/50 bg-white/5 px-8 py-4 text-sm font-semibold text-[#F7E7CE] transition hover:border-[#E7E7CE] hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <DashboardPreview />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;