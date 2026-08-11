export const codingWorks = [
  {
    id: "hmjsi-laravel",
    title: "Website Portal HMJ-SI v2023 (Laravel)",
    description: "Sistem informasi dan company profile organisasi mahasiswa yang dilengkapi dengan CMS (Content Management System). Memudahkan pengurus dalam mempublikasikan berita kegiatan, galeri foto, struktur organisasi, serta menampung kritik dan saran dari mahasiswa.",
    repoName: "cipaxdragon/hmjsi_lara-main",
    repoUrl: "https://github.com/cipaxdragon/hmjsi_lara-main",
    liveUrl: "",
    language: "PHP",
    languageColor: "#4F5D95",
    stars: 4,
    forks: 1,
    technologies: ["Laravel 8", "Bootstrap 5", "MySQL", "jQuery"],
    demoMedia: [
      {
        type: "image",
        url: "/images/logos/hmjsi.png",
        caption: "Tampilan Beranda Web HMJ Sistem Informasi"
      }
    ],
    features: [
      "Dashboard Admin (CMS): Mengelola publikasi kegiatan, berita, dan pengumuman himpunan secara dinamis.",
      "Manajemen Galeri: Sistem untuk mengunggah dan menampilkan dokumentasi kegiatan organisasi.",
      "Sistem Kritik & Saran: Fitur interaktif bagi mahasiswa yang terintegrasi langsung ke dashboard admin.",
      "Data Kepengurusan: Menampilkan struktur organisasi dan detail pengurus per divisi.",
      "Autentikasi Aman: Sistem Login/Logout khusus untuk pengurus (Admin)."
    ]
  },
  {
    id: "hmjsi-php",
    title: "Portal Berita HMJ-SI (PHP Native)",
    description: "Sebuah platform informasi sederhana berbasis website yang dibangun murni menggunakan PHP Native tanpa framework. Bertujuan untuk memudahkan publikasi berita, artikel, dan dokumentasi kegiatan himpunan mahasiswa.",
    repoName: "cipaxdragon/HMJ-SI",
    repoUrl: "https://github.com/Cipaxdragon/HMJ-SI",
    liveUrl: "",
    language: "PHP",
    languageColor: "#4F5D95",
    stars: 3,
    forks: 1,
    technologies: ["PHP Native", "MySQL", "Bootstrap 4"],
    demoMedia: [
      {
        type: "image",
        url: "/images/logos/hmjsi.png",
        caption: "Halaman utama Portal HMJ-SI versi PHP Native"
      }
    ],
    features: [
      "Autentikasi Admin: Sistem login standar untuk melindungi halaman dashboard dari akses publik.",
      "Manajemen Konten (CRUD): Membuat, mengubah, menghapus, dan menampilkan artikel kegiatan terbaru.",
      "Pengkategorian Artikel: Artikel atau berita dapat dikelompokkan ke dalam berbagai kategori spesifik.",
      "Upload Media Dinamis: Mendukung upload gambar (thumbnail/cover) ke dalam setiap postingan."
    ]
  },
  {
    id: "prabowo-bot",
    title: "Prabowo Bot — Discord Multi-Feature Bot",
    description: "Bot Discord multifungsi bertemakan absurd nasional 'Pak Prabowo' yang dibangun dengan Discord.js v14. Dilengkapi dengan sistem ekonomi virtual, AI Chat (Gemini & GPT), kuis interaktif multi-jurusan, latihan coding, sistem mancing berbasis rarity, fitur waifu/companion, player music, dan integrasi OAuth Roblox.",
    repoName: "cipaxdragon/Bot_Discord",
    repoUrl: "https://github.com/cipaxdragon/Bot_Discord",
    liveUrl: "https://discord.com/oauth2/authorize?client_id=1493929122190196856&permissions=8&scope=bot%20applications.commands",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 7,
    forks: 2,
    technologies: ["Node.js", "Discord.js v14", "Gemini AI", "OpenAI GPT", "Express.js"],
    demoMedia: [
      {
        type: "image",
        url: "/images/logos/hmjsi.png",
        caption: "Demo fitur Mancing, Kuis Kuliah, dan AI Chat pada Bot Prabowo"
      }
    ],
    features: [
      "Sistem Mancing (Ekonomi): Command !mancing dengan sistem rarity bertingkat (Common → Rare → Legendary), cooldown otomatis, dan reward uang virtual.",
      "AI Multi-Model: Integrasi tiga model AI — Google Gemini, persona Prabowo Subianto, dan Ollama GPT lokal.",
      "Kuis Kuliah Otomatis: Sistem kuis hybrid (MC + Essay) multi-jurusan yang auto-spawn setiap 5 menit, jawaban essay dievaluasi oleh AI.",
      "Coding Challenge: Soal coding (MC, Fix Code, Complete Code) untuk 6 bahasa dengan 3 tingkat kesulitan.",
      "Waifu / Companion System: Sistem hubungan virtual lengkap dengan state dinamis (Affection, Trust, Mood, Bond, Loyalty).",
      "Music Player: Memutar musik dari YouTube via voice channel menggunakan play-dl dan @discordjs/voice.",
      "Roblox OAuth Integration: Server Express.js internal untuk menghubungkan akun Discord ke profil Roblox secara aman.",
      "Sistem Leveling & Leaderboard: Setiap chat memberikan XP otomatis dengan command !rank dan !leaderboard."
    ]
  },
  {
    id: "sidanus-react",
    title: "SIDANUS — Sistem Pendaftaran Ujian Akademik",
    description: "Aplikasi web Single Page Application (SPA) untuk mengelola seluruh proses pendaftaran dan penjadwalan ujian akademik skripsi (Sempro, Ujian Hasil, Munaqasyah) di Jurusan Sistem Informasi UIN Alauddin Makassar. Dibangun sebagai proyek mata kuliah APSI dengan React modern, Context API, dan simulasi database menggunakan localStorage.",
    repoName: "cipaxdragon/APSI_3_React",
    repoUrl: "https://github.com/cipaxdragon/APSI_3_React",
    liveUrl: "",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 6,
    forks: 2,
    technologies: ["React 19", "React Router v7", "Vite", "Tailwind CSS", "jsPDF"],
    demoMedia: [
      {
        type: "image",
        url: "/images/logos/UIN-Alauddin-Makassar.png",
        caption: "Alur lengkap pendaftaran ujian dari Mahasiswa hingga persetujuan Kaprodi di SIDANUS"
      }
    ],
    features: [
      "Multi-Role AuthGuard: Sistem login dengan 4 peran (Mahasiswa, Admin, Kaprodi, Penguji), masing-masing diarahkan ke portal berbeda secara otomatis.",
      "Portal Mahasiswa: Pendaftaran ujian dengan slot upload dokumen yang beradaptasi otomatis sesuai jenis ujian dan tracking status real-time.",
      "Portal Admin: Verifikasi berkas dan penjadwalan dengan fitur Auto-Saran Jadwal (mendeteksi jam, ruangan, dan penguji yang tersedia otomatis).",
      "Portal Kaprodi: Kalender akademik interaktif, persetujuan/penolakan jadwal dengan catatan alasan, dan riwayat log persetujuan.",
      "Portal Penguji: Dashboard jadwal menguji, input nilai & catatan revisi via modal pop-up, dan riwayat ujian selesai.",
      "Generator PDF Surat Keterangan Lulus: Mahasiswa yang lulus Munaqasyah dapat mencetak SKL resmi langsung dari browser menggunakan jsPDF.",
      "Simulasi Database Modular: Seluruh data dikelola via localStorage menggunakan modul sidanusDB.js yang terpusat layaknya backend nyata."
    ]
  }
];
