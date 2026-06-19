'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionReveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
