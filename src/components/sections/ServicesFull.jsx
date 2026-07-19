'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesFull() {
  return (
    <section id="services-full" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={<>Explore My <em>Services.</em></>}
          subtitle="Lebih detail mengenai apa yang bisa saya bangun untuk Anda."
        />

        <div className="flex flex-col gap-24 sm:gap-32 mt-16 sm:mt-24">
          {services.map((service, i) => (
            <CardMotion key={service.id} delay={i * 0.1}>
              <ServiceBlock service={service} isEven={i % 2 !== 0} />
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceBlock({ service, isEven }) {
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
      
      {/* Visual / Title Side (Span 5) */}
      <div className="w-full lg:w-5/12 flex flex-col gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-brand-bg-2 border border-brand-border rounded-sm shadow-[4px_4px_0_0_rgba(0,217,255,0.1)]">
          <span className="text-4xl sm:text-5xl">{service.icon}</span>
        </div>
        <h3 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-text">
          {service.title.split(' / ').map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && <><br /><span className="text-brand-accent">/</span> </>}
            </span>
          ))}
          {/* Fallback for title without slashes */}
          {!service.title.includes(' / ') && service.title.includes(' & ') && service.title.split(' & ').map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && <><br /><span className="text-brand-accent">&</span> </>}
            </span>
          ))}
          {!service.title.includes(' / ') && !service.title.includes(' & ') && service.title}
        </h3>
      </div>

      {/* Details Side (Span 7) */}
      <div className="w-full lg:w-7/12 flex flex-col gap-8">
        
        {/* Description */}
        <p className="text-brand-muted text-lg sm:text-xl leading-relaxed border-l-2 border-brand-accent/30 pl-6 py-2">
          {service.description}
        </p>

        {/* Tech / Tools Stack */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono text-brand-muted mb-4">Tech Stack & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {service.tools.map(tool => (
              <span key={tool} className="text-sm font-medium bg-white/5 border border-white/10 text-brand-text/90 px-4 py-2 rounded-sm hover:bg-white/10 hover:border-brand-accent/50 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-4 pt-8 border-t border-brand-border/50">
          <Link
            href={`/services/${service.id}`}
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-brand-text text-brand-bg hover:bg-brand-accent px-8 py-4 font-mono uppercase tracking-wider text-sm font-bold rounded-sm transition-all shadow-[4px_4px_0_0_rgba(0,217,255,0.3)] hover:shadow-[2px_2px_0_0_rgba(0,217,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span>Lihat Detail Layanan</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        
      </div>

    </div>
  )
}
