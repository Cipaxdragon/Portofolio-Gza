'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { services } from '@/data/services'
import { ArrowRight, Code2, Film, Sparkles } from 'lucide-react'
import Link from 'next/link'

const serviceIcons = {
  coding: Code2,
  'video-editing': Film,
}

const serviceAccents = {
  coding: {
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    glow: 'rgba(0, 217, 255, 0.15)',
    glowHover: 'rgba(0, 217, 255, 0.35)',
    border: 'cyan-500',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    ring: 'ring-cyan-500/20',
  },
  'video-editing': {
    gradient: 'from-orange-500 via-rose-500 to-purple-600',
    glow: 'rgba(251, 146, 60, 0.15)',
    glowHover: 'rgba(251, 146, 60, 0.35)',
    border: 'orange-500',
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    ring: 'ring-orange-500/20',
  },
}

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-10%' })

  const Icon = serviceIcons[service.id] || Sparkles
  const accent = serviceAccents[service.id] || serviceAccents.coding

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl z-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />
        <div className="absolute inset-0 bg-brand-border group-hover:opacity-0 transition-opacity duration-700" />
      </div>

      {/* Mouse-follow radial glow */}
      <div
        className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${accent.glow}, transparent 40%)`
            : 'none',
        }}
      />

      {/* Card content */}
      <div className="relative z-[2] bg-brand-bg/95 backdrop-blur-xl rounded-2xl p-8 sm:p-10 h-full flex flex-col m-[1px]">
        
        {/* Top row: Icon + Tag */}
        <div className="flex items-start justify-between mb-8">
          <motion.div
            className={`relative w-16 h-16 rounded-2xl ${accent.bg} ring-1 ${accent.ring} flex items-center justify-center`}
            animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Icon className={`w-7 h-7 ${accent.text}`} strokeWidth={1.5} />
            {/* Ambient pulse */}
            <div className={`absolute inset-0 rounded-2xl ${accent.bg} animate-ping opacity-20`} />
          </motion.div>

          <span className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest ${accent.text} ${accent.bg} ring-1 ${accent.ring} rounded-full`}>
            {service.id === 'coding' ? 'Development' : 'Production'}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${accent.gradient} transition-all duration-500">
          {service.title}
        </h3>

        {/* Tagline */}
        <p className={`text-sm font-medium ${accent.text} mb-4 opacity-80`}>
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed line-clamp-3 mb-8">
          {service.description}
        </p>

        {/* Tools strip */}
        <div className="mt-auto">
          <p className="text-xs text-brand-muted/60 font-mono uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {service.tools.slice(0, 5).map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
              >
                {tool.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom CTA row */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
          <span className="text-sm text-brand-muted group-hover:text-white transition-colors duration-300">
            Lihat Detail Layanan
          </span>
          <motion.div
            className={`w-10 h-10 rounded-xl ${accent.bg} ring-1 ${accent.ring} flex items-center justify-center`}
            animate={isHovered ? { x: 4, scale: 1.1 } : { x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <ArrowRight className={`w-4 h-4 ${accent.text}`} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section id="services" className="relative px-6 py-24 sm:py-32 bg-brand-bg overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[150px]" />
        <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-purple-500/[0.04] rounded-full blur-[150px]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div ref={sectionRef} className="mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-brand-muted text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            What I Offer
          </motion.span>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let&apos;s Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Something.
            </span>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg max-w-lg mx-auto">
            Layanan utama yang saya sediakan untuk mewujudkan visi digital Anda.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Link key={service.id} href={`/services#${service.id}`}>
              <ServiceCard service={service} index={i} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden font-mono text-sm uppercase tracking-wider font-bold transition-all duration-500"
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-90 group-hover/btn:opacity-100 transition-opacity" />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <span className="relative z-10 text-white">Explore All Services</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
