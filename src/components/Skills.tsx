import Image from 'next/image'
import styles from './Skills.module.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Go', 'Python', 'Java', 'PHP'],
    },
    {
      category: 'Infrastructure',
      icon: '☁️',
      skills: ['AWS', 'GCP', 'Docker', 'Firebase', 'Cloudflare', 'Vercel', 'fly.io'],
    },
    {
      category: 'Mobile',
      icon: '📱',
      skills: ['Swift', 'React Native', 'Flutter'],
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['VSCode', 'Cursor', 'Antigravity', 'Xcode', 'Android Studio', 'Figma', 'Postman', 'Notion', 'Slack', 'Discord', 'GitHub', 'Git', 'Miro', 'DBeaver'],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={styles.skillsContent}>
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">Skills</h2>
            <p className={styles.sectionDescription}>
              技術スタック
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`${styles.categoryCard} glass glass-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillTag}>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.highlight} glass`}>
            <h3>フルスタック開発</h3>
            <p>
              フロントエンド、バックエンド、インフラストラクチャーの全領域をカバーし、
              モダンな技術スタックを活用した開発を得意としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
