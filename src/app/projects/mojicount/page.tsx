import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../ProjectArticle.module.css'

export const metadata: Metadata = {
  title: 'MojiCount (文字数カウント) | Yuta Fukuhara',
  description: '文章作成に関わるすべての方のために開発された、多機能かつシンプルな高機能文字数カウントツール。MojiCountの開発ストーリーと技術スタック。',
}

export default function MojiCount() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} gradient-text`}>MojiCount (文字数カウント)</h1>
            <div className={styles.meta}>
              <span>Next.js / TypeScript / Tailwind CSS / Framer Motion / Lucide React</span>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/projects/mojicount.png"
                alt="MojiCount"
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
                MojiCountは、文章作成に関わるすべての方のために開発された、多機能かつシンプルな高機能文字数カウントツールです。
                リアルタイムで文字数・行数・段落数を素早くカウントし、SNS投稿やSEOライティング、原稿作成など、特定の用途に合わせた計測を提供します。
              </p>
            </section>

            <section className={styles.section}>
              <h2>🚀 主要機能</h2>
              
              <h3>1. 基本カウント</h3>
              <p>
                文字数、空白抜き文字数、行数、段落数などの基本情報をリアルタイムに網羅。入力と同時に瞬時に計算されます。
              </p>

              <h3>2. SNS最適化</h3>
              <p>
                各プラットフォームの独自のカウントルールに対応しています。
              </p>
              <ul className={styles.featureList}>
                <li>🐦 <strong>X (旧Twitter)</strong>: 日本語（全角）を2文字、英数字（半角）を1文字、URLを一律23文字として正確にカウント。</li>
                <li>📸 <strong>Instagram</strong>: キャプション制限（2,200文字）に基づいた残り文字数表示。</li>
              </ul>

              <h3>3. SEOライティングサポート</h3>
              <p>
                検索エンジン最適化のための文字数目安を確認できます。
              </p>
              <ul className={styles.featureList}>
                <li>🔍 <strong>タイトル</strong>: 30〜35文字の推奨範囲をチェック。</li>
                <li>🔍 <strong>メタディスクリプション</strong>: 110〜130文字の推奨範囲をチェック。</li>
              </ul>

              <h3>4. 日本語文字分析と原稿用紙換算</h3>
              <p>
                文章の文体や読みやすさを客観的に把握するための比率分析（ひらがな、カタカナ、漢字など）や、400字詰め原稿用紙の枚数への自動換算機能を搭載しています。
              </p>
            </section>

            <section className={styles.section}>
              <h2>🛠 技術スタック</h2>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <h4>Framework</h4>
                  <p>Next.js (App Router)</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Language</h4>
                  <p>TypeScript</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Styling</h4>
                  <p>Tailwind CSS</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Animation</h4>
                  <p>Framer Motion</p>
                </div>
                <div className={styles.techItem}>
                  <h4>Icons</h4>
                  <p>Lucide React</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔒 セキュリティ・プライバシー</h2>
              <p>
                完全クライアントサイド処理：入力されたテキストはすべて利用者のブラウザ上で処理されます。サーバーに送信されることは一切ないため、機密性の高い文書でも安心してご利用いただけます。
              </p>
            </section>

            <div className={styles.links}>
              <a 
                href="https://mojicount.yu-fu.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                サイトを見る
              </a>
              <a 
                href="https://github.com/yufu085312/mojicount" 
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
