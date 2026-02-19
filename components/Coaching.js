import { MessageSquare, Phone, Video } from 'lucide-react';
import styles from './Coaching.module.css';
import Link from 'next/link'; 

export function LiveCoaching() {
  return (
    <section className={styles.coachingSection}>
      <div className={styles.imageSide}>
        <img src="\pics\SmileTile.jpeg" alt="SMILE tiles" className={styles.coachingImg} />
      </div>
      <div className={styles.textSide}>
        <h2>Live Coaching Available</h2>
        <p>Get personalized help from real English coaches. </p>
        <p>Available 10am-10pm ET, seven days a week.</p>
        <div className={styles.contactList}>
          <div className={styles.contactItem}><MessageSquare size={20} /> Chat with a coach</div>
          <div className={styles.contactItem}><Phone size={20} /> Call for help</div>
          <div className={styles.contactItem}><Video size={20} /> Video call with interpreter</div>
        </div>
        <Link href="/coaching" className={styles.viewAllBtn}>
        Learn About Coaching
      </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <h4>About</h4>
          <ul>
            <li>About the Program</li>
            <li>How it Works</li>
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
        <div className={styles.footerCol}>
          <h4>Language</h4>
          <select style={{padding: '5px', borderRadius: '4px'}}>
            <option>English</option>
          </select>
        </div>
      </div>
      <p className={styles.copyright}>© 2026 One Bridge English™. Free for New York residents and workers.</p>
    </footer>
  );
}