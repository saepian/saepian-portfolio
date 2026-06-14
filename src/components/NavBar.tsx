import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logoSaepian from "@/assets/logo_saepian.png";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  const [timeStr, setTimeStr] = useState("");

  // Seoul Time (UTC+9)
  useEffect(() => {
    const updateTime = () => {
      const dates = new Date();
      // Adjust to Seoul time manually or using options
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

  return (
    <header className="fixed top-0 left-0 w-full z-40 border-b border-neutral-900 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          <div className="relative group flex items-center">
            <img
              src={logoSaepian}
              alt="SAEPIAN"
              className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>
        </div>

        {/* Middle/Center: Dynamic Live clock & Seoul Anchor Info */}
        <div className="hidden md:flex items-center gap-4 font-mono text-[11px] text-neutral-500 tracking-wider">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
            <span>SEOULHQ</span>
          </div>
          <span className="text-neutral-800">/</span>
          <span className="text-neutral-400 font-medium tabular-nums">{timeStr} KST</span>
        </div>

        {/* Right Side: Menu Items with sliding bar indicator */}
        <nav className="flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
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
      </div>
    </header>
  );
}
