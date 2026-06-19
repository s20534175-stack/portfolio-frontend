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
    num: '02 — AI Platform',
    title: 'SupportIQ AI — Customer Support Analytics Platform',
    desc: 'Built an AI-powered full-stack platform to analyze and triage customer support tickets using Groq\'s LLaMA 3.3-70B — automated sentiment analysis, category detection, and priority scoring via CSV bulk upload. Developed real-time analytics dashboard with Chart.js showing sentiment breakdown, category distribution, and 30-day ticket volume trends. Implemented search, filter, pagination, ticket detail view, CSV export, and JWT auth.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Groq API', 'Chart.js', 'JWT', 'Vercel', 'Render'],
    demo: 'https://supportiq-ai-seven.vercel.app',
    github: 'https://github.com/s20534175-stack/supportiq-ai',
  },
  {
    num: '03 — Data Engineering',
    title: 'ETL + BigQuery Pipeline — Marketing Signal Dashboard',
    desc: 'Built a production-grade ETL pipeline in Python to ingest weather data from the Open-Meteo API, transform it into a structured marketing signal dataset, and load it into Google BigQuery for analytics. Designed a full Marketing Signal Dashboard product brief with feature scoping, KPI definitions, and an interactive HTML wireframe prototype. Authored SQL analytics queries for downstream reporting.',
    tags: ['Python', 'BigQuery', 'SQL', 'ETL', 'HTML/CSS', 'Open-Meteo API', 'Google Cloud'],
    github: 'https://github.com/s20534175-stack/tacheon-assessment',
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
