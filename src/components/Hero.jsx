import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'AI/ML Integrations',
  'React + Node.js Dev',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.tag}>
          <span>Available for full-time roles & internships</span>
        </div>
        <h1 className={styles.name}>
          Hi, I'm<br />
          <span className={styles.highlight}>Santhosh</span><br />
          <span className={styles.lastName}>B</span>
        </h1>
        <div className={styles.role}>
          <span>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.desc}>
          B.E. Robotics & Automation graduate building production-ready full-stack web apps.
          Specialized in React.js, Node.js, MongoDB, and AI/ML API integration.
          Shipped 3 real projects. Based in Chennai, India.
        </p>
        <div className={styles.btns}>
          <a href="#projects" className="btn btn-primary">View Projects ↗</a>
          <a href="#contact" className="btn btn-outline">Let's Talk →</a>
        </div>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>3</div>
            <div className={styles.statLabel}>Projects Shipped</div>
          </div>
          <div>
            <div className={styles.statNum}>8.86</div>
            <div className={styles.statLabel}>CGPA / 10</div>
          </div>
          <div>
            <div className={styles.statNum}>3</div>
            <div className={styles.statLabel}>Tech Stacks</div>
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}
