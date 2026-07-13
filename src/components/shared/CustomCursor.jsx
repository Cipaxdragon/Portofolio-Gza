'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

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
  }, [mouseX, mouseY])

  if (isTouch) return null

  return (
    <>
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
  )
}
