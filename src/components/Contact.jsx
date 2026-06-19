import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const SERVICE_ID = 'service_tri3w4b';
const TEMPLATE_ID = 'j4p5hfq';
const PUBLIC_KEY = 'EHl5vZOFboURRbuOK';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className="section-label">Let's connect</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className={styles.text}>
              I'm actively looking for <strong style={{color:'var(--accent)'}}>fresher developer roles</strong>. Whether you have an opportunity, a project, or just want to say hi — my inbox is always open.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:s20534175@gmail.com" className={styles.contactLink}>
                <span>📧</span> s20534175@gmail.com
              </a>
              <a href="tel:+917358120547" className={styles.contactLink}>
                <span>📱</span> +91 73581 20547
              </a>
              <a href="https://linkedin.com/in/santhosh-b-3440b32b7" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>💼</span> linkedin.com/in/santhosh-b
              </a>
              <a href="https://github.com/s20534175-stack" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span>🐙</span> github.com/s20534175-stack
              </a>
            </div>
          </div>

          <div className={`${styles.formCard} reveal`}>
            {status === 'success' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out! I'll get back to you as soon as possible. 🚀</p>
                <button className="btn btn-outline" onClick={() => setStatus(null)} style={{marginTop:'1rem'}}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required
                      placeholder="Your Name"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} required
                      placeholder="you@company.com"
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Subject *</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} required
                    placeholder="Job Opportunity / Collaboration / Hello"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message *</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required
                    placeholder="Tell me about the role or opportunity..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={5}
                  />
                </div>
                {status === 'error' && (
                  <div className={styles.error}>⚠️ Something went wrong. Please try again.</div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'loading'}
                  style={{width:'100%', justifyContent:'center'}}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message ↗'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
