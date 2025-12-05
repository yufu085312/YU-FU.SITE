'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gradientBg1}></div>
      <div className={styles.gradientBg2}></div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={`${styles.title} animate-fade-in`}>
              Hi, I&apos;m <span className="gradient-text">Yuta-Fukuhara</span>
            </h1>
            <p className={`${styles.subtitle} animate-slide-up`}>
              フルスタックエンジニア
            </p>
            <p className={`${styles.description} animate-slide-up`}>
              2025年新卒でメガベンチャーに入社。<br />
              フロントエンド・バックエンド・インフラまで幅広く開発経験があります。
            </p>
            <div className={`${styles.buttons} animate-slide-up`}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                プロジェクトを見る
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                お問い合わせ
              </button>
            </div>
          </div>
          
          <div className={`${styles.imageContainer} animate-scale-in`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/profile.png"
                alt="YU-FU Profile"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} onClick={() => scrollToSection('about')}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>スクロール</p>
      </div>
    </section>
  )
}
