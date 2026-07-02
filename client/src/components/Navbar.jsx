
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/70 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black font-bold">
            AI
          </div>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Aether AI
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Features
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Pricing
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Roadmap
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            About
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition duration-300">
            Login
          </button>

          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition duration-300 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
            Get Started →
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
