// Setiap item showcase menggunakan struktur yang sama
// Field opsional menyesuaikan kategori

export const showcase = {
  // Tab 1: Motion Graphics & Video
  motionGraphics: [
    {
      id          : 'motion-001',
      title       : 'Judul Project',
      description : 'Deskripsi singkat...',
      longDesc    : 'Deskripsi lengkap untuk modal...',
      thumbnail   : '/images/showcase/motion/001.jpg',
      videoUrl    : 'https://youtube.com/...',
      tools       : ['After Effects', 'Premiere Pro'],
      year        : '2024',
      featured    : true,
    },
  ],

  // Tab 2: Graphic Design
  graphicDesign: [],

  // Tab 3: Web Projects
  webProjects: [
    {
      id          : 'web-001',
      title       : 'Judul Project',
      description : 'Deskripsi singkat...',
      longDesc    : 'Deskripsi lengkap untuk modal...',
      thumbnail   : '/images/showcase/code/001.jpg',
      liveUrl     : 'https://...',
      githubUrl   : 'https://github.com/...',
      tools       : ['Next.js', 'Tailwind CSS'],
      year        : '2024',
      featured    : false,
    },
  ],

  // Tab 4: 3D Work
  threeD: [],

  // Tab 5: Photography
  photography: [],

  // Tab 6: Dokumentasi
  documentation: [],

  // Tab 7: Sertifikat
  certificates: [],
}

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
