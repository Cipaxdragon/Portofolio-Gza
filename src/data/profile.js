export const profile = {
  name      : 'Ahmad Ghazali',
  nickname  : 'Asep',
  title     : 'Motion Graphics & Web Designer',

  // Copy puitis — bukan deskripsi CV
  tagline   : 'All Things Visual.',
  bio       : 'Salam ijinkan Saya Mempekenalkan Saya Punya Nama Saya Gali.',
  bioExtended: `Aku Bukanlah Siapa Siapa dan Aku Juga tidak Jadi Siapa Siapa.`,

  avatar    : '/images/pp.png',
  location  : 'Makassar, Indonesia',

  education: {
    university: 'Universitas Islam Negeri Makassar',
    faculty: 'Fakultas Sains dan Teknologi',
    major: 'Sistem Informasi',
    batch: '2021',
    logo: '/images/logos/UIN-Alauddin-Makassar.png'
  },

  coreQualities: [
    {
      title: 'Clean Code',
      description: 'Menulis kode yang rapi, terstruktur, dan mudah dipelihara untuk jangka panjang.',
      icon: 'code',
      color: 'bg-[#E879F9]', // Fuchsia
    },
    {
      title: 'Visual Impact',
      description: 'Menciptakan animasi dan grafis yang memukau serta fungsional untuk pengguna.',
      icon: 'eye',
      color: 'bg-[#38BDF8]', // Light Blue
    },
    {
      title: 'Problem Solving',
      description: 'Menerapkan pemikiran kritis untuk mengatasi tantangan teknis yang rumit.',
      icon: 'brain',
      color: 'bg-[#4ADE80]', // Green
    },
    {
      title: 'Performance',
      description: 'Mengoptimalkan aplikasi untuk kecepatan, efisiensi, dan pengalaman mulus.',
      icon: 'zap',
      color: 'bg-[#A78BFA]', // Purple
    }
  ],

  skills: {
    creative: [
      { name: 'Motion Graphics', level: 90 },
      { name: 'Editing Video', level: 85 },
      { name: 'Design Basics', level: 80 },
      { name: 'Image Manipulation', level: 85 },
      { name: '3D Generalist Basics', level: 70 },
      { name: 'Photography', level: 75 },
    ],
    coding: [
      { name: 'Laravel', level: 80 },
      { name: 'React JS', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'Node.js', level: 80 },
      { name: 'Discord Bot', level: 85 },
      { name: 'Coding Basics', level: 85 },
      { name: 'Build Website', level: 85 },
    ],
    software: [
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Adobe Illustrator', level: 85 },
      { name: 'Adobe Premiere Pro', level: 85 },
      { name: 'Adobe After Effects', level: 90 },
      { name: 'Adobe Audition', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'Canva', level: 95 },
      { name: 'Blender', level: 65 },
    ],
  },

  certificates: [
    {
      title: 'Sertifikat Kelas PHP Object Oriented Programming',
      issuer: 'CODEPOLITAN',
      date: 'Issued Mar 2026 · Expires Mar 2029',
      credentialId: 'TLRVOBE',
      link: 'https://www.codepolitan.com/c/TLRVOBE/',
      logo: '/images/logos/logo-codepolitan-originals.png'
    },
    {
      title: 'Sertifikat Kelas Studi Kasus PHP Dasar: Aplikasi Todolist',
      issuer: 'CODEPOLITAN',
      date: 'Issued Mar 2026 · Expires Mar 2029',
      credentialId: 'DDRWLER',
      link: 'https://www.codepolitan.com/c/DDRWLER/',
      logo: '/images/logos/logo-codepolitan-originals.png'
    },
    {
      title: 'Sertifikat Kelas JavaScript Dasar',
      issuer: 'CODEPOLITAN',
      date: 'Issued Mar 2026 · Expires Mar 2029',
      credentialId: 'VP7FIEI',
      link: 'https://www.codepolitan.com/c/VP7FIEI/',
      logo: '/images/logos/logo-codepolitan-originals.png'
    },
    {
      title: 'Video Content Creator (Thematic Academy)',
      issuer: 'Digital Talent Scholarship',
      date: 'Issued Apr 2023',
      credentialId: '19462171060-19',
      link: '#',
      logo: '/images/logos/digitalent.png'
    },
    {
      title: 'Junior Graphic Designer (Vocational School Graduate Academy)',
      issuer: 'Digital Talent Scholarship',
      date: 'Issued Apr 2023',
      credentialId: '19360611060-75',
      link: '#',
      logo: '/images/logos/digitalent.png'
    }
  ],

  experience: [
    {
      role         : 'Ketua Divisi Kominfo',
      organization : 'HMJ Sistem Informasi (HMJ-SI)',
      year         : '2024',
      description  : 'Koordinator Divisi Manajemen. Program Kerja: Podcast.',
    },
    {
      role         : 'Anggota Divisi Kominfo / PDD',
      organization : 'HMJ Sistem Informasi (HMJ-SI)',
      year         : '2023',
      description  : 'Design Graphics, Editing Video, Build Website, Dokumentasi Acara.',
    },
    {
      role         : 'Panitia Dokumentasi Kreasi',
      organization : 'Inaugurasi Jurusan',
      year         : '2023',
      description  : 'Dokumentasi kegiatan inaugurasi jurusan.',
    },
  ],
}
