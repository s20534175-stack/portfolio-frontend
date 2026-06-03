import styles from './Projects.module.css';

const projects = [
  {
    num: '01 — AI Platform',
    title: 'PrepWise AI',
    desc: 'Full-stack MERN platform enabling job seekers to practice AI-driven mock interviews, analyze resumes for ATS scores (tested at 85/100), and track DSA progress. Integrated Groq API (LLaMA 3.3-70B) for dynamic role-specific question generation with real-time personalized feedback. Reduced interview prep time by ~50%.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Groq API', 'JWT', 'Cloudinary', 'Vercel', 'Render'],
    demo: 'https://prepwise-ai-vert.vercel.app',
    github: 'https://github.com/s20534175-stack/prepwise-ai',
    highlight: true,
  },
  {
    num: '02 — Full Stack App',
    title: 'TaskFlow',
    desc: 'Full-stack task management app with Kanban-style board UI, JWT authentication, and user-scoped CRUD operations. Features priority filtering, status tracking, and secure data isolation across concurrent sessions. Deployed on Vercel + Render with MongoDB Atlas.',
    tags: ['React.js', 'Express.js', 'MongoDB', 'JWT', 'Render', 'Vercel'],
    demo: 'https://taskflow-fawn-theta.vercel.app',
    github: 'https://github.com/s20534175-stack/taskflow',
  },
  {
    num: '03 — Data Engineering',
    title: 'Tacheon — Marketing Signal Dashboard & ETL Pipeline',
    desc: 'End-to-end data product: designed a Marketing Signal Dashboard with interactive wireframe + feature scoping. Built a production-grade Python ETL pipeline ingesting weather data from Open-Meteo API into Google BigQuery. Authored SQL analytics queries for downstream reporting.',
    tags: ['Python', 'BigQuery', 'SQL', 'ETL', 'HTML/CSS', 'Open-Meteo API', 'Google Cloud'],
    github: 'https://github.com/s20534175-stack/tacheon-assessment',
  },
  {
    num: '04 — IoT / Embedded',
    title: 'Smart Emergency Wristband',
    desc: 'Wearable IoT emergency alert device integrating Arduino, GSM, and GPS modules. Transmits real-time location via SMS to 5 contacts within 10 seconds. Achieved 99%+ trigger reliability with GPS accuracy within 5 meters across 20+ field tests. Reduced notification time by 60%.',
    tags: ['Arduino', 'GSM Module', 'GPS Module', 'Embedded C', 'IoT', 'Hardware Interrupts'],
    github: 'https://github.com/s20534175-stack',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Things I've built</div>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.card} ${p.highlight ? styles.featured : ''} reveal`}>
              <div>
                <div className={styles.num}>{p.num}</div>
                <div className={styles.title}>{p.title}</div>
                <div className={styles.desc}>{p.desc}</div>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className={styles.links}>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live Demo →
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
