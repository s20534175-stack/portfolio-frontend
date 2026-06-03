import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          Designed & Built by{' '}
          <span className={styles.name}>Santhosh Balasubramani</span>
          {' '}· Chennai, India · 2026
        </p>
        <div className={styles.links}>
          <a href="https://github.com/s20534175-stack" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/santhosh-b-3440b32b7" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:s20534175@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
