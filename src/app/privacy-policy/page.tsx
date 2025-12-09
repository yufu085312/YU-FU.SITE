import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './PrivacyPolicy.module.css'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Yuta Fukuhara Portfolio',
  description: '当サイトのプライバシーポリシー、個人情報の取り扱い、広告配信、アクセス解析ツールについて説明します。',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1 className="gradient-text">プライバシーポリシー</h1>

          <section className={styles.section}>
            <h2>個人情報の利用目的</h2>
            <p>
              当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
              取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
            </p>
          </section>

          <section className={styles.section}>
            <h2>広告の配信について</h2>
            <p>
              当サイトは、第三者配信の広告サービス（Googleアドセンス）を利用しています。
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
            </p>
            <p>
              Cookieを無効にする設定およびGoogleアドセンスに関する詳細は
              <a 
                href="https://policies.google.com/technologies/ads?hl=ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                「Googleポリシーと規約 – 広告」
              </a>
              をご覧ください。
            </p>
            <p>
              また、Yuta Fukuhara は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
          </section>

          <section className={styles.section}>
            <h2>アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              この規約に関して、詳しくは
              <a 
                href="https://marketingplatform.google.com/about/analytics/terms/jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                Googleアナリティクス利用規約
              </a>
              をご覧ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2>免責事項</h2>
            <p>
              当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p>
              また当サイトのコンテンツ・情報について、できる限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
            </p>
            <p>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2>著作権について</h2>
            <p>
              当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            </p>
            <p>
              当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
            </p>
          </section>

          <section className={styles.section}>
            <h2>リンクについて</h2>
            <p>
              当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
            </p>
            <p>
              ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
            </p>
          </section>

          <div className={styles.date}>
            <p>2025年12月06日 制定</p>
          </div>

          <div className={styles.backButtonContainer}>
            <Link href="/" className="btn btn-outline">
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
