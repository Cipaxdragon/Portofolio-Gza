import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import ServiceDetailClient from '@/components/sections/ServiceDetail'

// Generate static params for all services so they are built at build time
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} — Ahmad Ghazali`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
