import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fun Chemistry',
    short_name: 'Fun Chemistry',
    description: 'A bilingual high-school chemistry site featuring club publications, curriculum review, competition prep, AP Chemistry, and organic chemistry resources.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F2F6EF',
    theme_color: '#13315C',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      },
      {
        src: '/apple-touch-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
        purpose: 'any'
      }
    ]
  };
}
