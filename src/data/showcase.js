// Helper: get all categories as array for tab filter
export const showcaseCategories = [
  { key: 'motionGraphics', label: 'Motion' },
  { key: 'graphicDesign',  label: 'Design' },
  { key: 'webProjects',    label: 'Code' },
  { key: 'threeD',         label: '3D' },
  { key: 'photography',    label: 'Photo' },
  { key: 'documentation',  label: 'Docs' },
  { key: 'certificates',   label: 'Certs' },
]

// Data dummy menggunakan gambar dari Unsplash agar langsung terlihat bagus
export const showcase = {
  motionGraphics: [
    {
      id          : 'motion-001',
      title       : 'Cyberpunk City Loop',
      description : 'Animasi loop 3D environment bergaya cyberpunk dengan neon aesthetics.',
      longDesc    : 'Project pribadi untuk mengeksplorasi pencahayaan neon dan pergerakan kamera sinematik di Blender yang kemudian di-compositing di After Effects.',
      thumbnail   : 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop',
      videoUrl    : 'https://youtube.com',
      tools       : ['Blender', 'After Effects'],
      year        : '2024',
      featured    : true,
    },
    {
      id          : 'motion-002',
      title       : 'Brand Identity Reveal',
      description : 'Logo reveal dinamis untuk startup teknologi.',
      thumbnail   : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
      tools       : ['After Effects', 'Illustrator'],
      year        : '2023',
      featured    : false,
    },
    {
      id          : 'motion-003',
      title       : 'Music Festival Promo',
      description : 'Video promosi kinetik tipografi untuk festival musik lokal.',
      thumbnail   : 'https://images.unsplash.com/photo-1470229722913-7c092b1aa738?q=80&w=2070&auto=format&fit=crop',
      tools       : ['Premiere Pro', 'After Effects'],
      year        : '2023',
      featured    : false,
    },
  ],

  graphicDesign: [
    {
      id          : 'design-001',
      title       : 'Abstract Poster Series',
      description : 'Eksplorasi bentuk geometri dan warna gradasi untuk poster pameran seni.',
      thumbnail   : 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop',
      tools       : ['Photoshop', 'Figma'],
      year        : '2024',
      featured    : true,
    },
    {
      id          : 'design-002',
      title       : 'Minimalist Packaging',
      description : 'Desain kemasan kopi artisan lokal.',
      thumbnail   : 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1974&auto=format&fit=crop',
      tools       : ['Illustrator'],
      year        : '2023',
      featured    : false,
    },
  ],

  webProjects: [
    {
      id          : 'web-001',
      title       : 'E-Commerce Dashboard',
      description : 'Dashboard analitik modern untuk manajemen toko online.',
      thumbnail   : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      liveUrl     : 'https://example.com',
      githubUrl   : 'https://github.com/gali/ecommerce',
      tools       : ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      year        : '2024',
      featured    : true,
    },
    {
      id          : 'web-002',
      title       : 'Creative Agency Site',
      description : 'Website portfolio untuk agensi kreatif dengan transisi halaman mulus.',
      thumbnail   : 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
      liveUrl     : '',
      githubUrl   : 'https://github.com/gali/agency',
      tools       : ['React JS', 'Tailwind CSS'],
      year        : '2023',
      featured    : false,
    },
  ],

  threeD: [
    {
      id          : '3d-001',
      title       : 'Isometric Room',
      description : 'Ruang kerja ideal bergaya low-poly isometrik.',
      thumbnail   : 'https://images.unsplash.com/photo-1615715978160-c3d64c1bd113?q=80&w=2070&auto=format&fit=crop',
      tools       : ['Blender'],
      year        : '2023',
      featured    : true,
    },
  ],

  photography: [
    {
      id          : 'photo-001',
      title       : 'Urban Solitude',
      description : 'Seri fotografi jalanan (street photography) saat senja di Makassar.',
      thumbnail   : 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop',
      tools       : ['Lightroom', 'Sony A6000'],
      year        : '2023',
      featured    : true,
    },
    {
      id          : 'photo-002',
      title       : 'Product: Leather Wallet',
      description : 'Foto produk komersial bergaya rustic.',
      thumbnail   : 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop',
      tools       : ['Lightroom', 'Photoshop'],
      year        : '2024',
      featured    : false,
    },
  ],

  documentation: [],
  certificates: [],
}
