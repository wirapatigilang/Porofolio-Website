import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-001',
    name: 'Campus Market',
    description:
      'A specialized campus marketplace featuring secure authentication, a relational rating system, and real-time product management.',
    fullDescription: `Campus Market is a full-stack e-commerce platform specifically engineered for university ecosystems. Built with Next.js and PostgreSQL, the application enables students to buy and sell items within a trusted community. 

Key technical implementations include a robust authentication system to ensure campus-only access, a relational database schema for transparent seller ratings, and a responsive UI tailored for both mobile and desktop users. The project focuses on data integrity and seamless user experience, utilizing Prisma ORM for type-safe database interactions and Tailwind CSS for a modern, minimalist aesthetic.`,
    challenges:
      'Mengelola state real-time untuk banyak pengguna secara bersamaan tanpa konflik data, serta memastikan performa tetap optimal saat jumlah task dan pengguna bertambah.',
    solutions:
      'Mengimplementasikan WebSocket dengan Socket.io untuk sinkronisasi real-time, optimistic UI updates untuk pengalaman yang responsif, dan Redis pub/sub untuk broadcast event antar server instances.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web App',
    repositoryUrl: 'https://github.com/dapskuycode/PPL-CAMPUS-MARKET',
    demoUrl: 'https://taskflow-demo.vercel.app',
    thumbnail: '/images/projects/campus-market.png',
    featured: true,
  },
  {
    id: 'project-002',
    name: 'NutriTrack — Aplikasi Pelacak Nutrisi',
    description:
      'Mobile app untuk melacak asupan nutrisi harian dengan database makanan Indonesia dan analisis gizi personal.',
    fullDescription: `NutriTrack adalah aplikasi mobile cross-platform yang membantu pengguna memantau asupan nutrisi harian mereka. Keunggulan utama aplikasi ini adalah database makanan Indonesia yang komprehensif dengan lebih dari 2.000 item, termasuk makanan tradisional dan jajanan pasar yang sering tidak tersedia di aplikasi serupa.

Pengguna dapat mencatat makanan yang dikonsumsi dengan mudah melalui fitur barcode scanner, pencarian teks, atau foto makanan yang dianalisis menggunakan machine learning. Aplikasi memberikan laporan nutrisi harian, mingguan, dan bulanan dalam bentuk grafik yang mudah dipahami.

Fitur unggulan lainnya: rekomendasi menu berdasarkan target kalori pengguna, integrasi dengan Google Fit dan Apple Health, serta mode offline untuk pencatatan tanpa koneksi internet. Aplikasi telah diunduh lebih dari 10.000 kali di Google Play Store.`,
    challenges:
      'Membangun database makanan Indonesia yang akurat dan lengkap, serta mengimplementasikan fitur pengenalan makanan dari foto dengan akurasi yang memadai.',
    solutions:
      'Berkolaborasi dengan ahli gizi untuk validasi data nutrisi, menggunakan TensorFlow Lite untuk model pengenalan makanan on-device, dan menerapkan sistem crowdsourcing untuk penambahan item makanan baru.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Python', 'FastAPI', 'PostgreSQL', 'TensorFlow Lite', 'SQLite'],
    category: 'Mobile App',
    repositoryUrl: 'https://github.com/gilangwirapati/nutritrack',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.nutritrack',
    thumbnail: '/images/projects/nutritrack-thumbnail.jpg',
    featured: true,
  },
  {
    id: 'project-003',
    name: 'OpenWeather ID — REST API Cuaca Indonesia',
    description:
      'REST API open-source untuk data cuaca real-time seluruh wilayah Indonesia dengan cakupan 500+ kota.',
    fullDescription: `OpenWeather ID adalah REST API open-source yang menyediakan data cuaca real-time dan prakiraan cuaca untuk lebih dari 500 kota di seluruh Indonesia. API ini dibangun sebagai alternatif gratis dan terbuka untuk developer Indonesia yang membutuhkan data cuaca lokal yang akurat.

Data cuaca diperoleh dari agregasi beberapa sumber: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika), stasiun cuaca IoT yang tersebar di berbagai daerah, dan data satelit. Semua data diproses dan dinormalisasi sebelum disajikan melalui API yang konsisten dan mudah digunakan.

API menyediakan endpoint untuk: cuaca saat ini, prakiraan 7 hari, data historis 30 hari, peringatan cuaca ekstrem, dan indeks kualitas udara. Dokumentasi lengkap tersedia di docs.openweather-id.dev. Saat ini API digunakan oleh 200+ developer dengan total request mencapai 1 juta per bulan.`,
    challenges:
      'Mengintegrasikan data dari berbagai sumber dengan format yang berbeda-beda, memastikan ketersediaan API yang tinggi (uptime ≥99.9%), dan mengelola rate limiting yang adil untuk semua pengguna.',
    solutions:
      'Membangun data pipeline dengan Apache Kafka untuk ingestion real-time, menggunakan Redis untuk caching response yang sering diakses, dan mengimplementasikan token-based rate limiting dengan tier gratis dan berbayar.',
    techStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker', 'Kubernetes'],
    category: 'API',
    repositoryUrl: 'https://github.com/gilangwirapati/openweather-id',
    demoUrl: 'https://docs.openweather-id.dev',
    thumbnail: '/images/projects/openweather-id-thumbnail.jpg',
    featured: true,
  },
  {
    id: 'project-004',
    name: 'react-id-components — UI Library Indonesia',
    description:
      'Library komponen React open-source dengan komponen khusus kebutuhan aplikasi Indonesia: input NIK, NPWP, dan format rupiah.',
    fullDescription: `react-id-components adalah library komponen React open-source yang menyediakan komponen UI yang dioptimasi untuk kebutuhan aplikasi Indonesia. Library ini mengisi celah yang ada di library UI internasional yang tidak memiliki komponen untuk format data Indonesia.

Komponen yang tersedia meliputi: InputNIK (validasi format NIK 16 digit), InputNPWP (format dan validasi NPWP), CurrencyInput (format Rupiah dengan pemisah ribuan), DatePickerHijri (kalender Hijriah), ProvinceSelect dan CitySelect (dropdown wilayah Indonesia berdasarkan data Kemendagri), dan PhoneInput (format nomor telepon Indonesia).

Semua komponen dibangun dengan aksesibilitas sebagai prioritas utama, mendukung keyboard navigation penuh, dan kompatibel dengan React Hook Form. Library telah diunduh lebih dari 5.000 kali per minggu di npm dan memiliki 300+ GitHub stars.`,
    challenges:
      'Memastikan semua komponen aksesibel, mudah dikustomisasi, dan kompatibel dengan berbagai versi React dan library form yang populer.',
    solutions:
      'Menggunakan Radix UI Primitives sebagai fondasi aksesibilitas, menyediakan API yang fleksibel dengan render props dan compound components pattern, serta menulis test suite komprehensif dengan Vitest dan Testing Library.',
    techStack: ['React', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'Vitest', 'Storybook', 'Rollup'],
    category: 'Open Source',
    repositoryUrl: 'https://github.com/gilangwirapati/react-id-components',
    demoUrl: 'https://react-id-components.vercel.app',
    thumbnail: '/images/projects/react-id-components-thumbnail.jpg',
    featured: false,
  },
  {
    id: 'project-005',
    name: 'PortalBerita — Agregator Berita Indonesia',
    description:
      'Web app agregator berita dari 20+ media Indonesia dengan fitur personalisasi topik dan ringkasan AI.',
    fullDescription: `PortalBerita adalah aplikasi web agregator berita yang mengumpulkan dan mengkurasi berita dari lebih dari 20 media online Indonesia terpercaya. Pengguna dapat mempersonalisasi feed berita mereka berdasarkan topik yang diminati, dan mendapatkan ringkasan singkat setiap artikel menggunakan AI.

Aplikasi menggunakan RSS feed dan web scraping yang etis untuk mengumpulkan berita, kemudian memproses konten dengan NLP untuk kategorisasi otomatis, deteksi duplikasi, dan pembuatan ringkasan. Antarmuka dirancang untuk kenyamanan membaca dengan mode gelap, ukuran font yang dapat disesuaikan, dan mode baca offline.

Fitur unggulan: notifikasi breaking news, bookmark artikel untuk dibaca nanti, berbagi artikel ke media sosial, dan laporan mingguan topik yang sedang trending. Aplikasi dibangun sebagai Progressive Web App (PWA) sehingga dapat diinstal di perangkat mobile.`,
    challenges:
      'Mengelola scraping dari banyak sumber dengan struktur HTML yang berbeda-beda, memastikan konten yang dikumpulkan akurat dan tidak melanggar hak cipta, serta menjaga performa dengan volume data yang besar.',
    solutions:
      'Membangun scraper yang modular dengan adapter per sumber berita, mengimplementasikan sistem deduplication berbasis semantic similarity, dan menggunakan CDN untuk caching konten yang sering diakses.',
    techStack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Elasticsearch', 'OpenAI API', 'Vercel'],
    category: 'Web App',
    repositoryUrl: 'https://github.com/gilangwirapati/portalberita',
    demoUrl: 'https://portalberita.vercel.app',
    thumbnail: '/images/projects/portalberita-thumbnail.jpg',
    featured: false,
  },
];
