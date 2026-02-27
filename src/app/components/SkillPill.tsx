import { motion } from "motion/react";
import { useState } from "react";

interface SkillPillProps {
  skill: string;
  delay?: number;
}

export function SkillPill({ skill, delay = 0 }: SkillPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div
        className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-[#161616] border border-[#F0EDE6]/10 font-['DM_Mono'] text-xs sm:text-sm text-[#F0EDE6] cursor-default transition-all ${
          isHovered
            ? "border-[#AAFF45] shadow-[0_0_20px_rgba(170,255,69,0.3)]"
            : ""
        }`}
      >
        {skill}
      </div>
    </motion.div>
  );
}