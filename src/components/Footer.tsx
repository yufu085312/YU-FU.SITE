import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <h3 className="gradient-text">Yuta-Fukuhara</h3>
            <p>フルスタックエンジニア</p>
          </div>
          
          <div className={styles.links}>
            <a href="https://smoking.yu-fu.site" target="_blank" rel="noopener noreferrer">
              喫煙所アプリ
            </a>
            <a href="https://ai-recipe.yu-fu.site" target="_blank" rel="noopener noreferrer">
              冷蔵庫レシピAI
            </a>
            <a href="https://roulette.yu-fu.site" target="_blank" rel="noopener noreferrer">
              ルーレットアプリ
            </a>
            <a href="https://yu-fu.net" target="_blank" rel="noopener noreferrer">
              ブログ
            </a>
            <a href="https://zenn.dev/yu_fu" target="_blank" rel="noopener noreferrer">
              Zenn
            </a>
            <Link href="/privacy-policy">
              プライバシーポリシー
            </Link>
          </div>
          
          <div className={styles.copyright}>
            <p>© {currentYear} Yuta-Fukuhara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
