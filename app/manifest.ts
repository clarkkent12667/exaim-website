import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ExAIm - AI-Powered Exam Preparation Platform',
    short_name: 'ExAIm',
    description: 'AI-powered exam preparation platform for schools. Automated marking, personalised feedback, and comprehensive analytics.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'productivity'],
    lang: 'en-GB',
    orientation: 'portrait-primary',
  }
}

