'use client'

import { motion } from 'framer-motion'

/**
 * ShowcaseCard — Editorial full-bleed card for showcase items.
 * @param {Object} item - Showcase item data
 * @param {'featured'|'medium'|'small'} size - Card size variant
 */
export default function ShowcaseCard({ item, size = 'medium' }) {
  const heights = {
    featured: 'h-[60vh]',
    medium: 'h-[45vh]',
    small: 'h-[35vh]',
  }

  return (
    <motion.div
      className={`relative w-full overflow-hidden ${heights[size]} group`}
      whileHover="hover"
      data-cursor="hover"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.thumbnail})` }}
        variants={{ hover: { scale: 1.05 } }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        variants={{ hover: { opacity: 0.65 } }}
        initial={{ opacity: 0.2 }}
        transition={{ duration: 0.4 }}
      />

      {/* Info — slides up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 p-6 sm:p-8"
        variants={{ hover: { y: 0, opacity: 1 } }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-label text-brand-accent mb-2">
          {item.category || item.tools?.[0]} — {item.year}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 text-sm text-brand-text/70 max-w-md">
            {item.description}
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}
