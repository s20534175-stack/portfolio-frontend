import { useEffect, useRef } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  let mx = 0, my = 0, tx = 0, ty = 0;

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = (mx - 6) + 'px';
      cursor.style.top = (my - 6) + 'px';
    };

    document.addEventListener('mousemove', onMove);
    const interval = setInterval(() => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      trail.style.left = (tx - 16) + 'px';
      trail.style.top = (ty - 16) + 'px';
    }, 16);

    const handleHover = (e) => {
      if (e.target.closest('a, button, .btn')) {
        cursor.style.transform = 'scale(2.5)';
      } else {
        cursor.style.transform = 'scale(1)';
      }
    };
    document.addEventListener('mouseover', handleHover);

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', handleHover);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
      <div className="bg-grid" />
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
