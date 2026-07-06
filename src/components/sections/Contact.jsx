'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MessageSquare,
} from 'lucide-react'
import {
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
} from '@/components/shared/SocialIcons'
import SectionHeader from '@/components/shared/SectionHeader'
import NeonButton from '@/components/shared/NeonButton'
import { social } from '@/data/social'

const socialLinks = [
  { key: 'instagram', icon: InstagramIcon, label: 'Instagram', href: social.instagram },
  { key: 'youtube', icon: YoutubeIcon, label: 'YouTube', href: social.youtube },
  { key: 'github', icon: GithubIcon, label: 'GitHub', href: social.github },
  { key: 'linkedin', icon: LinkedinIcon, label: 'LinkedIn', href: social.linkedin },
  { key: 'email', icon: Mail, label: 'Email', href: social.email ? `mailto:${social.email}` : '' },
]

const inputBase =
  'w-full rounded-lg border border-brand-border bg-brand-card px-4 py-3 text-sm text-brand-text placeholder-brand-muted/50 outline-none transition-all duration-200 focus:border-brand-accent/50 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.1)]'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('sending')

    // Simulate sending — replace with EmailJS integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="Get in Touch"
          subtitle="Punya project menarik? Mari kita diskusikan bersama."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-brand-muted">
                  Nama
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nama kamu"
                  className={inputBase}
                  {...register('name', { required: 'Nama wajib diisi' })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-brand-error">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-brand-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@example.com"
                  className={inputBase}
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Format email tidak valid',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-brand-error">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-brand-muted">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject pesan"
                  className={inputBase}
                  {...register('subject', { required: 'Subject wajib diisi' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-brand-error">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-brand-muted">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Ceritakan tentang project kamu..."
                  className={`${inputBase} resize-none`}
                  {...register('message', { required: 'Pesan wajib diisi' })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-brand-error">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <NeonButton
                type="submit"
                variant="solid"
                className="w-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pesan
                  </>
                )}
              </NeonButton>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  className="flex items-center gap-2 rounded-lg border border-brand-success/30 bg-brand-success/10 px-4 py-3 text-sm text-brand-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={16} />
                  Pesan berhasil dikirim! Terima kasih.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="flex items-center gap-2 rounded-lg border border-brand-error/30 bg-brand-error/10 px-4 py-3 text-sm text-brand-error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={16} />
                  Gagal mengirim pesan. Silakan coba lagi.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl border border-brand-border bg-brand-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={18} className="text-brand-accent" />
                <h3 className="text-base font-semibold text-brand-text">
                  Let&apos;s Connect
                </h3>
              </div>

              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                Saya terbuka untuk project freelance, kolaborasi, atau sekadar diskusi 
                tentang design dan development. Jangan ragu untuk menghubungi!
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map(({ key, icon: Icon, label, href }) =>
                  href ? (
                    <motion.a
                      key={key}
                      href={href}
                      target={key !== 'email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-muted hover:text-brand-accent hover:border-brand-accent/30 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Icon size={16} />
                      {label}
                    </motion.a>
                  ) : null
                )}

                {!socialLinks.some(({ href }) => href) && (
                  <p className="text-xs text-brand-muted/50 italic text-center py-4">
                    Social links akan segera ditambahkan ✦
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
