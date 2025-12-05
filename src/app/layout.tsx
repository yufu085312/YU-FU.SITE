import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yuta Fukuhara | フルスタックエンジニア ポートフォリオ',
  description: '2025年新卒、メガベンチャー入社予定のフルスタックエンジニアのポートフォリオサイト。React、Next.js、Go、AWS等の技術を使用した開発経験を紹介。',
  keywords: ['Yuta Fukuhara', 'YU-FU', 'ポートフォリオ', 'フルスタックエンジニア', 'Next.js', 'React', 'TypeScript', 'Go', 'AWS', 'Web開発'],
  authors: [{ name: 'Yuta Fukuhara' }],
  creator: 'Yuta Fukuhara',
  publisher: 'Yuta Fukuhara',
  metadataBase: new URL('https://yu-fu.site'),
  verification: {
    google: 'JQSbQx1wj9btOCmKI620pKGQbu_vRN-od4Lx7g3cFSo',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yu-fu.site',
    title: 'Yuta Fukuhara | フルスタックエンジニア ポートフォリオ',
    description: '2025年新卒、メガベンチャー入社予定のフルスタックエンジニアのポートフォリオサイト',
    siteName: 'Yuta Fukuhara Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YU-FU Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuta Fukuhara | フルスタックエンジニア ポートフォリオ',
    description: '2025年新卒、メガベンチャー入社予定のフルスタックエンジニアのポートフォリオサイト',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
