'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { afilabsWorks } from '@/data/afilabsWorks'
import { X, Play, Film, MonitorPlay, Layers } from 'lucide-react'

export default function Showcase() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'bts' | 'variations'

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedWork])

  const openModal = (work) => {
    setSelectedWork(work)
    setActiveTab(work.bts && work.bts.length > 0 ? 'bts' : 'overview')
  }

  const closeModal = () => {
    setSelectedWork(null)
  }

  return (
    <section id="showcase" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Afilabs Internship."
          subtitle="Eksplorasi mahakarya profesional dan kolaborasi kreatif selama menjalani masa magang di Afilabs Creative Agency."
        />

        {/* BENTO GRID LAYOUT */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {afilabsWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => openModal(work)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand-primary/50 transition-colors bg-black ${
                work.featured ? 'md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              {/* Background Video (Muted, AutoPlay, Loop) */}
              <video 
                src={work.mainVideo}
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {work.category}
                    </span>
                    {work.bts && work.bts.length > 0 && (
                      <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1">
                        <Film className="w-3 h-3" /> BTS
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    {work.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base line-clamp-2 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {work.description}
                  </p>
                </div>
              </div>
              
              {/* Play Button Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL / POPUP */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 shrink-0 bg-black/50">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedWork.title}</h2>
                  <p className="text-brand-primary text-sm">{selectedWork.role}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tabs Navigation */}
              <div className="flex px-4 sm:px-6 border-b border-white/10 overflow-x-auto hide-scrollbar shrink-0 bg-black/30">
                {selectedWork.bts && selectedWork.bts.length > 0 && (
                  <button 
                    onClick={() => setActiveTab('bts')}
                    className={`px-4 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                      activeTab === 'bts' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <Film className="w-4 h-4" /> Behind the Scenes
                  </button>
                )}
                
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'overview' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <MonitorPlay className="w-4 h-4" /> Project Overview
                </button>
                
                {selectedWork.variations && selectedWork.variations.length > 0 && (
                  <button 
                    onClick={() => setActiveTab('variations')}
                    className={`px-4 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                      activeTab === 'variations' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-4 h-4" /> Mockup Variations ({selectedWork.variations.length})
                  </button>
                )}
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                
                {/* TAB: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                    <div className={`w-full bg-black rounded-xl overflow-hidden border border-white/5 mx-auto flex items-center justify-center ${
                      selectedWork.aspectRatio === 'portrait' ? 'max-w-md aspect-[9/16]' : 'aspect-video'
                    }`}>
                      <video 
                        src={selectedWork.mainVideo}
                        controls 
                        autoPlay 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="max-w-4xl mx-auto w-full">
                      <h3 className="text-lg font-bold text-white mb-2">Project Description</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {selectedWork.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {selectedWork.tools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: BEHIND THE SCENES */}
                {activeTab === 'bts' && selectedWork.bts && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                    {selectedWork.bts.map((btsItem, idx) => (
                      <div key={idx} className="flex flex-col bg-black/40 border border-white/10 rounded-xl overflow-hidden group">
                        <div className="relative aspect-video bg-black border-b border-white/10">
                          <video 
                            src={btsItem.videoUrl}
                            controls 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-white text-lg mb-2">{btsItem.title}</h4>
                          <p className="text-gray-400 text-sm">{btsItem.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB: VARIATIONS (Khusus Arvala) */}
                {activeTab === 'variations' && selectedWork.variations && (
                  <div className="animate-in fade-in duration-500">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Mockup Animation Library</h3>
                      <p className="text-gray-400">Beberapa variasi animasi presentasi mockup merek yang dirancang selama proyek ini.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedWork.variations.map((vari, idx) => (
                        <div key={idx} className="bg-black border border-white/10 rounded-xl overflow-hidden group hover:border-brand-primary/50 transition-colors">
                          <div className="relative bg-[#050505]">
                            <video 
                              src={vari.url}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity block"
                            />
                          </div>
                          <div className="p-3 bg-black/80 backdrop-blur-sm border-t border-white/5">
                            <p className="text-sm font-semibold text-white text-center">{vari.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
