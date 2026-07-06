'use client'

import { motion } from 'framer-motion'

/**
 * NeonButton — Minimal button with subtle accent styling.
 * v2: More restrained cyan usage, cinematic feel.
 */
export default function NeonButton({
  children,
  variant = 'solid',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider rounded-lg transition-all duration-300'

  const variants = {
    solid: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/30 hover:bg-brand-accent hover:text-brand-bg',
    outline: 'border border-brand-border text-brand-text hover:border-brand-accent/50 hover:text-brand-accent',
    wa: 'border border-brand-wa text-brand-wa hover:bg-brand-wa hover:text-black',
    discord: 'border border-brand-discord text-brand-discord hover:bg-brand-discord hover:text-white',
  }

  const Component = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        data-cursor="hover"
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
