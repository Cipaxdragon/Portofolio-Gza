'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, X, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import SectionHeader from '@/components/shared/SectionHeader'
import { TbBrandAdobePremiere, TbBrandAdobeAfterEffect, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from 'react-icons/tb'
import { SiFigma } from 'react-icons/si'

export default function ExperienceTimeline({ profile, title, onOpenProof, onSelect, activeId }) {
  const [selectedProof, setSelectedProof] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBTS, setShowBTS] = useState(false)

  const handleOpenProof = (proofData) => {
    if (onOpenProof) onOpenProof(proofData)
    else {
      setSelectedProof(proofData)
      setCurrentSlide(0)
      setShowBTS(false)
    }
  }

  const nextSlide = (e) => {
    e.stopPropagation()
    if (selectedProof && selectedProof.slides) {
      setCurrentSlide((prev) => (prev + 1) % selectedProof.slides.length)
    }
  }
  
  const prevSlide = (e) => {
    e.stopPropagation()
    if (selectedProof && selectedProof.slides) {
      setCurrentSlide((prev) => (prev - 1 + selectedProof.slides.length) % selectedProof.slides.length)
    }
  }
  const getToolIcon = (name) => {
    switch (name) {
      case 'Premiere Pro': return <TbBrandAdobePremiere className="w-4 h-4 text-[#9999FF]" />
      case 'After Effects': return <TbBrandAdobeAfterEffect className="w-4 h-4 text-[#9999FF]" />
      case 'Photoshop': return <TbBrandAdobePhotoshop className="w-4 h-4 text-[#31A8FF]" />
      case 'Illustrator': return <TbBrandAdobeIllustrator className="w-4 h-4 text-[#FF9A00]" />
      case 'Figma': return <SiFigma className="w-[14px] h-[14px] text-[#F24E1E]" />
      case 'CapCut': return <Image src="/images/logos/capcut-seeklogo.png" alt="CapCut" className="w-[14px] h-[14px] object-contain" width={14} height={14} />
      default: return null
    }
  }

  return (
    <div className="mb-12">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8">
        {title}
      </h2>
      <div className="mb-16 border-l-2 border-brand-primary/30 pl-8 lg:pl-10 ml-6 sm:ml-8">
        {profile.experiences.map((exp, idx) => (
          <div 
            key={idx} 
            onClick={() => onSelect && onSelect(exp.orgId || exp.id || profile.id)}
            className={`relative ${idx !== 0 ? 'mt-14' : ''} ${onSelect ? 'cursor-pointer group' : ''}`}
          >
            {/* Active Highlight Indicator (if selectable) */}
            {onSelect && activeId && (activeId === profile.id) && (
              <div className="absolute -left-10 lg:-left-12 top-0 bottom-0 w-1 bg-brand-accent/50 shadow-[0_0_10px_rgba(0,217,255,0.5)] z-0 rounded-r-md" />
            )}
            {/* Timeline Nodes */}
            {(exp.avatarUrl || idx === 0) ? (
              <div className="absolute -left-[57px] lg:-left-[69px] -top-3 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border-[4px] border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden z-10 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src={exp.avatarUrl || profile.avatarUrl} alt="Logo" fill sizes="64px" className="object-contain bg-black" />
                </div>
              </div>
            ) : (
              <div className="absolute -left-[40px] lg:-left-[48px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[4px] border-brand-primary z-10 shadow-[0_0_12px_rgba(var(--brand-primary-rgb),0.8)]"></div>
            )}
            
            <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 transition-colors ${onSelect ? 'group-hover:text-brand-accent' : ''} ${activeId === profile.id ? 'text-brand-accent' : 'text-white'}`}>
              {exp.role}
            </h3>
            <div className="mb-4">
              <p className="text-brand-primary font-medium text-xs sm:text-sm md:text-base">
                {exp.orgName || profile.name} • {exp.periode}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                {exp.duration}
              </p>
            </div>
            
            <p className="text-brand-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-6 whitespace-pre-line">
              {exp.description}
            </p>
            
            {/* Inline Media Card (LinkedIn Style) */}
            {exp.proofData && (
              <div 
                className="mb-6 flex items-center gap-4 cursor-pointer group rounded-xl hover:bg-white/5 p-2 -ml-2 transition-colors w-full sm:w-max pr-6 border border-transparent hover:border-white/10"
                onClick={() => handleOpenProof(exp.proofData)}
              >
                <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border border-white/10 bg-black flex-shrink-0">
                  <Image src={exp.proofData.url} alt="Proof Thumbnail" fill sizes="(max-width: 768px) 128px, 256px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-brand-primary transition-colors line-clamp-2">
                    {exp.proofData.title || exp.role}
                  </h4>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 lg:px-4 lg:py-1.5 bg-[#1a1a1a] border border-white/10 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:border-brand-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Tools & Apps Used */}
            {exp.tools && (
              <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-5 pt-5 border-t border-white/10">
                <span className="text-sm font-medium text-gray-400 mr-1 lg:mr-2">Aplikasi:</span>
                {exp.tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-black/40 border border-white/5 rounded-full text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                    title={tool.name}
                  >
                    <div className="flex items-center justify-center">
                      {getToolIcon(tool.name)}
                    </div>
                    {tool.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* PROOF MODAL */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setSelectedProof(null);
              setShowBTS(false);
            }}
          >
            <motion.div 
              layout
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-h-[90vh] flex flex-col md:flex-row transition-all duration-500 ease-out ${showBTS ? 'max-w-[90vw] md:max-w-[85vw] md:h-[80vh]' : 'max-w-3xl md:h-[480px]'}`}
            >
              <div className={`relative bg-black flex items-center justify-center transition-all duration-500 ease-out ${showBTS ? (selectedProof.canvasNodes ? 'w-full h-[100vh] md:h-full' : 'w-full h-[40vh] md:h-full md:w-3/4') : 'w-full h-[40vh] md:h-full md:w-[55%]'}`}>
                {showBTS && selectedProof.canvasNodes ? (
                    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-[#0a0a0a] overflow-hidden">
                      {/* Infinite Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03] pointer-events-none" />
                      
                      <TransformWrapper
                        initialScale={1.2}
                        minScale={0.5}
                        maxScale={4}
                        centerOnInit={true}
                        wheel={{ step: 0.1 }}
                      >
                        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%" }}>
                          <div className="w-[1200px] h-[800px] relative">
                            
                            {selectedProof.canvasNodes.map((node) => (
                              <motion.div
                                key={node.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden group hover:border-brand-primary/50 transition-colors"
                                style={{
                                  left: node.x,
                                  top: node.y,
                                  width: node.width,
                                  height: node.height,
                                }}
                              >
                                <div className="absolute top-0 inset-x-0 h-8 bg-black/50 border-b border-white/10 flex items-center px-3 backdrop-blur-sm z-10">
                                  <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                  </div>
                                  <span className="ml-3 text-[10px] font-medium text-gray-400 tracking-wider uppercase">{node.title}</span>
                                </div>
                                
                                <div className="absolute inset-0 pt-8 p-4 overflow-y-auto custom-scrollbar">
                                  {node.type === 'image' && (
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5 mb-3">
                                      <Image src={node.src} alt={node.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                                    </div>
                                  )}
                                  <p className="text-gray-300 text-xs leading-relaxed">{node.desc}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </TransformComponent>
                      </TransformWrapper>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-gray-300 shadow-2xl pointer-events-none">
                        <MousePointer2 className="w-4 h-4 text-brand-primary" />
                        <span>Pan & Zoom Canvas</span>
                      </div>
                    </div>
                ) : (
                  <>
                    <Image 
                      src={selectedProof.slides ? selectedProof.slides[currentSlide] : selectedProof.url} 
                      alt="Proof Details" 
                      fill 
                      sizes="100vw"
                      className="object-contain" 
                    />
                    
                    {selectedProof.slides && selectedProof.slides.length > 1 && (
                      <>
                        <button 
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm z-10">
                          {currentSlide + 1} / {selectedProof.slides.length}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              
              <div className={`p-5 md:p-6 lg:p-8 overflow-y-auto custom-scrollbar flex flex-col bg-[#111] transition-all duration-500 ${showBTS ? 'w-full md:w-1/4 min-w-[300px] border-l border-white/10' : 'flex-1'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/20">
                      <Image src={profile.avatarUrl || selectedProof.url} alt="Avatar" fill sizes="32px" className="object-cover bg-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm leading-tight">{profile.username || "Detail Bukti"}</h3>
                      <p className="text-gray-400 text-xs">Proof of Experience</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedProof(null);
                      setShowBTS(false);
                    }}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <h4 className="text-white font-bold text-lg md:text-xl mb-3">{selectedProof.title}</h4>
                <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed mb-6 flex-1">
                  {showBTS ? (selectedProof.btsDescription || "Sedang melihat desain teknis behind the scene.") : (selectedProof.caption || `Ini adalah bukti portofolio untuk posisi ${selectedProof.title}.`)}
                </p>

                {selectedProof.canvasNodes && selectedProof.canvasNodes.length > 0 && (
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <button
                      onClick={() => setShowBTS(!showBTS)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${
                        showBTS 
                          ? 'bg-black/50 text-white hover:bg-black border-white/20' 
                          : 'bg-white text-black hover:bg-gray-200 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                      }`}
                    >
                      {showBTS ? 'Kembali ke Bukti Karya' : (selectedProof.btsButtonText || 'Lihat Desain Teknis (Figma)')}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
