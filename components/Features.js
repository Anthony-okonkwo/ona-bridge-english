import { Users, Briefcase, Baby, Search, BookOpen, Phone } from 'lucide-react';
import styles from './Features.module.css';

export default function Features() {
  const features = [
    { icon: <Users size={32} color="#0F4C5C" />, label: "New Immigrants" },
    { icon: <Briefcase size={32} color="#0F4C5C" />, label: "Workers" },
    { icon: <Baby size={32} color="#0F4C5C" />, label: "Parents" },
    { icon: <Search size={32} color="#0F4C5C" />, label: "Job Seekers" },
    { icon: <BookOpen size={32} color="#0F4C5C" />, label: "Pre-literate Learners" },
    { icon: <Phone size={32} color="#0F4C5C" />, label: "Non-smartphone Users" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Who It's For</h2>
      <p className={styles.subtitle}>
        Designed for New Yorkers who need flexible, simple, and free English learning.
      </p>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}