# 📝 TODO Checklist: Melengkapi Konten Portofolio

Karena struktur dan desain website versi 2.0 (Cinematic/Artsy) sudah selesai, langkah selanjutnya adalah mengisi "nyawa" dari website ini. Berikut adalah daftar aset dan data yang perlu Anda lengkapi.

---

## 1. Aset Media (File yang Harus Disiapkan)

File-file ini harus diletakkan di dalam folder `public/` dengan format dan nama yang tepat agar otomatis terbaca oleh website.

- [ ] **Video Background Hero**
  - **Lokasi:** `public/videos/reel.mp4`
  - **Catatan:** Siapkan video *showreel* atau animasi abstrak Anda (format MP4). Video ini akan diputar otomatis secara berulang (loop) di halaman utama tanpa suara.

- [ ] **Background Music**
  - **Lokasi:** `public/audio/background-music.mp3`
  - **Catatan:** Siapkan lagu/musik instrumental favorit (format MP3) untuk diputar saat tombol speaker di pojok kiri bawah ditekan. 
  - *Note: Folder `audio` harus dibuat manual di dalam `public/` jika belum ada.*

- [ ] **Foto Profil (Avatar)**
  - **Lokasi:** `public/images/avatar.jpg`
  - **Catatan:** Foto profil yang tampil di bagian "Who I Am" (About section). Disarankan menggunakan foto dengan *aspect ratio* portrait (misalnya 4:5).

- [ ] **Gambar Thumbnail Karya (Showcase)**
  - **Lokasi:** `public/images/showcase/...`
  - **Catatan:** Siapkan gambar-gambar *thumbnail* karya Anda untuk dimuat pada bagian *Selected Works*. Anda bisa mengaturnya per kategori, misalnya `public/images/showcase/motion/karya1.jpg`.

- [ ] **Gambar Thumbnail Blog**
  - **Lokasi:** `public/images/blog/...`
  - **Catatan:** Siapkan gambar *cover* untuk artikel-artikel blog (jika Anda ingin menulis artikel).

---

## 2. Mengisi Data Sosial Media & Kontak

Buka dan edit file **`src/data/social.js`**. File ini mengatur ke mana tombol-tombol sosial media dan CTA (WhatsApp/Discord) akan diarahkan.

- [ ] Isi `whatsapp` dengan nomor WA aktif (Format: `628xxxxxxxxxx`, tanpa tanda tambah/spasi).
- [ ] Isi `discord` dengan username Discord Anda (misal: `Gali#1234` atau `gali_`).
- [ ] Isi `instagram` dengan username IG (tanpa `@`).
- [ ] Isi `github`, `youtube`, `linkedin`, `roblox` jika ada.

---

## 3. Mengisi Karya (Selected Works)

Buka dan edit file **`src/data/showcase.js`**. Di sinilah karya-karya Anda ditampilkan.

- [ ] Tambahkan karya ke array kategori yang relevan (`motionGraphics`, `graphicDesign`, `webProjects`, dll).
- [ ] Atur field `featured: true` untuk **1 karya terbaik** agar ditampilkan sangat besar (full-width) di awal kategori.
- [ ] Sisanya atur `featured: false`.
- [ ] Sesuaikan `thumbnail` dengan path gambar di folder `public/images/...` yang telah disiapkan.

*Contoh pengisian:*
```javascript
{
  id          : 'motion-001',
  title       : 'Video Promosi Kopi',
  description : 'Animasi 3D dan motion graphics untuk iklan Instagram.',
  thumbnail   : '/images/showcase/motion/kopi.jpg', // File ada di public/images/showcase/motion/kopi.jpg
  tools       : ['After Effects', 'Blender'],
  year        : '2024',
  featured    : true, // Karya utama
},
```

---

## 4. Mengisi Data Profil & Jasa (Opsional / Review)

File berikut ini sudah diisi dengan data dummy (teks puitis ala *cinematic*), namun Anda bisa mereview ulang jika ingin mengubah kata-katanya.

- [ ] **`src/data/profile.js`**
  - Periksa *bio* puitis di bagian atas.
  - Periksa riwayat *Experience* atau *Skills* apakah sudah akurat dengan kemampuan saat ini.

- [ ] **`src/data/services.js`**
  - Periksa pesan *template* WhatsApp dan Discord (teks otomatis saat klien klik tombol pesan).
  - Anda bisa mengubah nada bicaranya jika kurang pas.

---

## 5. Blog (Jika Diperlukan)

- [ ] Buka **`src/data/blog.js`**
- Saat ini array `blogPosts` masih kosong `[]`. Jika Anda sudah ingin menulis blog, *uncomment* kode dummy yang ada di dalamnya dan isi dengan artikel karya Anda. Jika dibiarkan kosong, bagian blog di web tidak akan ditampilkan secara otomatis.
