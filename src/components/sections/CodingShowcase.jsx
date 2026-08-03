'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { codingWorks } from '@/data/codingWorks'
import { ExternalLink, Code2, MonitorPlay, Star, GitFork, X, TerminalSquare } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function CodingShowcase() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedProject])

  return (
    <section id="coding-showcase" className="relative px-6 py-12 sm:py-24 bg-black min-h-screen">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Programming & Development."
          subtitle="Repositori kode, antarmuka aplikasi, dan proyek pengembangan perangkat lunak sebagai mahasiswa Sistem Informasi."
        />

        {/* BENTO GRID UNTUK GITHUB CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/50 transition-all duration-300 bg-[#0d1117] flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]"
            >
              {/* GitHub Card Header */}
              <div className="p-6 sm:p-8 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TerminalSquare className="w-8 h-8 text-brand-primary" />
                    <a 
                      href={work.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[#58a6ff] hover:underline"
                    >
                      {work.repoName}
                    </a>
                  </div>
                  <a 
                    href={work.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {work.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Card Footer (Stats & Actions) */}
              <div className="px-6 sm:px-8 py-4 bg-[#010409] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: work.languageColor }}></span>
                    <span>{work.language}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-brand-primary cursor-pointer transition-colors">
                    <Star className="w-4 h-4" />
                    <span>{work.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-brand-primary cursor-pointer transition-colors">
                    <GitFork className="w-4 h-4" />
                    <span>{work.forks}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(work)}
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors"
                >
                  <MonitorPlay className="w-4 h-4" /> View Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL DEMO APLIKASI */}
      <AnimatePresence>
        {selectedProject && (
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
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 shrink-0 bg-[#0d1117]">
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-brand-primary" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">{selectedProject.repoName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-brand-primary text-black font-bold text-sm rounded-lg hover:bg-white transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Web
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white ml-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                
                {/* Features List */}
                <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Fitur Utama</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Demos */}
                <h3 className="text-xl font-bold text-white mb-6">Demo Aplikasi</h3>
                <div className="flex flex-col gap-8">
                  {selectedProject.demoMedia.map((media, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="w-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center aspect-video relative group">
                        {media.type === 'video' ? (
                          <video 
                            src={media.url}
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <img 
                            src={media.url}
                            alt={media.caption}
                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                      <p className="text-center text-sm text-gray-400 italic">
                        {media.caption}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
