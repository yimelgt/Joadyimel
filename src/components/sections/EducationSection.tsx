import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { SectionTitle } from '../shared/SectionTitle'
import { GlassCard } from '../shared/GlassCard'
import { education } from '../../data/content'

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <SectionTitle
            number="05 · Education"
            title="Academic Background"
            subtitle="Formal education that laid the foundation for my technical and strategic expertise."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({
  education: edu,
  index,
}: {
  education: (typeof education)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' as const }}
      className="md:col-span-2"
    >
      <GlassCard hover edge className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="hidden md:flex w-12 h-12 rounded-xl bg-mint/10 border border-mint/20 items-center justify-center shrink-0">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-heading">{edu.degree}</h3>
              <p className="text-mint font-medium mt-1">{edu.school}</p>
              <p className="text-body mt-3 leading-relaxed">{edu.description}</p>
            </div>
          </div>
          <span className="text-sm text-muted font-mono whitespace-nowrap shrink-0">
            {edu.period}
          </span>
        </div>
      </GlassCard>
    </motion.div>
  )
}
