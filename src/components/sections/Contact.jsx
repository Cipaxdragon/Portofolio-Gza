'use client'

import { useState } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { social } from '@/data/social'
import { contactTemplates } from '@/data/contact'
import { getWhatsAppLink } from '@/lib/contact'

import { SiWhatsapp, SiDiscord } from 'react-icons/si'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const waLink = getWhatsAppLink(social.whatsapp, contactTemplates.whatsapp)

  const handleDiscordCopy = async () => {
    await navigator.clipboard.writeText('Asep_Salamanca')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title={<>Let&apos;s <em>Talk.</em></>}
          subtitle="Punya project atau ide kolaborasi?"
        />

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {/* WhatsApp */}
          <CardMotion>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center gap-5 border border-brand-border rounded-sm p-8 h-56 hover:border-brand-wa hover:bg-brand-bg-2 transition-all duration-500 overflow-hidden"
              data-cursor="hover"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-brand-wa/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <SiWhatsapp className="text-5xl text-brand-text opacity-70 group-hover:text-brand-wa group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500" />
              <div className="text-center">
                <p className="text-label mb-2 tracking-widest">WhatsApp</p>
                <p className="font-mono text-base text-brand-text/90 group-hover:text-brand-wa transition-colors duration-300">
                  -Ghazali
                </p>
              </div>
            </a>
          </CardMotion>
          {/* Discord */}
          <CardMotion delay={0.1}>
            <a
              href={social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center gap-5 border border-brand-border rounded-sm p-8 h-56 hover:border-brand-discord hover:bg-brand-bg-2 transition-all duration-500 overflow-hidden"
              data-cursor="hover"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-brand-discord/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <SiDiscord className="text-5xl text-brand-text opacity-70 group-hover:text-brand-discord group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500" />
              <div className="text-center">
                <p className="text-label mb-2 tracking-widest">Discord</p>
                <p className="font-mono text-base text-brand-text/90 group-hover:text-brand-discord transition-colors duration-300">
                  -Asep_Salamanca
                </p>
              </div>
            </a>
          </CardMotion>
        </div>
      </div>
    </section>
  )
}
