'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 sm:py-32 bg-brand-bg-2">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={<>Let&apos;s Build <em>Something.</em></>}
          subtitle="Layanan utama yang saya sediakan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, i) => (
            <CardMotion key={service.id} delay={i * 0.1}>
              <div className="group h-full flex flex-col justify-between border border-brand-border bg-brand-bg p-8 sm:p-10 rounded-sm hover:border-brand-accent/50 transition-all duration-300">
                
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-brand-bg-2 border border-brand-border rounded-sm shadow-[2px_2px_0_0_rgba(0,217,255,0.1)] mb-8 group-hover:scale-105 transition-transform">
                    <span className="text-3xl sm:text-4xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

              </div>
            </CardMotion>
          ))}
        </div>

        {/* CTA to Full Services Page */}
        <div className="mt-16 text-center">
          <CardMotion delay={0.3}>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 bg-brand-text text-brand-bg hover:bg-brand-accent px-8 py-4 font-mono uppercase tracking-wider text-sm font-bold rounded-sm transition-all shadow-[4px_4px_0_0_rgba(0,217,255,0.3)] hover:shadow-[2px_2px_0_0_rgba(0,217,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span>Explore All Services</span>
              <ArrowRight size={18} />
            </Link>
          </CardMotion>
        </div>

      </div>
    </section>
  )
}
