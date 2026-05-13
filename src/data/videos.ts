import type { Video } from '@/types';

export const videos: Video[] = [
  {
    id: 'video-001',
    title: 'Yogyakarta — Kota yang Tak Pernah Tidur',
    description:
      'Film sinematik pendek yang mengabadikan kehidupan malam Yogyakarta dari Malioboro hingga kawasan Kotagede.',
    thumbnail: '/images/videos/thumbnails/yogyakarta-malam-thumb.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    externalUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'Cinematic',
    tools: ['Sony A7IV', 'DaVinci Resolve', 'Adobe After Effects', 'Rode Wireless GO II'],
    role: 'Director, Cinematographer, Editor',
    year: 2024,
  },
  {
    id: 'video-002',
    title: 'Batik Tulis Laweyan — Warisan yang Hidup',
    description:
      'Video komersial untuk brand batik tulis Laweyan Solo, menampilkan proses pembuatan dan keindahan motif tradisional.',
    thumbnail: '/images/videos/thumbnails/batik-laweyan-thumb.jpg',
    embedUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    externalUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    category: 'Commercial',
    tools: ['Canon EOS R5', 'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
    role: 'Director, Editor',
    year: 2024,
  },
  {
    id: 'video-003',
    title: 'TEDxUGM 2023 — Official Aftermovie',
    description:
      'Aftermovie resmi TEDxUGM 2023 yang merangkum semangat dan inspirasi dari 12 pembicara dalam satu hari penuh.',
    thumbnail: '/images/videos/thumbnails/tedxugm-2023-thumb.jpg',
    embedUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    externalUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    category: 'Event',
    tools: ['Sony FX3', 'Adobe Premiere Pro', 'Adobe Audition', 'Motion Array'],
    role: 'Lead Videographer, Editor',
    year: 2023,
  },
  {
    id: 'video-004',
    title: 'Pulang — Short Film',
    description:
      'Film pendek fiksi tentang seorang perantau yang kembali ke kampung halaman setelah 10 tahun meninggalkan desa.',
    thumbnail: '/images/videos/thumbnails/pulang-shortfilm-thumb.jpg',
    embedUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
    externalUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    category: 'Short Film',
    tools: ['Blackmagic Pocket Cinema 6K', 'DaVinci Resolve', 'Adobe After Effects', 'Pro Tools'],
    role: 'Director, Cinematographer, Editor',
    year: 2023,
  },
  {
    id: 'video-005',
    title: 'Brand Identity Motion — Startup Fintech',
    description:
      'Animasi motion graphics untuk identitas brand startup fintech lokal, mencakup logo reveal dan brand guidelines video.',
    thumbnail: '/images/videos/thumbnails/fintech-motion-thumb.jpg',
    embedUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8',
    externalUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    category: 'Motion Graphics',
    tools: ['Adobe After Effects', 'Adobe Illustrator', 'Cinema 4D', 'Adobe Premiere Pro'],
    role: 'Motion Designer, Animator',
    year: 2024,
  },
];
