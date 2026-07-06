// Struktur tiap item showcase:
// id, title, description, thumbnail, tools[], date, tags[]
// Optional: videoUrl (motion/video), liveUrl & githubUrl (web),
// imageUrl (design/3d/photo/cert), eventName (dokumentasi)

export const showcase = {
  motionGraphics: [
    // {
    //   id: 'motion-1',
    //   title: 'Sample Motion',
    //   description: 'A motion graphics project.',
    //   thumbnail: '/images/showcase/motion/thumb1.jpg',
    //   videoUrl: 'https://youtube.com/watch?v=xxx',
    //   tools: ['After Effects', 'Premiere Pro'],
    //   date: '2024-01-01',
    //   tags: ['motion', 'animation'],
    // },
  ],
  graphicDesign: [],
  webProjects: [],
  threeD: [],
  photography: [],
  documentation: [],
  certificates: [],
}

export const showcaseCategories = [
  { key: 'motionGraphics', label: 'Motion Graphics', icon: '🎬' },
  { key: 'graphicDesign', label: 'Graphic Design', icon: '🎨' },
  { key: 'webProjects', label: 'Web Projects', icon: '💻' },
  { key: 'threeD', label: '3D Work', icon: '🧊' },
  { key: 'photography', label: 'Photography', icon: '📷' },
  { key: 'documentation', label: 'Dokumentasi', icon: '📸' },
  { key: 'certificates', label: 'Sertifikat', icon: '📜' },
]
