import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Showcase from '@/components/sections/Showcase'
import SocialGallery from '@/components/sections/SocialGallery'
export const metadata = {
  title: 'Works — Ahmad Ghazali',
  description: 'Selected works and creative projects by Ahmad Ghazali.',
}

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Showcase />
        <SocialGallery />
      </main>
      <Footer />
    </>
  )
}
