import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="min-h-screen bg-[#D9D0C1] flex items-center pt-28 pb-16">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div className="max-w-xl">

          <span className="inline-block px-5 py-2 rounded-full border border-[#6B4423] text-[#6B4423] text-sm font-medium mb-8">
            Powered by Artificial Intelligence
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] text-[#6B4423]">
            One Workspace.
            <br />
            <span className="bg-[#6B4423] bg-clip-text text-transparent">
              Infinite Intelligence.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#6B4423]">
            Build, code, write and automate your workflow with Aether AI
            Workspace. Everything you need, powered by AI.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="px-8 py-4 rounded-xl bg-[#F7E7CE] text-[#6B4423] font-semibold hover:bg-[#E5D4B2] transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border-2 border-[#6B4423] text-[#6B4423] hover:bg-[#F7E7CE] transition">
              Watch Demo
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}

export default Hero;