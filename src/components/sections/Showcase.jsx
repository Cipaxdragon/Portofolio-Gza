'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import TabFilter from '@/components/shared/TabFilter'
import ShowcaseCard from '@/components/shared/ShowcaseCard'
import { showcase, showcaseCategories } from '@/data/showcase'

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('motionGraphics')
  const items = showcase[activeTab] || []

  // Separate featured and regular items
  const featured = items.filter(item => item.featured)
  const regular = items.filter(item => !item.featured)

  return (
    <section id="showcase" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Selected Works."
          subtitle="Karya pilihan yang merepresentasikan perjalanan kreatif."
        />

        <TabFilter
          tabs={showcaseCategories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {items.length === 0 ? (
              /* Empty state */
              <div className="flex items-center justify-center h-[40vh] border border-brand-border rounded-sm">
                <p className="font-display text-2xl text-brand-dim italic">
                  Karya segera hadir ✦
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Featured — full width */}
                {featured.map((item) => (
                  <ShowcaseCard key={item.id} item={item} size="featured" />
                ))}

                {/* Regular — editorial grid */}
                {regular.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {regular.map((item, i) => (
                      <ShowcaseCard
                        key={item.id}
                        item={item}
                        size={i === 0 ? 'medium' : 'small'}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
