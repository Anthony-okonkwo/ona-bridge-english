"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Award, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function CoursesPage() {
  // Default to the first category
  const [activeTab, setActiveTab] = useState('Beginner');

  // The data from your screenshots
  const courseData = {
    Beginner: {
      title: "Beginner Courses",
      subtitle: "Perfect for those just starting their English learning journey",
      courses: [
        { title: "English Alphabet & Sounds", level: "Beginner", duration: "2 weeks" },
        { title: "Basic Greetings", level: "Beginner", duration: "1 week" },
        { title: "Numbers & Time", level: "Beginner", duration: "1 week" },
        { title: "Daily Activities", level: "Beginner", duration: "2 weeks" },
        { title: "Family & Friends", level: "Beginner", duration: "1 week" },
      ]
    },
    Intermediate: {
      title: "Intermediate Courses",
      subtitle: "Build on your foundation with practical everyday English",
      courses: [
        { title: "Having Conversations", level: "Intermediate", duration: "3 weeks" },
        { title: "Shopping & Money", level: "Intermediate", duration: "2 weeks" },
        { title: "Transportation", level: "Intermediate", duration: "2 weeks" },
        { title: "At the Doctor", level: "Intermediate", duration: "2 weeks" },
        { title: "Housing & Rent", level: "Intermediate", duration: "2 weeks" },
      ]
    },
    Advanced: {
      title: "Advanced Courses",
      subtitle: "Master professional and academic English skills",
      courses: [
        { title: "Job Interviews", level: "Advanced", duration: "3 weeks" },
        { title: "Business Writing", level: "Advanced", duration: "4 weeks" },
        { title: "Academic English", level: "Advanced", duration: "4 weeks" },
        { title: "Professional Emails", level: "Advanced", duration: "2 weeks" },
        { title: "Public Speaking", level: "Advanced", duration: "3 weeks" },
      ]
    },
    "Sector-Specific": {
      title: "Sector-Specific Courses",
      subtitle: "Learn English for your specific industry or profession",
      courses: [
        { title: "Healthcare English", level: "Sector-Specific", duration: "4 weeks" },
        { title: "Hospitality English", level: "Sector-Specific", duration: "3 weeks" },
        { title: "IT & Tech English", level: "Sector-Specific", duration: "4 weeks" },
        { title: "Retail English", level: "Sector-Specific", duration: "2 weeks" },
        { title: "Construction English", level: "Sector-Specific", duration: "3 weeks" },
      ]
    },
    "Life Skills": {
      title: "Life Skills Courses",
      subtitle: "Essential skills for daily life in New York",
      courses: [
        { title: "Financial Literacy", level: "Life Skills", duration: "3 weeks" },
        { title: "Parenting & School", level: "Life Skills", duration: "3 weeks" },
        { title: "Civics & Community", level: "Life Skills", duration: "4 weeks" },
        { title: "Digital Literacy", level: "Life Skills", duration: "2 weeks" },
        { title: "Health & Wellness", level: "Life Skills", duration: "2 weeks" },
      ]
    }
  };

  const currentData = courseData[activeTab];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>English Courses</h1>
        <p className={styles.headerSubtitle}>Choose from over 50 courses designed for your goals</p>
      </section>

      {/* --- TABS SECTION --- */}
      <section className={styles.contentSection}>
        <div className={styles.tabsContainer}>
          {Object.keys(courseData).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC COURSE LIST --- */}
        <div className={styles.courseListWrapper}>
          <h2 className={styles.categoryTitle}>{currentData.title}</h2>
          <p className={styles.categorySubtitle}>{currentData.subtitle}</p>

          <div className={styles.courseGrid}>
            {currentData.courses.map((course, index) => (
              <div key={index} className={styles.courseCard}>
                <div className={styles.cardContent}>
                  <h3>{course.title}</h3>
                  <div className={styles.cardMeta}>
                    <span className={styles.levelTag}>{course.level}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.duration}>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EARN CERTIFICATES SECTION --- */}
      <section className={styles.certSection}>
        <div className={styles.certContent}>
          <div className={styles.certText}>
            <h2>Earn Certificates</h2>
            <p className={styles.certDesc}>
              Complete any course to earn an official ONA Bridge English™ certificate. 
              Share your achievement with employers, schools, and community organizations.
            </p>
            <ul className={styles.checkList}>
              <li><CheckCircle size={16} /> Official certificate of completion</li>
              <li><CheckCircle size={16} /> Digital and printable format</li>
              <li><CheckCircle size={16} /> Shareable on LinkedIn</li>
              <li><CheckCircle size={16} /> Recognized by NY employers</li>
            </ul>
          </div>

          <div className={styles.badgesGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.badgeItem}>
                <div className={styles.badgeCircle}>
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <span>Level {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className={styles.ctaSection}>
        <h2>Start Your First Course</h2>
        <p>All courses are 100% free for New York residents</p>
        <Link href="/start" className={styles.ctaBtn}>
          Get Started Now
        </Link>
      </section>

      <Footer />
    </main>
  );
}