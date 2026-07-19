'use client'

import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { social } from '@/data/social'
import { getWhatsAppLink } from '@/lib/contact'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CardMotion from '@/components/shared/CardMotion'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, MessageSquare, Check, ChevronDown, ChevronUp, Film, Sparkles, Mic, Code } from 'lucide-react'
import { useState } from 'react'
import { SiNextdotjs, SiReact, SiLaravel, SiTailwindcss, SiPhp, SiNodedotjs, SiBlender } from 'react-icons/si'
import { TbBrandAdobePremiere, TbBrandAdobeAfterEffect, TbBrandAdobe } from 'react-icons/tb'

/* ── Helpers ── */
function getToolIcon(tool) {
  switch (tool) {
    case 'Next.js': return <SiNextdotjs size={18} />
    case 'React JS': return <SiReact size={18} />
    case 'Laravel': return <SiLaravel size={18} />
    case 'Tailwind CSS': return <SiTailwindcss size={18} />
    case 'PHP': return <SiPhp size={18} />
    case 'Node.js': return <SiNodedotjs size={18} />
    case 'Adobe Premiere Pro': return <TbBrandAdobePremiere size={18} />
    case 'Adobe After Effects': return <TbBrandAdobeAfterEffect size={18} />
    case 'Adobe Audition': return <TbBrandAdobe size={18} />
    case 'Blender': return <SiBlender size={18} />
    default: return <Code size={18} />
  }
}

/* ── FAQ Accordion Item ── */
function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <CardMotion delay={index * 0.05}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left border border-brand-border bg-brand-bg hover:border-brand-accent/30 transition-colors rounded-sm"
      >
        <div className="flex items-center justify-between p-6">
          <span className="font-sans font-semibold text-brand-text pr-4">{item.q}</span>
          {open ? <ChevronUp size={18} className="text-brand-accent flex-shrink-0" /> : <ChevronDown size={18} className="text-brand-muted flex-shrink-0" />}
        </div>
        {open && (
          <div className="px-6 pb-6 pt-0">
            <p className="text-brand-muted text-sm leading-relaxed">{item.a}</p>
          </div>
        )}
      </button>
    </CardMotion>
  )
}

/* ── Main Page ── */
export default function ServiceDetailClient({ service }) {
  const waLink = getWhatsAppLink(social.whatsapp, service.waTemplate)

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0 min-h-screen">

        {/* ====== HERO ====== */}
        <section className="relative px-6 pb-20 sm:pb-28 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-5xl relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-xs font-mono uppercase tracking-wider mb-16"
            >
              <ArrowLeft size={14} />
              <span>Kembali ke Layanan</span>
            </Link>

            <CardMotion delay={0}>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-brand-bg-2 border border-brand-border rounded-sm shadow-[3px_3px_0_0_rgba(0,217,255,0.1)]">
                  <span className="text-3xl sm:text-4xl">{service.icon}</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent">{service.id === 'coding' ? 'Web Development' : 'Post-Production'}</span>
              </div>
            </CardMotion>

            <CardMotion delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] text-brand-text mb-6">
                {service.title}
              </h1>
            </CardMotion>

            <CardMotion delay={0.15}>
              {service.tagline && (
                <p className="font-display italic text-2xl sm:text-3xl text-brand-accent/80 mb-10 max-w-3xl">
                  {service.tagline}
                </p>
              )}
            </CardMotion>

            <CardMotion delay={0.2}>
              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </CardMotion>
          </div>
        </section>

        {/* ====== OFFERINGS / JENIS LAYANAN ====== */}
        {service.offerings && (
          <section className="px-6 py-20 sm:py-28 bg-brand-bg-2">
            <div className="mx-auto max-w-5xl">
              <CardMotion delay={0}>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-4">Apa yang bisa saya kerjakan</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text mb-16">
                  Jenis <em>Layanan.</em>
                </h2>
              </CardMotion>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.offerings.map((item, i) => (
                  <CardMotion key={item.title} delay={i * 0.08}>
                    <div className="group h-full border border-brand-border bg-brand-bg p-8 sm:p-10 rounded-sm hover:border-brand-accent/40 transition-all duration-300">
                      <span className="text-3xl block mb-6">{item.icon}</span>
                      <h3 className="font-sans text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardMotion>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== HIGHLIGHTS / KEUNGGULAN ====== */}
        {service.highlights && (
          <section className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <CardMotion delay={0}>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-4">Mengapa memilih saya</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text mb-16">
                  Keunggulan<em>.</em>
                </h2>
              </CardMotion>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.highlights.map((item, i) => (
                  <CardMotion key={item.label} delay={i * 0.06}>
                    <div className="group h-full border border-brand-border bg-brand-bg-2 p-7 rounded-sm hover:border-brand-accent/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 flex items-center justify-center bg-brand-accent/10 rounded-full">
                          <Check size={14} className="text-brand-accent" />
                        </div>
                        <h3 className="font-sans font-bold text-brand-text">{item.label}</h3>
                      </div>
                      <p className="text-brand-muted text-sm leading-relaxed pl-9">
                        {item.detail}
                      </p>
                    </div>
                  </CardMotion>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== TECH STACK ====== */}
        <section className="px-6 py-20 sm:py-28 bg-brand-bg-2">
          <div className="mx-auto max-w-5xl">
            <CardMotion delay={0}>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-4">Tools & Teknologi</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text mb-12">
                Tech <em>Stack.</em>
              </h2>
            </CardMotion>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.tools.map((tool, i) => (
                <CardMotion key={tool.name} delay={i * 0.05}>
                  <div className="flex flex-col gap-3 bg-brand-bg border border-brand-border p-6 rounded-sm hover:border-brand-accent/40 transition-colors h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-brand-bg-2 border border-brand-border rounded-sm text-brand-accent">
                        {getToolIcon(tool.name)}
                      </div>
                      <h3 className="font-sans font-bold text-brand-text">{tool.name}</h3>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </CardMotion>
              ))}
            </div>
          </div>
        </section>

        {/* ====== PROCESS / ALUR KERJA ====== */}
        {service.process && (
          <section className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <CardMotion delay={0}>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-4">Bagaimana prosesnya</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text mb-16">
                  Alur <em>Kerja.</em>
                </h2>
              </CardMotion>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[23px] top-0 bottom-0 w-px bg-brand-border hidden sm:block" />

                <div className="flex flex-col gap-10">
                  {service.process.map((item, i) => (
                    <CardMotion key={item.step} delay={i * 0.08}>
                      <div className="flex gap-6 sm:gap-8 items-start">
                        {/* Step Number */}
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-bg-2 border border-brand-border text-brand-accent font-mono text-sm font-bold rounded-full">
                          {item.step}
                        </div>
                        {/* Content */}
                        <div className="pt-1">
                          <h3 className="font-sans text-xl font-bold text-brand-text mb-2">{item.title}</h3>
                          <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardMotion>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ====== FAQ ====== */}
        {service.faq && (
          <section className="px-6 py-20 sm:py-28 bg-brand-bg-2">
            <div className="mx-auto max-w-3xl">
              <CardMotion delay={0}>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-4">Pertanyaan umum</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text mb-12">
                  FAQ<em>.</em>
                </h2>
              </CardMotion>

              <div className="flex flex-col gap-3">
                {service.faq.map((item, i) => (
                  <FaqItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====== CTA / HUBUNGI SAYA ====== */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <CardMotion delay={0}>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-6">Siap memulai?</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-brand-text mb-6">
                Mari <em>Berdiskusi.</em>
              </h2>
              <p className="text-brand-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Ceritakan ide dan kebutuhan proyek Anda. Saya siap membantu mewujudkannya menjadi kenyataan.
              </p>
            </CardMotion>

            <CardMotion delay={0.1}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider bg-brand-wa text-black px-8 py-4 rounded-sm hover:opacity-90 transition-all duration-300 shadow-[4px_4px_0_0_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={18} />
                  <span>Chat via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(social.discord)
                    window.open('https://discord.com', '_blank')
                  }}
                  className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider border-2 border-brand-discord text-brand-discord bg-transparent px-8 py-4 rounded-sm hover:bg-brand-discord hover:text-white transition-all duration-300"
                >
                  <MessageSquare size={18} />
                  <span>Hubungi via Discord</span>
                </button>
              </div>
            </CardMotion>

            <CardMotion delay={0.15}>
              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-xs font-mono uppercase tracking-wider"
                >
                  <ArrowLeft size={14} />
                  <span>Lihat Semua Layanan</span>
                </Link>
              </div>
            </CardMotion>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
