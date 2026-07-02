function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#6B4423] backdrop-blur-xl border-b border-[#6B4423] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-[#F7E7CE] flex items-center justify-center text-[#6B4423] font-bold">
            AI
          </div>

          <h1 className="text-2xl font-bold text-[#F7E7CE]">
            Aether AI
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-[#D9D0C1] font-medium">

          <li className="hover:text-[#F7E7CE] transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-[#F7E7CE] transition duration-300 cursor-pointer">
            Features
          </li>

          <li className="hover:text-[#F7E7CE] transition duration-300 cursor-pointer">
            Pricing
          </li>

          <li className="hover:text-[#F7E7CE] transition duration-300 cursor-pointer">
            Roadmap
          </li>

          <li className="hover:text-[#F7E7CE] transition duration-300 cursor-pointer">
            About
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="px-5 py-2 rounded-lg border border-[#F7E7CE] text-[#F7E7CE] hover:bg-[#F7E7CE] hover:text-[#6B4423] transition duration-300">
            Login
          </button>

          <button className="px-6 py-2 rounded-lg bg-[#F7E7CE] hover:scale-105 transition duration-300 font-semibold text-[#6B4423] shadow-lg shadow-[#6B4423]/40">
            Get Started →
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;