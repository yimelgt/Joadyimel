import { motion } from "motion/react";

interface MarqueeTickerProps {
  text: string;
}

export function MarqueeTicker({ text }: MarqueeTickerProps) {
  const repeatedText = Array(20).fill(text).join(" · ");

  return (
    <div className="overflow-hidden bg-[#AAFF45] py-3 relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="font-['DM_Mono'] text-[#0D0D0D] font-medium text-sm tracking-wider">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
