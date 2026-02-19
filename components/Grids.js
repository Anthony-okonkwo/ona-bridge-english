import Link from 'next/link'; // Added Link import
import { 
  Book, HeartPulse, Utensils, Monitor, 
  Coins, GraduationCap, Users, Smartphone,
  Ear, Eye, Brush, Languages
} from 'lucide-react';
import styles from './Grids.module.css';

export function CourseCategories() {
  const categories = [
    { icon: <Book />, label: "Beginner English", color: "#E0F2F1" },
    { icon: <HeartPulse />, label: "Healthcare English", color: "#FFF3E0" },
    { icon: <Utensils />, label: "Hospitality English", color: "#E8EAF6" },
    { icon: <Monitor />, label: "IT & Tech English", color: "#E0F7FA" },
    { icon: <Coins />, label: "Financial Literacy", color: "#F1F8E9" },
    { icon: <GraduationCap />, label: "Parenting & School", color: "#F3E5F5" },
    { icon: <Users />, label: "Civics & Community", color: "#EFEBE9" },
    { icon: <Smartphone />, label: "Digital Literacy", color: "#FFFDE7" },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Course Categories</h2>
      <p className={styles.subtitle}>Choose from specialized English courses designed for your life and work</p>
      
      <div className={styles.categoryGrid}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardIcon} style={{ backgroundColor: cat.color }}>
              {cat.icon}
            </div>
            <span className={styles.cardLabel}>{cat.label}</span>
          </div>
        ))}
      </div>
      
      {/* UPDATED: Now a Link instead of a generic button */}
      <Link href="/courses" className={styles.viewAllBtn}>
        View All Courses
      </Link>
    </section>
  );
}

export function BuiltForEveryone() {
  const features = [
    { icon: <Ear />, label: "Deaf / Hard-of-hearing" },
    { icon: <Eye />, label: "Blind / Low-vision" },
    { icon: <Brush />, label: "Color-blind safe" },
    { icon: <Languages />, label: "Low-literacy Friendly" },
  ];

  return (
    <section className={`${styles.container} ${styles.grayBg}`}>
      <h2 className={styles.title}>Built for Everyone</h2>
      <p className={styles.subtitle}>Designed to meet ADA and accessibility standards</p>
      
      <div className={styles.accessGrid}>
        {features.map((feat, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardIcon} style={{backgroundColor: '#f0f0f0'}}>
              {feat.icon}
            </div>
            <span className={styles.cardLabel}>{feat.label}</span>
          </div>
        ))}
      </div>
      
      <Link href="/accessibility" className={styles.linkText}>
        Learn more about our accessibility features →
      </Link>
    </section>
  );
}