import styles from './About.module.css'

export default function About() {
  const experiences = [
    {
      title: '学歴',
      description: '2025年3月　大学卒業',
      icon: '🎓',
    },
    {
      title: 'キャリア',
      description: '2025年4月　メガベンチャー入社',
      icon: '💼',
    },
    {
      title: '経験',
      description: 'インターン・アルバイト複数社経験',
      icon: '⚡',
    },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">About Me</h2>
            <p className={styles.sectionDescription}>
              自己紹介
            </p>
          </div>

          <div className={styles.grid}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${styles.card} glass glass-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.icon}>{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div className={`${styles.bio} glass`}>
            <p>
              フルスタックエンジニアとして、フロントエンド・バックエンド・インフラまで幅広く開発を行っています。
              モダンな技術スタックを活用し、ユーザー体験を重視したプロダクト開発に取り組んでいます。
            </p>
            <p>
              大学在学中から複数のインターンやアルバイトを経験し、実務レベルの開発スキルを習得してきました。
              2025年4月からはメガベンチャー企業でエンジニアとしてのキャリアをスタートしています。
            </p>
            <p>
              新しい技術への学習意欲が高く、常に最新のトレンドをキャッチアップしながら、
              より良いプロダクトを作ることを目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
