'use client'
import { motion } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { GlassCard } from '../shared/GlassCard'
import { SectionTitle } from '../shared/SectionTitle'
import { services } from '../../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionReveal>
        <SectionTitle
          number="03"
          title="Services"
          subtitle="Transforming ideas into impactful digital solutions across the full technology spectrum."
        />
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <SectionReveal key={service.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-8 h-full flex flex-col">
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-2xl font-bold text-heading mb-3">{service.title}</h3>
                <p className="text-body leading-relaxed flex-1">{service.description}</p>
                <button className="mt-6 text-mint font-medium text-sm tracking-wider uppercase inline-flex items-center gap-2 group cursor-pointer">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </GlassCard>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
