import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      
      // Easing function for more natural progress
      const easeProgress = Math.min(
        100,
        Math.floor(currentStep + Math.random() * 3)
      );
      
      setProgress(easeProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setProgress(100);
        
        // Wait a bit before starting exit animation
        setTimeout(() => {
          setIsComplete(true);
          // Notify parent after exit animation
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <>
          {/* Main Preloader Container */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#0D0D0D] flex items-center justify-center"
            exit={{
              y: "-100%",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            {/* Noise Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12">
              {/* Logo/Initials */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  className="font-['Syne'] font-bold text-6xl sm:text-7xl md:text-8xl text-[#AAFF45] tracking-tight"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  JY
                </motion.div>
              </motion.div>

              {/* Progress Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="font-['DM_Mono'] text-4xl sm:text-5xl md:text-6xl text-[#F0EDE6] tabular-nums">
                  {progress}
                  <span className="text-[#AAFF45]">%</span>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative w-48 sm:w-64 md:w-80 h-[2px] bg-[#F0EDE6]/10 overflow-hidden"
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#AAFF45]"
                  style={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#AAFF45] blur-xl opacity-60" />
                </motion.div>
              </motion.div>

              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-['DM_Mono'] text-xs sm:text-sm text-[#F0EDE6]/40 uppercase tracking-[0.3em]"
              >
                LOADING EXPERIENCE
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 font-['Syne'] font-bold text-6xl sm:text-8xl md:text-[10rem] text-[#F0EDE6] pointer-events-none"
            >
              2026
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute top-8 sm:top-12 left-8 sm:left-12 font-['Syne'] font-bold text-6xl sm:text-8xl md:text-[10rem] text-[#F0EDE6] pointer-events-none"
            >
              00
            </motion.div>
          </motion.div>

          {/* Secondary Curtain for Smoother Exit */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-[#AAFF45]/5 pointer-events-none"
            exit={{
              y: "-100%",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1,
              },
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
