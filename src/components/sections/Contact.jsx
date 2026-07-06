'use client'

import { useState } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { social } from '@/data/social'
import { contactTemplates } from '@/data/contact'
import { getWhatsAppLink } from '@/lib/contact'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const waLink = getWhatsAppLink(social.whatsapp, contactTemplates.whatsapp)

  const handleDiscordCopy = async () => {
    await navigator.clipboard.writeText(social.discord)
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
        <div className="flex flex-col gap-4 mt-10">
          {/* WhatsApp */}
          <CardMotion>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-brand-border rounded-sm px-6 py-5 hover:border-brand-wa transition-all duration-300"
              data-cursor="hover"
            >
              <div>
                <p className="text-label mb-1">WhatsApp</p>
                <p className="font-display text-lg font-bold group-hover:text-brand-wa transition-colors">
                  Kirim pesan langsung →
                </p>
              </div>
              <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">💬</span>
            </a>
          </CardMotion>

          {/* Discord */}
          <CardMotion delay={0.1}>
            <button
              onClick={handleDiscordCopy}
              className="group flex items-center justify-between border border-brand-border rounded-sm px-6 py-5 hover:border-brand-discord transition-all duration-300 text-left w-full"
              data-cursor="hover"
            >
              <div>
                <p className="text-label mb-1">Discord</p>
                <p className="font-display text-lg font-bold group-hover:text-brand-discord transition-colors">
                  {copied ? 'Username disalin! ✓' : 'Salin username & DM →'}
                </p>
                <p className="text-label mt-0.5">{social.discord}</p>
              </div>
              <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">🎮</span>
            </button>
          </CardMotion>
        </div>
      </div>
    </section>
  )
}
