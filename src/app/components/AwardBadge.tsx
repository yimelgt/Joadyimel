import { motion } from "motion/react";
import { Award, Trophy, Medal } from "lucide-react";

interface AwardBadgeProps {
  icon: "trophy" | "medal" | "award";
  title: string;
  subtitle: string;
  delay?: number;
}

export function AwardBadge({ icon, title, subtitle, delay = 0 }: AwardBadgeProps) {
  const Icon =
    icon === "trophy" ? Trophy : icon === "medal" ? Medal : Award;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start gap-4 p-6 border border-[#AAFF45]/30 bg-[#161616]/50 hover:bg-[#161616] transition-colors group"
    >
      <div className="mt-1">
        <Icon className="w-6 h-6 text-[#AAFF45]" />
      </div>
      <div>
        <h4 className="font-['Syne'] font-bold text-lg text-[#F0EDE6] mb-1">
          {title}
        </h4>
        <p className="font-['DM_Mono'] text-[#F0EDE6]/60 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
}
