// app/manifest.ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Latte72',
    short_name: 'Latte72',
    description: "Latte72's portfolio",
    start_url: '/',
    display: 'standalone',
    background_color: '#223',
    theme_color: '#223',
    icons: [
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  };
}
