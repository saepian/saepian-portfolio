import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function HeroSection({ onExploreClick, onContactClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for subtle 3D rotational tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs to make tilt feel smooth
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  // Transforms for absolute layers
  const rotateX = useTransform(springY, [-400, 400], [8, -8]);
  const rotateY = useTransform(springX, [-400, 400], [-8, 8]);
  const translateX = useTransform(springX, [-400, 400], [-12, 12]);
  const translateY = useTransform(springY, [-400, 400], [-12, 12]);

  // Opposite transform for dynamic offset glow
  const glowX = useTransform(springX, [-400, 400], [25, -25]);
  const glowY = useTransform(springY, [-400, 400], [25, -25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const xVal = e.clientX - rect.left - width / 2;
      const yVal = e.clientY - rect.top - height / 2;
      mouseX.set(xVal);
      mouseY.set(yVal);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent overflow-hidden px-6 pt-24 pb-12 select-none"
      style={{ perspective: 1000 }}
    >
      {/* 3D Kinetic Text Layer Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col items-center pointer-events-none"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
      >
        {/* Kinetic Title Line 1 */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full flex justify-start pl-4 md:pl-20"
        >
          <h1 className="font-anybody text-5xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-none text-white flex flex-wrap gap-x-4">
            <span>THE</span>
            <span className="text-stroke-white text-nowrap">ABSOLUTE</span>
          </h1>
        </motion.div>

        {/* Kinetic Title Line 2 (Highlighted Red / Kinetic Glitch representation) */}
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full flex justify-center py-2"
        >
          <h1 className="font-anybody text-6xl md:text-[10rem] xl:text-[12rem] font-extrabold italic tracking-tighter leading-none text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            REDEFINED
          </h1>
        </motion.div>

        {/* Kinetic Title Line 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="w-full flex justify-end pr-4 md:pr-16"
        >
          <h1 className="font-anybody text-5xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-none text-white">
            <span>SAEPIAN</span>
            <span className="text-stroke-white ml-4">ESSENCE</span>
          </h1>
        </motion.div>
      </motion.div>

      {/* Behind the title offset glowing circle that trails in reverse */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] blur-[150px] bg-red-800/10 rounded-full -translate-x-1/2 -translate-y-1/2 -z-0 pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Descriptive sub-text & Call to action */}
      <div className="relative z-20 w-full max-w-7xl mt-12 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 h-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="max-w-md text-left"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-red-600" />
            <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase">
              CREATIVE MANIFESTO
            </span>
          </div>
          <p className="font-sans text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            Good design begins with the details no one sees. We strip away the unnecessary and focus on what matters — from a single line of type to the structure of a page. Every element exists with intention."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onExploreClick}
            className="group rect-button inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-neutral-100 hover:text-black text-white font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-auto border border-red-600 cursor-pointer"
          >
            <span>DISCOVER WORKS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-neutral-900 text-white font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 pointer-events-auto border border-neutral-800 hover:border-neutral-500 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>GET IN TOUCH_</span>
          </button>
        </motion.div>
      </div>

      {/* Aesthetic grid overlay border anchors (Purely styling, not tech larping, just classic frame accents) */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-neutral-700 hidden lg:block tracking-widest uppercase">
        FRAME: SAEPIAN_26 // COMPILATION
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-700 hidden lg:block tracking-widest uppercase">
        COORDINATES: 37.5665 N, 126.9780 E
      </div>
    </div>
  );
}
