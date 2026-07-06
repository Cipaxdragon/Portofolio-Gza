'use client'

import { motion } from 'framer-motion'

/**
 * TabFilter — Minimal underline-style tab filter.
 * v2: Replaced pill/button style with editorial underline.
 */
export default function TabFilter({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className="relative py-2 text-label transition-colors duration-300 group"
          data-cursor="hover"
          style={{
            color: activeTab === tab.key ? 'var(--color-brand-text)' : undefined,
          }}
        >
          {tab.label}
          {/* Active underline */}
          {activeTab === tab.key && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-brand-accent"
              layoutId="tab-underline"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
