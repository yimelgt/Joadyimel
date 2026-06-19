import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { SectionTitle } from '../shared/SectionTitle'
import { GlassCard } from '../shared/GlassCard'
import { experience } from '../../data/content'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <SectionTitle
            number="03 · Experience"
            title="Where I've Worked"
            subtitle="Professional journey driving digital transformation and engineering excellence."
          />
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-mint/40 via-mint/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  experience: exp,
  index,
}: {
  experience: (typeof experience)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' as const }}
      className="relative pl-10 md:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-4.5px] md:left-[28px] top-2 w-2.5 h-2.5 rounded-full bg-mint shadow-[0_0_12px_rgba(138,255,196,0.4)]" />

      <GlassCard hover className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-heading">{exp.role}</h3>
            <span className="text-mint font-medium">{exp.company}</span>
          </div>
          <span className="text-sm text-muted font-mono whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-body mb-4 leading-relaxed">{exp.description}</p>

        {exp.achievements.length > 0 && (
          <ul className="space-y-2">
            {exp.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-3 text-sm text-body">
                <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-mint/60" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.div>
  )
}
