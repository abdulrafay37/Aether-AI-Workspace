function Footer() {
  const sections = [
    { title: "Product", links: ["Home", "Features", "Pricing"] },
    { title: "Company", links: ["About", "Roadmap", "Contact"] },
    { title: "Legal", links: ["Terms", "Privacy", "Support"] },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#02040c] border-t border-white/10 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-56 bg-gradient-to-b from-[#F7E7CE]/15 via-transparent to-transparent blur-3xl opacity-70" />
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-br from-[#F7E7CE] to-[#E7C78A] text-[#0b1220] font-black shadow-[0_18px_40px_rgba(231,199,138,0.18)]">
                AI
              </div>
              <div>
                <p className="text-xl font-bold text-white">Aether AI</p>
                <p className="mt-1 text-sm text-[#94a3b8]">Modern AI workspace for teams and creators.</p>
              </div>
            </div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-[#c5b08b]">
              Build better workflows with intelligent chat, code tools, and focused productivity powered by Gemini.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">{section.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-[#c5b08b]">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="transition hover:text-white hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[#7f8fa4] sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aether AI. Crafted for premium AI workflows.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <a href="#" className="transition hover:text-white">Status</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
