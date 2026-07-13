'use client'

export default function GlitchBlock({ children, className = '' }) {
  return (
    <div className={`relative group inline-block cursor-default ${className}`}>
      {/* Base layer */}
      <div className="relative z-10 transition-transform duration-75 group-hover:skew-x-2 group-hover:scale-[1.02]">
        {children}
      </div>

      {/* Glitch Layer 1 - Block slices shifted left */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 animate-glitch-slice-1 mix-blend-screen text-brand-accent drop-shadow-[2px_0_0_rgba(0,217,255,1)]"
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Glitch Layer 2 - Block slices shifted right */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 animate-glitch-slice-2 mix-blend-screen text-brand-error drop-shadow-[-2px_0_0_rgba(239,68,68,1)]"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
