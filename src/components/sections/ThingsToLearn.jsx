'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { thingsToLearn } from '@/data/thingsToLearn'

const statusConfig = {
  planned: {
    label: 'Planned',
    className: 'border-brand-muted/30 text-brand-muted bg-brand-muted/10',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'border-brand-accent/30 text-brand-accent bg-brand-accent/10',
  },
}

export default function ThingsToLearn() {
  return (
    <section id="things-to-learn" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="Things to Learn"
          subtitle="Skill dan bidang baru yang ingin saya pelajari. Growth never stops."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {thingsToLearn.map((item, i) => {
            const status = statusConfig[item.status] || statusConfig.planned
            return (
              <CardMotion key={item.id} delay={i * 0.08}>
                <div className="flex items-start justify-between mb-3">
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-bg text-xl">
                    {item.icon}
                  </div>

                  {/* Status badge */}
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${status.className}`}
                  >
                    {status.label}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-brand-text">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </CardMotion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
