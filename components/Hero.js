import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Learn English for Free —<br /> Anywhere in New York
        </h1>

        <p className={styles.subtitle}>
          ONA Bridge English™ provides free mobile English lessons and live
          coaching for immigrants living or working in New York State.
        </p>

        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.orange}`}>100% Free</span>
          <span className={styles.badge}>Works on Any Phone</span>
        </div>
 
        <div className={styles.buttonGroup}>
          <Link href="/start" className={styles.primaryBtn}>
            Start Learning Free
          </Link>
          <Link href="/how-it-works" className={styles.secondaryBtn}>
            See How It Works
          </Link>
        </div>
      </div>

     <div className={styles.imageContainer}>
        <div className={styles.yellowBox}>
          {/* Replace '/hero-phone.png' with the actual path 
            to your exported Figma image 
          */}
          <Image 
            src="/pics/hero-phone.jpeg" 
            alt="One Bridge English on Mobile"
            width={550}
            height={380}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}