'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import DualPortal from '@/components/sections/DualPortal'
import Blog from '@/components/sections/Blog'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import LoadingScreen from '@/components/shared/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Cinematic Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <DualPortal />
            {/* <Blog /> */}
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
