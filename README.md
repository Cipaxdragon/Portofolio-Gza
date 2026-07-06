# Portfolio Website Gali

## Penjelasan Web Ini
Website ini adalah portofolio pribadi yang dibangun menggunakan **Next.js**. Tujuan dari website ini adalah untuk menampilkan proyek, keahlian, dan pengalaman secara profesional.

## Arsitektur & Teknologi

Aplikasi portofolio ini dibangun dengan arsitektur modern berbasis komponen menggunakan **Next.js (App Router)**. Berikut adalah rincian tumpukan teknologi dan struktur yang digunakan:

### 1. Teknologi Utama (Tech Stack)
* **Framework:** [Next.js](https://nextjs.org/) (berbasis React) - Dipilih karena kemampuannya dalam Server-Side Rendering (SSR) dan Static Site Generation (SSG) yang mengoptimalkan SEO serta performa website.
* **Bahasa Pemrograman:** JavaScript / TypeScript.
* **Styling:** Tailwind CSS / CSS - Menggunakan *utility-first* CSS framework untuk mempercepat proses styling dan menjaga konsistensi desain antarmuka yang responsif (mobile-friendly).
* **State Management:** React Hooks bawaan (seperti `useState`, `useEffect`) untuk mengelola *state* lokal pada komponen tanpa perlu *library* eksternal yang berat.

### 2. Struktur Direktori (Project Structure)
Proyek ini diorganisasikan dengan rapi menggunakan folder `src/` untuk memisahkan kode sumber dari konfigurasi konfigurasi *root*:

* `src/app/` : Menggunakan sistem routing terbaru dari Next.js (App Router). File `page.js` di dalam direktori ini merepresentasikan rute publik aplikasi.
* `src/components/` : Berisi komponen-komponen UI modular yang dapat digunakan kembali *(reusable components)* seperti `Navbar`, `Footer`, `ProjectCard`, dan lain-lain.
* `src/data/` : Tempat penyimpanan sumber data lokal (seperti file JSON/JS) yang berisi daftar proyek, pengalaman, atau keahlian, sehingga konten dapat diperbarui dengan mudah tanpa menyentuh kode UI.
* `src/lib/` : Menyimpan fungsi utilitas *(helper functions)* atau konfigurasi integrasi pihak ketiga.

### 3. Alur Pengiriman (Deployment & CI/CD)
* **Platform:** [Vercel](https://vercel.com/) (Platform teroptimasi untuk Next.js).
* **Integrasi:** Terhubung langsung dengan repositori Git. Setiap perubahan kode yang di-*push* ke *branch* utama (main/master) akan memicu proses *build* dan *deployment* otomatis secara instan *(Continuous Deployment)*.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
