import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../ProjectArticle.module.css'

export const metadata: Metadata = {
  title: 'Leftover Recipe AI 開発秘話 | Yuta Fukuhara',
  description: '冷蔵庫の余り物からAIがレシピを提案する「Leftover Recipe AI」の開発ストーリーと技術スタック。Gemini API活用事例。',
}

export default function RecipeAI() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} gradient-text`}>Leftover Recipe AI (冷蔵庫レシピAI)</h1>
            <div className={styles.meta}>
              <span>Vite / Gemini API / Unsplash API</span>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/projects/recipe-ai.png"
                alt="Leftover Recipe AI"
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
                「今日の晩ご飯、何にしよう...」 「冷蔵庫にこの野菜が残ってるけど、レシピが思いつかない...」
              </p>
              <p>
                こんな悩み、日常的に抱えていませんか？さらに、買った食材を使いきれず食品ロスになってしまう問題も気になるところです。
              </p>
              <p>
                そこで今回は、そんな毎日の献立の悩みを解決するために、Webアプリ「Leftover Recipe AI（冷蔵庫レシピAI）」を開発しましたのでご紹介します！
              </p>
            </section>

            <section className={styles.section}>
              <h2>Leftover Recipe AI とは？</h2>
              <p>
                Leftover Recipe AIは、冷蔵庫に残っている食材を入力するだけで、AI（Google Gemini）が創造的かつ実用的なレシピを提案してくれるWebアプリケーションです。
                単にレシピを提案するだけでなく、調理時間や難易度、アレルギー食材の除外など、細かい条件設定も可能にしています。
              </p>
            </section>

            <section className={styles.section}>
              <h2>主な機能：使いやすさと創造性を追求</h2>
              
              <h3>1. 高度なAIレシピ生成（Gemini 2.5 Flash / Pro）</h3>
              <p>
                Googleの最新AIモデル Gemini 2.5 Flash / Pro を使用しています。その結果、食材の組み合わせから「えっ、こんな料理ができるの？！」という驚きのレシピから、定番の安定レシピまで幅広く提案してくれます。Geminiの創造性を料理に活かしました。
              </p>

              <h3>2. 美しい料理画像による視覚的提案</h3>
              <p>
                文字だけのレシピだとイメージが湧きにくいですよね。そこで、このアプリでは Unsplash API と連携し、生成されたレシピ名に関連する高品質な料理画像を自動で表示します。視覚的にも楽しめるのがポイントです。
              </p>

              <h3>3. 柔軟な条件設定</h3>
              <ul className={styles.featureList}>
                <li>⏰ <strong>調理時間</strong>: 「今日は時間がないから15分で！」</li>
                <li>🍳 <strong>難易度</strong>: 「料理初心者だから簡単に」</li>
                <li>⚠️ <strong>アレルギー</strong>: 「そばアレルギーなので除外して」</li>
              </ul>
              <p>
                これらの要望をプロンプトに組み込むことで、あなたに最適なレシピが生成されます。
              </p>
            </section>

            <section className={styles.section}>
              <h2>技術スタック解説：高速動作へのこだわり</h2>
              <div className={styles.techStack}>
                <div className={styles.techItem}>
                  <h4>フロントエンド</h4>
                  <p>Vite + Vanilla JavaScript (ES6+)</p>
                  <p>あえてReactなどのフレームワークを使わず、軽量で高速な動作を目指しました。</p>
                </div>
                <div className={styles.techItem}>
                  <h4>AI</h4>
                  <p>Google Gemini API (@google/genai SDK)</p>
                  <p>最新の Gemini 2.5 Flash モデルをデフォルトで使用し、応答速度を最適化しています。</p>
                </div>
                <div className={styles.techItem}>
                  <h4>画像連携</h4>
                  <p>Unsplash API</p>
                  <p>高品質で商用利用可能な美しい画像を提供するため。</p>
                </div>
                <div className={styles.techItem}>
                  <h4>データ管理</h4>
                  <p>LocalStorage</p>
                  <p>APIキーやお気に入りレシピはブラウザ内に保存されるため、セキュリティ面でも安心です。</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>こだわりの UI/UX</h2>
              <p>
                UI/UXでは「温かみのある料理サイト」を意識したカラーパレットを採用しました。さらに、レスポンシブデザインでスマホからでも快適に使えるように設計しています。
                また、APIのレート制限（使いすぎ）などのエラーハンドリングにも力を入れました。ユーザーが迷わないように親切なエラーメッセージを表示するようにしています。
              </p>
            </section>

            <section className={styles.section}>
              <h2>さいごに</h2>
              <p>
                個人開発として作ったこのアプリですが、自分自身も毎日の料理で実際に使っています。「冷蔵庫の掃除もできて、美味しい料理も食べられる」。まさに一石二鳥のアプリになりました。
                APIキーさえあれば誰でも無料で使えるので、ぜひ試してみてください！
              </p>
            </section>

            <div className={styles.links}>
              <a 
                href="https://ai-recipe.yu-fu.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                アプリを使ってみる
              </a>
              <a 
                href="https://github.com/yufu085312/leftover-recipe-ai" 
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
