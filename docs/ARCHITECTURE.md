# Arsitektur & Dokumentasi Teknis - Portfolio Gali

Dokumen ini memberikan gambaran menyeluruh tentang arsitektur, teknologi, dan struktur direktori yang digunakan dalam pengembangan aplikasi portofolio ini.

---

## 1. Tinjauan Sistem (System Overview)

Aplikasi portofolio ini adalah aplikasi web modern Single Page Application (SPA) / Multi-Page Application (bergantung pada rendering) yang dibangun dengan pendekatan **komponen-sentris**. Fokus utamanya adalah performa tinggi, SEO yang optimal, dan antarmuka pengguna (UI) yang interaktif serta responsif.

## 2. Tumpukan Teknologi (Tech Stack)

Aplikasi ini menggunakan berbagai teknologi modern standar industri:

### 2.1 Core Framework & Library
* **[Next.js (v16)](https://nextjs.org/):** Bertindak sebagai framework utama menggunakan **App Router**. Memberikan kapabilitas *Server-Side Rendering (SSR)* dan *Static Site Generation (SSG)* secara bawaan untuk optimalisasi kecepatan akses.
* **[React (v19)](https://react.dev/):** Library UI utama yang digunakan untuk membangun komponen interaktif.

### 2.2 Styling & UI
* **[Tailwind CSS (v4)](https://tailwindcss.com/):** Framework CSS *utility-first* yang digunakan untuk seluruh styling aplikasi. Memudahkan desain responsif (*mobile-first*) secara cepat.
* **UI Utilities:** 
  * `class-variance-authority` (CVA), `clsx`, dan `tailwind-merge`: Digunakan bersamaan untuk mengelola varian class Tailwind pada komponen yang dapat digunakan ulang (mirip pendekatan Shadcn UI), memastikan tidak ada konflik class CSS.
* **[Framer Motion](https://www.framer.com/motion/):** Library animasi standar untuk React. Digunakan untuk membuat transisi halaman yang mulus dan interaksi mikro (seperti elemen yang muncul saat di-scroll).
* **[Lucide React](https://lucide.dev/):** Kumpulan ikon vektor (SVG) yang ringan dan konsisten.

### 2.3 Form & Utilitas
* **[React Hook Form](https://react-hook-form.com/):** Digunakan untuk menangani *state* dan validasi pada form (misalnya pada halaman "Contact"), karena performanya yang ringan dan tidak memicu *re-render* yang tidak perlu.
* **[EmailJS](https://www.emailjs.com/):** Digunakan untuk mengirim email langsung dari client-side tanpa memerlukan backend khusus, biasanya terhubung dengan form kontak.

---

## 3. Struktur Direktori (Project Structure)

Proyek ini menggunakan struktur `src/` yang menjaga agar kode utama terpisah dari file konfigurasi di root.

```text
portfolio-gali/
├── .next/                  # Hasil build Next.js (digenerate otomatis)
├── node_modules/           # Dependensi project
├── public/                 # Aset statis yang dapat diakses publik (gambar, favicon, fonts)
├── src/                    # Direktori utama kode sumber
│   ├── app/                # Konsep App Router Next.js (Routing & Halaman)
│   │   ├── layout.js       # Layout utama aplikasi (HTML, Body, Provider)
│   │   ├── page.js         # Halaman utama (Home / /)
│   │   └── ...             # Folder lain merepresentasikan rute (misal: /about, /projects)
│   ├── components/         # Komponen UI yang reusable (Navbar, Footer, Button, Card, dll)
│   ├── data/               # Data statis (JSON, array konstan) untuk projects, experience, skills
│   └── lib/                # Fungsi utilitas (cn untuk class merge, formatters, dll)
├── jsconfig.json           # Konfigurasi path alias untuk JavaScript
├── next.config.mjs         # Konfigurasi untuk framework Next.js
├── postcss.config.mjs      # Konfigurasi PostCSS (untuk Tailwind)
├── package.json            # Daftar dependensi dan script NPM
└── README.md               # Dokumentasi standar proyek
```

---

## 4. Alur Data dan Rendering (Data Flow & Rendering Strategy)

1. **Static Data:** Karena ini adalah portofolio, sebagian besar data (seperti daftar proyek, pengalaman kerja) tidak sering berubah. Oleh karena itu, data ini disimpan secara lokal di dalam folder `src/data/`.
2. **Rendering:** 
   * Halaman-halaman dirender secara statis saat *build time* (SSG) oleh Next.js, menghasilkan file HTML biasa yang sangat cepat dimuat.
   * Interaktivitas (seperti animasi Framer Motion atau form kontak) di-handle di sisi *client* (menggunakan direktif `"use client"` di Next.js).
3. **Form Handling:** Saat pengguna mengisi form kontak, `react-hook-form` menangkap dan memvalidasi input. Saat di-*submit*, data dikirim ke `emailjs-com` yang kemudian meneruskannya ke email pemilik portofolio secara langsung.

---

## 5. Konvensi dan Best Practices
* **Component-Based:** UI dipecah menjadi komponen-komponen kecil di `src/components/` agar mudah dikelola dan digunakan ulang.
* **Responsive Design:** Seluruh antarmuka dibangun dengan pendekatan *Mobile-First* menggunakan Tailwind CSS.
* **Separation of Concerns:** 
  * Data terpisah di folder `data/`.
  * Logika utilitas (seperti manipulasi string atau penggabungan class) terpisah di folder `lib/`.
  * Tampilan (UI) berada di `components/` dan `app/`.

---

## 6. Alur Deployment (CI/CD)

Proyek ini sangat disarankan untuk di-deploy menggunakan **[Vercel](https://vercel.com/)** (kreator dari Next.js):
1. Repositori kode di-*host* di GitHub/GitLab/Bitbucket.
2. Vercel dihubungkan ke repositori tersebut.
3. Setiap kali ada `push` ke branch utama (misal: `main`), Vercel akan otomatis melakukan *build* (`npm run build`) dan mendistribusikan aset statis dan fungsi server (jika ada) ke jaringan CDN global mereka.
