'use client'

import { profile } from '@/data/profile'
import Image from 'next/image'
import { Award, ExternalLink, Briefcase, Calendar, ChevronRight, Mail, Share2 } from 'lucide-react'
import { SiDiscord, SiGithub, SiRoblox, SiTiktok, SiInstagram, SiYoutube } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { social } from '@/data/social'
import CardMotion from '@/components/shared/CardMotion'
import GlitchBlock from '@/components/shared/GlitchBlock'
import RevealText from '@/components/shared/RevealText'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutFull from '@/components/sections/AboutFull'
import ThingsToLearn from '@/components/sections/ThingsToLearn'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-brand-bg">
        {/* Background Abstract/Depressed Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-1/4 w-[150%] h-[1px] bg-brand-border rotate-12" />
        <div className="absolute top-2/4 -right-1/4 w-[150%] h-[1px] bg-brand-border -rotate-6" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-brand-border rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-32">
          <GlitchBlock>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
              BEHIND<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-bg-2">THE MASK</span>
            </h1>
          </GlitchBlock>
          <RevealText delay={0.2}>
            <p className="text-brand-muted text-lg sm:text-xl mt-8 leading-relaxed max-w-2xl">
              Tidak semua yang terlihat di permukaan adalah keseluruhan cerita. Di balik desain yang rapi dan antarmuka yang bersih, terdapat obsesi terhadap kesempurnaan, iterasi tanpa henti, dan sedikit kegilaan artistik.
            </p>
          </RevealText>
          <RevealText delay={0.3}>
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-brand-accent uppercase tracking-widest">
              <span>System.Info</span>
              <div className="h-px bg-brand-accent/30 flex-grow max-w-[100px]" />
              <span>Status: Online</span>
            </div>
          </RevealText>
        </div>

        {/* Reusing About Component for Bio & Skills */}
        <div className="-mx-6">
          <AboutFull />
        </div>

        {/* Experience / Rekam Jejak */}
        <div className="mb-32">
          <RevealText>
            <h2 className="font-display text-3xl sm:text-4xl mb-12 flex items-center gap-4">
              <Briefcase className="text-brand-accent" size={32} />
              Rekam Jejak
            </h2>
          </RevealText>

          <div className="relative border-l border-brand-border ml-4 sm:ml-6 flex flex-col gap-12">
            {profile.experience.map((exp, idx) => (
              <CardMotion key={idx} delay={0.1 * idx}>
                <div className="relative pl-8 sm:pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 bg-brand-bg border border-brand-accent rounded-full group-hover:bg-brand-accent group-hover:shadow-[0_0_10px_rgba(0,217,255,0.5)] transition-all" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-brand-muted flex items-center gap-1.5">
                      <ChevronRight size={14} className="hidden sm:block" />
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-accent/80 mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-brand-text/70 text-sm leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </CardMotion>
            ))}
          </div>
        </div>

        {/* Things to Learn / What's Next */}
        <div className="-mx-6 mb-32">
          <ThingsToLearn />
        </div>

        {/* Certificates Grid */}
        <div className="mb-24">
          <RevealText>
            <h2 className="font-display text-3xl sm:text-4xl mb-12 flex items-center gap-4">
              <Award className="text-brand-accent" size={32} />
              Licenses & Certifications
            </h2>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certificates.map((cert, idx) => (
              <CardMotion key={cert.credentialId || cert.title} delay={0.1 + (idx * 0.1)}>
                <div className="group h-full border border-brand-border/50 bg-brand-bg-2/30 p-6 sm:p-8 flex flex-col gap-6 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 rounded-sm">
                  {/* Icon/Logo */}
                  <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-brand-border flex items-center justify-center text-brand-muted group-hover:bg-white/10 group-hover:border-brand-accent/30 transition-all shadow-[2px_2px_0_0_#111] rounded-sm relative overflow-hidden">
                    {cert.logo ? (
                      <Image src={cert.logo} alt={cert.issuer} fill className="object-contain p-2" sizes="64px" />
                    ) : (
                      <Award size={28} />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col gap-1.5">
                    <h4 className="font-bold text-brand-text font-display text-lg leading-snug group-hover:text-brand-accent transition-colors line-clamp-3">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-brand-text/90 font-medium uppercase tracking-widest mt-2">
                      {cert.issuer}
                    </p>
                    <p className="text-brand-muted text-[11px] sm:text-xs mt-1">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-brand-muted text-[11px] opacity-70 font-medium mt-auto pt-4">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  
                  {/* Button */}
                  <div className="mt-4 pt-6 border-t border-brand-border/30">
                    <a 
                      href={cert.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full justify-center items-center gap-2 border border-brand-border px-4 py-3 text-xs font-medium text-brand-text hover:text-brand-bg hover:bg-brand-accent hover:border-brand-accent transition-all rounded-sm shadow-[2px_2px_0_0_#111] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
                    >
                      <span>Show credential</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </CardMotion>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <RevealText>
            <h2 className="font-display text-3xl sm:text-4xl mb-12 flex items-center gap-4">
              <Share2 className="text-brand-accent" size={32} />
              Connect With Me
            </h2>
          </RevealText>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(social).map(([platform, link], index) => {
              if (!link) return null; // Skip if no link is provided
              
              let Icon = null;
              let platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
              let color = "text-brand-text";
              
              switch(platform) {
                case 'discord': Icon = SiDiscord; color = "group-hover:text-[#5865F2]"; break;
                case 'github': Icon = SiGithub; color = "group-hover:text-white"; break;
                case 'linkedin': Icon = FaLinkedin; color = "group-hover:text-[#0A66C2]"; break;
                case 'roblox': Icon = SiRoblox; color = "group-hover:text-white"; break;
                case 'email': Icon = Mail; color = "group-hover:text-[#EA4335]"; break;
                case 'instagram': Icon = SiInstagram; color = "group-hover:text-[#E4405F]"; break;
                case 'youtube': Icon = SiYoutube; color = "group-hover:text-[#FF0000]"; break;
                case 'tiktok': Icon = SiTiktok; color = "group-hover:text-white"; break;
                default: Icon = ExternalLink;
              }

              const href = platform === 'email' ? `mailto:${link}` 
                         : platform === 'discord' ? '#' // usually discord is just username, but let's link to # or copy
                         : link;

              return (
                <CardMotion key={platform} delay={index * 0.05}>
                  <a 
                    href={href}
                    target={platform === 'email' ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 p-6 border border-brand-border bg-brand-bg-2/30 hover:bg-brand-bg hover:border-brand-accent transition-all duration-300 rounded-sm"
                  >
                    <Icon size={32} className={`text-brand-muted transition-colors duration-300 ${color}`} />
                    <span className="font-mono text-sm tracking-widest uppercase text-brand-muted group-hover:text-brand-text transition-colors">
                      {platformName}
                    </span>
                  </a>
                </CardMotion>
              )
            })}
          </div>
        </div>

      </div>
    </main>
    <Footer />
    </>
  )
}
