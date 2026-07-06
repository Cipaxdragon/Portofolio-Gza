'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * CardMotion — Wrapper for animating cards on scroll.
 * v2: Subtle entrance, minimal hover.
 */
export default function CardMotion({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
