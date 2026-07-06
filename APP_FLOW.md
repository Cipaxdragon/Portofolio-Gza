# Alur Aplikasi (Application Flow) - Portfolio Gali

Dokumen ini menjelaskan secara detail bagaimana alur kerja aplikasi portofolio ini, mulai dari sisi pengguna (pengunjung website) hingga sisi Anda sebagai pengembang yang mengelola konten.

---

## 1. Alur Kunjungan Pengguna (User Journey Flow)

Ketika seorang pengunjung (misalnya rekruter atau calon klien) mengakses website Anda, berikut adalah alur pengalaman yang mereka lalui:

### A. Fase Initial Load (Pemuatan Awal)
1. **Request:** Pengguna mengetikkan URL portofolio Anda di browser.
2. **Server Response:** Vercel (sebagai *hosting*) langsung memberikan file statis berupa HTML/CSS yang sudah di-*generate* sebelumnya oleh Next.js (proses SSG). Hal ini membuat website terbuka dalam hitungan milidetik.
3. **Hydration:** Setelah kerangka halaman (HTML) muncul, React/Next.js akan memuat JavaScript di belakang layar *(hydration)*.
4. **Entrance Animation:** Framer Motion mengambil alih dan memicu animasi masuk *(fade-in & slide-up)* pada teks *Hero Section* (Bagian utama paling atas).

### B. Fase Eksplorasi (Scrolling & Navigasi)
Website ini didesain sebagai halaman panjang *(single-page scroll)* atau multi-halaman dengan transisi halus. Saat pengguna mulai melakukan *scroll* ke bawah:
1. **Navbar Dynamic:** Navbar di bagian atas layar akan berubah wujud (misalnya menjadi transparan dengan efek *blur / glassmorphism* dan memiliki bayangan/shadow) agar tidak mengganggu visibilitas konten utama saat membaca.
2. **Scroll Animations:** Setiap kali bagian baru *(section)* seperti "About" atau "Projects" masuk ke dalam pandangan layar (terdeteksi oleh `useInView` dari Framer Motion), elemen di dalamnya akan muncul perlahan secara bertahap *(staggered fade-in)*.
3. **Hover Interactions:** Saat kursor pengguna melewati kartu proyek *(Project Card)*, kartu tersebut akan bereaksi (misal: sedikit membesar/scale up 1.02x, warna border berubah menjadi *Cyan*, dan memunculkan *glow shadow* tipis).

### C. Fase Interaksi Detail (Melihat Proyek)
Jika pengguna mengeklik tab/kategori pada bagian "Projects" (misalnya beralih dari "Web Dev" ke "Video Editing"):
1. Terjadi transisi pergantian konten *(fade out* konten lama, *fade in* konten baru) tanpa harus memuat ulang *(reload)* seluruh halaman browser.
2. Konten kartu proyek baru dimuat dari data statis (`src/data/`).

---

## 2. Alur Pengiriman Pesan (Contact Form Flow)

Bagian ini menjelaskan secara teknis apa yang terjadi saat klien potensial mencoba menghubungi Anda melalui formulir kontak *(Contact Form)* di bagian bawah website:

1. **Input Data:** Klien mengisi Nama, Email, dan Pesan. Saat klien mengetik, pinggiran kolom input *(input field)* akan menyala terang *(Cyan outline glow)* sebagai respons fokus.
2. **Validasi (Client-Side):** Saat tombol "Kirim" diklik, pustaka `react-hook-form` langsung memeriksa apakah ada kolom yang kosong atau format email yang salah.
   - Jika salah: Muncul pesan *error* merah di bawah kolom input tanpa *reload* halaman.
   - Jika benar: Lanjut ke langkah 3.
3. **Proses Pengiriman:** Tombol berubah menjadi status *loading* (biasanya berputar atau berkedip). Script aplikasi mengirimkan data tersebut secara rahasia *(API Call)* ke server **EmailJS**.
4. **Penerimaan Email:** EmailJS akan merakit data tersebut menjadi sebuah format email rapi dan meneruskannya ke kotak masuk Gmail/Email pribadi Anda (Ahmad Ghazali).
5. **Sukses:** Klien melihat notifikasi "Pesan berhasil dikirim!" (warna hijau / *success*).

---

## 3. Alur Pengelolaan Konten (Content Management Flow)

Karena website ini didesain tanpa database *(Edit-via-code)*, berikut adalah alur saat Anda (Gali) ingin menambahkan proyek baru atau mengubah tulisan:

1. **Edit Data Lokal:** Anda membuka proyek di VS Code, lalu masuk ke folder `src/data/` (misalnya file `projectsData.js`).
2. **Update Konten:** Anda menambahkan objek baru ke dalam array proyek (memasukkan judul baru, deskripsi, gambar, dan link).
3. **Commit & Push:** Anda menyimpan file tersebut, melakukan *Git Commit*, dan menekan tombol *Push* ke GitHub.
4. **Otomatisasi Vercel:** Begitu GitHub menerima pembaruan kode, GitHub akan memberi tahu Vercel melalui sistem *Webhook*.
5. **Re-build:** Vercel secara otomatis menghentikan versi web yang lama, membangun ulang versi baru *(build)* dengan data proyek yang sudah ditambahkan tadi, dan langsung menayangkannya *(deploy)* ke seluruh dunia dalam 1-2 menit tanpa membuat website *down*.
