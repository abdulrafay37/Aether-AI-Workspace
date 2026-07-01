function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-slate-950 text-white flex flex-col justify-center items-center px-6">

      <p className="text-cyan-400 text-lg font-semibold mb-2">
         Welcome to the Future
      </p>

      <h1 className="text-6xl font-bold mb-6 text-center">
        Aether AI
      </h1>

      <h2 className="text-3xl text-gray-300 mb-6 text-center">
        Your Personal AI Workspace
      </h2>

      <p className="max-w-3xl text-center text-gray-400 leading-8 text-lg">
        Chat smarter, write faster, generate code, analyze PDFs,
        create content, and boost your productivity with one intelligent AI platform.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold">
          Get Started
        </button>

        <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-white">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;