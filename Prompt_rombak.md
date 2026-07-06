# 🎨 PROMPT LENGKAP — PORTFOLIO WEBSITE AHMAD GHAZALI (GALI)
> Versi 2.0 — Updated dengan design direction: Cinematic, Artsy, INFP, Atmospheric.
> Referensi visual: https://www.mata.bot/
> Gunakan dokumen ini sebagai referensi utama saat pengerjaan koding.

---

## 📌 OVERVIEW PROJECT

| Aspek | Detail |
|-------|--------|
| **Pemilik** | Ahmad Ghazali (Gali) |
| **Tujuan** | Personal portfolio untuk showcase karya, skill, dan jasa |
| **Audience** | Klien potensial (koding, design, video) + recruiter + kolaborator |
| **Bahasa** | Indonesia & English (bilingual, konten menyesuaikan) |
| **Deployment** | Vercel (auto-deploy dari GitHub) |
| **Data Management** | Edit-via-code — konten disimpan di file `.js` / `.json`, tidak ada database |
| **Design Philosophy** | Bukan "portfolio website yang bagus" — ini sebuah **experience**. User tidak datang untuk *melihat karya*, mereka datang untuk *merasakannya*. |

---

## 🛠️ TECH STACK

```
Framework       : Next.js 14+ (App Router)
Language        : JavaScript (JSX)
Styling         : Tailwind CSS
UI Components   : shadcn/ui
Animation       : Framer Motion
Cursor          : Custom cursor component (vanilla JS + Framer Motion)
Font (Display)  : Playfair Display (Google Fonts) — headline & statement
Font (Body)     : Plus Jakarta Sans (Google Fonts) — body text
Font (Mono)     : Space Mono (Google Fonts) — labels & metadata
Form Handling   : React Hook Form
Email           : EmailJS atau Resend API
Image           : Next.js Image Component
Hosting         : Vercel
Version Control : GitHub
```

---

## 🎨 DESIGN SYSTEM

### Color Palette

```css
/* Background */
--bg-primary    : #0a0a0a;   /* Pure black — dasar semua */
--bg-secondary  : #111111;   /* Slightly lighter untuk layer depth */

/* Text */
--text-primary  : #f0f0f0;   /* Off-white, body text */
--text-secondary: #606060;   /* Dim gray, caption & metadata */
--text-muted    : #2e2e2e;   /* Hampir tidak terlihat, decorative */

/* Accent */
--accent        : #00d9ff;   /* Cyan neon — sparingly, bukan everywhere */
--accent-dim    : rgba(0, 217, 255, 0.08);
--accent-glow   : rgba(0, 217, 255, 0.25);

/* Supporting */
--border        : #1e1e1e;   /* Subtle border, hampir invisible */
--grain-opacity : 0.035;     /* Film grain overlay opacity */
```

### Typography

```css
/* Hero / Statement Text — Playfair Display */
font-family    : 'Playfair Display', serif;
font-weight    : 900;           /* Black weight untuk big statements */
font-style     : normal;
letter-spacing : -0.01em;
line-height    : 0.95;          /* Compressed — editorial tension */

/* Italic Accent (kata tertentu, bukan semua) */
font-family    : 'Playfair Display', serif;
font-style     : italic;
font-weight    : 400;           /* Italic tipis untuk kontras dengan bold */
/* Contoh pakai: "All Things <em>Visual.</em>" */

/* Body — Plus Jakarta Sans */
font-family    : 'Plus Jakarta Sans', sans-serif;
font-weight    : 400;
line-height    : 1.7;
letter-spacing : 0.01em;

/* Metadata / Label — Space Mono */
font-family    : 'Space Mono', monospace;
font-weight    : 400;
font-size      : 11px;
letter-spacing : 0.15em;
text-transform : uppercase;
color          : var(--text-secondary);
```

**Google Fonts Import (pasang di `globals.css` atau `layout.jsx`):**

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Mono:ital,wght@0,400;1,400&display=swap');
```

**Cara pakai italic di JSX:**
```jsx
/* Italic dipakai untuk kata terakhir / kata kunci — bukan semua teks */
<h1>
  All Things <em>Visual.</em>
</h1>

/* CSS untuk em di dalam Playfair Display headline: */
/* em { font-style: italic; font-weight: 400; } */
```

**Size Hierarchy:**

| Element | Desktop | Mobile | Font | Notes |
|---------|---------|--------|------|-------|
| Hero Statement | 72–96px | 40px | Playfair Display 900 | Italic pada kata kunci |
| Section Title | 56–64px | 32px | Playfair Display 700 | — |
| Card Title | 22–26px | 20px | Playfair Display 700 | — |
| Body | 16px | 15px | Plus Jakarta Sans 400 | — |
| Label/Mono | 11px | 11px | Space Mono 400 | Uppercase |

### Vibe & Aesthetic

- **Filosofi:** Cinematic, atmospheric, immersive — seperti masuk ke ruang gelap sebelum film dimulai
- **Whitespace:** Bukan "kosong" — tapi **nafas**. Tiap element butuh ruang untuk "bicara"
- **Motion:** Purposeful, bukan dekoratif. Setiap animasi punya alasan naratif
- **Accent cyan:** Dipakai **sangat sparingly** — hanya untuk 1–2 elemen paling penting. Bukan dipakai di semua border/glow
- **Grain texture:** Overlay film grain tipis di seluruh halaman (opacity sangat rendah) — ini yang bikin terasa "artsy" bukan "clean tech"

---

## ✨ DESIGN PHILOSOPHY — MATA.BOT INSPIRED

### Mindset Shift

```
❌ APPROACH LAMA (Monoton)          ✅ APPROACH BARU (Artsy/Cinematic)
─────────────────────────────       ──────────────────────────────────
Section berderet rapi ke bawah   →  Scroll-driven storytelling
Grid thumbnail kecil seragam     →  Full-bleed editorial, mix ukuran
"Motion Graphics Designer"       →  Copy puitis yang bercerita
Langsung ke konten               →  Loading screen cinematic
Cards uniform                    →  Layout asymmetric, tension visual
Navbar selalu terlihat           →  Navbar minimal, fade in on scroll
Section title: "About"           →  Statement text: "Who I Am."
```

### Copy Tone Guide

Semua teks di website harus terasa seperti **manifesto**, bukan CV.

```
❌ "I'm a motion graphics designer, video editor, and web developer
    based in Makassar, Indonesia."

✅ "Saya percaya setiap karya visual
    adalah cara bercerita tanpa kata."


❌ "Services — What I offer"

✅ "Let's Build Something."
    subtext: "Punya ide? Saya ingin mendengarnya."


❌ "© 2024 Ahmad Ghazali. All rights reserved."

✅ [Tagline besar dulu]:
    "I build things that move."
    [Baru kecil di bawah]:
    "© 2024 Ahmad Ghazali"
```

---

## ⚡ FITUR SIGNATURE — 8 ELEMEN WAJIB

### 1. CINEMATIC LOADING SCREEN

Saat website pertama dibuka, user tidak langsung masuk ke konten.

```
Tampilan:
─────────────────────────────
  [layar hitam total]

        0%

  [naik perlahan ke 100%]

  [fade out → konten masuk]
─────────────────────────────

Implementasi:
- State: isLoading (true saat mount, false setelah timer/assets loaded)
- Angka naik dari 0 ke 100 dalam ~2 detik (easing ease-out)
- Font: Space Mono, kecil, center, off-white
- Setelah 100%: fade out overlay, lalu hero masuk dengan slide-up
- Simpan ke localStorage: kalau sudah pernah visit, skip loading
  (atau selalu tampil — tergantung preferensi Gali)
```

```jsx
// Komponen: src/components/LoadingScreen.jsx
// State di layout.jsx atau page.jsx
const [isLoading, setIsLoading] = useState(true)
const [progress, setProgress] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 400)
        return 100
      }
      return prev + Math.random() * 8  // naik tidak uniform, terasa natural
    })
  }, 60)
  return () => clearInterval(interval)
}, [])
```

---

### 2. HERO — CINEMATIC STATEMENT

```
Layout:
─────────────────────────────────────────────────────────
  [grain texture overlay — seluruh layar]

  [kiri atas, sangat kecil, monospace]:
  AHMAD GHAZALI — MAKASSAR, ID — 2021

  [tengah, sangat besar — 72-96px, bold, tight]:
  "All Things
   Visual."

  [kanan bawah, kecil, monospace]:
  Motion × Design × Code

  [pojok kanan bawah, sangat kecil]:
  ↓ Scroll

  [background]: video reel autoplay muted loop
                ATAU subtle animated dot grid
                ATAU static image dengan parallax
─────────────────────────────────────────────────────────

Animasi masuk (setelah loading screen):
- Kata "All" → "Things" → "Visual." muncul satu per satu
- "Visual." dalam italic (Playfair italic 400) — kontras dengan bold
- Stagger timing: 0.15s antar kata
- Setiap kata: clip-path dari bawah ke atas (bukan fade biasa)
```

```jsx
// Word-by-word reveal dengan Framer Motion
// "Visual." pakai italic Playfair untuk kontras visual
const words = [
  { text: "All",      italic: false },
  { text: "Things",   italic: false },
  { text: "Visual.",  italic: true  },   // ← italic accent
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

// Wrap tiap kata dalam div overflow-hidden
// Animasi dari bawah ke atas — efek "tumbuh keluar"
```

---

### 3. PARALLAX DEPTH EFFECT

Dipakai di hero atau section about untuk menciptakan kedalaman.

```jsx
// Implementasi dengan Framer Motion useScroll + useTransform
import { useScroll, useTransform, motion } from 'framer-motion'

const { scrollY } = useScroll()

// Layer belakang: bergerak lambat
const yBack = useTransform(scrollY, [0, 600], [0, -80])

// Layer depan: bergerak lebih cepat
const yFront = useTransform(scrollY, [0, 600], [0, -160])

// Teks: bergerak paling cepat (terasa paling dekat)
const yText = useTransform(scrollY, [0, 600], [0, -240])

// Di JSX:
<div className="relative h-screen overflow-hidden">
  <motion.div style={{ y: yBack }} className="absolute inset-0">
    {/* Background layer — bisa image atau gradient */}
  </motion.div>
  <motion.div style={{ y: yFront }} className="absolute inset-0">
    {/* Foreground layer — bisa silhouette PNG atau texture */}
  </motion.div>
  <motion.div style={{ y: yText }} className="relative z-10">
    {/* Text content */}
  </motion.div>
</div>
```

---

### 4. FILM GRAIN OVERLAY

Komponen global yang di-overlay ke seluruh halaman. Ini salah satu detail terkecil tapi paling impactful untuk bikin terasa "artsy" bukan "clean tech".

```jsx
// src/components/GrainOverlay.jsx
// Dipasang di layout.jsx, di atas semua konten

export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.035,
        mixBlendMode: 'overlay',
      }}
    />
  )
}
```

---

### 5. CUSTOM CURSOR

Ganti default cursor dengan dot kecil yang smooth-follow mouse. Salah satu elemen paling efektif untuk bikin website terasa premium & artsy.

```jsx
// src/components/CustomCursor.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    // Detect hover pada semua links & buttons
    const targets = document.querySelectorAll('a, button, [data-cursor="hover"]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Dot kecil — mengikuti cursor persis */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
      {/* Circle besar — mengikuti dengan lag (smooth) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/20"
        animate={{
          x: pos.x - (isHovering ? 24 : 16),
          y: pos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  )
}

// Pasang di layout.jsx + tambahkan CSS global:
// * { cursor: none; }
// (hanya untuk desktop — hide custom cursor di mobile/touch)
```

---

### 6. SCROLL-TRIGGERED TEXT REVEAL

Bukan fade-in biasa — teks muncul dari bawah seperti "tumbuh keluar" dari balik garis.

```jsx
// src/components/shared/RevealText.jsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RevealText({ children, delay = 0, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "105%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1]  // custom ease — snappy masuk, smooth landing
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Penggunaan:
// <RevealText delay={0}>All Things</RevealText>
// <RevealText delay={0.1}>Visual.</RevealText>
```

---

### 7. SHOWCASE — EDITORIAL FULL-BLEED LAYOUT

Bukan grid seragam. Layout editorial dengan mix ukuran untuk visual tension.

```
Layout pattern (per halaman showcase):
─────────────────────────────────────────────────────────

  ┌─────────────────────────────────────────────────────┐
  │                                                     │
  │  FEATURED WORK — full width, tinggi 60vh            │
  │  Hover: judul muncul dari bawah                     │
  │                                                     │
  └─────────────────────────────────────────────────────┘

  ┌────────────────────────┐  ┌──────────────────────────┐
  │                        │  │                          │
  │  WORK 2 — 60% width    │  │  WORK 3 — 40% width      │
  │  tinggi: 45vh          │  │  tinggi: 45vh            │
  │                        │  │                          │
  └────────────────────────┘  └──────────────────────────┘

  ┌────────────┐  ┌─────────────────────┐  ┌────────────┐
  │            │  │                     │  │            │
  │  WORK 4    │  │  WORK 5 — featured  │  │  WORK 6    │
  │  kecil     │  │  medium             │  │  kecil     │
  │            │  │                     │  │            │
  └────────────┘  └─────────────────────┘  └────────────┘

─────────────────────────────────────────────────────────
Hover effect tiap card:
- Background image: scale 1.05 (smooth, 0.6s)
- Overlay gelap: opacity 0 → 0.7
- Info muncul dari bawah: judul + kategori + tahun
- Cursor berubah (circle expand)
```

```jsx
// Contoh featured card:
<motion.div
  className="relative w-full overflow-hidden"
  style={{ height: '60vh' }}
  whileHover="hover"
>
  <motion.div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${item.thumbnail})` }}
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  />
  {/* Dark overlay */}
  <motion.div
    className="absolute inset-0 bg-black"
    variants={{ hover: { opacity: 0.65 } }}
    initial={{ opacity: 0.2 }}
    transition={{ duration: 0.4 }}
  />
  {/* Info — muncul dari bawah saat hover */}
  <motion.div
    className="absolute bottom-0 left-0 p-8"
    variants={{ hover: { y: 0, opacity: 1 } }}
    initial={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.35 }}
  >
    <p className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-2">
      {item.category} — {item.year}
    </p>
    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
  </motion.div>
</motion.div>
```

---

### 8. FOOTER — MANIFESTO

```
Layout footer:
─────────────────────────────────────────────────────────

  [Statement besar, bold — 48-64px]:
  "I build things
   that move."

  [Garis tipis]

  [2 kolom]:
  Kiri: Social links (Instagram, GitHub, YouTube, dll)
  Kanan: Email + "Start a project →"

  [Bawah, sangat kecil, monospace]:
  © 2024 Ahmad Ghazali — Makassar, Indonesia

─────────────────────────────────────────────────────────
```

---

## 📐 TAILWIND CONFIG

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg        : '#0a0a0a',
          'bg-2'    : '#111111',
          text      : '#f0f0f0',
          muted     : '#606060',
          dim       : '#2e2e2e',
          border    : '#1e1e1e',
          accent    : '#00d9ff',
        },
      },
      fontFamily: {
        display : ['"Playfair Display"', 'Georgia', 'serif'],
        sans    : ['"Plus Jakarta Sans"', 'sans-serif'],
        mono    : ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'display'  : ['clamp(48px, 8vw, 96px)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'headline' : ['clamp(32px, 5vw, 64px)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'label'    : ['11px', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      boxShadow: {
        'neon-sm' : '0 0 10px rgba(0, 217, 255, 0.15)',
        'neon'    : '0 0 25px rgba(0, 217, 255, 0.25)',
      },
      animation: {
        'fade-in'   : 'fadeIn 0.8s ease-out forwards',
        'shimmer'   : 'shimmer 1.8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from : { opacity: '0' },
          to   : { opacity: '1' },
        },
        shimmer: {
          from : { backgroundPosition: '200% 0' },
          to   : { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}

module.exports = config
```

---

## 📁 STRUKTUR FOLDER PROJECT

```
portfolio-gali/
│
├── public/
│   ├── images/
│   │   ├── avatar.jpg
│   │   ├── hero-bg.jpg         ← background hero (atau video)
│   │   ├── hero-layer-back.png ← parallax layer belakang
│   │   ├── hero-layer-front.png← parallax layer depan
│   │   └── showcase/
│   │       ├── motion/
│   │       ├── design/
│   │       ├── code/
│   │       ├── 3d/
│   │       ├── photography/
│   │       ├── documentation/
│   │       └── certificates/
│   ├── videos/
│   │   └── reel.mp4            ← video reel hero (opsional)
│   └── favicon.ico
│
├── src/
│   ├── data/                   ← EDIT KONTEN DI SINI
│   │   ├── profile.js
│   │   ├── showcase.js
│   │   ├── blog.js
│   │   ├── services.js         ← berisi waTemplate & discordTemplate per jasa
│   │   ├── contact.js          ← template pesan umum (untuk contact section)
│   │   ├── thingsToLearn.js
│   │   └── social.js           ← berisi nomor WA & username Discord
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/                 ← shadcn/ui components
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Showcase.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ThingsToLearn.jsx
│   │   │   └── Contact.jsx
│   │   └── shared/
│   │       ├── LoadingScreen.jsx   ← BARU
│   │       ├── GrainOverlay.jsx    ← BARU
│   │       ├── CustomCursor.jsx    ← BARU
│   │       ├── RevealText.jsx      ← BARU
│   │       ├── ParallaxLayer.jsx   ← BARU
│   │       ├── SectionHeader.jsx
│   │       ├── ShowcaseCard.jsx
│   │       └── NeonButton.jsx
│   │
│   ├── app/
│   │   ├── layout.jsx          ← pasang GrainOverlay + CustomCursor + LoadingScreen di sini
│   │   ├── page.jsx
│   │   ├── blog/
│   │   │   ├── page.jsx
│   │   │   └── [slug]/
│   │   │       └── page.jsx
│   │   └── globals.css
│   │
│   └── lib/
│       ├── utils.js
│       └── contact.js          ← getWhatsAppLink() & getDiscordLink() utility
│
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 📄 DATA STRUCTURE (JavaScript)

### `src/data/profile.js`

```javascript
export const profile = {
  name      : 'Ahmad Ghazali',
  nickname  : 'Gali',
  title     : 'Motion Graphics & Web Designer',

  // Copy puitis — bukan deskripsi CV
  tagline   : 'All Things Visual.',
  bio       : 'Saya percaya setiap karya visual adalah cara bercerita tanpa kata.',
  bioExtended: `Seorang motion graphics designer, video editor, dan web developer
                yang tinggal di Makassar. Saya bekerja di persimpangan antara
                code, gerak, dan rasa.`,

  avatar    : '/images/avatar.jpg',
  location  : 'Makassar, Indonesia',

  education : {
    major      : 'Sistem Informasi',
    university : 'UIN Alauddin Makassar',
    batch      : '2021',
  },

  skills: {
    creative : ['Motion Graphics', 'Video Editing', 'Graphic Design', '3D Generalist', 'Photography', 'Image Manipulation'],
    coding   : ['React JS', 'Next.js', 'Laravel', 'PHP', 'Tailwind CSS'],
    software : ['Adobe After Effects', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Audition', 'Figma', 'Canva', 'Blender'],
  },

  experience: [
    {
      role         : 'Ketua Divisi Kominfo',
      organization : 'HMJ Sistem Informasi',
      year         : '2024',
      description  : 'Koordinasi divisi, pengelolaan program kerja Podcast.',
    },
    {
      role         : 'Anggota Divisi Kominfo / PDD',
      organization : 'HMJ Sistem Informasi',
      year         : '2023',
      description  : 'Graphic Design, Video Editing, Web Development, Dokumentasi.',
    },
  ],
}
```

### `src/data/showcase.js`

```javascript
// Setiap item showcase menggunakan struktur yang sama
// Field opsional menyesuaikan kategori

export const showcase = {
  // Tab 1: Motion Graphics & Video
  motionGraphics: [
    {
      id          : 'motion-001',
      title       : 'Judul Project',          // isi saat ada karya
      description : 'Deskripsi singkat...',
      longDesc    : 'Deskripsi lengkap untuk modal...',
      thumbnail   : '/images/showcase/motion/001.jpg',
      videoUrl    : 'https://youtube.com/...',
      tools       : ['After Effects', 'Premiere Pro'],
      year        : '2024',
      featured    : true,                     // true = ditampilkan sebagai featured (full-bleed)
    },
  ],

  // Tab 2: Graphic Design
  graphicDesign: [],

  // Tab 3: Web Projects
  webProjects: [
    {
      id          : 'web-001',
      title       : 'Judul Project',
      description : 'Deskripsi singkat...',
      thumbnail   : '/images/showcase/code/001.jpg',
      liveUrl     : 'https://...',
      githubUrl   : 'https://github.com/...',
      tools       : ['Next.js', 'Tailwind CSS'],
      year        : '2024',
      featured    : false,
    },
  ],

  // Tab 4: 3D Work
  threeD: [],

  // Tab 5: Photography
  photography: [],

  // Tab 6: Dokumentasi
  documentation: [],

  // Tab 7: Sertifikat
  certificates: [],
}
```

### `src/data/services.js`

```javascript
export const services = [
  {
    id            : 'video-editing',
    icon          : '🎬',
    title         : 'Video Editing',
    description   : 'Professional editing, color grading, dan sound design.',
    tools         : ['Adobe Premiere Pro', 'After Effects', 'Adobe Audition'],
    waTemplate    : `Halo Gali! 👋

Aku tertarik dengan jasa *Video Editing* kamu.

Boleh aku ceritain dulu projectnya?

📌 *Detail Project:*
- Jenis video     : [iklan / dokumentasi / konten sosmed / dll]
- Durasi estimasi : [menit]
- Deadline        : [tanggal]
- Referensi style : [link atau deskripsi]

Ditunggu responnya ya!`,
    discordTemplate: `Halo Gali! Aku tertarik dengan jasa Video Editing kamu.\n\nJenis video: \nDurasi: \nDeadline: \nReferensi: `,
  },
  {
    id            : 'motion-graphics',
    icon          : '✦',
    title         : 'Motion Graphics',
    description   : 'Animasi motion graphics untuk konten, presentasi, atau branding.',
    tools         : ['After Effects', 'Premiere Pro'],
    waTemplate    : `Halo Gali! 👋

Aku tertarik dengan jasa *Motion Graphics* kamu.

📌 *Detail Project:*
- Kebutuhan       : [intro video / bumper / animasi logo / lower third / dll]
- Durasi animasi  : [detik / menit]
- Platform        : [YouTube / Instagram / presentasi / dll]
- Deadline        : [tanggal]
- Referensi style : [link atau deskripsi]

Ditunggu responnya!`,
    discordTemplate: `Halo Gali! Aku tertarik dengan jasa Motion Graphics kamu.\n\nKebutuhan: \nDurasi: \nPlatform: \nDeadline: \nReferensi: `,
  },
  {
    id            : 'graphic-design',
    icon          : '◈',
    title         : 'Graphic Design',
    description   : 'Desain visual untuk poster, sosial media, banner, dan identitas brand.',
    tools         : ['Photoshop', 'Illustrator', 'Figma'],
    waTemplate    : `Halo Gali! 👋

Aku tertarik dengan jasa *Graphic Design* kamu.

📌 *Detail Project:*
- Jenis desain    : [poster / banner / sosmed / logo / branding / dll]
- Ukuran / format : [misal: 1080x1080px / A3 / dll]
- Jumlah file     : [berapa]
- Deadline        : [tanggal]
- Referensi style : [link atau deskripsi]

Ditunggu responnya!`,
    discordTemplate: `Halo Gali! Aku tertarik dengan jasa Graphic Design kamu.\n\nJenis desain: \nUkuran/format: \nJumlah file: \nDeadline: \nReferensi: `,
  },
  {
    id            : 'web-development',
    icon          : '⌨',
    title         : 'Web Development',
    description   : 'Membangun website dengan React JS, Next.js, dan Laravel.',
    tools         : ['Next.js', 'React', 'Laravel', 'Tailwind CSS'],
    waTemplate    : `Halo Gali! 👋

Aku tertarik dengan jasa *Web Development* kamu.

📌 *Detail Project:*
- Jenis website   : [company profile / portfolio / toko online / sistem / dll]
- Fitur utama     : [deskripsi singkat]
- Stack preferensi: [Next.js / Laravel / bebas]
- Deadline        : [tanggal]
- Budget range    : [atau "bisa diskusi"]

Boleh kita diskusi lebih lanjut?`,
    discordTemplate: `Halo Gali! Aku tertarik dengan jasa Web Development kamu.\n\nJenis website: \nFitur utama: \nStack: \nDeadline: \nBudget: `,
  },
  {
    id            : 'photography',
    icon          : '◎',
    title         : 'Photography',
    description   : 'Dokumentasi acara, portrait, dan kebutuhan foto lainnya.',
    tools         : ['Adobe Lightroom', 'Photoshop'],
    waTemplate    : `Halo Gali! 👋

Aku tertarik dengan jasa *Photography* kamu.

📌 *Detail Project:*
- Jenis foto      : [dokumentasi acara / portrait / produk / dll]
- Lokasi          : [kota / tempat]
- Tanggal acara   : [tanggal]
- Estimasi durasi : [jam]
- Jumlah foto     : [estimasi / "terserah"]

Ditunggu responnya!`,
    discordTemplate: `Halo Gali! Aku tertarik dengan jasa Photography kamu.\n\nJenis foto: \nLokasi: \nTanggal: \nDurasi: `,
  },
]
```

### `src/data/thingsToLearn.js`

```javascript
// status: 'planned' | 'in-progress'
export const thingsToLearn = [
  { id: 'animation-2d',    title: '2D Animation',            icon: '🎞️', description: 'Frame-by-frame animation dan rigging karakter.',          status: 'planned' },
  { id: 'illustration-2d', title: '2D Illustration',         icon: '🖌️', description: 'Ilustrasi digital 2D dengan style yang unik.',             status: 'planned' },
  { id: 'roblox-dev',      title: 'Roblox Development',      icon: '🎮', description: 'Membuat game di Roblox menggunakan Lua scripting.',        status: 'planned' },
  { id: 'game-dev',        title: 'Game Development',        icon: '🕹️', description: 'Pengembangan game dengan Unity atau Godot.',               status: 'planned' },
  { id: 'music-production',title: 'Music Production',        icon: '🎵', description: 'Produksi musik digital dengan FL Studio atau Ableton.',    status: 'planned' },
]
```

### `src/data/social.js`

```javascript
export const social = {
  instagram : '',   // username saja, tanpa @
  youtube   : '',   // URL channel
  discord   : '',   // username
  github    : '',   // username
  tiktok    : '',   // username
  linkedin  : '',   // URL profil
  roblox    : '',   // username
  email     : '',   // alamat email
  whatsapp  : '',   // nomor format: 628xxx
}
```

---

## 🧩 HALAMAN & SECTION

### 1. NAVBAR (Minimal)

```
Behavior:
- Transparent total saat di-top hero
- Saat scroll: background blur tipis (#0a0a0a/70) + border bottom 1px (#1e1e1e)
- Transisi smooth (0.4s)

Content:
- Kiri: "GALI" — font mono, uppercase, letter-spacing lebar
- Kanan: Hanya 3 link: Works · About · Contact
  (Blog & Services bisa di-hidden di nav, akses via footer atau halaman sendiri)
- Mobile: Hamburger → fullscreen overlay menu

Tidak perlu dark mode toggle —
website ini dark by default dan memang dark by design.
```

### 2. HERO SECTION

```
- Full viewport height (100vh)
- Background: video reel (muted, autoplay, loop) ATAU dot grid animasi
- Grain overlay aktif
- Parallax layers (jika ada aset gambar)

Konten (posisi bebas, tidak harus center):
- Label kecil (mono, atas kiri): "AHMAD GHAZALI — MAKASSAR, ID"
- Statement besar (tengah/kiri): "All Things Visual." [word-by-word reveal]
- Label kecil (bawah kanan, mono): "Motion × Design × Code"
- Scroll indicator (pojok kanan bawah): "↓" atau "SCROLL"
- TIDAK ada CTA button di hero — biarkan user scroll sendiri
```

### 3. ABOUT SECTION

```
Layout (desktop): 2 kolom — foto kiri, teks kanan

Foto:
- Bukan foto biasa — bisa grayscale atau dengan color overlay cyan tipis
- Atau: bukan foto sama sekali, ganti dengan abstract visual / karya sendiri

Teks:
- Bukan bio panjang
- 2-3 kalimat saja, puitis, bold
- Di bawahnya: skill pills minimal (tanpa border mencolok)
- Di bawahnya lagi: timeline pengalaman dengan garis vertikal (bukan cards)
```

### 4. SHOWCASE SECTION

```
- Bukan grid — editorial layout dengan mix ukuran
- Setiap kategori punya satu "featured" item (full-bleed atau besar)
- Sisanya mengikuti layout asimetris
- Tab filter: minimal, underline style, bukan pill/button besar
- Empty state: "Karya segera hadir ✦" — jangan kosongan atau placeholder jelek
- Hover effect: scale image + overlay gelap + info muncul dari bawah
```

### 5. BLOG SECTION

```
- Minimal card: thumbnail besar, judul bold, tanggal kecil (mono)
- Tidak perlu banyak metadata — cukup kategori + tanggal
- Layout: 1 featured besar + grid 2-3 kolom di bawahnya

Data source: Array di src/data/blog.js
Atau file .md di /content/blog/ menggunakan gray-matter + remark
```

### 6. SERVICES SECTION

```
Headline section: "Let's Build Something."
Subtext: "Punya ide? Saya ingin mendengarnya."

Cards: minimal, tidak terlalu banyak border/shadow
- Icon sederhana
- Judul bold (Playfair Display)
- Deskripsi 1-2 baris (Plus Jakarta Sans)
- Tools badge kecil (mono)
- Dua tombol di bawah:
  [WhatsApp →]   [Discord →]

Hover card: subtle background lift (#111111 → #1a1a1a)
```

**Implementasi tombol — WhatsApp dengan template:**

```jsx
// src/lib/contact.js
// Utility untuk generate link WhatsApp & Discord

export function getWhatsAppLink(waNumber, template) {
  const encoded = encodeURIComponent(template)
  return `https://wa.me/${waNumber}?text=${encoded}`
}

export function getDiscordLink(discordUsername) {
  // Discord tidak support pre-filled DM via URL
  // Solusi: copy username ke clipboard → buka Discord app
  return `https://discord.com/users/${discordUsername}`
}
```

```jsx
// src/components/sections/Services.jsx
import { services } from '@/data/services'
import { social } from '@/data/social'
import { getWhatsAppLink } from '@/lib/contact'

function ServiceCard({ service }) {
  const waLink = getWhatsAppLink(social.whatsapp, service.waTemplate)

  const handleDiscord = () => {
    navigator.clipboard.writeText(social.discord)
    // Tampilkan toast: "Username Discord disalin!"
    // Lalu arahkan ke Discord app / website
    window.open(`https://discord.com`, '_blank')
  }

  return (
    <div className="group border border-brand-border rounded-lg p-6 hover:bg-[#111111] transition-colors duration-300">
      <span className="text-2xl">{service.icon}</span>
      <h3 className="font-display text-xl font-bold mt-3 mb-2">{service.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-1 mb-5">
        {service.tools.map(tool => (
          <span key={tool} className="font-mono text-[10px] uppercase tracking-widest text-brand-muted border border-brand-border px-2 py-0.5 rounded">
            {tool}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-mono uppercase tracking-wider border border-[#25d366] text-[#25d366] px-3 py-1.5 rounded hover:bg-[#25d366] hover:text-black transition-all duration-200"
        >
          WhatsApp →
        </a>
        <button
          onClick={handleDiscord}
          className="flex items-center gap-1.5 text-sm font-mono uppercase tracking-wider border border-[#5865f2] text-[#5865f2] px-3 py-1.5 rounded hover:bg-[#5865f2] hover:text-white transition-all duration-200"
        >
          Discord →
        </button>
      </div>
    </div>
  )
}
```

**Warna tombol kontak:**
- WhatsApp: border + text `#25d366` (green WhatsApp), hover fill sama
- Discord: border + text `#5865f2` (blurple Discord), hover fill sama
- Pakai warna brand asli platform — user langsung paham tanpa butuh icon

### 7. THINGS TO LEARN SECTION

```
Headline: "What's Next."
Subtext: "Hal-hal yang sedang aku kejar."

Layout: grid minimalis, tidak berlebihan
- Icon + judul + deskripsi singkat
- Badge status: "Planned" atau "In Progress" (mono, kecil)

Tone: Humble dan antusias — bukan kelemahan, tapi growth mindset
```

### 8. CONTACT SECTION

```
Headline besar: "Let's Talk."
Subtext: "Punya project atau ide kolaborasi?"

TIDAK ADA FORM — langsung hubungi via WhatsApp atau Discord.

Layout:
─────────────────────────────────────────────────────────
  "Let's Talk."

  Pilih platform:

  ┌─────────────────────────────┐
  │  WhatsApp                   │
  │  Kirim pesan langsung →     │
  └─────────────────────────────┘

  ┌─────────────────────────────┐
  │  Discord                    │
  │  Salin username & DM →      │
  └─────────────────────────────┘

  [atau kunjungi sosial media lainnya di bawah]
─────────────────────────────────────────────────────────
```

**Template umum (untuk contact section — bukan dari jasa tertentu):**

```javascript
// src/data/contact.js
// Template pesan umum untuk contact section

export const contactTemplates = {
  whatsapp: `Halo Gali! 👋

Aku menemukan portofoliomu dan ingin menghubungimu.

📌 *Keperluanku:*
[ceritakan project / pertanyaan / ide kolaborasimu di sini]

Ditunggu responnya ya!`,

  discord: `Halo Gali! Aku lihat portofoliomu dan ingin ngobrol.\n\nKeperluan: `,
}
```

**Implementasi Contact Section:**

```jsx
// src/components/sections/Contact.jsx
import { social } from '@/data/social'
import { contactTemplates } from '@/data/contact'
import { getWhatsAppLink } from '@/lib/contact'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const waLink = getWhatsAppLink(social.whatsapp, contactTemplates.whatsapp)

  const handleDiscordCopy = async () => {
    await navigator.clipboard.writeText(social.discord)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact">
      {/* Headline */}
      <h2 className="font-display text-headline italic">Let's Talk.</h2>
      <p className="font-sans text-brand-muted mt-2">
        Punya project atau ide kolaborasi?
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        {/* WhatsApp */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border border-brand-border rounded-lg px-6 py-4 hover:border-[#25d366] transition-all duration-300"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-1">WhatsApp</p>
            <p className="font-display text-lg font-bold group-hover:text-[#25d366] transition-colors">
              Kirim pesan langsung →
            </p>
          </div>
          <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">💬</span>
        </a>

        {/* Discord */}
        <button
          onClick={handleDiscordCopy}
          className="group flex items-center justify-between border border-brand-border rounded-lg px-6 py-4 hover:border-[#5865f2] transition-all duration-300 text-left w-full"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-1">Discord</p>
            <p className="font-display text-lg font-bold group-hover:text-[#5865f2] transition-colors">
              {copied ? 'Username disalin! ✓' : 'Salin username & DM →'}
            </p>
            {/* Tampilkan username Discord (tanpa link langsung) */}
            <p className="font-mono text-xs text-brand-muted mt-0.5">{social.discord}</p>
          </div>
          <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">🎮</span>
        </button>

      </div>
    </section>
  )
}
```

**Kenapa tidak pakai form:**
- Lebih cepat respons — langsung masuk WA/Discord Gali
- Template sudah isi detail yang dibutuhkan — tidak perlu bolak-balik tanya
- Tidak butuh EmailJS / Resend API — lebih simpel, tidak ada biaya
- Terasa lebih personal dan langsung

### 9. FOOTER — MANIFESTO

```
Layout:
[Statement besar, 48-64px, Playfair Display]:
"I build things
 that move."

[Garis tipis]

[2 kolom]:
Kiri: Social links (Instagram, YouTube, GitHub, TikTok, LinkedIn, Roblox)
Kanan: 
  "Mulai sesuatu →"
  [WhatsApp]  [Discord]

[Bawah, mono, sangat kecil]:
© 2025 Ahmad Ghazali — Makassar, Indonesia
```

---

## 📱 RESPONSIVE

| Breakpoint | Target | Catatan |
|------------|--------|---------|
| `< 640px` | Mobile | Stack semua, hero font scale down, custom cursor off |
| `640–1024px` | Tablet | 2-column grid untuk showcase |
| `> 1024px` | Desktop | Full editorial layout, parallax aktif |

**Catatan penting:**
- Custom cursor: aktif hanya di desktop (deteksi via `hover: none` media query)
- Parallax: reduce motion untuk user yang punya `prefers-reduced-motion: reduce`
- Grain overlay: tetap aktif di semua device

---

## 📦 PACKAGE YANG DIINSTALL

```bash
# Setup project (jawab "No" saat ditanya TypeScript, "Yes" untuk App Router)
npx create-next-app@latest portfolio-gali --tailwind --app

# Font: Playfair Display + Plus Jakarta Sans + Space Mono
# Diload via Google Fonts — tidak perlu install package
# Tambahkan import ini di src/app/globals.css:
# @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Mono:ital,wght@0,400;1,400&display=swap');

# shadcn/ui
npx shadcn@latest init

# Framer Motion (animasi utama)
npm install framer-motion

# Icons
npm install lucide-react

# Form
# npm install react-hook-form  ← TIDAK DIPAKAI (tidak ada form)

# Email
# npm install emailjs-com       ← TIDAK DIPAKAI (tidak ada form)
# npm install resend             ← TIDAK DIPAKAI (tidak ada form)
# Kontak langsung via WhatsApp & Discord — tidak butuh email service

# Markdown untuk blog (opsional)
npm install gray-matter remark remark-html
```

---

## ✅ CHECKLIST BUILD ORDER

Urutan pengerjaan yang disarankan:

1. [ ] Setup Next.js + Tailwind + shadcn/ui
2. [ ] Setup `tailwind.config.js` dengan design tokens
3. [ ] Buat `globals.css` — import Google Fonts (Playfair Display + Plus Jakarta Sans + Space Mono), tambahkan `* { cursor: none }` dan base styles
4. [ ] Buat komponen global: `GrainOverlay`, `CustomCursor`, `LoadingScreen`
5. [ ] Pasang 3 komponen global di `layout.jsx`
6. [ ] Buat komponen shared: `RevealText`, `ParallaxLayer`, `NeonButton`
7. [ ] Isi semua file `src/data/`
8. [ ] Buat Navbar (minimal, transparent-to-blur behavior)
9. [ ] Build Hero section (loading → reveal → parallax)
10. [ ] Build About section
11. [ ] Build Showcase section (editorial layout, 7 tab)
12. [ ] Build Services section
13. [ ] Build Blog section (listing dulu)
14. [ ] Build Things to Learn section
15. [ ] Build Contact section + form integration
16. [ ] Build Footer (manifesto style)
17. [ ] Blog detail page (`/blog/[slug]`)
18. [ ] Responsiveness pass (mobile & tablet)
19. [ ] Animation polish & timing refinement
20. [ ] SEO metadata (title, description, OG tags)
21. [ ] Deploy ke Vercel

---

## 🚀 DEPLOY KE VERCEL

```bash
# Push ke GitHub
git init
git add .
git commit -m "initial: portfolio gali"
git remote add origin https://github.com/username/portfolio-gali.git
git push -u origin main

# Di vercel.com:
# Import repo → Framework: Next.js → Deploy
# Dapat domain preview otomatis
```

**Update konten setelah deploy:**
1. Edit file di `src/data/` (tambah karya, update info)
2. Commit + push ke GitHub
3. Vercel auto-redeploy (~1-2 menit)

---

## 📝 KONTEN YANG PERLU DISIAPKAN GALI

- [ ] Foto/avatar (min. 800x800px) — bisa grayscale atau color
- [ ] Video reel (opsional, untuk hero background)
- [ ] Gambar hero layers (2 PNG terpisah untuk parallax — opsional)
- [ ] Bio baru (2–3 kalimat, puitis, bukan CV)
- [ ] Tagline personal (sesuatu yang lebih dari "Motion Graphics Designer")
- [ ] Semua link sosial media
- [ ] Konten showcase per kategori:
  - [ ] Motion Graphics: thumbnail + link video + deskripsi
  - [ ] Graphic Design: gambar karya + deskripsi
  - [ ] Web Projects: screenshot + GitHub + live link
  - [ ] 3D Work: render images + deskripsi
  - [ ] Photography: pilih foto terbaik
  - [ ] Dokumentasi: foto kegiatan HMJ-SI
  - [ ] Sertifikat: foto/scan sertifikat
- [ ] 2–3 artikel blog starter
- [ ] Detail jasa + pricing (boleh "-" untuk discuss)

---

## 📌 CATATAN PENTING

> **Grain texture:** Jangan skip ini. Satu baris CSS yang bisa mengubah website dari "terasa AI-generated" jadi "terasa buatan manusia". Opacity harus sangat rendah (0.03–0.04) — kalau terlalu tinggi malah noise.

> **Copy:** Ini bagian yang paling sering diabaikan developer tapi paling dirasakan user. Luangkan waktu untuk tulis teks yang bercerita, bukan mendeskripsikan.

> **Accent cyan:** Pakai sparingly. Kalau semua pakai cyan, tidak ada yang terasa special. Pakai di 1–2 elemen saja — misalnya hanya di cursor dot dan satu CTA button.

> **Loading screen:** Kalau terasa terlalu lama untuk user return, simpan flag di `sessionStorage` dan skip loading kalau sudah pernah visit dalam sesi yang sama.

> **Performa:** Grain overlay menggunakan SVG inline (tidak ada HTTP request). Parallax menggunakan `useTransform` dari Framer Motion (GPU-accelerated). Custom cursor menggunakan `spring` physics. Semua ini ringan dan tidak butuh library tambahan.

> **`prefers-reduced-motion`:** Tambahkan check untuk user yang punya kondisi vestibular. Matikan parallax dan kurangi animasi untuk mereka.

---

*Prompt ini dibuat berdasarkan sesi konsultasi menyeluruh — v2.0 dengan design direction cinematic/artsy/INFP inspired by mata.bot.*
*Update dokumen ini setiap kali ada perubahan requirement yang disepakati.*
