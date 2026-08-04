import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WorksHero from '@/components/sections/WorksHero'
import WorksTabs from '@/components/sections/WorksTabs'

export const metadata = {
  title: 'Works — Ahmad Ghazali',
  description: 'Selected works and creative projects by Ahmad Ghazali.',
}

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        <WorksHero />
        <WorksTabs />
      </main>
      <Footer />
    </>
  )
}
