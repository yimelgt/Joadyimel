import { motion } from "motion/react";

interface StatBadgeProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatBadge({ value, label, delay = 0 }: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-start"
    >
      <div className="font-['Syne'] font-bold text-5xl md:text-6xl text-[#AAFF45]">
        {value}
      </div>
      <div className="font-['DM_Mono'] text-[#F0EDE6]/60 text-xs md:text-sm mt-2 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
