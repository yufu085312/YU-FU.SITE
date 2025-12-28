import styles from './Blog.module.css'

export default function Blog() {
  const blogs = [
    {
      title: '個人ブログ',
      description: '技術記事や日々の学びを発信しています',
      url: 'https://yu-fu.site',
      icon: '📝',
    },
    {
      title: 'Zenn',
      description: 'エンジニア向けの技術記事を執筆しています',
      url: 'https://zenn.dev/yu_fu',
      icon: '⚡',
    },
  ]

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className={styles.blogContent}>
          <div className={styles.sectionHeader}>
            <h2 className="gradient-text">Blog & Articles</h2>
            <p className={styles.sectionDescription}>
              技術記事の発信
            </p>
          </div>

          <div className={styles.blogsGrid}>
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.blogCard} glass glass-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.blogIcon}>{blog.icon}</div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span className={styles.blogLink}>
                  {blog.url} →
                </span>
              </a>
            ))}
          </div>

          <div className={`${styles.cta} glass`}>
            <h3>最新記事はこちら</h3>
            <p>
              技術的な知見や学びを定期的に発信しています。<br />
              ぜひフォローして最新情報をチェックしてください！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
