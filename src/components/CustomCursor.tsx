import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use framer motion values for smooth mouse lag
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClick(true);
    const handleMouseUp = () => setIsClick(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Target Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClick ? 0.6 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#ffffff" : "#dc2626",
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 border border-red-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClick ? 1.8 : isHovered ? 2.5 : 1,
          borderColor: isHovered ? "#ffffff" : "#dc2626",
          borderWidth: isHovered ? "2px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </>
  );
}
