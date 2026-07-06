'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Showcase from '@/components/sections/Showcase'
import Blog from '@/components/sections/Blog'
import Services from '@/components/sections/Services'
import ThingsToLearn from '@/components/sections/ThingsToLearn'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Blog />
        <Services />
        <ThingsToLearn />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
