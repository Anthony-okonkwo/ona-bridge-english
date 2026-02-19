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
              <li><Link href="/about" className={styles.links}>About the Program</Link></li>
              <li><Link href="/how-it-works" className={styles.links}>How It Works</Link></li>
              <li><Link href="/partners" className={styles.links}>Partner Organizations</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Learning</h4>
            <ul>
              <li><Link href="/courses" className={styles.links}>Courses</Link></li>
              <li><Link href="/coaching" className={styles.links}>Coaching & Support</Link></li>
              <li> <Link href="/start" className={styles.links}>Get Started</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/accessibility" className={styles.links}>Accessibility</Link></li>
              <li><Link href="/privacy" className={styles.links}>Privacy Policy</Link></li>
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