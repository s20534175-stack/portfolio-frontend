import styles from './Education.module.css';
const edu = [
  {
    degree: 'B.E. Robotics & Automation',
    school: 'Rajalakshmi Engineering College',
    year: '2022 — 2026',
    meta: 'Anna University Affiliated',
    score: 'GPA: 8.86 / 10.0',
    highlight: 'Top 10% of Class · Third Place i\'Quest\'25',
    icon: '🎓',
  },
  {
    degree: 'HSC — 12th Grade (Science)',
    school: 'Balalok Matric Higher Secondary School',
    year: '2022',
    score: '94.00%',
    highlight: 'Higher Secondary Certificate',
    icon: '📚',
  },
  {
    degree: 'SSLC — 10th Grade',
    school: 'Balalok Matric Higher Secondary School',
    year: '2020',
    score: '93.20%',
    highlight: 'Secondary School Leaving Certificate',
    icon: '🏫',
  },
];
export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">My academic background</div>
        <h2 className="section-title">Education</h2>
        <div className={styles.grid}>
          {edu.map((e, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{e.icon}</div>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.school}>{e.school}</div>
              {e.meta && <div className={styles.meta}>{e.meta}</div>}
              <div className={styles.year}>{e.year}</div>
              <div className={styles.score}>{e.score}</div>
              <div className={styles.highlight}>{e.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
