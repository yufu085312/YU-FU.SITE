import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.css'

interface ProjectsProps {
  isFullPage?: boolean
}

export default function Projects({ isFullPage = false }: ProjectsProps) {
  const allProjects = [
    {
      title: 'MojiCount (文字数カウント)',
      description: '文章作成に関わるすべての方のために開発された、多機能かつシンプルな高機能文字数カウントツール。リアルタイム計測やSNS・SEO最適化機能を備えています。',
      image: '/projects/mojicount.png',
      demoUrl: 'https://mojicount.yu-fu.site',
      articleUrl: '/projects/mojicount',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: '喫煙所表示アプリ',
      description: 'ユーザーが近くの喫煙所を簡単に見つけられる地図アプリケーション。位置情報を活用し、リアルタイムで喫煙所の場所を表示します。',
      image: '/projects/smoking-app.png',
      demoUrl: 'https://smoking.yu-fu.site',
      articleUrl: '/projects/smoking-app',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Leaflet'],
    },
    {
      title: '冷蔵庫レシピAI',
      description: '余った食材からAIが美味しいレシピを提案。Google Gemini APIを使用して、冷蔵庫の残り物から創造的で実用的なレシピを生成します。',
      image: '/projects/recipe-ai.png',
      demoUrl: 'https://ai-recipe.yu-fu.site',
      articleUrl: '/projects/recipe-ai',
      tags: ['Vite', 'JavaScript', 'Gemini API', 'Unsplash API'],
    },
    {
      title: 'ルーレットアプリ',
      description: 'カスタマイズ可能なルーレットアプリケーション。イベントやゲームで使える楽しいツールです。',
      image: '/projects/roulette-app.png',
      demoUrl: 'https://roulette.yu-fu.site',
      articleUrl: '/projects/roulette-app',
      tags: ['HTML', 'CSS', 'JavaScript'],
    }
  ]

  const projects = isFullPage ? allProjects : allProjects.slice(0, 2)

  return (
    <section id="projects" className={isFullPage ? styles.fullPageSection : "section"}>
      <div className="container">
        <div className={styles.projectsContent}>
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">{isFullPage ? 'All Projects' : 'Projects'}</h2>
            <p className={styles.sectionDescription}>
              {isFullPage ? 'これまでに制作したすべてのプロジェクト' : '開発したアプリケーション'}
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
                    <div className={styles.overlayButtons}>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        サイトを見る
                      </a>
                      {project.articleUrl && (
                        <Link
                          href={project.articleUrl}
                          className="btn btn-outline"
                        >
                          詳細を見る
                        </Link>
                      )}
                    </div>
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
                  
                  {project.articleUrl ? (
                    <Link
                      href={project.articleUrl}
                      className={styles.projectLink}
                    >
                      Read More →
                    </Link>
                  ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        {project.demoUrl} →
                      </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!isFullPage && allProjects.length > 2 && (
            <div className={styles.viewMoreContainer}>
              <Link href="/projects" className="btn btn-primary">
                詳細をもっと見る
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

