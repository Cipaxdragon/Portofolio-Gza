'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RevealText from './RevealText'

/**
 * SectionHeader — Cinematic section header with statement text.
 * Uses Playfair Display for the title and Plus Jakarta Sans for subtitle.
 */
export default function SectionHeader({ title, subtitle, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} className={`mb-16 sm:mb-20 ${className}`}>
      <RevealText>
        <h2 className="font-display text-headline">
          {title}
        </h2>
      </RevealText>
      {subtitle && (
        <motion.p
          className="mt-3 text-brand-muted text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
