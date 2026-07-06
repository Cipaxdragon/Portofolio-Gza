'use client'

import RevealText from '@/components/shared/RevealText'
import { social } from '@/data/social'
import { contactTemplates } from '@/data/contact'
import { getWhatsAppLink } from '@/lib/contact'
import { InstagramIcon, YoutubeIcon, GithubIcon, LinkedinIcon } from '@/components/shared/SocialIcons'

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: social.instagram ? `https://instagram.com/${social.instagram}` : '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: social.youtube || '#' },
  { icon: GithubIcon, label: 'GitHub', href: social.github ? `https://github.com/${social.github}` : '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: social.linkedin || '#' },
]

export default function Footer() {
  const waLink = getWhatsAppLink(social.whatsapp, contactTemplates.whatsapp)

  return (
    <footer className="relative px-6 pt-24 pb-8 sm:pt-32 sm:pb-10 bg-brand-bg">
      {/* Manifesto Statement */}
      <div className="mx-auto max-w-7xl">
        <RevealText>
          <h2 className="font-display text-headline sm:text-display italic">
            I build things<br />that <em>move.</em>
          </h2>
        </RevealText>

        {/* Divider */}
        <div className="h-px bg-brand-border mt-12 mb-8" />

        {/* Footer Grid */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-text transition-colors duration-300"
                aria-label={item.label}
                data-cursor="hover"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:items-end gap-2">
            <p className="text-label mb-2">Mulai sesuatu</p>
            <div className="flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label !text-brand-wa hover:opacity-80 transition-opacity"
                data-cursor="hover"
              >
                WhatsApp →
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(social.discord)
                }}
                className="text-label !text-brand-discord hover:opacity-80 transition-opacity"
                data-cursor="hover"
              >
                Discord →
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-label mt-12 text-center sm:text-left">
          © {new Date().getFullYear()} Ahmad Ghazali — Makassar, Indonesia
        </p>
      </div>
    </footer>
  )
}
