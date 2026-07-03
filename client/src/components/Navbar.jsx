function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.35)] backdrop-blur-[18px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8">

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#ffd55f] to-[#f5c26c] text-[#0b1220] font-black shadow-[0_20px_60px_rgba(255,209,105,0.15)]">
            AI
          </div>

          <h1 className="text-2xl font-bold text-white">
            Aether AI
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[#d9cfa5] font-medium">
          {['Home', 'Features', 'Pricing', 'Roadmap', 'About'].map((item) => (
            <li key={item} className="transition hover:text-[#F7E7CE] hover:underline hover:underline-offset-8 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#E7C78A] hover:bg-white/10">
            Login
          </button>
          <button className="rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-6 py-2 text-sm font-semibold text-[#0b1220] shadow-[0_20px_50px_rgba(231,199,138,0.25)] transition hover:scale-[1.02]">
            Get Started →
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;