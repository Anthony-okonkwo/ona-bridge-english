import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* --- Pre-Footer CTA (Serving New Yorkers) --- */}
      <section className={styles.servingSection}>
        <div className={styles.servingContent}>
          <h2>Serving New Yorkers Across the State</h2>
          <p>Free for individuals who live or work in New York</p>
          <Link href="/start" className={styles.startNowBtn}>
            Start Now
          </Link>
        </div>
      </section>

      {/* --- Main Footer --- */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h4>About</h4>
            <ul>
              <li>About the Program</li>
              <li>How It Works</li>
              <li>Partner Organizations</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Learning</h4>
            <ul>
              <li>Courses</li>
              <li>Coaching & Support</li>
              <li>Get Started</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <ul>
              <li>Accessibility</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2026 ONA Bridge English™. Free for New York residents and workers.</p>
        </div>
      </footer>

      {/* --- FIXED HELP BUTTON (Floating) --- */}
      <button className={styles.fixedHelpBtn} aria-label="Help and Support">
        <HelpCircle size={28} strokeWidth={2} />
      </button>
    </>
  );
}