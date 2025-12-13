import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../ProjectArticle.module.css'

export const metadata: Metadata = {
  title: 'Roulette App 開発秘話 | Yuta Fukuhara',
  description: 'シンプルで美しいデザインのWebベースルーレットアプリ。グラスモーフィズムを取り入れたUIとjQueryによる実装の詳細。',
}

export default function RouletteApp() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} gradient-text`}>Roulette App (ルーレットアプリ)</h1>
            <div className={styles.meta}>
              <span>HTML / CSS / jQuery / Glassmorphism</span>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/projects/roulette-app.png"
                alt="Roulette App"
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
                「今日のランチはどこに行こう？」「次の掃除当番は誰？」
                そんな日常の些細な決断を、少しだけ楽しくするために開発したのがこの「Roulette App」です。
              </p>
              <p>
                シンプルながらも、使うこと自体が楽しくなるような「美しいデザイン」と「心地よい動き」にこだわって作成しました。
              </p>
            </section>

            <section className={styles.section}>
              <h2>主な特徴</h2>
              
              <h3>1. モダンなデザイン (Glassmorphism)</h3>
              <p>
                UIデザインのトレンドの一つである「グラスモーフィズム（すりガラス風）」を取り入れました。
                背景のぼかし効果や透過を使用することで、奥行きと洗練された印象を与えています。
              </p>

              <h3>2. 完全レスポンシブ対応</h3>
              <p>
                スマートフォンでの利用を第一に考え、PCからモバイルまでどのデバイスでも快適に操作できるように設計しています。
                画面サイズに合わせてレイアウトが自然に変化します。
              </p>

              <h3>3. 自由なカスタマイズ性</h3>
              <p>
                ルーレットの項目はユーザーが自由に追加・編集・削除できます。
                ランチの候補店リストを作ったり、パーティーゲームの罰ゲームを決めたりと、用途に合わせて自由に設定可能です。
              </p>
            </section>

            <section className={styles.section}>
              <h2>技術スタック解説</h2>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <h4>HTML5 / CSS3</h4>
                  <p>セマンティックなマークアップと、Flexbox/Gridを駆使したレイアウト。</p>
                </div>
                <div className={styles.techItem}>
                  <h4>JavaScript (jQuery)</h4>
                  <p>
                    DOM操作とアニメーション制御に使用。
                    ルーレットの回転ロジックや、当選項目の判定などのコア機能を実装しています。
                  </p>
                </div>
                <div className={styles.techItem}>
                  <h4>デザイン</h4>
                  <p>
                    Google Fonts (Inter, M PLUS Rounded 1c) と Font Awesome を使用し、視認性と美しさを両立させました。
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>使い方</h2>
              <ol className={styles.featureList}>
                <li>
                  <strong>項目の追加</strong>: テキストボックスに入力し、<code>+</code>ボタンでリストに追加。
                </li>
                <li>
                  <strong>項目の編集/削除</strong>: リストアイコンから簡単に編集・削除が可能。
                </li>
                <li>
                  <strong>スタート</strong>: <code>START</code>ボタンでルーレットが回転！ランダムに当選が決まります。
                </li>
              </ol>
            </section>

            <div className={styles.links}>
              <a 
                href="https://roulette.yu-fu.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                アプリを使ってみる
              </a>
              <a 
                href="https://github.com/yufu085312/Roulette" 
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
