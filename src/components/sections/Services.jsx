'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { services } from '@/data/services'
import { social } from '@/data/social'
import { getWhatsAppLink } from '@/lib/contact'

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={<>Let&apos;s Build <em>Something.</em></>}
          subtitle="Punya ide? Saya ingin mendengarnya."
        />

        <div className="flex flex-col gap-4 mt-8">
          {services.map((service, i) => (
            <CardMotion key={service.id} delay={i * 0.1}>
              <ServiceRow service={service} />
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service }) {
  const waLink = getWhatsAppLink(social.whatsapp, service.waTemplate)

  const handleDiscord = () => {
    navigator.clipboard.writeText(social.discord)
    window.open('https://discord.com', '_blank')
  }

  return (
    <div className="group border-y border-brand-border py-8 hover:bg-brand-bg-2 transition-all duration-500 px-4 sm:px-8 -mx-4 sm:mx-0 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
      {/* Icon & Title */}
      <div className="flex items-start gap-6 md:w-1/3">
        <span className="text-3xl sm:text-4xl opacity-80 group-hover:opacity-100 transition-opacity">
          {service.icon}
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
            {service.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {service.tools.map(tool => (
              <span key={tool} className="text-label !text-[10px] bg-brand-border/50 text-brand-text/70 px-2 py-0.5 rounded-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="md:w-1/3">
        <p className="text-brand-muted text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 md:w-1/4 md:justify-end">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-brand-wa/30 text-brand-text bg-brand-wa/10 px-4 py-2 rounded-sm hover:bg-brand-wa hover:text-black hover:border-brand-wa transition-all duration-300 w-full sm:w-auto"
          data-cursor="hover"
        >
          WhatsApp ↗
        </a>
        <button
          onClick={handleDiscord}
          className="flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-brand-discord/30 text-brand-text bg-brand-discord/10 px-4 py-2 rounded-sm hover:bg-brand-discord hover:text-white hover:border-brand-discord transition-all duration-300 w-full sm:w-auto"
          data-cursor="hover"
        >
          Discord ↗
        </button>
      </div>
    </div>
  )
}
