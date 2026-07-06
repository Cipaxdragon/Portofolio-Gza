'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * ParallaxLayer — wraps content with scroll-driven parallax.
 * @param {'back'|'front'|'text'} speed - Parallax speed preset
 * @param {string} className - Additional classes
 */
export default function ParallaxLayer({ children, speed = 'back', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const ranges = {
    back: [0, -80],
    front: [0, -160],
    text: [0, -240],
  }

  const y = useTransform(scrollYProgress, [0, 1], ranges[speed] || ranges.back)

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
