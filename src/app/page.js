'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Showcase from '@/components/sections/Showcase'
import Blog from '@/components/sections/Blog'
import Services from '@/components/sections/Services'
import ThingsToLearn from '@/components/sections/ThingsToLearn'
import Contact from '@/components/sections/Contact'
import LoadingScreen from '@/components/shared/LoadingScreen'
import GrainOverlay from '@/components/shared/GrainOverlay'
import CustomCursor from '@/components/shared/CustomCursor'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Global overlays */}
      <GrainOverlay />
      <CustomCursor />

      {/* Cinematic Loading Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Content */}
      {!isLoading && (
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
      )}
    </>
  )
}
