import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../ProjectArticle.module.css'

export const metadata: Metadata = {
  title: 'Kashikari | Yuta Fukuhara',
  description: 'スマートな割り勘、カンタンな貸し借り管理。「誰がいくら払ったか」「誰がいくら借りているか」をシンプルに管理できるウェブアプリケーションです。',
}

export default function Kashikari() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} gradient-text`}>Kashikari（割り勘・貸し借り管理アプリ）</h1>
            <div className={styles.meta}>
              <span>Next.js / TypeScript / Tailwind CSS / Supabase</span>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/projects/kashikari.png"
                alt="Kashikari"
                fill
                className={styles.heroImage}
                priority
              />
            </div>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>はじめに</h2>
              <p>
                スマートな割り勘、カンタンな貸し借り管理。「誰がいくら払ったか」「誰がいくら借りているか」をシンプルに管理できるウェブアプリケーションです。
              </p>
            </section>

            <section className={styles.section}>
              <h2>🚀 主な機能</h2>
              <ul className={styles.featureList}>
                <li>👥 <strong>グループ管理</strong>: 飲み会、旅行、シェアハウスなど、シーンに合わせたグループを作成。</li>
                <li>🔗 <strong>簡単招待</strong>: 検索IDや専用の招待リンクを使って、友だちを簡単にグループに招待。</li>
                <li>💰 <strong>支払い記録</strong>: 「誰が」「いくら」支払ったかを即座に記録。</li>
                <li>🧮 <strong>自動残高計算</strong>: 複雑な貸し借りの状態を自動で集計し、常に最新の残高を表示。</li>
                <li>🤝 <strong>スムーズな精算</strong>: 最適な支払い経路を計算し、誰から誰へ送金すればよいかを提示。</li>
                <li>📱 <strong>PWA対応</strong>: ホーム画面に追加することで、ネイティブアプリのように快適に利用可能。</li>
                <li>💻 <strong>レスポンシブデザイン</strong>: スマートフォン、タブレット、PCのすべてのデバイスに最適化。</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>🛠 技術スタック</h2>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <h4>Frontend</h4>
                  <p>Next.js (App Router), React</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Styling</h4>
                  <p>Tailwind CSS</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Backend / DB</h4>
                  <p>Supabase (Auth, PostgreSQL, Realtime)</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Deployment</h4>
                  <p>Cloudflare</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Analytics / SEO</h4>
                  <p>Google Analytics (GA4), Search Console</p>
                </div>
              </div>
            </section>

            <div className={styles.links}>
              <a 
                href="https://kashikari.yu-fu.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                サイトを見る
              </a>
              <a 
                href="https://github.com/yufu085312/Kashikari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHubを見る
              </a>
            </div>

            <div className={styles.backButtonContainer}>
              <Link href="/projects" className="btn btn-ghost">
                ← プロジェクト一覧に戻る
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
