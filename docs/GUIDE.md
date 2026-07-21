# 📖 Panduan Lengkap — Portfolio Gali (Next.js)

> Dokumen ini dibuat agar kamu memahami **cara kerja Next.js** melalui proyek portfolio ini.
> Setiap konsep dijelaskan dengan konteks langsung dari kode yang sudah ada.

---

## Daftar Isi

1. [Apa Itu Next.js?](#1-apa-itu-nextjs)
2. [Struktur Folder & Penjelasannya](#2-struktur-folder--penjelasannya)
3. [Konsep Utama Next.js (App Router)](#3-konsep-utama-nextjs-app-router)
4. [Cara Kerja Setiap File](#4-cara-kerja-setiap-file)
5. [Alur Data (Dari Mana Konten Berasal?)](#5-alur-data-dari-mana-konten-berasal)
6. [Styling dengan Tailwind CSS v4](#6-styling-dengan-tailwind-css-v4)
7. [Animasi dengan Framer Motion](#7-animasi-dengan-framer-motion)
8. [Panduan Edit Konten (Tanpa Coding)](#8-panduan-edit-konten-tanpa-coding)
9. [Perintah Terminal Penting](#9-perintah-terminal-penting)
10. [FAQ / Troubleshooting](#10-faq--troubleshooting)

---

## 1. Apa Itu Next.js?

Next.js adalah **framework** (kerangka kerja) yang dibangun di atas **React**.

Bayangkan seperti ini:
- **React** = Mesin mobil (komponen UI)
- **Next.js** = Mobil lengkap (routing, server, optimasi, dll)

### Kenapa pakai Next.js dan bukan React biasa?

| Fitur | React Biasa | Next.js |
|-------|-------------|---------|
| Routing (navigasi halaman) | Harus install `react-router` sendiri | ✅ Otomatis — cukup buat folder |
| SEO (ditemukan Google) | ❌ Buruk (halaman kosong saat crawl) | ✅ Bagus (HTML sudah jadi di server) |
| Performa | Sedang | ✅ Cepat (gambar dioptimasi, font dioptimasi) |
| Deployment | Ribet | ✅ Tinggal push ke Vercel |

---

## 2. Struktur Folder & Penjelasannya

```
portfolio-gali/
│
├── public/                     ← 🖼️ ASET STATIS
│   ├── images/                 ← Semua gambar (avatar, showcase, dll)
│   │   └── showcase/           ← Gambar karya per kategori
│   ├── videos/                 ← Video (reel.mp4 untuk hero)
│   └── favicon.ico             ← Ikon tab browser
│
├── src/                        ← 💻 KODE SUMBER (semua logic di sini)
│   │
│   ├── app/                    ← 🗺️ HALAMAN (App Router)
│   │   ├── layout.js           ← "Bingkai" semua halaman (font, metadata)
│   │   ├── page.js             ← Halaman utama (/)
│   │   ├── globals.css         ← CSS global + design tokens
│   │   └── blog/               ← Halaman /blog
│   │       ├── page.jsx        ← Daftar blog
│   │       └── [slug]/         ← Halaman blog dinamis (/blog/judul-artikel)
│   │           └── page.jsx
│   │
│   ├── components/             ← 🧩 KOMPONEN UI
│   │   ├── layout/             ← Navbar, Footer (muncul di semua halaman)
│   │   ├── sections/           ← Section per bagian (Hero, About, Showcase, dll)
│   │   └── shared/             ← Komponen kecil yang dipakai ulang
│   │
│   ├── data/                   ← 📝 DATA KONTEN (edit di sini!)
│   │   ├── profile.js          ← Nama, bio, skill, pengalaman
│   │   ├── showcase.js         ← Daftar karya
│   │   ├── services.js         ← Daftar jasa + template WA/Discord
│   │   ├── blog.js             ← Daftar artikel blog
│   │   ├── social.js           ← Link sosial media
│   │   ├── contact.js          ← Template pesan kontak umum
│   │   └── thingsToLearn.js    ← Hal yang ingin dipelajari
│   │
│   └── lib/                    ← 🔧 FUNGSI UTILITAS
│       ├── utils.js            ← Helper umum (cn untuk class merge)
│       └── contact.js          ← Fungsi generate link WA/Discord
│
├── package.json                ← 📦 Daftar dependensi & script
├── postcss.config.mjs          ← Konfigurasi PostCSS (untuk Tailwind)
└── next.config.mjs             ← Konfigurasi Next.js
```

### Aturan Penting:
> 📌 **Folder `public/`** = Bisa diakses langsung dari browser.
> Contoh: File `public/images/avatar.jpg` bisa diakses di `http://localhost:3000/images/avatar.jpg`

> 📌 **Folder `src/`** = TIDAK bisa diakses dari browser. Ini kode yang diproses oleh Next.js.

---

## 3. Konsep Utama Next.js (App Router)

### 3.1 Routing = Folder

Di Next.js App Router, **folder = URL**. Kamu tidak perlu menulis konfigurasi routing sama sekali.

```
src/app/page.js          →  URL: /            (halaman utama)
src/app/blog/page.jsx    →  URL: /blog        (daftar blog)
src/app/blog/[slug]/page.jsx  →  URL: /blog/judul-apa-saja  (blog dinamis)
```

**Tanda `[slug]`** artinya **dinamis** — bisa diganti apa saja:
- `/blog/belajar-motion-graphics`
- `/blog/tips-tailwind-css`
- Nilai `slug` bisa dibaca di dalam komponen

### 3.2 `layout.js` vs `page.js`

```
layout.js = "Bingkai foto"  ← Tetap ada di semua halaman (font, <html>, <body>)
page.js   = "Foto itu sendiri" ← Konten yang berubah per halaman
```

**Contoh dari proyek ini:**

```jsx
// src/app/layout.js — BINGKAI (tidak berubah saat navigasi)
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}   {/* ← ini diganti oleh page.js */}
      </body>
    </html>
  )
}

// src/app/page.js — KONTEN halaman utama (/)
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* ... */}
    </>
  )
}
```

### 3.3 `'use client'` — Apa Artinya?

Di Next.js, ada 2 jenis komponen:

| Jenis | Ciri | Kapan pakai? |
|-------|------|-------------|
| **Server Component** (default) | Dirender di server, lebih cepat, lebih aman | Menampilkan data statis, metadata |
| **Client Component** (`'use client'`) | Dirender di browser pengguna | Butuh interaksi: klik, scroll, animasi, state |

**Aturan simpel:**
- Kalau pakai `useState`, `useEffect`, `onClick`, `framer-motion` → **WAJIB** tulis `'use client'` di baris pertama
- Kalau hanya menampilkan teks/gambar tanpa interaksi → tidak perlu

```jsx
'use client'  // ← WAJIB karena pakai useState dan framer-motion

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  // ... komponen interaktif
}
```

### 3.4 `next/font/google` — Cara Load Font

Next.js punya cara khusus memuat font yang **lebih cepat** dari `@import` CSS biasa:

```jsx
// Di layout.js
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",   // ← Jadi CSS variable
  subsets: ["latin"],
  display: "swap",              // ← Teks langsung muncul, font menyusul
  weight: ["400", "700", "900"],
});

// Lalu pasang di <html>:
<html className={playfairDisplay.variable}>
```

Setelah itu, kamu bisa pakai di CSS:
```css
.font-display {
  font-family: var(--font-display);
}
```

### 3.5 `next/image` — Cara Pakai Gambar

**JANGAN** pakai `<img>` biasa di Next.js. Gunakan `<Image>` dari Next.js:

```jsx
import Image from 'next/image'

<Image
  src="/images/avatar.jpg"    // path dari folder public/
  alt="Ahmad Ghazali"
  width={400}
  height={500}
  // ATAU gunakan fill + sizes untuk responsive:
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
```

**Kenapa?** Next.js akan otomatis:
- Mengompres gambar (file jadi lebih kecil)
- Lazy loading (gambar di bawah baru dimuat saat discroll)
- Memberikan ukuran yang tepat untuk setiap device

---

## 4. Cara Kerja Setiap File

### 4.1 Alur Render Halaman Utama

```
Browser ketik URL
       ↓
   layout.js         → Muat font, set <html> & <body>, metadata SEO
       ↓
    page.js           → Render LoadingScreen → lalu semua section
       ↓
   ┌──────────────────────────────────────┐
   │  GrainOverlay   (selalu terlihat)    │
   │  CustomCursor   (desktop only)       │
   │                                      │
   │  LoadingScreen  (0% → 100% → fade)  │
   │         ↓ setelah selesai            │
   │  Navbar                              │
   │  Hero                                │
   │  About                               │
   │  Showcase                            │
   │  Blog                                │
   │  Services                            │
   │  ThingsToLearn                       │
   │  Contact                             │
   │  Footer                              │
   └──────────────────────────────────────┘
```

### 4.2 Anatomi Sebuah Section (Contoh: Hero)

```jsx
// src/components/sections/Hero.jsx

'use client'                           // 1. Deklarasi client component

import { motion } from 'framer-motion' // 2. Import library
import { profile } from '@/data/profile' // 3. Import data

// 4. Definisi animasi (variants)
const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, ... }
}

// 5. Komponen utama
export default function Hero() {
  return (
    <section id="home" className="..."> {/* 6. Section wrapper dengan id untuk scroll */}
      
      {/* 7. Background layer */}
      <video src="/videos/reel.mp4" autoPlay muted loop />
      
      {/* 8. Konten dengan animasi */}
      <motion.div variants={container} initial="hidden" animate="visible">
        <h1 className="font-display text-display">
          All Things <em>Visual.</em>
        </h1>
      </motion.div>
      
    </section>
  )
}
```

### 4.3 Pola Komponen di Proyek Ini

```
┌─ Section (Hero, About, dll)
│   ├── Import data dari src/data/
│   ├── Import komponen shared
│   └── Render dengan animasi Framer Motion
│
├─ Shared (RevealText, CardMotion, dll)
│   └── Komponen kecil yang DIPAKAI ULANG oleh banyak section
│
└─ Layout (Navbar, Footer)
    └── Muncul di SEMUA halaman
```

---

## 5. Alur Data (Dari Mana Konten Berasal?)

### Alur Sederhana

```
src/data/profile.js     →  diimport oleh  →  Hero.jsx, About.jsx
src/data/showcase.js    →  diimport oleh  →  Showcase.jsx
src/data/services.js    →  diimport oleh  →  Services.jsx
src/data/social.js      →  diimport oleh  →  Footer.jsx, Contact.jsx
src/data/blog.js        →  diimport oleh  →  Blog.jsx
```

### Contoh Alur Data Lengkap (Services → WhatsApp)

```
1. Gali mengisi data di src/data/services.js:
   { title: 'Video Editing', waTemplate: 'Halo Gali! Aku tertarik...' }

2. Services.jsx mengimport data:
   import { services } from '@/data/services'

3. Untuk setiap service, generate link WA:
   import { getWhatsAppLink } from '@/lib/contact'
   const waLink = getWhatsAppLink('628xxx', service.waTemplate)
   // Hasil: https://wa.me/628xxx?text=Halo%20Gali!%20...

4. Link dipasang ke tombol:
   <a href={waLink} target="_blank">WhatsApp →</a>

5. Klien klik → WA terbuka dengan pesan template yang sudah terisi
```

### Simbol `@/` — Apa Artinya?

```jsx
import { profile } from '@/data/profile'
//                        ↑
//                        @ = shortcut untuk folder src/
//                        Jadi @/data/profile = src/data/profile.js
```

Ini dikonfigurasi di `jsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## 6. Styling dengan Tailwind CSS v4

### Apa itu Tailwind?

Tailwind = menulis CSS langsung di HTML/JSX menggunakan **class pendek**.

```jsx
// Tanpa Tailwind (CSS biasa):
<div style={{ backgroundColor: '#0a0a0a', padding: '24px', borderRadius: '4px' }}>

// Dengan Tailwind:
<div className="bg-brand-bg p-6 rounded-sm">
```

### Design Tokens (Warna & Font Custom)

Semua warna dan font didefinisikan di `globals.css` menggunakan format Tailwind v4:

```css
@theme inline {
  --color-brand-bg: #0a0a0a;       /* Latar hitam */
  --color-brand-accent: #00d9ff;   /* Cyan neon */
  --font-display: "Playfair Display", serif;
}
```

Setelah didefinisikan, langsung bisa dipakai:
```jsx
<div className="bg-brand-bg text-brand-accent font-display">
```

### Responsive Design

Tailwind menggunakan **prefix** untuk breakpoint:

```jsx
<h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
{/*            ↑ mobile    ↑ ≥640px    ↑ ≥768px     ↑ ≥1024px */}
```

---

## 7. Animasi dengan Framer Motion

### Konsep Dasar

```jsx
import { motion } from 'framer-motion'

// Elemen biasa:
<div>Halo</div>

// Elemen dengan animasi:
<motion.div
  initial={{ opacity: 0, y: 20 }}     // Kondisi awal
  animate={{ opacity: 1, y: 0 }}      // Kondisi akhir
  transition={{ duration: 0.6 }}       // Berapa lama
>
  Halo
</motion.div>
```

### Pola Animasi yang Dipakai

| Pola | Komponen | Efek |
|------|----------|------|
| **Fade in + Slide up** | `CardMotion` | Elemen muncul dari bawah saat scroll |
| **Word-by-word reveal** | `Hero` | Kata muncul satu per satu dari bawah |
| **Scroll-triggered** | `RevealText` | Teks muncul saat masuk viewport |
| **Hover scale** | `ShowcaseCard` | Gambar membesar saat mouse di atas |
| **Spring physics** | `CustomCursor` | Cursor mengikuti mouse dengan efek pegas |
| **Layout animation** | `TabFilter` | Garis bawah tab bergerak halus |

### `useInView` — Deteksi Scroll

```jsx
import { useInView } from 'framer-motion'

const ref = useRef(null)
const isInView = useInView(ref, { once: true }) // true = hanya trigger sekali

<div ref={ref}>
  {isInView && <p>Elemen ini sudah terlihat!</p>}
</div>
```

---

## 8. Panduan Edit Konten (Tanpa Coding)

### 8.1 Mengubah Profil

Buka `src/data/profile.js`:
```javascript
export const profile = {
  name      : 'Ahmad Ghazali',       // ← ganti nama
  tagline   : 'All Things Visual.',  // ← ganti tagline hero
  bio       : 'Saya percaya...',     // ← ganti bio
  avatar    : '/images/avatar.jpg',  // ← ganti path foto
}
```

### 8.2 Menambah Karya Baru

Buka `src/data/showcase.js`, tambah objek baru:
```javascript
motionGraphics: [
  // Karya yang sudah ada...
  {
    id          : 'motion-002',                    // ← ID unik
    title       : 'Nama Karya Baru',               // ← judul
    description : 'Deskripsi singkat...',           // ← deskripsi
    thumbnail   : '/images/showcase/motion/002.jpg', // ← gambar
    tools       : ['After Effects'],               // ← tools yang dipakai
    year        : '2025',                          // ← tahun
    featured    : false,                           // ← true = tampil besar
  },
],
```

### 8.3 Mengisi Link Sosial Media

Buka `src/data/social.js`:
```javascript
export const social = {
  instagram : 'username_ig',        // ← isi username (tanpa @)
  youtube   : 'https://youtube.com/...',
  github    : 'username_github',
  whatsapp  : '6281234567890',      // ← format: 628xxx
  discord   : 'username_discord',
  // ... dst
}
```

### 8.4 Setelah Edit, Bagaimana?

```bash
# Kalau sedang development (npm run dev sedang jalan):
# → Otomatis refresh! Tidak perlu restart.

# Kalau sudah di-deploy ke Vercel:
git add .
git commit -m "update: tambah karya baru"
git push
# → Vercel otomatis rebuild dalam 1-2 menit
```

---

## 9. Perintah Terminal Penting

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Jalankan server development (http://localhost:3000) |
| `npm run build` | Buat versi production (untuk deploy) |
| `npm run start` | Jalankan versi production secara lokal |
| `npm install` | Install semua dependensi dari package.json |
| `npm install [nama-package]` | Tambah dependensi baru |

---

## 10. FAQ / Troubleshooting

### Q: Kenapa halaman blank/putih?
**A:** Kemungkinan ada error di kode. Buka terminal dan lihat pesan error merah. Biasanya:
- Typo di nama file/import
- Lupa `'use client'` di komponen yang pakai `useState`
- File gambar tidak ada di `public/`

### Q: Kenapa gambar tidak muncul?
**A:** Pastikan:
1. File ada di folder `public/images/`
2. Path di kode TIDAK termasuk kata `public/`. Contoh:
   - ✅ `src="/images/avatar.jpg"`
   - ❌ `src="/public/images/avatar.jpg"`

### Q: Kenapa animasi tidak jalan?
**A:** Pastikan:
1. Ada `'use client'` di baris pertama file
2. Import `framer-motion` sudah benar
3. Tidak ada `prefers-reduced-motion: reduce` di setting OS kamu

### Q: Bagaimana menambah halaman baru?
**A:** Buat folder baru di `src/app/`:
```
src/app/portfolio/page.jsx  →  URL: /portfolio
```

### Q: Apa bedanya `.js` dan `.jsx`?
**A:** Di proyek ini, **tidak ada perbedaan fungsional**. Keduanya bisa berisi JSX (HTML di dalam JavaScript). Ini hanya soal konvensi penamaan.

---

> 💡 **Tips:** Cara terbaik belajar Next.js adalah dengan **mengubah kode yang sudah ada** dan lihat hasilnya langsung di browser. Mulai dari hal kecil: ganti warna, ubah teks, tambah section baru.

---

*Dokumen ini dibuat khusus untuk proyek Portfolio Gali v2.0 — Cinematic/Artsy Edition.*
