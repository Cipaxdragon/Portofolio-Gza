# 🎨 PROMPT LENGKAP — PORTFOLIO WEBSITE AHMAD GHAZALI (GALI)
> Dokumen ini merangkum seluruh keputusan desain, teknis, dan fitur yang telah didiskusikan.
> Gunakan sebagai referensi utama saat memulai pengerjaan koding.

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

---

## 🛠️ TECH STACK

```
Framework       : Next.js 14+ (App Router)
Language        : JavaScript (JSX)
Styling         : Tailwind CSS
UI Components   : shadcn/ui
Animation       : Framer Motion
Font            : Inter (Google Fonts)
Code Font       : JetBrains Mono (Google Fonts)
Form Handling   : React Hook Form
Email           : EmailJS atau Resend API (untuk contact form)
Image           : Next.js Image Component
Hosting         : Vercel
Version Control : GitHub
```

---

## 🎨 DESIGN SYSTEM

### Color Palette

```css
/* Background */
--bg-primary    : #0a0a0a;   /* Pure black, background utama */
--bg-secondary  : #1a1a1a;   /* Darker gray, untuk cards & sections */

/* Text */
--text-primary  : #f0f0f0;   /* Off-white, body text */
--text-secondary: #a0a0a0;   /* Light gray, caption & metadata */

/* Accent */
--accent        : #00d9ff;   /* Cyan neon — dipakai untuk: border, glow, highlight, CTA */
--accent-dim    : rgba(0, 217, 255, 0.1);  /* Subtle glow background */
--accent-glow   : rgba(0, 217, 255, 0.3);  /* Stronger glow effect */

/* Supporting */
--border        : #2a2a2a;   /* Divider & card border */
--success       : #10b981;   /* Emerald green */
--error         : #ef4444;   /* Red */
```

### Typography

```css
/* Headline */
font-family    : 'Inter', sans-serif;
font-weight    : 700;
letter-spacing : -0.02em;

/* Body */
font-family    : 'Inter', sans-serif;
font-weight    : 400;
line-height    : 1.6;

/* Code / Tech */
font-family    : 'JetBrains Mono', monospace;
font-weight    : 500;
```

**Size Hierarchy:**

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 (Hero) | 56px | 32px |
| H2 (Section) | 40px | 28px |
| H3 (Subsection) | 32px | 22px |
| Body | 16px | 16px |
| Caption | 14px | 14px |

### Vibe & Aesthetic

- **Overall:** Dark, minimal, clean — konten adalah fokus utama
- **Accent:** Satu warna saja (cyan), tidak campur-campur
- **Whitespace:** Generous — spacing antar section minimal 80px desktop, 48px mobile
- **Tone:** Sophisticated, premium, accessible — cocok buat klien personal maupun klien brand/corporate

---

## ✨ ANIMATION GUIDELINES

### Prinsip

- Animasi bersifat **subtle & purposeful**, bukan untuk pamer
- Durasi ideal: **0.3s – 0.6s** dengan easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Scroll-triggered animations menggunakan `useInView` dari Framer Motion
- Stagger effect untuk list items: `staggerChildren: 0.08`

### Animasi Wajib (Minimum)

| Elemen | Animasi |
|--------|---------|
| Hero text | Fade-in + slide-up on load |
| CTA Button | Cyan glow pulse (infinite, subtle) |
| Navbar | Blur + shadow on scroll |
| Cards | Border cyan + scale 1.02x + glow shadow on hover |
| Tab switch | Fade transition antar konten |
| Section entrance | Staggered fade-in + translateY(20px → 0) saat scroll |
| Form input | Cyan outline glow saat focus |
| Loading state | Shimmer/skeleton animation |

### Yang DILARANG

- ❌ Animasi durasi lebih dari 0.8s
- ❌ Multiple element animasi bersamaan secara kasar
- ❌ Glitch, flicker, atau efek VHS yang berlebihan
- ❌ Auto-play video dengan audio
- ❌ Scroll-hijack atau parallax yang terlalu aggressive

---

## 📐 TAILWIND CONFIG

Tambahkan ke `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a',
          text: '#f0f0f0',
          muted: '#a0a0a0',
          accent: '#00d9ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 217, 255, 0.2)',
        'neon':    '0 0 20px rgba(0, 217, 255, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
      },
      animation: {
        'fade-in'    : 'fadeIn 0.6s ease-out forwards',
        'slide-up'   : 'slideUp 0.6s ease-out forwards',
        'glow-pulse' : 'glowPulse 2.5s ease-in-out infinite',
        'shimmer'    : 'shimmer 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)' },
          '50%':      { boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to:   { backgroundPosition: '-200% 0' },
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
│   │   ├── showcase/
│   │   │   ├── motion/
│   │   │   ├── design/
│   │   │   ├── code/
│   │   │   ├── 3d/
│   │   │   ├── photography/
│   │   │   ├── documentation/
│   │   │   └── certificates/
│   │   └── blog/
│   └── favicon.ico
│
├── src/
│   ├── data/                    ← EDIT KONTEN DI SINI
│   │   ├── profile.js           ← Bio, skill, software
│   │   ├── showcase.js          ← Semua karya (9 kategori)
│   │   ├── blog.js              ← Daftar blog posts
│   │   ├── services.js          ← Daftar jasa
│   │   ├── thingsToLearn.js     ← Skill yang ingin dipelajari
│   │   └── social.js            ← Link sosial media
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/                  ← shadcn/ui components
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Showcase.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ThingsToLearn.jsx
│   │   │   └── Contact.jsx
│   │   └── shared/
│   │       ├── SectionHeader.jsx
│   │       ├── CardMotion.jsx
│   │       └── NeonButton.jsx
│   │
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx             ← Homepage
│   │   ├── blog/
│   │   │   ├── page.jsx         ← Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.jsx     ← Blog detail
│   │   └── globals.css
│   │
│   └── lib/
│       └── utils.js
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
  name: 'Ahmad Ghazali',
  nickname: 'Gali',
  title: 'Motion Graphics & Web Designer',
  tagline: 'Creating visual experiences with code & creativity.',
  bio: `I'm a motion graphics designer, video editor, and web developer based in Makassar, Indonesia.
        Saya percaya bahwa desain yang baik adalah desain yang bercerita.`,
  avatar: '/images/avatar.jpg',
  location: 'Makassar, Indonesia',
  education: {
    major: 'Sistem Informasi',
    university: 'UIN Alauddin Makassar',
    batch: '2021',
  },
  skills: {
    creative: [
      'Motion Graphics',
      'Video Editing',
      'Graphic Design',
      '3D Generalist',
      'Photography',
      'Image Manipulation',
    ],
    coding: ['React JS', 'Next.js', 'Laravel', 'PHP', 'Tailwind CSS'],
    software: [
      'Adobe After Effects',
      'Adobe Premiere Pro',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Audition',
      'Figma',
      'Canva',
      'Blender',
    ],
  },
  experience: [
    {
      role: 'Ketua Divisi Kominfo',
      organization: 'HMJ Sistem Informasi (HMJ-SI)',
      year: '2024',
      description: 'Koordinator Divisi Manajemen. Program Kerja: Podcast.',
    },
    {
      role: 'Anggota Divisi Kominfo / PDD',
      organization: 'HMJ Sistem Informasi (HMJ-SI)',
      year: '2023',
      description: 'Design Graphics, Editing Video, Build Website, Dokumentasi Acara.',
    },
    {
      role: 'Panitia Dokumentasi Kreasi',
      organization: 'Inaugurasi Jurusan',
      year: '2023',
      description: 'Dokumentasi kegiatan inaugurasi jurusan.',
    },
  ],
}
```

### `src/data/showcase.js`

```javascript
// Struktur tiap item showcase:
// id, title, description, thumbnail, tools[], date, tags[]
// Optional: videoUrl (motion/video), liveUrl & githubUrl (web), imageUrl (design/3d/photo/cert), eventName (dokumentasi)

export const showcase = {
  motionGraphics: [],
  graphicDesign:  [],
  webProjects:    [],
  threeD:         [],
  photography:    [],
  documentation:  [],
  certificates:   [],
}
```

### `src/data/blog.js`

```javascript
// Struktur tiap blog post:
// slug, title, excerpt, content (markdown string),
// thumbnail, category, tags[], date, readTime (menit)

export const blogPosts = [
  // Isi dengan post artikel saat ada konten
]
```

### `src/data/services.js`

```javascript
// Struktur tiap service:
// id, icon (emoji), title, description, tools[], priceRange (opsional), ctaText

export const services = [
  {
    id: 'video-editing',
    icon: '🎬',
    title: 'Jasa Video Editing',
    description: 'Professional video editing & color grading menggunakan Adobe Premiere Pro dan After Effects.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Adobe Audition'],
    ctaText: 'Pesan Sekarang',
  },
  {
    id: 'motion-graphics',
    icon: '✨',
    title: 'Jasa Motion Graphics',
    description: 'Pembuatan animasi motion graphics untuk kebutuhan konten sosial media, presentasi, atau branding.',
    tools: ['After Effects', 'Premiere Pro'],
    ctaText: 'Pesan Sekarang',
  },
  {
    id: 'graphic-design',
    icon: '🎨',
    title: 'Jasa Graphic Design',
    description: 'Desain grafis untuk kebutuhan poster, social media content, banner, dan branding.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    ctaText: 'Pesan Sekarang',
  },
  {
    id: 'web-development',
    icon: '💻',
    title: 'Jasa Web Development',
    description: 'Pengembangan website menggunakan React JS, Next.js, dan Laravel sesuai kebutuhan project.',
    tools: ['Next.js', 'React JS', 'Laravel', 'PHP', 'Tailwind CSS'],
    ctaText: 'Diskusi Project',
  },
  {
    id: 'photography',
    icon: '📷',
    title: 'Jasa Photography',
    description: 'Dokumentasi acara, portrait, dan kebutuhan photography lainnya.',
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    ctaText: 'Pesan Sekarang',
  },
]
```

### `src/data/thingsToLearn.js`

```javascript
// status: 'planned' | 'in-progress'
export const thingsToLearn = [
  {
    id: 'animation-2d',
    title: '2D Animation',
    icon: '🎞️',
    description: 'Belajar animasi 2D frame-by-frame dan rigging karakter.',
    status: 'planned',
  },
  {
    id: 'illustration-2d',
    title: '2D Illustration',
    icon: '🖌️',
    description: 'Membuat ilustrasi digital 2D dengan style yang unik.',
    status: 'planned',
  },
  {
    id: 'roblox-dev',
    title: 'Roblox Game Development',
    icon: '🎮',
    description: 'Membuat game di platform Roblox menggunakan Lua scripting.',
    status: 'planned',
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    icon: '🕹️',
    description: 'Pengembangan game dengan engine seperti Unity atau Godot.',
    status: 'planned',
  },
  {
    id: 'music-production',
    title: 'Music Production',
    icon: '🎵',
    description: 'Produksi musik digital menggunakan DAW seperti FL Studio atau Ableton.',
    status: 'planned',
  },
]
```

### `src/data/social.js`

```javascript
export const social = {
  instagram : '',   // isi dengan username
  youtube   : '',   // isi dengan URL channel
  discord   : '',   // isi dengan username atau server invite
  github    : '',   // isi dengan username
  tiktok    : '',   // isi dengan username
  linkedin  : '',   // isi dengan URL profil
  roblox    : '',   // isi dengan username
  email     : '',   // isi dengan email
  whatsapp  : '',   // isi dengan nomor (format: 628xxx)
}
```

---

## 🧩 HALAMAN & SECTION

### 1. NAVBAR (Sticky)

- Logo/Nama: **"GALI"** — font bold, accent color untuk titik atau underscore dekoratif
- Menu: Home · About · Showcase · Blog · Services · Contact
- Hamburger menu untuk mobile
- Behavior: Transparent saat di-top, blur background + border bottom saat di-scroll
- Active indicator: Border bottom cyan pada menu aktif

### 2. HERO SECTION

- Full-viewport height
- Konten center-left atau full center
- **Headline:** `Ahmad Ghazali` (besar, bold)
- **Subheadline:** `Motion Graphics & Web Designer`
- **Tagline:** `Creating visual experiences with code & creativity.`
- **Two CTA buttons:**
  - `[Explore Works]` — outlined, cyan border
  - `[Get in Touch]` — solid cyan background
- Background: Pure black, boleh tambah subtle grid pattern atau dot pattern
- Animasi: Fade-in + slide-up bertahap untuk setiap baris teks

### 3. ABOUT SECTION

- Layout: 2 kolom di desktop (foto kiri, teks kanan), stack di mobile
- Foto/avatar dengan subtle cyan border atau glow effect
- Bio deskriptif (ganti "bukanlah siapa-siapa")
- Skill list dengan visual pill/badge untuk setiap kategori skill
- Timeline pengalaman organisasi (HMJ-SI & Kepanitiaan)

### 4. SHOWCASE SECTION

Tab filter dengan 7 kategori:

| Tab | Konten |
|-----|--------|
| Motion Graphics | Video/GIF preview, deskripsi, tools |
| Graphic Design | Image gallery, deskripsi project |
| Web Projects | Card dengan tech stack, link GitHub & demo |
| 3D Work | Render images, deskripsi, tools |
| Photography | Lightbox photo gallery |
| Dokumentasi | Timeline/grid foto kegiatan |
| Sertifikat | Image grid sertifikat dengan detail |

**Behavior:**
- Tab switch dengan fade transition (Framer Motion)
- Cards hover: cyan border + glow shadow + scale 1.02
- Click → modal/lightbox dengan detail lengkap
- Skeleton loading saat tab pertama kali dibuka
- Empty state yang clean kalau konten belum ada

### 5. BLOG SECTION

**Halaman listing:**
- Grid card: thumbnail, judul, tanggal, excerpt, tag, estimasi read time
- Filter by category/tag
- Pagination atau "Load More" button

**Halaman detail post (`/blog/[slug]`):**
- Featured image full-width
- Judul, tanggal, category, read time
- Konten artikel (render markdown)
- Table of contents (sidebar atau sticky atas)
- Related posts di bawah

**Data source:** Array di `src/data/blog.js` — atau bisa migrasi ke file `.md` per post di `/content/blog/` menggunakan `gray-matter` + `remark`

### 6. SERVICES SECTION

- Grid 2 kolom desktop, 1 kolom mobile
- Setiap card: icon, judul, deskripsi, tools badge, CTA button
- Hover: border cyan, glow subtle, scale kecil
- CTA button: "Pesan Sekarang" → arahkan ke WhatsApp atau form kontak

### 7. THINGS TO LEARN SECTION

- Grid dengan card minimalis
- Setiap card: icon, nama skill, deskripsi goal, badge status ("Planned" / "In Progress")
- Tone: Humble, growth mindset — bukan kelemahan, tapi transparansi dan ambisi

### 8. CONTACT / CTA SECTION

**Form kontak:**
- Fields: Nama, Email, Subject, Pesan
- Submit → kirim via EmailJS atau Resend
- Validation: React Hook Form
- Success state: Pesan sukses dengan animasi

**Social links:**
- Icon row: Instagram, YouTube, Discord, GitHub, TikTok, LinkedIn, Roblox
- Hover: icon warna cyan + tooltip nama platform

### 9. FOOTER

- Nama + tagline singkat
- Link navigasi singkat (Home, Blog, Services, Contact)
- Social media icon row
- Copyright: `© 2024 Ahmad Ghazali. All rights reserved.`

---

## 📱 RESPONSIVE BREAKPOINTS

| Breakpoint | Target | Catatan |
|------------|--------|---------|
| `< 640px` (sm) | Mobile | Stack semua, full-width buttons, padding 16px |
| `640px–1024px` (md) | Tablet | 2-column grid, padding 24px |
| `> 1024px` (lg) | Desktop | Full layout, max-width 1280px centered, padding 40px |

---

## 🔧 KOMPONEN KHUSUS YANG PERLU DIBUAT

### `NeonButton`

```jsx
// Varian: 'outline' | 'solid'
// outline → border cyan, text cyan, hover → bg cyan, text black
// solid   → bg cyan, text black, hover → brightness naik
```

### `ShowcaseCard`

```jsx
// Props: { item, category }
// Hover animation via Framer Motion (whileHover)
// Box shadow neon on hover
```

### `SectionHeader`

```jsx
// Props: { title, subtitle }
// Decorative line dengan accent color
// Fade-in animation on scroll
```

### `TabFilter`

```jsx
// Props: { tabs, active, onChange }
// Animated underline indicator (layoutId Framer Motion)
```

---

## 📦 PACKAGE YANG DIINSTALL

```bash
# Inisialisasi project (pilih JavaScript saat ditanya "Would you like to use TypeScript?" → No)
npx create-next-app@latest portfolio-gali --tailwind --app --no-src-dir

# shadcn/ui
npx shadcn@latest init

# Framer Motion
npm install framer-motion

# Icons
npm install lucide-react

# Form handling
npm install react-hook-form

# Email (pilih salah satu)
npm install emailjs-com
# atau
npm install resend

# Markdown (kalau blog pakai .md files)
npm install gray-matter remark remark-html
```

---

## ✅ CHECKLIST BUILD ORDER (Rekomendasi)

Urutan pengerjaan yang disarankan:

1. [ ] Setup project Next.js + Tailwind + shadcn/ui
2. [ ] Setup `tailwind.config.js` dengan design tokens
3. [ ] Buat file `src/data/` semua (profile, showcase, blog, services, dll)
4. [ ] Buat komponen shared (NeonButton, SectionHeader, CardMotion)
5. [ ] Buat Navbar + Footer
6. [ ] Build Hero section
7. [ ] Build About section
8. [ ] Build Showcase section (mulai dari tab Motion Graphics)
9. [ ] Build Services section
10. [ ] Build Blog section (listing dulu, detail post belakangan)
11. [ ] Build Things to Learn section
12. [ ] Build Contact section + integrasi EmailJS
13. [ ] Responsiveness check (mobile & tablet)
14. [ ] Animasi polish dengan Framer Motion
15. [ ] SEO metadata (title, description, OG tags)
16. [ ] Deploy ke Vercel

---

## 📝 KONTEN YANG PERLU DISIAPKAN GALI

Sebelum atau saat development berlangsung, siapkan:

- [ ] Foto/avatar berkualitas tinggi (min. 500x500px)
- [ ] Bio baru (ganti versi "bukanlah siapa-siapa")
- [ ] Link sosial media semua platform (Instagram, YouTube, dll)
- [ ] Nomor WhatsApp atau email untuk kontak
- [ ] Konten showcase:
  - [ ] Video Motion Graphics: judul, deskripsi, link YouTube, thumbnail
  - [ ] Hasil Graphic Design: gambar final + deskripsi
  - [ ] Web Projects: screenshot, GitHub link, deskripsi
  - [ ] 3D Work: render images + deskripsi
  - [ ] Foto Photography: pilih terbaik, beri kategori
  - [ ] Foto Dokumentasi Kegiatan HMJ-SI
  - [ ] Scan/foto sertifikat
- [ ] 2–3 draft blog post starter (topik: design tips, workflow, atau pengalaman)
- [ ] Deskripsi dan pricing range untuk setiap jasa (boleh "-" kalau mau discuss)

---

## 🚀 CARA DEPLOY KE VERCEL

```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit: portfolio gali"
git remote add origin https://github.com/username/portfolio-gali.git
git push -u origin main

# 2. Login ke vercel.com
# 3. Import repository dari GitHub
# 4. Konfigurasi: Framework → Next.js, build command → default
# 5. Deploy → Vercel otomatis beri domain preview
# 6. (Opsional) Connect custom domain di Vercel dashboard
```

**Cara update konten setelah deploy:**
1. Edit file di `src/data/` (misalnya tambah showcase item baru)
2. Simpan → commit → push ke GitHub
3. Vercel otomatis detect perubahan dan redeploy (biasanya 1-2 menit)

---

## 📌 CATATAN PENTING

> **Aksen warna:** Hanya pakai `#00d9ff` (cyan). Jangan tambah warna aksen kedua — kesederhanaan ini yang bikin tampilannya terasa premium.

> **Animasi:** Selalu prioritaskan performa. Kalau animasi bikin scroll jadi lag di mobile, matikan atau sederhanakan. Pakai `will-change: transform` hanya kalau perlu.

> **Bio:** Jangan gunakan kalimat "Bukanlah Siapa-Siapa" di website — ganti dengan sesuatu yang confident namun tetap humble. Portofolio ini adalah tool untuk meyakinkan klien.

> **Konten kosong:** Pakai empty state yang menarik ("Karya segera hadir ✦") daripada section kosong atau placeholder jelek.

> **Konsistensi spacing:** Gunakan Tailwind spacing scale konsisten — jangan campur `mt-5`, `mt-6`, `mt-7`. Pilih satu set (misal: 4, 8, 16, 32, 64) dan pakai itu terus.

---

*Prompt ini dibuat berdasarkan sesi konsultasi menyeluruh — mencakup keputusan stack, style, data structure, dan fitur.*  
*Update dokumen ini setiap kali ada perubahan requirement yang disepakati.*