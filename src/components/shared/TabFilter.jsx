'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function TabFilter({ tabs, active, onChange, className = '' }) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 mb-12',
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer',
            active === tab.key
              ? 'text-brand-accent'
              : 'text-brand-muted hover:text-brand-text'
          )}
        >
          {/* Active indicator background */}
          {active === tab.key && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-lg bg-brand-accent/10 border border-brand-accent/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}

          <span className="relative z-10 flex items-center gap-1.5">
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  )
}
