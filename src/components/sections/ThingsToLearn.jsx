'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { thingsToLearn } from '@/data/thingsToLearn'

export default function ThingsToLearn() {
  return (
    <section id="things-to-learn" className="relative px-6 py-24 sm:py-32 bg-brand-bg-2">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={<>What&apos;s <em>Next.</em></>}
          subtitle="Hal-hal yang sedang aku kejar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {thingsToLearn.map((item, i) => (
            <CardMotion key={item.id} delay={i * 0.08}>
              <div className="border border-brand-border rounded-sm p-6 hover:bg-brand-bg transition-colors duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-label !text-[10px] px-2 py-0.5 rounded-sm border ${
                    item.status === 'in-progress'
                      ? 'border-brand-accent/30 !text-brand-accent'
                      : 'border-brand-border'
                  }`}>
                    {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  )
}
