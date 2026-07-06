'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function CardMotion({ children, className, delay = 0, ...props }) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-brand-border bg-brand-card p-6 transition-all duration-300',
        'hover:border-brand-accent/50 hover:shadow-neon-sm',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      {/* Subtle glow overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-brand-accent/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
