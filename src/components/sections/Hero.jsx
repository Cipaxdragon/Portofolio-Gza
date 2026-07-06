'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

export default function Hero() {
  const words = [
    { text: 'All',     italic: false },
    { text: 'Things',  italic: false },
    { text: 'Visual.', italic: true  },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/videos/reel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Fallback: Dot grid if no video */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-bg/60" />

      {/* Top-left label */}
      <motion.p
        className="absolute top-6 left-6 text-label z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        AHMAD GHAZALI — MAKASSAR, ID — {profile.education.batch}
      </motion.p>

      {/* Center Statement — word-by-word reveal */}
      <motion.div
        className="relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-display text-display leading-[0.95]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
              <motion.span
                className={`inline-block ${word.italic ? 'italic font-normal' : 'font-black'}`}
                variants={wordVariant}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      {/* Bottom-right label */}
      <motion.p
        className="absolute bottom-20 right-6 text-label z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Motion × Design × Code
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 right-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-brand-muted/40"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <span className="text-label !text-brand-muted/40">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
