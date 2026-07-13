'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MousePointer2 } from 'lucide-react'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true)

  // Use framer-motion's native values instead of React state for performance
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Inner dot spring
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40 })

  // Outer circle spring (slower)
  const circleX = useSpring(mouseX, { stiffness: 200, damping: 25 })
  const circleY = useSpring(mouseY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none)').matches)
    }
    checkTouch()
    window.matchMedia('(hover: none)').addEventListener('change', checkTouch)

    if (!isEnabled) return

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [data-cursor="hover"]')
      targets.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [mouseX, mouseY, isEnabled])

  if (isTouch) return null

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className={`fixed bottom-6 left-[80px] z-[50] flex items-center justify-center w-10 h-10 rounded-full border transition-colors backdrop-blur-sm shadow-neon-sm ${
          isEnabled 
            ? 'bg-brand-bg-2 border-brand-border text-brand-text hover:text-brand-accent hover:border-brand-accent/50' 
            : 'bg-brand-bg/50 border-brand-border/50 text-brand-muted hover:text-white'
        }`}
        onClick={() => setIsEnabled(!isEnabled)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        aria-label="Toggle Custom Cursor"
      >
        <MousePointer2 size={18} />
      </motion.button>

      {/* Render Cursor & Hide Default */}
      {isEnabled && (
        <>
          <style>{`
            @media (hover: hover) and (pointer: fine) {
              * { cursor: none !important; }
            }
          `}</style>
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[9999]"
            style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
          />
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/20 transition-all duration-300"
            style={{ x: circleX, y: circleY, translateX: '-50%', translateY: '-50%' }}
            animate={{
              width: isHovering ? 48 : 32,
              height: isHovering ? 48 : 32,
            }}
          />
        </>
      )}
    </>
  )
}
