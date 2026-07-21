# ✦ Ahmad Ghazali — Advanced Personal Portfolio

Selamat datang di repositori resmi untuk situs web portofolio pribadi **Ahmad Ghazali (Gali)**. 

Proyek ini bukan sekadar portofolio statis konvensional. Ini adalah sebuah aplikasi web interaktif yang kaya akan *micro-interactions*, elemen 3D, dan desain antarmuka bergaya *cinematic/cyberpunk* yang minimalis. Situs ini secara khusus dirancang untuk mendemonstrasikan keahlian Gali sebagai seorang **Motion Graphics Designer, Video Editor, dan Web Developer**. 

Melalui web ini, Gali percaya bahwa setiap elemen visual, animasi, dan transisi adalah sebuah medium untuk bercerita tanpa kata-kata.

🌍 **Live Demo:** [https://gza-mu.vercel.app](https://gza-mu.vercel.app)

---

## 🌟 Fitur Utama & Keunggulan Visual

Website ini dipenuhi dengan fitur-fitur teknis dan visual tingkat lanjut:

1. **Sistem Halaman Dinamis (App Router):** Menggunakan fitur navigasi terbaru dari Next.js 14+ untuk transisi rute yang cepat dan mulus.
2. **Elemen 3D Interaktif (WebGL):** Latar belakang bagian atas (*Hero Section*) menampilkan objek geometri Icosahedron 3D bercahaya (dibuat menggunakan `Three.js` & `@react-three/fiber`) yang dapat diputar secara langsung oleh gerakan *mouse* pengunjung.
3. **Kursor Kustom (*Custom Cursor*):** Kursor panah bawaan sistem digantikan dengan titik (*dot*) elastis yang mengikuti pergerakan kursor asli dengan efek *delay* fisika (*spring physics*) yang halus, menggunakan `framer-motion`.
4. **Musik Latar Kontekstual (*Background Audio*):** Pemutar musik global yang tetap menyala (*persistent*) tanpa terputus meskipun pengunjung berpindah-pindah halaman, diatur melalui `Context API`.
5. **Efek Visual Tingkat Tinggi:** 
   - **Glitch Hover:** Tombol dan gambar tertentu memiliki efek *RGB split* (distorsi warna seperti TV rusak) saat disentuh kursor.
   - **Grain Overlay:** Lapisan tekstur statis bergaya film analog (*film grain*) yang menetap di atas layar.
   - **Reveal & Scroll Animations:** Teks muncul kata per kata, dan elemen UI bergeser mulus dari bawah (*fade-up*) saat pengunjung menggulir halaman.
6. **Desain Data-Driven:** Seluruh konten tulisan, daftar proyek, layanan, hingga artikel blog sepenuhnya dipisahkan dari kode desain. Cukup edit data JSON/JS, maka tampilan akan otomatis menyesuaikan bentuk kartunya.

---

## 🗺️ Peta Navigasi & Halaman

Aplikasi ini dibagi menjadi beberapa rute halaman besar:

- **`/` (Beranda / Home):** Menampilkan ringkasan atau '*trailer*' dari seluruh halaman. Terdapat layar *loading* persentase kustom di awal.
- **`/about`:** Halaman penceritaan profil mendalam. Membahas latar belakang, pola pikir profesional, perjalanan karir/organisasi, hingga alat (software) dan *tech-stack* yang dikuasai.
- **`/works` (Showcase):** Galeri pameran hasil karya seni visual maupun *coding*. Dilengkapi dengan sistem **Tab Kategori** (contoh: *Motion, 3D, Design*) yang memfilter kartu proyek secara instan.
- **`/services`:** Katalog layanan profesional yang ditawarkan.
- **`/services/[id]`:** Halaman rute dinamis (ter-generate secara otomatis) yang menampilkan proposal dan rincian alur kerja dari setiap layanan secara mendalam. Terdapat tombol yang langsung menyusun kalimat *template* pesanan ke WhatsApp/Discord Gali.
- **`/blog`:** Tempat berbagi cerita teknis dan desain.
- **`/blog/[slug]`:** Pembaca artikel khusus. Menerjemahkan tulisan dalam format *Markdown* menjadi artikel bergaya tipografi modern (dengan integrasi *font* Inter & Plus Jakarta Sans).

---

## 🏗️ Struktur Arsitektur Kode

Kode sumber diorganisasikan agar sangat modular dan *scalable*. Jika Anda *developer* lain yang membaca proyek ini, berikut adalah anatominya:

```text
portfolio-gali/
├── docs/                     # 📚 Folder berisi dokumentasi eksternal (Struktur Web, Todo List, dll)
├── public/                   
│   ├── images/               # Pusat penyimpanan aset visual (gambar proyek, cover blog, foto profil).
│   ├── icon.png              # Ikon tab browser (Favicon).
│   └── background-music.mp3  # File audio untuk pemutar musik global.
│
├── src/
│   ├── app/                  # 🌐 ROOT FOLDER (Next.js App Router)
│   │   ├── about/            
│   │   │   └── page.js       # Halaman /about (Merender profil lengkap).
│   │   ├── blog/             
│   │   │   ├── [slug]/       
│   │   │   │   └── page.js   # Halaman artikel dinamis (Membaca slug URL -> Render Markdown).
│   │   │   └── page.js       # Halaman /blog (Menampilkan grid thumbnail blog).
│   │   ├── services/         
│   │   │   ├── [id]/         
│   │   │   │   └── page.js   # Halaman layanan spesifik (Membaca ID URL).
│   │   │   └── page.js       # Halaman /services (Daftar semua layanan).
│   │   ├── works/            
│   │   │   └── page.js       # Halaman /works (Hanya merender tab Showcase).
│   │   ├── _not-found/       
│   │   │   └── page.js       # Halaman error 404 kustom.
│   │   ├── globals.css       # Pusat penyetelan Tema (Tailwind v4) & Keyframes Animasi.
│   │   ├── layout.js         # Inti HTML, penyisipan Font Google, dan Provider Global.
│   │   └── page.js           # Halaman Utama (Beranda / Home) - Menyatukan seluruh section.
│   │
│   ├── components/           # 🧩 PUSAT UI (Komponen React)
│   │   ├── layout/           
│   │   │   ├── Footer.jsx    # Kaki halaman web.
│   │   │   └── Navbar.jsx    # Navigasi atas (Glassmorphism & deteksi scroll).
│   │   │
│   │   ├── sections/         # Blok Besar Pembangun Halaman
│   │   │   ├── About.jsx       # Ringkasan profil di Home.
│   │   │   ├── AboutFull.jsx   # Profil & CV lengkap (untuk rute /about).
│   │   │   ├── Blog.jsx        # Ringkasan blog di Home.
│   │   │   ├── Contact.jsx     # Ajakan kolaborasi (Footer atas).
│   │   │   ├── Hero.jsx        # Teks sambutan & Scene 3D.
│   │   │   ├── ServiceDetail.jsx # Render UI untuk rute /services/[id].
│   │   │   ├── Services.jsx    # Ringkasan jasa di Home.
│   │   │   ├── ServicesFull.jsx# Daftar jasa lengkap (untuk rute /services).
│   │   │   └── Showcase.jsx    # Filter karya (Motion, Web, dll).
│   │   │
│   │   └── shared/           # Blok Kecil Reusable (Aset Bersama)
│   │       ├── BackgroundAudio.jsx     # Logika pemutar lagu.
│   │       ├── CardMotion.jsx          # Efek Fade-Up & Scroll Reveal.
│   │       ├── CustomCursor.jsx        # Logika titik kursor kustom.
│   │       ├── GlitchBlock.jsx         # Efek TV rusak pada gambar.
│   │       ├── GlobalClientProviders.jsx # State global pembungkus App.
│   │       ├── GrainOverlay.jsx        # Tekstur statis film analog.
│   │       ├── LoadingScreen.jsx       # Layar loading 0-100% awal.
│   │       ├── NeonButton.jsx          # Tombol menyala.
│   │       ├── ParallaxLayer.jsx       # Efek parallax saat scroll.
│   │       ├── RevealText.jsx          # Animasi teks muncul per kata.
│   │       ├── Scene3D.jsx             # Elemen Icosahedron Three.js.
│   │       ├── SectionHeader.jsx       # Judul bagian (Heading).
│   │       ├── ShowcaseCard.jsx        # Kotak pembungkus thumbnail proyek.
│   │       └── SocialIcons.jsx         # Aset logo vektor SVG (IG, Discord).
│   │
│   ├── data/                 # 📂 PUSAT KONTROL KONTEN (Edit Data Web di Sini)
│   │   ├── blog.js           # Judul, Gambar, dan isi Markdown artikel.
│   │   ├── profile.js        # Data biodata, jurusan, list keahlian, dan software.
│   │   ├── services.js       # List jasa beserta penjelasan step-by-step pekerjaannya.
│   │   ├── showcase.js       # List data karya (Judul, URL video/gambar, tag).
│   │   └── social.js         # URL lengkap sosial media & WA/Discord.
│   │
│   └── lib/                  # ⚙️ LOGIKA & UTILITAS
│       ├── contact.js        # Fungsi Auto-Generate teks format %20 WhatsApp.
│       └── utils.js          # Penggabung class CSS (Tailwind Merge + clsx).
│
├── .gitignore                # File yang tidak akan dikirim ke Github.
├── package.json              # Daftar pustaka NPM yang digunakan.
├── next.config.mjs           # Aturan build Next.js.
└── postcss.config.mjs        # Mesin pemroses Tailwind CSS v4.
```

---

## 🛠️ Teknologi (*Tech Stack*) yang Bekerja di Balik Layar

- **Framework Web Utama:** [Next.js v16](https://nextjs.org/) (Lingkungan React paling mutakhir dengan fitur App Router & SSR).
- **Styling (CSS):** [Tailwind CSS v4](https://tailwindcss.com/) (Dikonfigurasi langsung menggunakan sistem `@theme` di dalam `globals.css` tanpa file konfigurasi eksternal, membuat styling sangat cepat).
- **Manajemen Animasi:** [Framer Motion](https://www.framer.com/motion/) (Digunakan di lebih dari 70% komponen visual untuk menyuntikkan sifat fisika pada pergerakan DOM).
- **Grafis 3D (WebGL):** 
  - `three` (Mesin 3D utama pembentuk *mesh* dan material geometri).
  - `@react-three/fiber` (Penerjemah Three.js menjadi komponen React).
  - `@react-three/drei` (Kumpulan alat bantu siap pakai untuk kamera dan pencahayaan).
- **Manajemen Ikon:** `lucide-react` & `react-icons` (Untuk seluruh ikon sosmed dan simbol antarmuka SVG resolusi tinggi).
- **Tipografi:** Terintegrasi langsung via `next/font/google` (*Inter* untuk penegasan *heading*, *Plus Jakarta Sans* untuk keterbacaan bodi paragraf panjang).

---

## 📝 Panduan Singkat Modifikasi Konten (Untuk Pemilik Web)

Pendekatan *Data-Driven* membuat web ini sangat mudah diurus. Jika Anda ingin menambah karya atau mengubah teks:
1. **Tidak perlu membuka folder `src/app` atau `src/components`.**
2. Langsung pergi ke folder **`src/data/`**.
3. Jika ingin menambah proyek baru di halaman *Works*, buka `showcase.js`, *copy-paste* satu kurung kurawal `{ ... }` milik proyek lama, ubah judul dan nama gambar, lalu *save*. Halaman akan otomatis menambah kartu baru dengan animasi yang sudah disetel!

---

## 🚀 Cara Instalasi & Pengembangan di Lingkungan Lokal

Untuk *developer* yang ingin memeriksa kode secara langsung, memodifikasi, atau berkontribusi, ikuti panduan berikut:

### Persyaratan Sistem:
- NodeJS versi 18 atau lebih baru.
- Git untuk kloning repositori.
- *Code Editor* yang direkomendasikan: VS Code (dengan ekstensi Tailwind CSS IntelliSense).

### Langkah Menjalankan:
1. Kloning repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/username/portfolio-gali.git
   ```
2. Pindah ke direktori proyek:
   ```bash
   cd portfolio-gali
   ```
3. Unduh semua paket/dependensi yang dibutuhkan:
   ```bash
   npm install
   ```
4. Nyalakan mesin *server* lokal untuk pengembangan (*Hot Reloading* aktif):
   ```bash
   npm run dev
   ```
5. Buka *browser* Anda dan kunjungi **[http://localhost:3000](http://localhost:3000)**.
6. Mulailah mengedit! Setiap kali Anda menekan `Ctrl+S` (Simpan) pada file, perubahan akan otomatis muncul di *browser* dalam hitungan milidetik.

---

### Lisensi
Hak cipta kode dan desain (c) 2026 Ahmad Ghazali. Semua aset grafis (foto, video, dan desain logo) adalah milik pribadi pembuat. Jangan menyalin ulang desain UI atau menggunakan *source code* ini untuk tujuan komersial tanpa menyertakan kredit atau izin.
