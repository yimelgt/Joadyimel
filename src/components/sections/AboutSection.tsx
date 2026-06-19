import { motion } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { SectionTitle } from '../shared/SectionTitle'
import { GlassCard } from '../shared/GlassCard'
import { personalInfo } from '../../data/content'

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-navy-900" id="about">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-mint/3 blur-[100px] pointer-events-none" />

      <SectionReveal className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section Title */}
        <SectionTitle number="01 · About" title="About Me" subtitle="Who I am and what drives me" />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left column – Bio */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-xl md:text-2xl font-medium text-mint italic border-l-4 border-mint pl-6 py-2"
            >
              {personalInfo.quote}
            </motion.blockquote>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' as const }}
              className="text-body text-base md:text-lg leading-relaxed"
            >
              {personalInfo.aboutBio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
              className="text-body text-base md:text-lg leading-relaxed"
            >
              {personalInfo.aboutExtra}
            </motion.p>

            {/* Mantra */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' as const }}
              className="pt-4"
            >
              <GlassCard className="inline-block px-6 py-4">
                <p className="text-sm md:text-base font-mono text-mint tracking-[0.15em]">
                  {personalInfo.mantra}
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Right column – Stats + Mission */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="space-y-4">
              {personalInfo.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' as const }}
                >
                  <GlassCard className="flex items-center gap-4 p-5">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <span className="text-2xl font-bold text-mint block">
                        {stat.value}
                      </span>
                      <span className="text-sm text-body">{stat.label}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' as const }}
            >
              <GlassCard edge className="p-6">
                <h3 className="text-sm font-mono text-mint tracking-widest mb-3 uppercase">
                  Mission
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  To bridge the gap between engineering excellence and human-centered
                  design — delivering digital solutions that don&apos;t just work, but
                  transform the way people interact with technology.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
