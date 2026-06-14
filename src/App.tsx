import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Atmosphere from "./components/Atmosphere";
import CustomCursor from "./components/CustomCursor";
import { Sparkles, Layers, RefreshCw } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleExploreClick = () => {
    setActiveTab("portfolio");
  };

  const handleContactClick = () => {
    setActiveTab("connect");
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection onExploreClick={handleExploreClick} onContactClick={handleContactClick} />;
      case "portfolio":
        return <PortfolioSection />;
      case "philosophy":
        return <AboutSection />;
      case "connect":
        return <ContactSection />;
      default:
        return <HeroSection onExploreClick={handleExploreClick} />;
    }
  };

  return (
    <div id="noir-app-container" className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden pt-20">
      {/* Hyper-realistic Atmosphere Particle Mesh behind everything */}
      <Atmosphere />

      {/* High-Definition Custom Responsive Trailing cursor */}
      <CustomCursor />

      {/* Floating Decorative Grid Elements to structure design */}
      <div className="fixed inset-0 pointer-events-none z-10 grid grid-cols-4 lg:grid-cols-12 max-w-7xl mx-auto px-6 h-full opacity-[0.02]">
        {Array(12).fill(null).map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>

      {/* Floating Top/Left Ambient Audio Accent or Sensory indicator */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 border border-neutral-900 pointer-events-auto">
        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
        <span className="font-mono text-[9px] text-neutral-400 tracking-wider uppercase select-none">
          SAEPIAN MODULE: ACTIVE
        </span>
      </div>

      {/* Master Blurred & Anchored Navigation */}
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Micro-Interaction Scenic Scroll indicators */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 border border-neutral-900 select-none">
        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">AESTHETIC</span>
        <span className="text-red-600 font-mono text-[9px] font-bold">SAEPIAN_STUDIO</span>
      </div>

      {/* Master Content Router wrapped in Framer Motion Transition Engine */}
      <main className="relative z-20 w-full min-h-[calc(100vh-80px)] pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: -15 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1] // Custom organic custom cubic bezier deceleration
            }}
            className="w-full h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Subtle bottom cosmetic border anchor */}
      <footer className="relative z-20 w-full border-t border-neutral-950 py-10 bg-black/40 backdrop-blur-sm pointer-events-none select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-600">
          <div className="text-left">
            © 2026 SAEPIAN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>DELIGHT IN ABSOLUTE SUBTRACTION_</span>
            <span className="text-neutral-800">/</span>
            <span className="text-red-600">SEOUL, KR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
