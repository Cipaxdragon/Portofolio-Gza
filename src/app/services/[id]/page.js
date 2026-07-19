import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import ServiceDetailClient from '@/components/sections/ServiceDetail'

// Generate static params for all services so they are built at build time
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const service = services.find((s) => s.id === resolvedParams.id)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} — Ahmad Ghazali`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params
  const service = services.find((s) => s.id === resolvedParams.id)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
