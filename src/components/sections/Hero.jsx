'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import NeonButton from '@/components/shared/NeonButton'
import { profile } from '@/data/profile'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Greeting badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card/50 px-4 py-1.5 text-xs font-medium text-brand-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text"
        >
          {profile.name.split(' ').map((word, i) => (
            <span key={i}>
              {i === profile.name.split(' ').length - 1 ? (
                <span className="text-gradient-cyan">{word}</span>
              ) : (
                word + ' '
              )}
            </span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-brand-muted"
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-3 text-sm sm:text-base text-brand-muted/70 max-w-lg mx-auto"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NeonButton
            variant="solid"
            href="#showcase"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Works
            <ArrowRight className="ml-2 h-4 w-4" />
          </NeonButton>

          <NeonButton
            variant="outline"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Get in Touch
          </NeonButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-brand-muted/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-brand-muted/40 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
