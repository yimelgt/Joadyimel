'use client'
import { motion } from 'framer-motion'
import { SectionReveal } from '../shared/SectionReveal'
import { GlassCard } from '../shared/GlassCard'
import { SectionTitle } from '../shared/SectionTitle'

const projects = [
  {
    title: 'AI Automation Dashboard',
    category: 'AI Automation',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g1)" rx="12" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="32" fill="#8AFFC4" opacity="0.3" />
        <circle cx="200" cy="100" r="48" fill="#8AFFC4" opacity="0.15" />
        <circle cx="320" cy="70" r="24" fill="#8AFFC4" opacity="0.25" />
        <path d="M60 180 Q120 140 200 160 Q280 180 340 150" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M80 200 Q160 170 240 190 Q320 210 360 180" stroke="#8AFFC4" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g2)" rx="12" />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="60" y="60" width="80" height="80" rx="8" fill="#8AFFC4" opacity="0.2" />
        <rect x="160" y="60" width="80" height="80" rx="8" fill="#8AFFC4" opacity="0.15" />
        <rect x="260" y="60" width="80" height="80" rx="8" fill="#8AFFC4" opacity="0.1" />
        <rect x="60" y="155" width="280" height="3" rx="1.5" fill="#8AFFC4" opacity="0.3" />
        <rect x="60" y="170" width="180" height="6" rx="3" fill="#8AFFC4" opacity="0.4" />
        <rect x="60" y="185" width="240" height="6" rx="3" fill="#8AFFC4" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: 'SEO Analytics Suite',
    category: 'Digital Marketing',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g3)" rx="12" />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="80" y="160" width="40" height="50" rx="4" fill="#8AFFC4" opacity="0.35" />
        <rect x="140" y="130" width="40" height="80" rx="4" fill="#8AFFC4" opacity="0.25" />
        <rect x="200" y="100" width="40" height="110" rx="4" fill="#8AFFC4" opacity="0.35" />
        <rect x="260" y="140" width="40" height="70" rx="4" fill="#8AFFC4" opacity="0.2" />
        <line x1="60" y1="195" x2="340" y2="195" stroke="#8AFFC4" strokeWidth="1" opacity="0.3" />
        <circle cx="220" cy="80" r="4" fill="#8AFFC4" opacity="0.7" />
        <path d="M80 195 L140 165 L200 145 L260 175" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Brand Identity Redesign',
    category: 'UX/UI Design',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g4)" rx="12" />
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="120" cy="120" r="60" fill="none" stroke="#8AFFC4" strokeWidth="2" opacity="0.3" />
        <circle cx="280" cy="120" r="60" fill="none" stroke="#8AFFC4" strokeWidth="2" opacity="0.3" />
        <path d="M120 80 Q200 40 280 80" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M120 160 Q200 200 280 160" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="200" cy="120" r="20" fill="#8AFFC4" opacity="0.25" />
        <circle cx="160" cy="100" r="8" fill="#8AFFC4" opacity="0.4" />
        <circle cx="240" cy="140" r="8" fill="#8AFFC4" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Mobile Banking App',
    category: 'UX/UI Design',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g5)" rx="12" />
        <defs>
          <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect x="140" y="40" width="120" height="200" rx="16" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.3" />
        <rect x="160" y="60" width="80" height="20" rx="6" fill="#8AFFC4" opacity="0.3" />
        <rect x="160" y="100" width="80" height="8" rx="4" fill="#8AFFC4" opacity="0.2" />
        <rect x="160" y="120" width="60" height="8" rx="4" fill="#8AFFC4" opacity="0.15" />
        <circle cx="200" cy="180" r="20" fill="none" stroke="#8AFFC4" strokeWidth="2" opacity="0.3" />
        <circle cx="200" cy="180" r="8" fill="#8AFFC4" opacity="0.25" />
      </svg>
    ),
  },
  {
    title: 'Marketing Campaign Engine',
    category: 'Digital Marketing',
    gradient: 'from-[#8AFFC4]/20 to-[#0B0F19]',
    svg: (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <rect width="400" height="240" fill="url(#g6)" rx="12" />
        <defs>
          <linearGradient id="g6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8AFFC4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="80" r="40" fill="none" stroke="#8AFFC4" strokeWidth="2" opacity="0.3" />
        <circle cx="200" cy="80" r="20" fill="none" stroke="#8AFFC4" strokeWidth="1.5" opacity="0.2" />
        <path d="M200 120 L200 180" stroke="#8AFFC4" strokeWidth="2" opacity="0.3" />
        <path d="M160 160 Q200 140 240 160" stroke="#8AFFC4" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M140 200 Q200 170 260 200" stroke="#8AFFC4" strokeWidth="1.5" fill="none" opacity="0.25" />
        <circle cx="200" cy="80" r="6" fill="#8AFFC4" opacity="0.5" />
      </svg>
    ),
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionReveal>
        <SectionTitle
          number="04"
          title="Portfolio"
          subtitle="A curated selection of projects spanning AI, web, design, and strategy."
        />
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <SectionReveal key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard hover className="overflow-hidden group cursor-pointer">
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient}`}>
                  {project.svg}
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono text-mint tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-heading mt-2 mb-3">
                    {project.title}
                  </h3>
                  <button className="text-mint font-medium text-sm tracking-wider uppercase inline-flex items-center gap-2 group/btn cursor-pointer">
                    View Project
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
