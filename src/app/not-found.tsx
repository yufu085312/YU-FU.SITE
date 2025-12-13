import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.bgGradient1} />
        <div className={styles.bgGradient2} />
        
        <div className={`${styles.content} glass`}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            お探しのページは見つかりませんでした。<br />
            一時的にアクセスできないか、移動または削除された可能性があります。
          </p>
          
          <div className={styles.buttonContainer}>
            <Link href="/" className="btn btn-primary">
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
