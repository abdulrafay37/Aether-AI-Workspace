import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="min-h-screen bg-[#09090B] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full border border-cyan-400 text-cyan-300 text-sm mb-6">
            Powered by Artificial Intelligence
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            One Workspace.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Infinite Intelligence.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-8">
            Build, code, write and automate your workflow with Aether AI Workspace.
            Everything you need, powered by AI.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-black">
              Get Started
            </button>

            <button className="px-7 py-3 rounded-xl border border-white/20">
              Watch Demo
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}

export default Hero;