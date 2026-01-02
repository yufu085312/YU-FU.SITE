import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yuta Fukuhara Portfolio',
    short_name: 'YU-FU Portfolio',
    description: '2025年新卒、メガベンチャー入社予定のエンジニアのポートフォリオサイト',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
