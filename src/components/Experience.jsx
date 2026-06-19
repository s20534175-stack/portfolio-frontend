import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Where I've worked</div>
        <h2 className="section-title">Experience</h2>
        <div className={`${styles.card} reveal`}>
          <div className={styles.header}>
            <div>
              <div className={styles.role}>MERN Stack Intern</div>
              <div className={styles.company}>Suven Consultants & Technology Pvt. Ltd. — Remote, India</div>
            </div>
            <div className={styles.date}>Sep 2024 — Oct 2024</div>
          </div>
          <ul className={styles.list}>
            <li>Built and deployed full-stack application modules using <strong>React, Node.js, Express, and MongoDB</strong> as part of a structured 4-week MERN internship program.</li>
            <li>Developed <strong>REST APIs</strong> with Express.js, performed CRUD operations with MongoDB, and implemented client-server communication patterns.</li>
            <li>Built reusable <strong>React components</strong> for frontend interfaces and integrated them with backend APIs.</li>
          </ul>
          <div className={styles.tags}>
            <span className="tag">React.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">REST API</span>
            <span className="tag">JWT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
