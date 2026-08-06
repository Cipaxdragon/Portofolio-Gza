'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { codingWorks } from '@/data/codingWorks'
import { ExternalLink, Code2, MonitorPlay, Star, GitFork, X, TerminalSquare, ChevronRight, Layout, Server, Database, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaReact, FaLaravel, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si'

// Tech Stack Component (Infinite Marquee)
const TechStack = () => {
  const techs = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Laravel", icon: FaLaravel, color: "text-[#FF2D20]" },
    { name: "MySQL", icon: FaDatabase, color: "text-[#4479A1]" },
  ];

  return (
    <div className="mb-20 overflow-hidden relative w-full">
      {/* Fade Gradients for ends */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex w-max gap-6 items-center py-4"
      >
        {/* Render 3 times for seamless looping */}
        {[...techs, ...techs, ...techs].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors hover:border-white/20 group cursor-default shadow-lg">
            <tech.icon className={`w-5 h-5 ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
            <span className="text-gray-400 group-hover:text-white font-mono text-sm transition-colors">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function CodingShowcase() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      setActiveMediaIndex(0) // Reset media index when opening new project
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedProject])

  return (
    <section id="coding-showcase" className="relative px-4 sm:px-6 py-12 sm:py-24 bg-black min-h-screen">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeader
          title="Programming & Development."
          subtitle="Repositori kode, antarmuka aplikasi, dan proyek pengembangan perangkat lunak sebagai mahasiswa Sistem Informasi."
        />

        <TechStack />

        {/* GITHUB STATS WIDGET */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <a href="https://github.com/ahmad-ghazali" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://github-readme-stats.vercel.app/api?username=ahmad-ghazali&show_icons=true&theme=transparent&hide_border=true&title_color=00D9FF&text_color=9ca3af&icon_color=00D9FF" 
              alt="GitHub Stats" 
              className="w-full h-auto max-w-[400px] object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(0,217,255,0.1)] group-hover:scale-105 transition-transform duration-500"
            />
          </a>
          <a href="https://github.com/ahmad-ghazali" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ahmad-ghazali&layout=compact&theme=transparent&hide_border=true&title_color=00D9FF&text_color=9ca3af" 
              alt="Top Languages" 
              className="w-full h-auto max-w-[400px] object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        </div>

        {/* BENTO GRID UNTUK GITHUB CARDS */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {codingWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group h-full"
            >
              {/* Glowing Border Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-purple-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md group-hover:blur-xl" />
              
              {/* Card Container */}
              <div className="relative h-full bg-[#0d1117]/90 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-2xl overflow-hidden flex flex-col z-10 transition-colors duration-500">
                
                {/* Visual Header Banner (Terminal-like) */}
                <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-xs font-mono text-gray-500">
                    bash ~ {work.repoName.split('/')[1]}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-xl border border-brand-primary/20 text-brand-primary group-hover:scale-110 transition-transform">
                        <TerminalSquare className="w-6 h-6" />
                      </div>
                      <a 
                        href={work.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-bold text-white hover:text-brand-primary transition-colors line-clamp-1"
                      >
                        {work.title}
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {work.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 hover:bg-brand-primary/10 text-gray-300 hover:text-brand-primary border border-white/10 hover:border-brand-primary/30 rounded-md text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer (Stats & Actions) */}
                <div className="px-6 sm:px-8 py-4 bg-[#010409]/80 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: work.languageColor, color: work.languageColor }}></span>
                      <span className="text-gray-300">{work.language}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-white transition-colors cursor-help">
                      <Star className="w-4 h-4 text-yellow-500/80" />
                      <span>{work.stars}</span>
                    </div>
                    <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                      <GitFork className="w-4 h-4 text-gray-500" />
                      <span>{work.forks}</span>
                    </a>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(work)}
                    className="flex items-center gap-2 text-sm font-bold text-black bg-white hover:bg-brand-primary px-4 py-2 rounded-lg transition-colors group/btn"
                  >
                    <MonitorPlay className="w-4 h-4" /> 
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ADVANCED POPUP MODAL (SPLIT SCREEN) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/80 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[95vh] md:h-[85vh] bg-[#0d1117] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              
              {/* LEFT SIDEBAR: Info & Details (Scrollable) */}
              <div className="w-full md:w-[400px] lg:w-[450px] flex-shrink-0 bg-[#0a0a0a] border-r border-white/10 flex flex-col max-h-[50vh] md:max-h-full overflow-y-auto custom-scrollbar relative z-20">
                <div className="p-6 md:p-8 flex flex-col gap-8 h-full">
                  
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4 md:hidden">
                      <span className="text-xs font-mono text-brand-primary">Project Detail</span>
                      <button onClick={() => setSelectedProject(null)} className="p-2 bg-white/5 rounded-full text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h2>
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-primary font-mono transition-colors">
                      <FaGithub className="w-4 h-4" /> {selectedProject.repoName}
                    </a>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary text-black font-bold text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Preview
                      </a>
                    )}
                    <a 
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white font-bold text-sm rounded-xl hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" /> Source Code
                    </a>
                  </div>

                  <hr className="border-white/10" />

                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-brand-primary" /> Core Features
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {selectedProject.features.map((feat, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                           <span className="leading-snug">{feat}</span>
                         </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Server className="w-4 h-4 text-brand-primary" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#161b22] text-gray-300 border border-white/10 rounded-md text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT MAIN AREA: BROWSER MOCKUP DEMO */}
              <div className="flex-1 bg-[#010409] p-4 sm:p-8 flex items-center justify-center relative overflow-hidden">
                {/* Close button for Desktop */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="hidden md:flex absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white z-50 border border-white/10 backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Decorative BG for Mockup */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                   <div className="w-[80%] h-[80%] bg-gradient-to-tr from-brand-primary/20 to-purple-600/20 rounded-full blur-[100px]" />
                </div>

                <div className="w-full max-w-4xl flex flex-col items-center gap-6 relative z-10">
                  
                  {/* Browser Window Mockup */}
                  <div className="w-full rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Browser Toolbar */}
                    <div className="h-10 bg-[#161b22] border-b border-white/10 flex items-center px-4 gap-4">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-sm bg-[#010409] border border-white/10 rounded-md text-center text-xs text-gray-400 font-mono py-1 px-4 truncate">
                          {selectedProject.liveUrl ? new URL(selectedProject.liveUrl).hostname : 'localhost:3000'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen / Media Content */}
                    <div className="relative aspect-video bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeMediaIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full"
                        >
                          {selectedProject.demoMedia[activeMediaIndex].type === 'video' ? (
                            <video 
                              src={selectedProject.demoMedia[activeMediaIndex].url}
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <img 
                              src={selectedProject.demoMedia[activeMediaIndex].url}
                              alt={selectedProject.demoMedia[activeMediaIndex].caption}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Media Controls / Caption */}
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 gap-4">
                    <p className="text-gray-400 text-sm italic font-serif flex-1 text-center sm:text-left">
                      "{selectedProject.demoMedia[activeMediaIndex].caption}"
                    </p>
                    
                    {selectedProject.demoMedia.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0">
                        {selectedProject.demoMedia.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveMediaIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              activeMediaIndex === idx 
                                ? 'w-6 bg-brand-primary shadow-[0_0_10px_rgba(0,217,255,0.8)]' 
                                : 'bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
