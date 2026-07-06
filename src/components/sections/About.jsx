'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealText from '@/components/shared/RevealText'
import CardMotion from '@/components/shared/CardMotion'
import { profile } from '@/data/profile'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" className="relative px-6 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Siapa Gweh" />

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <CardMotion>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Cyan overlay on hover */}
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay pointer-events-none" />
            </div>
          </CardMotion>

          {/* Bio & Info */}
          <div className="flex flex-col gap-10">
            {/* Bio — puitis, bold */}
            <RevealText delay={0.1}>
              <p className="font-display text-2xl sm:text-3xl font-bold leading-snug">
                {profile.bio}
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="text-brand-muted leading-relaxed">
                {profile.bioExtended}
              </p>
            </RevealText>

            {/* Skills — minimal pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-label mb-4">Skills</p>
              <div className="flex flex-wrap gap-2">
                {[...profile.skills.creative, ...profile.skills.coding].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-brand-muted/80 border border-brand-border px-3 py-1 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-label mb-6">Experience</p>
              <div className="relative border-l border-brand-border pl-6 space-y-8">
                {profile.experience.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-brand-border" />
                    <p className="text-label mb-1">{exp.year}</p>
                    <h4 className="font-display text-lg font-bold">{exp.role}</h4>
                    <p className="text-brand-muted text-sm">{exp.organization}</p>
                    <p className="text-brand-muted/70 text-sm mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
