import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../ProjectArticle.module.css'

export const metadata: Metadata = {
  title: '喫煙所サーチ 開発秘話 | Yuta Fukuhara',
  description: 'Next.js, Firebase, Leaflet.jsを使った喫煙所検索アプリ「喫煙所サーチ」の開発プロセスと技術解説。',
}

export default function SmokingApp() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} gradient-text`}>喫煙所サーチ (Smoking Area Search)</h1>
            <div className={styles.meta}>
              <span>Next.js / Firebase / Leaflet</span>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/projects/smoking-app.png"
                alt="喫煙所サーチ"
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
                喫煙者にとって、外出先で喫煙所を探すのは意外と大変です。そこで、誰でも喫煙所の位置情報を地図上で確認・共有できるWebアプリ「喫煙所サーチ」を開発しました。
              </p>
              <p>
                この記事では、Next.js、Firebase、Leaflet.jsを使ったアプリケーション開発の過程と、実装した主要機能について紹介します。
              </p>
            </section>

            <section className={styles.section}>
              <h2>アプリの概要</h2>
              <p>
                喫煙所サーチは、地図ベースで喫煙所の位置情報を検索・共有できるコミュニティ型のWebアプリケーションです。
              </p>
              
              <h3>主な機能</h3>
              <ul className={styles.featureList}>
                <li>📍 <strong>地図上での喫煙所検索</strong>: OpenStreetMapベースの地図で、現在地周辺の喫煙所を表示</li>
                <li>➕ <strong>喫煙所の新規追加</strong>: ユーザーが自由に喫煙所の位置情報を投稿可能</li>
                <li>🎯 <strong>直感的なUI</strong>: 地図中心にピンを合わせて位置を指定する、モバイルフレンドリーな操作性</li>
                <li>🔐 <strong>ユーザー認証</strong>: Firebaseによる安全な認証システム</li>
                <li>📱 <strong>レスポンシブデザイン</strong>: PC・スマートフォンの両方で快適に利用可能</li>
                <li>📝 <strong>メモ機能</strong>: 各喫煙所に「屋外」「灰皿あり」などの補足情報を追加可能</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>技術スタック</h2>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <h4>フロントエンド</h4>
                  <ul>
                    <li>Next.js 14 (App Router)</li>
                    <li>TypeScript: 型安全性を確保</li>
                    <li>Tailwind CSS: スタイリング</li>
                    <li>React Leaflet: 地図表示</li>
                  </ul>
                </div>
                <div className={styles.techItem}>
                  <h4>バックエンド・インフラ</h4>
                  <ul>
                    <li>Firebase Firestore / Auth</li>
                    <li>Vercel: デプロイ</li>
                    <li>Docker: 開発環境</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>開発のポイント</h2>
              
              <h3>1. 地図のビューポートベース取得による最適化</h3>
              <p>
                当初は全ての喫煙所データを一度に取得していましたが、Firebaseの無料枠を考慮して、表示中の地図範囲（ビューポート）内のデータのみを取得する仕組みに変更しました。
              </p>
              <div className={styles.codeBlock}>
                <code>
                  {`// 緯度範囲でフィルタリングし、経度はクライアント側でフィルタ\nconst q = query(\n  collection(db, SMOKING_AREAS_COLLECTION),\n  where('latitude', '>=', minLat),\n  where('latitude', '<=', maxLat)\n);`}
                </code>
              </div>
              <p>
                これにより、読み取り回数を大幅に削減し、コストを抑えつつパフォーマンスも向上しました。
              </p>

              <h3>2. 直感的な位置指定UI</h3>
              <p>
                従来の「地図をクリックして位置を指定」方式から、地図中央に固定されたピンに合わせて地図を動かす方式に変更しました。
              </p>
              <ul>
                <li>モバイルでの操作性が大幅に向上</li>
                <li>タップした位置と実際の選択位置のズレを解消</li>
                <li>より正確な位置指定が可能に</li>
              </ul>

              <h3>3. セキュリティとプライバシー</h3>
              <ul>
                <li>利用規約・プライバシーポリシーを整備</li>
                <li>投稿時の注意事項表示</li>
                <li>Firebaseのセキュリティルールによるデータ保護</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>技術的な課題と解決策</h2>

              <h3>課題1: Firestoreの複合クエリ制約</h3>
              <p>
                Firestoreでは、複数の範囲フィルタ（緯度と経度の両方）を同時に使用できません。
              </p>
              <p><strong>解決策:</strong> サーバー側（Firestore）で緯度の範囲で絞り込み、クライアント側（JavaScript）で経度でフィルタリングを行いました。これにより、複合インデックス不要で効率的にデータを取得できました。</p>

              <h3>課題2: SSRとLeafletの互換性</h3>
              <p>
                LeafletはブラウザのDOM APIに依存するため、Next.jsのSSRと相性が悪い問題がありました。
              </p>
              <p><strong>解決策:</strong> <code>next/dynamic</code> を使用してSSRを無効化しました。</p>
              <div className={styles.codeBlock}>
                <code>
                  {`const MapComponent = dynamic(() => import('@/components/MapComponent'), {\n  ssr: false,\n});`}
                </code>
              </div>
            </section>

            <section className={styles.section}>
              <h2>まとめ</h2>
              <p>
                Next.js、Firebase、Leaflet.jsを組み合わせることで、ユーザーフレンドリーな位置情報共有アプリを構築できました。
                特に、ビューポートベースのデータ取得によるパフォーマンス最適化や、モバイルファーストなUX設計は大きな学びとなりました。
              </p>
            </section>

            <div className={styles.links}>
              <a 
                href="https://smoking.yu-fu.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                アプリを使ってみる
              </a>
              <a 
                href="https://github.com/yufu085312/smoking-area-search" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHubを見る
              </a>
            </div>

            <div className={styles.backButtonContainer}>
              <Link href="/#projects" className="btn btn-ghost">
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

