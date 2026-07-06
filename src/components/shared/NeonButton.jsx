'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function NeonButton({
  children,
  variant = 'outline',
  size = 'default',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-lg cursor-pointer select-none'

  const variants = {
    outline:
      'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black hover:shadow-neon',
    solid:
      'bg-brand-accent text-black hover:brightness-110 hover:shadow-neon',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  )
}
