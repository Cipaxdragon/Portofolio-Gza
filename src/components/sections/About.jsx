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
  SiPhp,
  SiDiscord,
  SiNodedotjs
} from 'react-icons/si'
import {
  Palette,
  Film,
  Video,
  PenTool,
  ImagePlus,
  Box,
  Camera,
  Code,
  Globe,
  MapPin,
  Mail,
  Code2,
  Eye,
  BrainCircuit,
  Zap,
  Award,
  ExternalLink
} from 'lucide-react'
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremiere,
  TbBrandAdobeAfterEffect,
  TbBrandAdobe
} from 'react-icons/tb'
import { social } from '@/data/social'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const getQualityIcon = (name) => {
    switch (name) {
      case 'code': return <Code2 className="text-black" size={24} />
      case 'eye': return <Eye className="text-black" size={24} />
      case 'brain': return <BrainCircuit className="text-black" size={24} />
      case 'zap': return <Zap className="text-black" size={24} />
      default: return null
    }
  }

  const getCreativeIcon = (name, size = 28) => {
    switch (name) {
      case 'Motion Graphics': return <Film size={size} className="text-[#00D9FF]" />
      case 'Editing Video': return <Video size={size} className="text-[#00D9FF]" />
      case 'Design Basics': return <PenTool size={size} className="text-[#00D9FF]" />
      case 'Image Manipulation': return <ImagePlus size={size} className="text-[#00D9FF]" />
      case '3D Generalist Basics': return <Box size={size} className="text-[#00D9FF]" />
      case 'Photography': return <Camera size={size} className="text-[#00D9FF]" />
      default: return null
    }
  }

  const getCodingIcon = (name, size = 28) => {
    switch (name) {
      case 'Laravel': return <SiLaravel size={size} className="text-[#FF2D20]" />
      case 'React JS': return <SiReact size={size} className="text-[#61DAFB]" />
      case 'PHP': return <SiPhp size={size} className="text-[#777BB4]" />
      case 'Node.js': return <SiNodedotjs size={size} className="text-[#339933]" />
      case 'Discord Bot': return <SiDiscord size={size} className="text-[#5865F2]" />
      case 'Coding Basics': return <Code size={size} className="text-[#FFFFFF]" />
      case 'Build Website': return <Globe size={size} className="text-[#FFFFFF]" />
      default: return null
    }
  }

  const getSoftwareIcon = (name, size = 28) => {
    switch (name) {
      case 'Adobe Photoshop': return <TbBrandAdobePhotoshop size={size} className="text-[#31A8FF]" />
      case 'Adobe Illustrator': return <TbBrandAdobeIllustrator size={size} className="text-[#FF9A00]" />
      case 'Adobe Premiere Pro': return <TbBrandAdobePremiere size={size} className="text-[#9999FF]" />
      case 'Adobe After Effects': return <TbBrandAdobeAfterEffect size={size} className="text-[#9999FF]" />
      case 'Adobe Audition': return <TbBrandAdobe size={size} className="text-[#9999FF]" />
      case 'Figma': return <SiFigma size={size} className="text-[#F24E1E]" />
      case 'Canva': return <Palette size={size} className="text-[#00C4CC]" />
      case 'Blender': return <SiBlender size={size} className="text-[#F5792A]" />
      default: return null
    }
  }

  // Pisahkan antara Konsep (Keahlian) dan Alat (Software/Framework)
  const expertiseSkills = [
    ...profile.skills.creative.map(s => ({ ...s, category: 'creative' })),
    ...profile.skills.coding.filter(s => ['Coding Basics', 'Build Website'].includes(s.name)).map(s => ({ ...s, category: 'coding' }))
  ]
  
  const toolSkills = [
    ...profile.skills.software.map(s => ({ ...s, category: 'software' })),
    ...profile.skills.coding.filter(s => !['Coding Basics', 'Build Website'].includes(s.name)).map(s => ({ ...s, category: 'coding' }))
  ]

  const allSkills = [...expertiseSkills, ...toolSkills]

  const getSkillIcon = (skillName, category) => {
    if (category === 'creative') return getCreativeIcon(skillName, 20)
    if (category === 'coding') return getCodingIcon(skillName, 20)
    if (category === 'software') return getSoftwareIcon(skillName, 20)
    return null
  }

  return (
    <section id="about" className="relative px-6 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* 2-column layout for Photo & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
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

          {/* Bio & Info (New Layout) */}
          <div className="flex flex-col gap-6">
            <RevealText delay={0.1}>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1]">
                Hello I'm<br />
                <span className="italic">Ahmad</span> <span className="text-brand-accent font-bold">Ghazali</span>
              </h2>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="text-brand-muted text-lg sm:text-xl leading-relaxed mt-4 max-w-lg">
                I am a passionate Motion Graphics & Web Designer with a focus on building visually stunning digital experiences. {profile.bioExtended}
              </p>
            </RevealText>

            <RevealText delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-4 mt-8 font-mono text-sm text-brand-text/90">
                <a href={`mailto:${social.email}`} className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                  <Mail size={20} />
                  <span>{social.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-brand-error" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 relative flex-shrink-0 opacity-80">
                    <Image src={profile.education.logo} alt={profile.education.university} fill className="object-contain" sizes="20px" />
                  </div>
                  <span>{profile.education.university}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 relative flex-shrink-0 opacity-80">
                    <Image src="/images/logos/hmjsi.png" alt="Sistem Informasi" fill className="object-contain" sizes="20px" />
                  </div>
                  <span>Sistem informasi</span>
                </div>
              </div>
            </RevealText>
          </div>
        </div>

        {/* Compact Skills Section for Home */}
        <div className="mt-24 sm:mt-32">
          <SectionHeader title="Core Values & Tech Stack" />
          
          <div className="flex flex-col gap-10 mt-8">
            
            {/* Keunggulan (Core Qualities) - Medium Size */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {profile.coreQualities.map((quality, idx) => (
                <CardMotion key={quality.title} delay={0.1 + idx * 0.1}>
                  <div className="group border border-brand-border bg-brand-bg-2/30 p-4 transition-all duration-300 hover:bg-white/[0.02] hover:border-brand-accent/50 flex flex-col items-center text-center rounded-sm">
                    <div className={`w-10 h-10 flex items-center justify-center mb-3 rounded-sm ${quality.color} bg-opacity-20 group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300`}>
                      {getQualityIcon(quality.icon)}
                    </div>
                    <h3 className="font-bold font-display text-sm sm:text-base text-brand-text mb-1">{quality.title}</h3>
                    <p className="text-brand-muted text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                      {quality.description}
                    </p>
                  </div>
                </CardMotion>
              ))}
            </div>
            {/* Technical Stack (Small Pills) */}
            <div className="flex flex-wrap gap-2 justify-center">
              {allSkills.map((skill, idx) => (
                <CardMotion key={skill.name} delay={0.02 * idx}>
                  <div className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-brand-border bg-brand-bg-2/30 hover:bg-white/[0.02] hover:border-brand-accent/50 transition-all duration-300 rounded-sm cursor-default">
                    <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:text-brand-accent transition-all duration-300">
                      {getSkillIcon(skill.name, skill.category)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-brand-text/70 group-hover:text-brand-text transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </CardMotion>
              ))}
            </div>

          </div>
          {/* Box Container Button */}
          <div className="mt-16 text-center">
            <a 
              href="/about" 
              className="inline-flex items-center gap-3 bg-brand-text text-brand-bg hover:bg-brand-accent px-8 py-4 font-mono uppercase tracking-wider text-sm font-bold rounded-sm transition-all shadow-[4px_4px_0_0_rgba(0,217,255,0.3)] hover:shadow-[2px_2px_0_0_rgba(0,217,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span>Explore Full Profile & Experience</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* End of Unified Skills & Qualities Section */}


      </div>
    </section>
  )
}
