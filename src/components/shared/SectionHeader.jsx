'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ title, subtitle, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`mb-16 text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-brand-text">
        {title}
      </h2>

      {/* Decorative accent line */}
      <motion.div
        className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-accent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      />

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-brand-muted text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
