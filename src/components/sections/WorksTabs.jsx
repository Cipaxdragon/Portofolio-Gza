'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Showcase from '@/components/sections/Showcase'
import SocialGallery from '@/components/sections/SocialGallery'
import BtsCanvasSection from '@/components/sections/BtsCanvasSection'
import CodingShowcase from '@/components/sections/CodingShowcase'
import HorizontalTimeline from '@/components/sections/HorizontalTimeline'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import { afilabsProfile, hmjProfile } from '@/data/organizationWork'
import { Palette, Code2, ListFilter } from 'lucide-react'

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('creative')
  const [creativeFilter, setCreativeFilter] = useState('afilabs') // 'afilabs' | 'hmj' | 'inaugurasi' | 'kreasi'

  const handleFilterSelect = (id) => {
    setCreativeFilter(id)
    
    // Smooth scroll down to works gallery
    setTimeout(() => {
      document.getElementById('works-gallery-start')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      {/* TAB NAVIGATION */}
      <div className="w-full relative z-10 pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <div className="flex w-full max-w-md bg-white/5 rounded-full p-1 my-6 border border-white/10 relative">
            {/* Animated Tab Background Indicator */}
            <motion.div
              className="absolute inset-y-1 rounded-full bg-white/10 border border-white/5"
              initial={false}
              animate={{
                left: activeTab === 'creative' ? '4px' : '50%',
                width: 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            
            {/* Buttons */}
            <button
              onClick={() => setActiveTab('creative')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-full transition-colors duration-300 ${
                activeTab === 'creative' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" /> Creative
            </button>
            <button
              onClick={() => setActiveTab('coding')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-full transition-colors duration-300 ${
                activeTab === 'coding' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" /> Coding
            </button>
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="relative w-full min-h-screen">
        <AnimatePresence mode="wait">
          {activeTab === 'creative' && (
            <motion.div
              key="creative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* HORIZONTAL TIMELINE FILTER */}
              <div className="mx-auto max-w-6xl pt-12 pb-2 border-b border-white/10 mb-12 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-xl">
                  <ListFilter className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Filter Karya Berdasarkan Pengalaman</p>
                </div>
                
                <HorizontalTimeline 
                  profiles={[afilabsProfile, hmjProfile]}
                  onSelect={handleFilterSelect}
                  activeId={creativeFilter}
                />
              </div>

              {/* GALLERY ANCHOR */}
              <div id="works-gallery-start" className="scroll-mt-32" />

              {/* VERTICAL DETAIL INFO */}
              <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`detail-${creativeFilter}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {creativeFilter === 'afilabs' && (
                      <ExperienceTimeline profile={afilabsProfile} title="Detail Pengalaman." />
                    )}
                    {creativeFilter === 'hmj24' && (
                      <ExperienceTimeline profile={{ ...hmjProfile, experiences: hmjProfile.experiences.filter(e => e.role && e.role.includes("Ketua")) }} title="Detail Pengalaman." />
                    )}
                    {creativeFilter === 'hmj23' && (
                      <ExperienceTimeline profile={{ ...hmjProfile, experiences: hmjProfile.experiences.filter(e => e.role && e.role.includes("Anggota")) }} title="Detail Pengalaman." />
                    )}
                    {creativeFilter === 'inaugurasi' && (
                      <ExperienceTimeline profile={{ ...hmjProfile, experiences: hmjProfile.experiences.filter(e => e.orgName && e.orgName.includes("Saintek")) }} title="Detail Pengalaman." />
                    )}
                    {creativeFilter === 'kreasi' && (
                      <ExperienceTimeline profile={{ ...hmjProfile, experiences: hmjProfile.experiences.filter(e => e.orgName && e.orgName.includes("Kreasi")) }} title="Detail Pengalaman." />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* FILTERED CONTENT (GALLERY) */}
              <AnimatePresence mode="wait">
                {creativeFilter === 'afilabs' && (
                  <motion.div
                    key="afilabs-gallery"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <Showcase />
                  </motion.div>
                )}

                {(creativeFilter === 'hmj23' || creativeFilter === 'hmj24' || creativeFilter === 'inaugurasi' || creativeFilter === 'kreasi') && (
                  <motion.div
                    key="social-gallery"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <SocialGallery filterId={creativeFilter} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* GLOBAL BEHIND THE SCENES CANVAS */}
              <div className="mt-16">
                <BtsCanvasSection />
              </div>
            </motion.div>
          )}

          {activeTab === 'coding' && (
            <motion.div
              key="coding"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CodingShowcase />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
