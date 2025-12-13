import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './Terms.module.css'

export const metadata: Metadata = {
  title: '利用規約 | Yuta Fukuhara Portfolio',
  description: '当サイトの利用規約について説明します。',
}

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1 className="gradient-text">利用規約</h1>

          <section className={styles.section}>
            <h2>第1条（はじめに）</h2>
            <p>
              この利用規約（以下，「本規約」といいます。）は，Yuta Fukuhara（以下，「運営者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。
              ご利用ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第2条（コンテンツの著作権）</h2>
            <p>
              当サイトに掲載されている文章，画像，プログラム等のコンテンツの著作権は，運営者または正当な権利を有する第三者に帰属します。
              これらのコンテンツについて，私的使用その他法律によって明示的に認められる範囲を超えて，無断で複製，転用，改変等をすることを禁止します。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第3条（免責事項）</h2>
            <p>
              当サイトからリンクやバナーなどによって他のサイトに移動された場合，移動先サイトで提供される情報，サービス等について一切の責任を負いません。
            </p>
            <p>
              当サイトのコンテンツ・情報につきまして，可能な限り正確な情報を掲載するよう努めておりますが，誤情報が入り込んだり，情報が古くなっていることもございます。
            </p>
            <p>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第4条（禁止事項）</h2>
            <p>
              ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
            </p>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サイトのサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
              <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし，またはこれを試みる行為</li>
              <li>その他，運営者が不適切と判断する行為</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>第5条（利用規約の変更）</h2>
            <p>
              運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              なお，本規約の変更後，本サービスを利用した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第6条（準拠法・裁判管轄）</h2>
            <p>
              本規約の解釈にあたっては，日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には，運営者の居住地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <div className={styles.date}>
            <p>2025年12月13日 制定</p>
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
