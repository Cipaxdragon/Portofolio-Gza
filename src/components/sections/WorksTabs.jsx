'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Showcase from '@/components/sections/Showcase'
import SocialGallery from '@/components/sections/SocialGallery'
import BtsCanvasSection from '@/components/sections/BtsCanvasSection'
import CodingShowcase from '@/components/sections/CodingShowcase'
import { Palette, Code2 } from 'lucide-react'

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('creative')

  return (
    <>
      {/* TAB NAVIGATION */}
      <div className="w-full bg-black border-b border-white/10 sticky top-[72px] z-40 backdrop-blur-xl bg-black/80">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <div className="flex w-full max-w-md bg-white/5 rounded-full p-1 my-6 border border-white/10 relative">
            {/* Animated Tab Background Indicator */}
            <motion.div
              className="absolute inset-y-1 rounded-full bg-brand-primary"
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
                activeTab === 'creative' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" /> Creative
            </button>
            <button
              onClick={() => setActiveTab('coding')}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-full transition-colors duration-300 ${
                activeTab === 'coding' ? 'text-black' : 'text-gray-400 hover:text-white'
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
              <Showcase />
              <SocialGallery />
              <BtsCanvasSection />
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
