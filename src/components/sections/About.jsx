'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'
import RevealText from '@/components/shared/RevealText'
import CardMotion from '@/components/shared/CardMotion'
import { profile } from '@/data/profile'
import { 
  SiFigma, 
  SiBlender,
  SiLaravel,
  SiReact,
  SiPhp
} from 'react-icons/si'
import {
  Image as ImageIcon,
  PenTool,
  Video,
  Layers,
  Mic,
  Palette
} from 'lucide-react'

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

            {/* Skills — Split into categories with icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Creative Skills */}
              <div>
                <p className="text-label mb-3 text-brand-accent">Creative & Design</p>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.creative.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-brand-muted/80 border border-brand-border px-3 py-1 rounded-sm bg-brand-bg-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coding Skills */}
              <div>
                <p className="text-label mb-3 text-brand-accent">Development & Logic</p>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.coding.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-brand-text/90 border border-brand-border px-3 py-1 rounded-sm bg-brand-bg-2 flex items-center gap-1.5"
                    >
                      {skill === 'Laravel' && <SiLaravel className="text-[#FF2D20]" />}
                      {skill === 'React JS' && <SiReact className="text-[#61DAFB]" />}
                      {skill === 'PHP' && <SiPhp className="text-[#777BB4]" />}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Tools */}
              <div>
                <p className="text-label mb-3 text-brand-accent">Software Arsenal</p>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.software.map((software) => (
                    <span
                      key={software}
                      className="text-xs font-mono text-brand-text/90 border border-brand-border px-3 py-1 rounded-sm bg-brand-bg-2 flex items-center gap-1.5"
                    >
                      {software === 'Adobe Photoshop' && <ImageIcon size={14} className="text-[#31A8FF]" />}
                      {software === 'Adobe Illustrator' && <PenTool size={14} className="text-[#FF9A00]" />}
                      {software === 'Adobe Premiere Pro' && <Video size={14} className="text-[#9999FF]" />}
                      {software === 'Adobe After Effects' && <Layers size={14} className="text-[#9999FF]" />}
                      {software === 'Adobe Audition' && <Mic size={14} className="text-[#9999FF]" />}
                      {software === 'Figma' && <SiFigma className="text-[#F24E1E]" />}
                      {software === 'Canva' && <Palette size={14} className="text-[#00C4CC]" />}
                      {software === 'Blender' && <SiBlender className="text-[#F5792A]" />}
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
