// Struktur tiap blog post:
// slug, title, excerpt, content (markdown string),
// thumbnail, category, tags[], date, readTime (menit)

export const blogPosts = [
  {
    slug: 'filosofi-desain-cinematic',
    title: 'Menerapkan Rasa "Cinematic" dalam Desain Web',
    excerpt: 'Bagaimana mengubah website dari sekadar halaman informasi menjadi sebuah pengalaman emosional dengan bermain di komposisi, warna, dan gerak.',
    content: `## Pengantar\n\nDesain tidak hanya tentang tampilan, tapi tentang rasa.`,
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
    category: 'Design Thoughts',
    tags: ['UI/UX', 'Cinematic', 'Web Design'],
    date: '10 Feb 2024',
    readTime: 4,
  },
  {
    slug: 'optimasi-after-effects',
    title: '5 Tips Mempercepat Workflow di After Effects',
    excerpt: 'Sering mengalami lag atau render lama? Berikut adalah rahasia mengatur project panel dan mengoptimasi cache di Adobe After Effects.',
    content: `## Masalah Klasik\n\nSiapa yang tidak kesal saat AE mulai patah-patah...`,
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    category: 'Tutorial',
    tags: ['Motion Graphics', 'After Effects', 'Workflow'],
    date: '25 Jan 2024',
    readTime: 6,
  },
  {
    slug: 'nextjs-framer-motion',
    title: 'Membangun Animasi Halus dengan Framer Motion & Next.js',
    excerpt: 'Panduan teknis menggabungkan framework React terpopuler dengan library animasi terbaik untuk web modern.',
    content: `## Instalasi\n\nPertama, mari install framer-motion...`,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    category: 'Code',
    tags: ['Next.js', 'React', 'Framer Motion'],
    date: '12 Jan 2024',
    readTime: 8,
  },
]
