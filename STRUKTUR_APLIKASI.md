# 🏗️ Struktur Arsitektur Aplikasi Portofolio Gali v2.0

Dokumen ini memetakan seluruh file penting yang membentuk portofolio ini. Sangat berguna untuk referensi ketika Anda ingin mencari di mana sebuah kode atau desain berada.

---

## 1. 📂 Sistem Halaman (App Router)
Berada di dalam `src/app/`. Next.js menggunakan folder sebagai rute URL.

| Rute URL | File Lokasi | Deskripsi Halaman |
|----------|-------------|-------------------|
| **Semua** | `layout.js` | Struktur paling dasar (membungkus semua halaman). Memuat *Font* (Playfair, Plus Jakarta, Space Mono), metadata web, dan *GlobalClientProviders* (Audio, Grain, Cursor). |
| **`/`** (Home) | `page.js` | Halaman utama tunggal yang merender *semua* section secara berurutan (Hero, About, Showcase, Blog, Services, ThingsToLearn, Contact). |
| **`/works`** | `works/page.js` | Halaman khusus yang murni hanya menampilkan komponen `Showcase.jsx` secara terisolasi. |
| **`/services`**| `services/page.js` | Halaman khusus yang murni hanya menampilkan komponen `Services.jsx` secara terisolasi. |
| **`/blog`** | `blog/page.js` | Halaman indeks blog. Membaca data artikel dan menampilkannya sebagai *grid* (*thumbnail*) dengan sistem *pagination*. |
| **`/blog/nama`**| `blog/[slug]/page.js` | Halaman dinamis (*Dynamic Route*). Mengambil parameter URL (`[slug]`), mencari artikel terkait, lalu merender teks Markdown menjadi HTML ber-desain. |
| *(Error 404)*| `_not-found/page.js`| Halaman yang otomatis muncul jika pengunjung nyasar ke URL yang tidak ada. |

---

## 2. 🧩 Komponen Dasar (Components)
Berada di dalam `src/components/`. Dipisah menjadi 3 bagian agar rapi: Layout, Sections, dan Shared.

### A. Layout (`components/layout/`)
Komponen struktural yang selalu muncul di setiap halaman.
- `Navbar.jsx` : Menu navigasi atas. Memiliki deteksi posisi scroll untuk efek blur (*glassmorphism*), dan memiliki deteksi halaman aktif (menggunakan `usePathname`).
- `Footer.jsx` : Bagian paling bawah web. Berisi *statement* penutup dan *icon* sosial media yang diimpor dari data.

### B. Sections (`components/sections/`)
Blok-blok besar yang membentuk Halaman Utama (Home).
- `Hero.jsx` : Bagian layar penuh pertama. Menampilkan teks animasi *word-by-word* dan *video reel background*.
- `About.jsx` : Grid yang menampilkan foto profil (avatar), teks bio singkat, dan pengalaman organisasi.
- `Showcase.jsx` : Sistem tab filter kategori (Motion, 3D, Design, dll) yang melooping data karya dan menampilkannya sebagai `ShowcaseCard`.
- `Blog.jsx` : Potongan ringkasan blog di halaman utama (menampilkan 1 artikel besar *featured* dan 3 artikel kecil).
- `Services.jsx` : Daftar kemampuan dan jasa yang ditawarkan beserta tombol *Direct WhatsApp/Discord*.
- `ThingsToLearn.jsx` : Status aktivitas pembelajaran (status "Learning" atau "Completed").
- `Contact.jsx` : Footer sekunder di halaman utama untuk mengajak audiens berkolaborasi (tanpa *form*).

### C. Shared (`components/shared/`)
Komponen kecil dan fungsional yang bisa dipakai berulang kali (di-*reuse*).
- **Animasi & Efek (Framer Motion):**
  - `LoadingScreen.jsx` : Layar loading 0-100% yang di-skip secara otomatis jika terdeteksi `localStorage`.
  - `CardMotion.jsx` : Pembungkus yang membuat kontennya muncul halus dari bawah (Fade In + Slide Up) saat di-*scroll*.
  - `RevealText.jsx` : Membuat teks muncul mulus (*reveal*) saat masuk ke pandangan.
  - `ParallaxLayer.jsx` : Pembungkus untuk memberikan efek *Parallax* (kecepatan gerak berbeda saat *scroll*).
- **Visual & UI:**
  - `CustomCursor.jsx` : Kursor dot yang mengikuti pergerakan *mouse* secara elastis.
  - `GrainOverlay.jsx` : Efek tekstur film berbintik tipis (SVG) yang menetap di seluruh layar.
  - `BackgroundAudio.jsx` : Tombol bundar kecil di kiri bawah untuk me-mutar lagu `background-music.mp3`.
  - `NeonButton.jsx` : Tombol dengan efek menyala (*glow*) saat di-*hover*.
  - `ShowcaseCard.jsx` : Kartu UI yang mengatur bentuk dan tampilan setiap daftar karya (berbeda bentuk antara yang *featured* dan reguler).
  - `SocialIcons.jsx` : Berisi ikon-ikon SVG (Instagram, Tiktok, Discord, dsb).
- **Struktural:**
  - `GlobalClientProviders.jsx` : Wadah yang membungkus aplikasi dan mengatur kursor, audio, serta *grain* agar tidak *restart* ketika pindah halaman.
  - `SectionHeader.jsx` : Komponen untuk mencetak Judul Section (misal: "Selected Works.") dengan ukuran dan gaya font yang seragam.

---

## 3. 📝 Pusat Data (Data & Lib)
Berada di dalam `src/data/` dan `src/lib/`. Di sinilah semua **"Isi Teks"** diedit tanpa menyentuh *coding* tampilan.

### A. Data Konten (`src/data/`)
- `profile.js` : Sentral biodata Anda (Nama, Pendidikan, Jurusan, Deskripsi). Juga berisi *Skills*, *Software*, dan *Experience*.
- `social.js` : Seluruh link URL, nomor WhatsApp, dan *username* sosmed Anda.
- `showcase.js` : Seluruh isi daftar karya (judul, foto *thumbnail* Unsplash, alat yang dipakai). Terbagi dalam beberapa *array* kategori.
- `blog.js` : Berisi artikel blog (teks Markdown, waktu baca, kategori, dll).
- `services.js` : Daftar jasa beserta teks **Template Pesan WhatsApp/Discord** otomatis yang dikirimkan ke Anda saat tombol jasa di-klik.
- `thingsToLearn.js` : Daftar *roadmap* hal-hal yang sedang Anda pelajari.
- `contact.js` : *Template* teks pesan kontak umum.

### B. Utility (`src/lib/`)
Fungsi-fungsi pembantu (*helper functions*).
- `contact.js` : Mengandung rumus *URL generator* (`getWhatsAppLink` dan `getDiscordLink`) yang mengubah teks spasi menjadi format `%20` yang dikenali oleh WhatsApp API.
- `utils.js` : Berisi fungsi seperti penggabung *class* Tailwind (`cn` / `clsx` + `tailwind-merge`).

---

## Ringkasan Alur: Bagaimana Semua Ini Bekerja Bersama?

1. Pengunjung masuk ke **`/`** (Home).
2. **`layout.js`** memuat struktur dasar (Font, Grain, Musik Latar).
3. Halaman merender **`page.js`**, yang pertama kali memanggil **`LoadingScreen.jsx`**.
4. Selesai loading, **`page.js`** menampilkan **`Navbar.jsx`** dan memanggil satu per satu: **`Hero.jsx`**, **`About.jsx`**, dst.
5. Saat merender **`About.jsx`**, komponen ini "mengambil" teks dari **`src/data/profile.js`**.
6. Pengunjung klik sebuah karya di **`Showcase.jsx`**, memicu navigasi ke **`/works`** (menuju **`works/page.js`**), musik akan terus berlanjut berkat pengaturan di **`GlobalClientProviders.jsx`**.
