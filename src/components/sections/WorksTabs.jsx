'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Showcase from '@/components/sections/Showcase'
import SocialGallery from '@/components/sections/SocialGallery'
import BtsCanvasSection from '@/components/sections/BtsCanvasSection'
import CodingShowcase from '@/components/sections/CodingShowcase'
import HorizontalTimeline from '@/components/sections/HorizontalTimeline'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import { afilabsProfile, hmjProfile } from '@/data/organizationWork'
import { Palette, Code2, ListFilter, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('creative')
  const [creativeFilter, setCreativeFilter] = useState(null)
  const [showBackToTimeline, setShowBackToTimeline] = useState(false)

  // Set active tab based on URL query parameter (e.g., ?tab=coding)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tabParam = params.get('tab')
      if (tabParam === 'coding' || tabParam === 'creative') {
        setActiveTab(tabParam)
      }
    }
  }, [])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location)
      url.searchParams.set('tab', newTab)
      window.history.pushState({}, '', url)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan tombol jika scroll lebih dari 600px
      if (window.scrollY > 600) {
        setShowBackToTimeline(true)
      } else {
        setShowBackToTimeline(false)
      }

      // Auto-update active logo based on scroll position
      const sections = [
        { id: 'gallery-committee', filterId: 'kreasi' }, // Urutan dari bawah ke atas agar tertangkap yang paling bawah dulu
        { id: 'gallery-hmj', filterId: 'hmj24' },
        { id: 'gallery-afilabs', filterId: 'afilabs' }
      ];

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Jika ujung atas area tersebut sudah melewati atau berada di paruh atas layar
          if (rect.top <= window.innerHeight / 2) {
             setCreativeFilter(prev => {
                if (sections[i].id === 'gallery-hmj' && (prev === 'hmj24' || prev === 'hmj23')) return prev;
                if (sections[i].id === 'gallery-committee' && (prev === 'kreasi' || prev === 'inaugurasi')) return prev;
                return sections[i].filterId;
             });
             break; // Hentikan loop karena kita menemukan area terdalam
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTimeline = () => {
    const element = document.getElementById('timeline-filter-start')
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleFilterSelect = (id) => {
    setCreativeFilter(id)
    
    // Smooth scroll down to the specific gallery section
    setTimeout(() => {
      let targetId = 'works-gallery-start'
      if (id === 'afilabs') targetId = 'gallery-afilabs'
      else if (id === 'hmj24' || id === 'hmj23') targetId = 'gallery-hmj'
      else if (id === 'kreasi' || id === 'inaugurasi') targetId = 'gallery-committee'

      const element = document.getElementById(targetId)
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100 // offset for navbar
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 150)
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
              onClick={() => handleTabChange('creative')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-full transition-colors duration-300 ${
                activeTab === 'creative' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" /> Creative
            </button>
            <button
              onClick={() => handleTabChange('coding')}
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
              <div id="timeline-filter-start" className="mx-auto max-w-6xl pt-12 pb-2 border-b border-white/10 mb-12 flex flex-col items-center scroll-mt-24">
                <div className="flex items-center gap-3 mb-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-xl">
                  <ListFilter className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Pilih Pengalaman untuk melihat detail</p>
                </div>
                
                <HorizontalTimeline 
                  profiles={[afilabsProfile, hmjProfile]}
                  onSelect={handleFilterSelect}
                  activeId={creativeFilter}
                />
              </div>

              {/* ALL CONTENT (GALLERY) */}
              <div className="flex flex-col gap-12 overflow-hidden w-full">
                
                <div id="gallery-afilabs" className="scroll-mt-32">
                  <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-16 overflow-hidden">
                    <ExperienceTimeline profile={afilabsProfile} title="Detail Pengalaman." />
                  </div>
                  
                  <Showcase />
                </div>

                <SocialGallery activeDetailId={creativeFilter} />
              </div>

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

      {/* FLOATING VERTICAL MINI TIMELINE (QUICK NAV) */}
      <AnimatePresence>
        {showBackToTimeline && activeTab === 'creative' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            {/* Background Line */}
            <div className="absolute top-4 bottom-4 w-[2px] bg-white/10 z-0" />
            
            {[
              { id: 'afilabs', icon: afilabsProfile.avatarUrl, title: 'Afilabs' },
              { id: 'hmj24', icon: hmjProfile.avatarUrl, title: 'Ketua Divisi' },
              { id: 'hmj23', icon: hmjProfile.avatarUrl, title: 'Anggota Divisi' },
              { id: 'inaugurasi', icon: '/images/logos/logo_saintek.png', title: 'Inaugurasi' },
              { id: 'kreasi', icon: '/images/logos/Logo_kreasi 1.png', title: 'Kreasi' }
            ].map((item, idx) => {
              // Cek apakah item ini harus aktif secara grup
              const isGroupActive = 
                (item.id === 'hmj24' || item.id === 'hmj23') ? (creativeFilter === 'hmj24' || creativeFilter === 'hmj23') :
                (item.id === 'kreasi' || item.id === 'inaugurasi') ? (creativeFilter === 'kreasi' || creativeFilter === 'inaugurasi') :
                creativeFilter === item.id;
              
              const isActive = creativeFilter === item.id || isGroupActive;
              
              // Garis glowing penghubung ke bawah (jika dalam satu grup dan grupnya sedang aktif)
              const hasActiveLineBelow = 
                (item.id === 'hmj24' && isGroupActive) || 
                (item.id === 'inaugurasi' && isGroupActive);

              return (
                <div key={item.id} className="relative z-10 group flex flex-col items-center">
                  {/* Garis penghubung aktif ke item di bawahnya */}
                  {hasActiveLineBelow && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+0.75rem)] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-[-1]" />
                  )}

                  <button
                    onClick={() => handleFilterSelect(item.id)}
                    className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center overflow-hidden bg-black ${
                      isActive 
                        ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                        : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50 hover:scale-105'
                    }`}
                  >
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      sizes="40px"
                      className={`object-contain ${item.id === 'afilabs' || item.id === 'inaugurasi' || item.id === 'kreasi' ? 'bg-white p-1' : 'bg-black p-1'}`} 
                    />
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 border border-white/10 text-white text-[10px] md:text-xs font-semibold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap backdrop-blur-sm">
                    {item.title}
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
