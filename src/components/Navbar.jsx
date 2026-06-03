import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoAccent}>SB</span><span className={styles.logoMuted}>.dev</span>
      </a>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`${styles.link} ${active === l.href.slice(1) ? styles.linkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            download
            className={`${styles.resumeBtn} btn btn-primary`}
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
          >
            Resume ↗
          </a>
        </li>
      </ul>
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
