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
              <div className={styles.role}>Robotics & Automation Intern</div>
              <div className={styles.company}>Kodacy — Remote, India</div>
            </div>
            <div className={styles.date}>Dec 2023 — Jan 2024</div>
          </div>
          <ul className={styles.list}>
            <li>Developed and tested <strong>3 robotics prototypes</strong> using Arduino and ESP32 microcontrollers, improving project delivery efficiency by <strong>25%</strong> through systematic testing protocols.</li>
            <li>Applied Python and Embedded C to <strong>automate 5+ repetitive tasks</strong> in sensor data collection and motor control, reducing manual processing time by <strong>40%</strong>.</li>
            <li>Collaborated with a cross-functional team of 4 engineers to deliver 3 project modules ahead of schedule using IoT-based real-time monitoring and control solutions.</li>
            <li>Implemented <strong>wireless communication protocols</strong> (Bluetooth, GSM) and contributed to 2 successful proof-of-concept demonstrations in embedded systems and automation.</li>
          </ul>
          <div className={styles.tags}>
            <span className="tag">Arduino</span>
            <span className="tag">ESP32</span>
            <span className="tag">Python</span>
            <span className="tag">Embedded C</span>
            <span className="tag">Bluetooth</span>
            <span className="tag">GSM</span>
            <span className="tag">IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
