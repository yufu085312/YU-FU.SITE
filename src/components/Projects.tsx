import Image from 'next/image'
import styles from './Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: '喫煙所表示アプリ',
      description: 'ユーザーが近くの喫煙所を簡単に見つけられる地図アプリケーション。位置情報を活用し、リアルタイムで喫煙所の場所を表示します。',
      image: '/projects/smoking-app.png',
      url: 'https://smoking.yu-fu.site',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Leaflet'],
    },
    {
      title: 'ルーレットアプリ',
      description: 'カスタマイズ可能なルーレットアプリケーション。イベントやゲームで使える楽しいツールです。',
      image: '/projects/roulette-app.png',
      url: 'https://roulette.yu-fu.site',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.projectsContent}>
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">Projects</h2>
            <p className={styles.sectionDescription}>
              開発したアプリケーション
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectCard} glass glass-hover`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      サイトを見る
                    </a>
                  </div>
                </div>
                
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {project.url} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
