import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export const metadata: Metadata = {
  title: 'Projects | Yuta Fukuhara',
  description: 'これまでに制作したプロジェクトの一覧です。',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <Projects isFullPage={true} />
      </main>
      <Footer />
    </>
  )
}
