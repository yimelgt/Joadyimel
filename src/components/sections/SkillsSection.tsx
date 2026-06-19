import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { SectionTitle } from '../shared/SectionTitle'
import { GlassCard } from '../shared/GlassCard'
import { skills } from '../../data/content'

const categoryIcons: Record<string, string> = {
  'Dev Stack': '💻',
  'Creative': '🎨',
  'Strategy': '📊',
  'Tools': '🔧',
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionTitle
            number="04 · Skills"
            title="Technical & Creative Toolkit"
            subtitle="The technologies, tools, and methodologies I use to bring ideas to life."
          />
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillCategoryCard
              key={category}
              category={category}
              skills={skillList}
              icon={categoryIcons[category] || '⭐'}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategoryCard({
  category,
  skills: skillList,
  icon,
  index,
}: {
  category: string
  skills: string[]
  icon: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' as const }}
    >
      <GlassCard hover className="p-6 h-full">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-heading">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1.5 text-sm rounded-full bg-white/8 border border-white/10 text-body hover:border-mint/30 hover:text-mint transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}
