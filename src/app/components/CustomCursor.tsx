import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };

    checkTouchDevice();

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render cursor on touch devices
  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[#AAFF45] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed w-8 h-8 border border-[#AAFF45]/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
}