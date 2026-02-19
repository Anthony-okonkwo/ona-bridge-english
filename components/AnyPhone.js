import { MessageSquareText, PhoneCall, Smartphone } from 'lucide-react';
import styles from './AnyPhone.module.css';

export default function AnyPhone() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Works on Any Phone</h2>
        <p className={styles.description}>
          No smartphone? No problem. Access lessons by text message (SMS) 
          or voice call (IVR). Our platform works on any phone, including 
          basic feature phones.
        </p>

        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><MessageSquareText size={24} /></div>
            <div className={styles.featureText}>
              <h4>SMS Lessons</h4>
              <p>Learn through interactive text messages</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><PhoneCall size={24} /></div>
            <div className={styles.featureText}>
              <h4>Voice Calls</h4>
              <p>Listen and learn over a simple phone call</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}><Smartphone size={24} /></div>
            <div className={styles.featureText}>
              <h4>Smartphone App</h4>
              <p>Full featured experience for iOS and Android</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {/* Replace src with your exported image path later */}
        <img 
          src="\pics\LearnWithPhone.jpeg" 
          alt="Learners using phones" 
          className={styles.mainImage} 
        />
      </div>
    </section>
  );
}