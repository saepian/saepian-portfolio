import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoSaepian from "@/assets/logo_saepian.png";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  const [timeStr, setTimeStr] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const dates = new Date();
      const seoulTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(dates);
      setTimeStr(seoulTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { id: "home", label: "INDEX" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "philosophy", label: "PHILOSOPHY" },
    { id: "connect", label: "CONTACT" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 border-b border-neutral-900 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative group flex items-center">
              <img
                src={logoSaepian}
                alt="SAEPIAN"
                className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
          </div>

          {/* Middle/Center: Dynamic Live clock — desktop only */}
          <div className="hidden md:flex items-center gap-4 font-mono text-[11px] text-neutral-500 tracking-wider">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
              <span>SEOULHQ</span>
            </div>
            <span className="text-neutral-800">/</span>
            <span className="text-neutral-400 font-medium tabular-nums">{timeStr} KST</span>
          </div>

          {/* Right Side: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-4 py-2 font-sans font-medium text-xs tracking-widest uppercase cursor-pointer transition-colors duration-300 pointer-events-auto"
                  style={{ color: isActive ? "#ffffff" : "#a3a3a3" }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-neutral-900/80 border-b-2 border-red-600 rounded-sm z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile: Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-black/96 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            {/* Seoul Time inside mobile menu */}
            <div className="absolute top-24 flex items-center gap-4 font-mono text-[11px] text-neutral-500 tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                <span>SEOULHQ</span>
              </div>
              <span className="text-neutral-800">/</span>
              <span className="text-neutral-400 font-medium tabular-nums">{timeStr} KST</span>
            </div>

            <nav className="flex flex-col items-center gap-1">
              {menuItems.map((item, idx) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.3 }}
                    onClick={() => handleNavClick(item.id)}
                    className="relative px-8 py-4 font-anybody font-black text-4xl italic tracking-tighter cursor-pointer transition-colors duration-300"
                    style={{ color: isActive ? "#dc2626" : "#525252" }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-2 left-8 h-px bg-red-600 w-[calc(100%-4rem)]" />
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
