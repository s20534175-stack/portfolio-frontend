import styles from './Skills.module.css';

const skillGroups = [
  {
    icon: '⚛️', cat: 'Frontend', title: 'React & UI',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    icon: '🖥️', cat: 'Backend', title: 'Server & APIs',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'Rate Limiting', 'MVC Architecture']
  },
  {
    icon: '🗄️', cat: 'Databases', title: 'Data Storage',
    tags: ['MongoDB', 'Mongoose', 'MongoDB Atlas', 'BigQuery', 'SQL', 'ETL Pipelines']
  },
  {
    icon: '🤖', cat: 'AI / ML', title: 'AI Integration',
    tags: ['Groq API', 'LLaMA 3.3-70B', 'Cloudinary', 'PDF Processing', 'Prompt Engineering']
  },
  {
    icon: '☁️', cat: 'DevOps', title: 'Cloud & Deploy',
    tags: ['Vercel', 'Render', 'Google Cloud', 'MongoDB Atlas', 'Git', 'GitHub', 'CI/CD']
  },
  {
    icon: '🔧', cat: 'Languages', title: 'Programming',
    tags: ['JavaScript ES6+', 'Python', 'Java', 'C', 'Embedded C', 'SQL']
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">What I work with</div>
        <h2 className="section-title">Technical Skills</h2>
        <div className={styles.grid}>
          {skillGroups.map((g, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={styles.icon}>{g.icon}</div>
              <div className={styles.cat}>{g.cat}</div>
              <div className={styles.title}>{g.title}</div>
              <div className={styles.tags}>
                {g.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
