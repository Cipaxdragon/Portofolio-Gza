# ✦ Ahmad Ghazali — Personal Portfolio

Selamat datang di repositori kode sumber (*source code*) untuk *website* portofolio pribadi **Ahmad Ghazali (Gali)**. 

Website ini bukan sekadar kumpulan halaman statis, melainkan sebuah **pengalaman interaktif bergaya sinematik & modern**. Dibangun khusus untuk merepresentasikan identitas Gali sebagai seorang *Motion Graphics Designer, Video Editor*, dan *Web Developer* yang percaya bahwa setiap karya visual adalah cara bercerita tanpa kata.

🌍 **Live Demo:** [https://gza-mu.vercel.app](https://gza-mu.vercel.app)

---

## 📖 Tentang Website Ini

Website ini berfungsi sebagai identitas digital serba guna yang memuat:
- **Profil & Latar Belakang**: Ringkasan perjalanan karir dan pendidikan.
- **Showcase (Karya Digital)**: Pameran hasil karya pilihan di bidang Desain, Motion Graphics, Editor Video, dan Web Development.
- **Layanan (Services)**: Rincian jasa profesional yang ditawarkan (Company Profile, Full-Stack Web, dll).
- **Blog Interaktif**: Catatan dan pemikiran pribadi seputar teknologi dan seni visual.
- **Micro-Interactions**: Diperkaya dengan kursor kustom elastis, efek suara latar, efek *glitch*, dan elemen 3D *(Three.js)*.

---

## 🛠️ Teknologi yang Digunakan

Portofolio ini diracik menggunakan teknologi pengembangan web modern dengan performa tinggi:

- **Framework Utama:** [Next.js v16](https://nextjs.org/) (Menggunakan sistem *App Router*)
- **Bahasa:** JavaScript / React
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Dengan kustomisasi *design tokens* khusus tema *dark/cyberpunk*)
- **Animasi UI:** [Framer Motion](https://www.framer.com/motion/) (Untuk transisi halaman, kemunculan teks, dan *scroll reveal*)
- **Grafis 3D:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & Drei (Untuk interaksi objek 3D seperti Icosahedron di latar belakang)
- **Deployment:** Vercel

---

## 📁 Struktur Folder & Arsitektur

Untuk memudahkan pengembangan dan pembaruan data secara dinamis, proyek ini menggunakan struktur direktori yang modular:

```text
portfolio-gali/
├── docs/                     # Dokumentasi sistem, pedoman, dan alur aplikasi secara mendalam.
├── public/                   # Aset statis seperti gambar, font, musik latar, dan logo.
├── src/
│   ├── app/                  # Sistem Halaman URL (Home, /about, /blog, /works, /services).
│   │   ├── globals.css       # Token CSS global (Tema, Warna, Variabel Tailwind v4).
│   │   └── layout.js         # Pembungkus utama seluruh halaman web.
│   │
│   ├── components/           # Kumpulan elemen UI / Tampilan Visual.
│   │   ├── layout/           # (Navbar, Footer).
│   │   ├── sections/         # (Hero, AboutFull, Showcase, ServicesFull, dll).
│   │   └── shared/           # Elemen kecil yang dipakai berulang (Cursor, Scene 3D, Audio).
│   │
│   ├── data/                 # 📂 PUSAT KONTEN TEKS (Edit tulisan/data web di sini).
│   │   ├── blog.js           # (Daftar artikel blog Markdown).
│   │   ├── profile.js        # (Bio, pengalaman, skill).
│   │   ├── services.js       # (Layanan yang ditawarkan).
│   │   ├── showcase.js       # (Database portofolio karya).
│   │   └── social.js         # (Link Sosmed).
│   │
│   └── lib/                  # Fungsi pembantu matematis (Utilitas).
└── ... (File konfigurasi server)
```

**💡 Konsep Pemisahan Data & Tampilan:**
Website ini dirancang secara sistematis. Jika Anda hanya ingin mengubah isi teks, menambahkan artikel blog baru, atau menambah foto karya, Anda **tidak perlu mengedit kode komponen React**. Semua data teks terpusat di dalam folder `src/data/`.

---

## 🚀 Cara Menjalankan di Komputer Lokal

Jika Anda ingin mencoba menjalankan atau memodifikasi *website* ini di komputer Anda sendiri:

1. **Pastikan NodeJS sudah terinstal** di perangkat Anda.
2. Buka terminal (Command Prompt / Powershell / Bash) di folder proyek ini.
3. Jalankan perintah instalasi pustaka (*dependencies*):
   ```bash
   npm install
   ```
4. Jalankan *server* tahap pengembangan (*development*):
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) pada *browser* Anda untuk melihat hasilnya. Halaman akan otomatis melakukan *refresh* saat Anda menyimpan perubahan pada kode.

---
*Didesain dan dikembangkan dengan penuh presisi.*
