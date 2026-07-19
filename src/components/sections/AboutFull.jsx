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

export default function AboutFull() {
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

  const getSkillIcon = (skillName, category) => {
    if (category === 'creative') return getCreativeIcon(skillName, 32)
    if (category === 'coding') return getCodingIcon(skillName, 32)
    if (category === 'software') return getSoftwareIcon(skillName, 32)
    return null
  }

  return (
    <section id="about-full" className="relative px-6 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Editorial Layout for Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          
          {/* Left Column: Text & Info (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <RevealText delay={0.1}>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1]">
                  Hello I'm<br />
                  <span className="italic">Ahmad</span> <span className="text-brand-accent font-bold">Ghazali</span>
                </h2>
              </RevealText>
              
              <RevealText delay={0.2}>
                <p className="text-brand-muted text-lg sm:text-xl leading-relaxed mt-6 max-w-lg">
                  I am a passionate Motion Graphics & Web Designer with a focus on building visually stunning digital experiences. {profile.bioExtended}
                </p>
              </RevealText>
            </div>

            <RevealText delay={0.3}>
              <div className="flex flex-col gap-5 border-l-2 border-brand-accent/30 pl-6 py-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">Location</span>
                  <div className="flex items-center gap-2 text-brand-text text-sm">
                    <MapPin size={16} className="text-brand-error" />
                    <span>{profile.location}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">Contact</span>
                  <a href={`mailto:${social.email}`} className="flex items-center gap-2 text-brand-text text-sm hover:text-brand-accent transition-colors">
                    <Mail size={16} />
                    <span>{social.email}</span>
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">Education</span>
                  <div className="flex items-center gap-2 text-brand-text text-sm">
                    <div className="w-4 h-4 relative flex-shrink-0 opacity-80">
                      <Image src={profile.education.logo} alt={profile.education.university} fill className="object-contain" sizes="16px" />
                    </div>
                    <span>{profile.education.university}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">Major</span>
                  <div className="flex items-center gap-2 text-brand-text text-sm">
                    <div className="w-4 h-4 relative flex-shrink-0 opacity-80">
                      <Image src="/images/logos/hmjsi.png" alt="Sistem Informasi" fill className="object-contain" sizes="16px" />
                    </div>
                    <span>Sistem informasi</span>
                  </div>
                </div>
              </div>
            </RevealText>
          </div>

          {/* Right Column: Large Photo & Accent (Span 7) */}
          <div className="lg:col-span-7 relative">
            <CardMotion delay={0.2}>
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden rounded-sm group">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Cyberpunk Scanline / Glitch Overlay */}
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />
              </div>
            </CardMotion>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-brand-accent/50 hidden sm:block pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-brand-text/20 hidden sm:block pointer-events-none" />
          </div>

        </div>

        {/* Unified Skills & Qualities Section */}
        <div className="mt-32">
          <SectionHeader title="Skills & Qualities" />
          
          <div className="flex flex-col gap-12 sm:gap-16 mt-12">
            
            {/* Core Qualities (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {profile.coreQualities.map((quality, idx) => (
                <CardMotion key={quality.title} delay={0.2 + idx * 0.1}>
                  <div className="group border border-brand-border bg-brand-bg-2/30 p-8 h-full transition-all duration-500 hover:bg-white/[0.02] hover:border-white/10 flex flex-col justify-center relative overflow-hidden">
                    <div className={`w-14 h-14 flex items-center justify-center mb-6 border border-brand-border ${quality.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500`}>
                      {getQualityIcon(quality.icon)}
                    </div>
                    <h3 className="font-bold font-sans text-2xl text-brand-text mb-3">{quality.title}</h3>
                    <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                      {quality.description}
                    </p>
                  </div>
                </CardMotion>
              ))}
            </div>

            {/* Separated Skills Grids */}
            <div className="flex flex-col gap-12 lg:gap-16 mt-4">
              
              {/* Keahlian (Expertise) */}
              <div>
                <h3 className="text-label mb-6 text-brand-accent tracking-widest">BIDANG KEAHLIAN</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                  {expertiseSkills.map((skill, idx) => (
                    <CardMotion key={skill.name} delay={0.1 + (idx * 0.05)}>
                      <div className="group flex flex-col items-center justify-center p-4 aspect-square border border-brand-border bg-brand-bg-2/30 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 text-center gap-4 cursor-default">
                        <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                          {getSkillIcon(skill.name, skill.category)}
                        </div>
                        <span className="text-xs font-medium text-brand-text/70 group-hover:text-brand-text transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </CardMotion>
                  ))}
                </div>
              </div>

              {/* Software & Frameworks */}
              <div>
                <h3 className="text-label mb-6 text-brand-text tracking-widest">SOFTWARE & FRAMEWORK</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                  {toolSkills.map((skill, idx) => (
                    <CardMotion key={skill.name} delay={0.1 + (idx * 0.05)}>
                      <div className="group flex flex-col items-center justify-center p-4 aspect-square border border-brand-border bg-brand-bg-2/30 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 text-center gap-4 cursor-default">
                        <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                          {getSkillIcon(skill.name, skill.category)}
                        </div>
                        <span className="text-xs font-medium text-brand-text/70 group-hover:text-brand-text transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </CardMotion>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* End of Unified Skills & Qualities Section */}


      </div>
    </section>
  )
}
