'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { SiWhatsapp, SiDiscord } from 'react-icons/si'
import { social } from '@/data/social'
import { contactTemplates } from '@/data/contact'
import { getWhatsAppLink } from '@/lib/contact'

export default function ContactModal() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const waLink = getWhatsAppLink(social.whatsapp, contactTemplates.whatsapp)

  useEffect(() => {
    if (searchParams.get('contact') === 'true') {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [searchParams])

  const handleClose = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('contact')
    const newSearch = params.toString()
    const query = newSearch ? `?${newSearch}` : ''
    // Use replace to prevent polluting browser history
    router.replace(`${pathname}${query}`, { scroll: false })
  }

  const handleDiscordCopy = async (e) => {
    e.preventDefault()
    await navigator.clipboard.writeText('Asep_Salamanca')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-brand-bg border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10 mt-2">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
                Let's <span className="text-brand-primary italic">Talk.</span>
              </h2>
              <p className="text-gray-400">Punya project atau ide kolaborasi?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* WhatsApp Card */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-brand-wa hover:bg-brand-bg-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-wa/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <SiWhatsapp className="text-4xl text-gray-400 group-hover:text-brand-wa group-hover:-translate-y-1 transition-all duration-300" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1 font-bold">WhatsApp</p>
                  <p className="font-mono text-sm text-gray-300 group-hover:text-brand-wa transition-colors">
                    -Ghazali
                  </p>
                </div>
              </a>

              {/* Discord Card */}
              <a
                href={social.discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDiscordCopy}
                className="group relative flex flex-col items-center justify-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-brand-discord hover:bg-brand-bg-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-discord/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <SiDiscord className="text-4xl text-gray-400 group-hover:text-brand-discord group-hover:-translate-y-1 transition-all duration-300" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1 font-bold">Discord</p>
                  <p className="font-mono text-sm text-gray-300 group-hover:text-brand-discord transition-colors">
                    {copied ? "Username Copied!" : "-Asep_Salamanca"}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
