'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Palette,
  Code,
  Monitor,
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { profile } from '@/data/profile'

const skillCategoryIcons = {
  creative: Palette,
  coding: Code,
  software: Monitor,
}

const skillCategoryLabels = {
  creative: 'Creative Skills',
  coding: 'Coding Skills',
  software: 'Software',
}

function SkillPill({ skill, delay }) {
  return (
    <motion.span
      className="inline-flex items-center rounded-full border border-brand-border bg-brand-card px-3 py-1 text-xs font-medium text-brand-muted transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
    >
      {skill}
    </motion.span>
  )
}

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-[1px] bg-brand-border last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-brand-accent bg-brand-bg flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-brand-accent" />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-brand-accent">{exp.year}</span>
        </div>
        <h4 className="text-sm font-semibold text-brand-text">{exp.role}</h4>
        <p className="text-xs text-brand-muted mt-0.5">{exp.organization}</p>
        <p className="text-xs text-brand-muted/70 mt-1">{exp.description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="About Me"
          subtitle="Mengenal lebih dekat tentang perjalanan dan keahlian saya."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Avatar + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 rounded-2xl bg-brand-accent/20 blur-2xl" />
              <div className="relative h-full w-full rounded-2xl border-2 border-brand-accent/30 bg-brand-card overflow-hidden flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-brand-muted leading-relaxed text-sm md:text-base">
              {profile.bio}
            </p>

            {/* Location + Education */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-brand-muted">
                <MapPin size={14} className="text-brand-accent" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-muted">
                <GraduationCap size={14} className="text-brand-accent" />
                {profile.education.major} — {profile.education.university} ({profile.education.batch})
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-brand-accent" />
                <h3 className="text-lg font-semibold text-brand-text">Experience</h3>
              </div>
              <div>
                {profile.experience.map((exp, i) => (
                  <TimelineItem key={i} exp={exp} index={i} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {Object.entries(profile.skills).map(([category, skills]) => {
              const Icon = skillCategoryIcons[category]
              return (
                <div key={category} className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={16} className="text-brand-accent" />
                    <h3 className="text-base font-semibold text-brand-text">
                      {skillCategoryLabels[category]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <SkillPill key={skill} skill={skill} delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
