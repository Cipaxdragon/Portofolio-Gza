'use client'

import { motion } from 'framer-motion'
import { Briefcase, PenTool, MonitorPlay, Rocket } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-black flex items-center justify-center min-h-[50vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        {/* Subtle purple/indigo glow for Services */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-indigo-600/20 blur-[120px] rounded-full opacity-50 mix-blend-screen pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 mb-8 shadow-xl"
        >
          <Briefcase className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase">Professional Services</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Brand</span> <br className="hidden sm:block" /> Identity.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transforming ideas into impactful digital realities. Discover how my expertise in Web Development, UI/UX, and Motion Graphics can help your business grow.
        </motion.p>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:flex top-1/4 left-[15%] w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] text-indigo-400"
      >
        <MonitorPlay className="w-8 h-8" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden md:flex bottom-1/4 right-[15%] w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)] text-cyan-400"
      >
        <PenTool className="w-8 h-8" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute hidden lg:flex top-1/3 right-[20%] w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full items-center justify-center shadow-2xl text-purple-400"
      >
        <Rocket className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
