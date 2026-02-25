import { motion } from "motion/react";

interface ExperienceCardProps {
  company: string;
  period: string;
  role: string;
  stats: { value: string; label: string }[];
  tags: string[];
  delay?: number;
}

export function ExperienceCard({
  company,
  period,
  role,
  stats,
  tags,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-[#161616] border-l-4 border-[#AAFF45] p-8 md:p-10 min-w-[320px] md:min-w-[500px] group"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="font-['Syne'] font-bold text-2xl text-[#F0EDE6] mb-2">
            {company}
          </h3>
          <p className="font-['DM_Mono'] text-[#AAFF45] text-sm">{role}</p>
        </div>
        <span className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs whitespace-nowrap ml-4">
          {period}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="font-['Syne'] font-bold text-3xl text-[#AAFF45]">
              {stat.value}
            </div>
            <div className="font-['DM_Mono'] text-[#F0EDE6]/50 text-xs mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-[#0D0D0D] text-[#F0EDE6]/70 font-['DM_Mono'] text-xs border border-[#F0EDE6]/10 group-hover:border-[#AAFF45]/30 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
