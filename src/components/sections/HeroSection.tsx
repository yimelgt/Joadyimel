import { motion } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { GlassCard } from '../shared/GlassCard'
import { personalInfo } from '../../data/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 px-4">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-mint/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-lavender/5 blur-[100px]" />
      </div>

      <SectionReveal className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-mono text-mint tracking-[0.2em] uppercase mb-6"
          >
            👋 Hello, I&apos;m
          </motion.p>

          {/* Name - large with mint gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-mint via-mint-strong to-mint bg-clip-text text-transparent">
              {personalInfo.shortName}
            </span>
          </motion.h1>

          {/* Titles */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-heading mb-2"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-body mb-6"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-body text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-mint text-navy-900 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,255,196,0.4)] hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-full border border-white/20 text-heading font-semibold transition-all duration-300 hover:bg-white/8 hover:border-mint/30 hover:shadow-[0_0_20px_rgba(138,255,196,0.15)]"
            >
              View Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-2xl"
          >
            {personalInfo.stats.map((stat, index) => (
              <GlassCard key={index} className="p-4 md:p-6 text-center">
                <span className="text-2xl md:text-3xl font-bold text-mint block">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-body mt-1 block">
                  {stat.label}
                </span>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </SectionReveal>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
      >
        <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-mint" />
        </div>
      </motion.div>
    </section>
  )
}
