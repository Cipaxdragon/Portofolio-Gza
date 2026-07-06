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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <CardMotion key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} />
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const waLink = getWhatsAppLink(social.whatsapp, service.waTemplate)

  const handleDiscord = () => {
    navigator.clipboard.writeText(social.discord)
    window.open('https://discord.com', '_blank')
  }

  return (
    <div className="group border border-brand-border rounded-sm p-6 hover:bg-brand-bg-2 transition-colors duration-300">
      <span className="text-2xl">{service.icon}</span>
      <h3 className="font-display text-xl font-bold mt-3 mb-2">{service.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-1 mb-5">
        {service.tools.map(tool => (
          <span key={tool} className="text-label !text-[10px] border border-brand-border px-2 py-0.5 rounded-sm">
            {tool}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-mono uppercase tracking-wider border border-brand-wa text-brand-wa px-3 py-1.5 rounded-sm hover:bg-brand-wa hover:text-black transition-all duration-200"
          data-cursor="hover"
        >
          WhatsApp →
        </a>
        <button
          onClick={handleDiscord}
          className="flex items-center gap-1.5 text-sm font-mono uppercase tracking-wider border border-brand-discord text-brand-discord px-3 py-1.5 rounded-sm hover:bg-brand-discord hover:text-white transition-all duration-200"
          data-cursor="hover"
        >
          Discord →
        </button>
      </div>
    </div>
  )
}
