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
            <Link href="/privacy-policy">
              プライバシーポリシー
            </Link>
            <Link href="/terms">
              利用規約
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
