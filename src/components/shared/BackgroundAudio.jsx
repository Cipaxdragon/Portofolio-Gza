'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // We start paused, as browsers usually block autoplay with sound
    // User needs to interact to start playing
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Set a comfortable volume
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
      />
      
      <motion.button
        className="fixed bottom-6 left-6 z-[50] flex items-center justify-center w-10 h-10 rounded-full bg-brand-bg-2 border border-brand-border text-brand-text hover:text-brand-accent hover:border-brand-accent/50 transition-colors backdrop-blur-sm shadow-neon-sm"
        onClick={toggleAudio}
        data-cursor="hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </motion.button>
    </>
  )
}
