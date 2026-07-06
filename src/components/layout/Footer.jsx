'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import {
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
} from '@/components/shared/SocialIcons'
import { social } from '@/data/social'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Blog', href: '#blog' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const socialIcons = [
  { key: 'instagram', icon: InstagramIcon, href: social.instagram },
  { key: 'youtube', icon: YoutubeIcon, href: social.youtube },
  { key: 'github', icon: GithubIcon, href: social.github },
  { key: 'linkedin', icon: LinkedinIcon, href: social.linkedin },
  { key: 'email', icon: Mail, href: social.email ? `mailto:${social.email}` : '' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-brand-border bg-brand-bg">
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-muted hover:text-brand-accent hover:border-brand-accent/50 transition-colors cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-brand-text">
              GALI<span className="text-brand-accent">.</span>
            </h3>
            <p className="mt-3 text-brand-muted text-sm leading-relaxed max-w-xs">
              Creating visual experiences with code & creativity. Motion Graphics
              & Web Designer based in Makassar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-muted hover:text-brand-accent transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ key, icon: Icon, href }) =>
                href ? (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-muted hover:text-brand-accent hover:border-brand-accent/50 transition-colors"
                    whileHover={{ y: -2 }}
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <Icon size={16} />
                  </motion.a>
                ) : null
              )}
            </div>
            {!socialIcons.some(({ href }) => href) && (
              <p className="text-sm text-brand-muted/50 italic">
                Social links coming soon
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-brand-border/50">
          <p className="text-center text-xs text-brand-muted/60">
            © {new Date().getFullYear()} Ahmad Ghazali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
