import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { social } from '@/data/social'
import { getWhatsAppLink } from '@/lib/contact'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, MessageSquare } from 'lucide-react'

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

  const waLink = getWhatsAppLink(social.whatsapp, service.waTemplate)

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-6">
          
          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors text-sm font-mono uppercase tracking-wider mb-12"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Layanan</span>
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-brand-bg-2 border border-brand-border rounded-sm shadow-[4px_4px_0_0_rgba(0,217,255,0.1)] mb-8">
              <span className="text-4xl sm:text-5xl">{service.icon}</span>
            </div>
            <h1 className="font-display font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] text-brand-text mb-8">
              {service.title}
            </h1>
            <div className="w-20 h-1 bg-brand-accent rounded-full"></div>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <h3 className="font-sans text-2xl font-bold mb-6 text-brand-text">Teknologi & Tools yang Digunakan</h3>
            <div className="flex flex-wrap gap-3">
              {service.tools.map(tool => (
                <span key={tool} className="text-base font-medium bg-brand-bg-2 border border-brand-border text-brand-text/90 px-6 py-3 rounded-sm cursor-default hover:border-brand-accent/50 hover:bg-brand-bg transition-colors shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="bg-brand-bg-2 border border-brand-border p-8 sm:p-12 rounded-sm text-center">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold mb-4">Tertarik dengan layanan ini?</h3>
            <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
              Mari diskusikan ide dan kebutuhan Anda. Saya siap membantu merealisasikan visi proyek Anda dengan kualitas terbaik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider border-2 border-brand-wa bg-brand-wa text-black px-8 py-4 rounded-sm hover:bg-transparent hover:text-brand-wa transition-all duration-300"
              >
                <MessageCircle size={18} />
                <span>Chat via WhatsApp</span>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(social.discord);
                  alert('Username Discord tersalin: ' + social.discord);
                  window.open('https://discord.com', '_blank');
                }}
                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider border-2 border-brand-discord text-brand-discord bg-transparent px-8 py-4 rounded-sm hover:bg-brand-discord hover:text-white transition-all duration-300"
              >
                <MessageSquare size={18} />
                <span>Hubungi via Discord</span>
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
