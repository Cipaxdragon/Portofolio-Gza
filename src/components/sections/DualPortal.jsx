'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Terminal, Palette, ArrowRight, Code2, Film, Layers, MonitorPlay } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

export default function DualPortal() {
  return (
    <section id="showcase" className="relative px-6 py-24 sm:py-32 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[800px] opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <SectionHeader
          title="Masterpieces & Portfolios."
          subtitle="Jelajahi dua dunia keahlian utama saya. Pilih dimensi karya yang ingin Anda eksplorasi lebih dalam."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
          
          {/* PORTAL 1: CREATIVE & LEADERSHIP */}
          <Link href="/works?tab=creative" className="group relative block h-full min-h-[400px] rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-4 focus:ring-offset-black">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black z-10 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-overlay" />
              
              <div className="relative z-20 flex flex-col h-full p-8 md:p-12">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 mb-6 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
                    <Palette className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">Visual Arts & <br/> Leadership</h3>
                  <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed">
                    Eksplorasi mahakarya desain UI/UX, motion graphics, produksi video komersial Afilabs, serta kiprah organisasi.
                  </p>

                  {/* Mini Preview */}
                  <div className="mt-8 flex flex-col gap-3 max-w-md">
                    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-purple-900/20 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg bg-black overflow-hidden shrink-0 border border-white/10">
                        <div className="absolute inset-0 z-[9999] bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
                        <video src="/images/showcase/Afilabs_Karya/Arvala/4_Elegance_Alternating_Grid.mp4" width="1" height="1" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload" className="w-full h-full object-cover pointer-events-none" onContextMenu={(e) => e.preventDefault()} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Arvala Brand Mockup</p>
                        <p className="text-gray-400 text-xs">Motion Graphics</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-purple-900/20 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg bg-black overflow-hidden shrink-0 border border-white/10">
                        <div className="absolute inset-0 z-[9999] bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
                        <video src="/images/showcase/Afilabs_Karya/Arvala/7_Sporty_Fan_Animation.mp4" width="1" height="1" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload" className="w-full h-full object-cover pointer-events-none" onContextMenu={(e) => e.preventDefault()} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Afilabs Commercial</p>
                        <p className="text-gray-400 text-xs">Video Production</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-purple-900/20 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg bg-black overflow-hidden shrink-0 border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                        <div className="absolute inset-0 z-[9999] bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
                        <video src="/images/showcase/instagram/Ekpetasi_realtia/AQMviRBRqBuRSSbiQVlb6aU0LQw0c2H7rEUJdsCqJsThKtR-f1UHCrWOSbQ2ue0ac1Ccp0kUn4g3qLa3ccPlItpwH6ngkYmVvRfY7cs.mp4" width="1" height="1" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload" className="w-full h-full object-cover pointer-events-none" onContextMenu={(e) => e.preventDefault()} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">HMJ-SI Kepanitiaan</p>
                        <p className="text-gray-400 text-xs">Organization & Leadership</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                   <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm group-hover:text-purple-300 transition-colors">Lihat Selengkapnya</span>
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110">
                     <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* PORTAL 2: PROGRAMMING & DEVELOPMENT */}
          <Link href="/works?tab=coding" className="group relative block h-full min-h-[400px] rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-4 focus:ring-offset-black">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-[#0a0a0a] to-black z-10 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Hacker Grid Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] group-hover:bg-[size:45px_45px] transition-all duration-1000 ease-out opacity-20" />
              
              <div className="relative z-20 flex flex-col h-full p-8 md:p-12 border border-white/5 group-hover:border-brand-primary/30 rounded-3xl transition-colors duration-500">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center p-4 bg-brand-primary/10 backdrop-blur-xl rounded-2xl border border-brand-primary/30 mb-6 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300">
                    <Terminal className="w-10 h-10 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">Software <br/> Engineering</h3>
                  <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed">
                    Jelajahi repositori kode, live demo aplikasi web premium, arsitektur sistem, dan kloning GitHub interaktif.
                  </p>

                  {/* Mini Preview */}
                  <div className="mt-8 flex flex-col gap-3 max-w-md">
                    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-brand-primary/10 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg bg-black overflow-hidden shrink-0 border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                        <div className="absolute inset-0 z-[9999] bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
                        <video src="/images/showcase/Afilabs_Karya/Arvala/6_Train_2_Card_Push.mp4" width="1" height="1" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload" className="w-full h-full object-cover pointer-events-none" onContextMenu={(e) => e.preventDefault()} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Ghazali Personal Portfolio</p>
                        <p className="text-gray-400 text-xs font-mono">Next.js • React • Tailwind</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group-hover:bg-brand-primary/10 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg bg-black overflow-hidden shrink-0 border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                        <div className="absolute inset-0 z-[9999] bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
                         <video src="/images/showcase/Afilabs_Karya/Arvala/5_Cafe_3d_Card_Stacked.mp4" width="1" height="1" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload" className="w-full h-full object-cover pointer-events-none" onContextMenu={(e) => e.preventDefault()} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Inventaris Lab Web App</p>
                        <p className="text-gray-400 text-xs font-mono">Laravel • MySQL • Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                   <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm font-mono group-hover:text-white transition-colors">Lihat Selengkapnya</span>
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-110">
                     <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform group-hover:text-black" />
                   </div>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  )
}
