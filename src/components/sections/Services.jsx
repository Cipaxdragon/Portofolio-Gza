'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import NeonButton from '@/components/shared/NeonButton'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="Services"
          subtitle="Jasa profesional yang tersedia untuk kebutuhan project kamu."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <CardMotion key={service.id} delay={i * 0.1}>
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-2xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-brand-text">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {service.description}
              </p>

              {/* Tools */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-brand-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-accent"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <NeonButton
                  variant="outline"
                  size="sm"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                  {service.ctaText}
                </NeonButton>
              </div>
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  )
}
