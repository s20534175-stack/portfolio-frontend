import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className="section-label">Who I am</div>
        <h2 className="section-title">About Me</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className="reveal">
              I'm a <strong style={{color:'var(--accent)'}}>Full-Stack Developer</strong> and B.E. Robotics & Automation graduate from Rajalakshmi Engineering College, Chennai (GPA: 8.70/10, Top 10%). I specialize in building end-to-end MERN stack applications — from database design to polished UI.
            </p>
            <p className="reveal" style={{marginTop:'1.2rem'}}>
              I've shipped real production apps — an <strong style={{color:'var(--accent2)'}}>AI-powered interview prep platform</strong> (PrepWise AI), a task management app (TaskFlow), a data engineering ETL pipeline loaded into BigQuery, and an IoT emergency wristband device.
            </p>
            <p className="reveal" style={{marginTop:'1.2rem'}}>
              I'm actively seeking <strong style={{color:'var(--accent)'}}>full-time fresher developer roles</strong> where I can contribute immediately with my hands-on MERN stack experience, AI integration skills, and a strong drive to learn and ship.
            </p>
            <div className={`${styles.quickFacts} reveal`}>
              <div className={styles.fact}><span className={styles.factIcon}>📍</span> Chennai, Tamil Nadu</div>
              <div className={styles.fact}><span className={styles.factIcon}>🎓</span> B.E. Graduating May 2026</div>
              <div className={styles.fact}><span className={styles.factIcon}>🚀</span> Open to relocation</div>
              <div className={styles.fact}><span className={styles.factIcon}>💼</span> Available immediately</div>
            </div>
          </div>
          <div className={`${styles.card} reveal`}>
            <div className={styles.cardInner}>
              <div className={styles.initials}>SB</div>
              <div className={styles.cardInfo}>
                <div className={styles.cardName}>Santhosh Balasubramani</div>
                <div className={styles.cardRole}>Full-Stack Developer · MERN</div>
                <div className={styles.cardMeta}>Chennai, India · Top 10% of Class</div>
              </div>
              <div className={styles.cardTags}>
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Groq API</span>
                <span className="tag">JWT</span>
                <span className="tag">Vercel</span>
              </div>
              <a href="mailto:s20534175@gmail.com" className="btn btn-primary" style={{marginTop:'1.5rem',width:'100%',justifyContent:'center'}}>
                Hire Me ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
