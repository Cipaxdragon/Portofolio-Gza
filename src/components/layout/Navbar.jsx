'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    setMobileOpen(false)

    // Handle hash links (like Contact)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '#')
      
      if (pathname === '/') {
        // If already on home page, just scroll smoothly
        e.preventDefault()
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If on another page, let Next.js navigate to /#contact natively
        // (Next.js Link handles scrolling to hash automatically on navigation)
      }
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled || pathname !== '/'
            ? 'bg-brand-bg/70 backdrop-blur-md border-b border-brand-border'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-label !text-brand-text tracking-[0.25em] font-mono"
            data-cursor="hover"
          >
            GALI
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href) && link.href !== '/#contact'
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-label transition-colors duration-300 ${
                    isActive ? 'text-brand-accent' : 'hover:text-brand-text'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden text-brand-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[45] bg-brand-bg flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-4xl font-bold text-brand-text hover:text-brand-accent transition-colors block text-center"
                  data-cursor="hover"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
