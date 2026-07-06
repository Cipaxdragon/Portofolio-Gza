'use client'

import GrainOverlay from '@/components/shared/GrainOverlay'
import CustomCursor from '@/components/shared/CustomCursor'
import BackgroundAudio from '@/components/shared/BackgroundAudio'

export default function GlobalClientProviders({ children }) {
  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <BackgroundAudio />
      {children}
    </>
  )
}
