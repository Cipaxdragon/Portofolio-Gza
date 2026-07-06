'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Play, Eye, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/shared/SocialIcons'
import SectionHeader from '@/components/shared/SectionHeader'
import TabFilter from '@/components/shared/TabFilter'
import CardMotion from '@/components/shared/CardMotion'
import { showcase, showcaseCategories } from '@/data/showcase'

function EmptyState({ category }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-card">
        <Sparkles className="h-7 w-7 text-brand-accent/50" />
      </div>
      <p className="text-brand-muted text-sm font-medium">Karya segera hadir ✦</p>
      <p className="mt-1 text-brand-muted/50 text-xs max-w-xs">
        Konten {category} sedang dalam proses pembuatan. Stay tuned!
      </p>
    </motion.div>
  )
}

function ShowcaseCard({ item }) {
  return (
    <CardMotion>
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-brand-bg mb-4">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-card to-brand-bg">
            <Eye className="h-8 w-8 text-brand-muted/30" />
          </div>
        )}

        {/* Video play indicator */}
        {item.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/90 text-black">
              <Play size={20} fill="black" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="text-sm font-semibold text-brand-text line-clamp-1">
        {item.title}
      </h3>
      <p className="mt-1 text-xs text-brand-muted line-clamp-2">
        {item.description}
      </p>

      {/* Tools */}
      {item.tools && item.tools.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-brand-accent/10 px-2 py-0.5 text-[10px] font-medium text-brand-accent"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-3 flex items-center gap-3">
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ExternalLink size={12} />
            Demo
          </a>
        )}
        {item.githubUrl && (
          <a
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-brand-muted hover:text-brand-accent transition-colors"
          >
            <GithubIcon size={12} />
            Code
          </a>
        )}
      </div>
    </CardMotion>
  )
}

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(showcaseCategories[0].key)

  const currentItems = showcase[activeTab] || []

  return (
    <section id="showcase" className="py-20 md:py-32 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="Showcase"
          subtitle="Koleksi karya terbaik dari berbagai kategori kreatif dan teknis."
        />

        <TabFilter
          tabs={showcaseCategories}
          active={activeTab}
          onChange={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item) => (
                  <ShowcaseCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                category={
                  showcaseCategories.find((c) => c.key === activeTab)?.label ||
                  activeTab
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
