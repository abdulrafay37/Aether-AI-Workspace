function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
           Aether AI
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-5 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Login
          </button>

          <button className="px-5 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;