import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import AIWorkspaceDemo from "./components/home/AIWorkspaceDemo";
import Features from "./components/home/Features";
import Workspace from "./pages/Workspace";
import HeroBackground from "./components/home/HeroBackground";

function App() {
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040c] text-white">
      <HeroBackground />
      <div className="relative z-10">
        <Navbar />
        {workspaceOpen ? (
          <Workspace />
        ) : (
          <>
            <Hero onGetStarted={() => setWorkspaceOpen(true)} />
            <Stats />
            <AIWorkspaceDemo />
            <Features />
          </>
        )}
      </div>
    </div>
  );
}

export default App;