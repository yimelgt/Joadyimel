import { motion } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { SectionTitle } from '../shared/SectionTitle'
import { GlassCard } from '../shared/GlassCard'
import { process } from '../../data/content'

const stepIcons: Record<string, string> = {
  Analyze: '🔍',
  Implement: '⚙️',
  Launch: '🚀',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-navy-800/50" id="process">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-mint/3 blur-[100px] pointer-events-none" />

      <SectionReveal className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section Title */}
        <SectionTitle
          number="02 · How It Works"
          title="My Process"
          subtitle="From idea to impact — a streamlined approach built for results"
        />

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {process.map((step) => (
            <motion.div key={step.step} variants={cardVariants}>
              <GlassCard hover edge className="p-6 md:p-8 flex flex-col h-full">
                {/* Step number */}
                <span className="text-5xl md:text-6xl font-bold text-mint/10 leading-none mb-4 select-none">
                  {String(step.step).padStart(2, '0')}
                </span>

                {/* Icon */}
                <span className="text-3xl md:text-4xl mb-4 block">
                  {stepIcons[step.title] ?? '📋'}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-heading mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body text-sm md:text-base leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Connector line (visible on md+) */}
                {step.step < process.length && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-mint/20"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' as const }}
          className="text-center text-muted text-sm mt-12"
        >
          Ready to start?{' '}
          <a
            href="#contact"
            className="text-mint hover:underline underline-offset-4 transition-colors"
          >
            Let&apos;s talk
          </a>
        </motion.p>
      </SectionReveal>
    </section>
  )
}
