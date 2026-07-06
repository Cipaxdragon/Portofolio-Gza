import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Services from '@/components/sections/Services'

export const metadata = {
  title: 'Services — Ahmad Ghazali',
  description: 'Creative services offered by Ahmad Ghazali (Motion Graphics, Web Design, etc).',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </>
  )
}
