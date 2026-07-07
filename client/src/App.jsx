import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import AIWorkspaceDemo from "./components/home/AIWorkspaceDemo";
import Features from "./components/home/Features";
import Pricing from "./components/home/Pricing";
import Roadmap from "./components/home/Roadmap";
import About from "./components/home/About";
import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import HeroBackground from "./components/home/HeroBackground";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Keep routing hooks in sync; no workspace state is needed.
  }, [location.pathname]);

  const handleNavigate = (target) => {
    if (target === "workspace") {
      navigate("/workspace");
      return;
    }

    if (target.startsWith("/")) {
      navigate(target);
      return;
    }

    window.requestAnimationFrame(() => {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const homePage = (
    <div className="relative min-h-screen overflow-hidden bg-[#02040c] text-white">
      <HeroBackground />
      <div className="relative z-10">
        <Navbar onNavigate={handleNavigate} />
        <>
          <Hero onGetStarted={() => navigate("/login")} />
          <Stats />
          <AIWorkspaceDemo />
          <Features />
          <Pricing />
          <Roadmap />
          <About />
        </>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/" element={homePage} />
      <Route path="*" element={homePage} />
    </Routes>
  );
}

export default App;