"use client";

import Link from 'next/link';
import { 
  Heart, Globe, Shield, Award, 
  Smartphone, Languages, Accessibility,
  Settings, CheckCircle, BookOpen, Rocket
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function AboutPage() {
  const stats = [
    { icon: <Heart size={28} />, title: "Free Forever", subtitle: "No hidden fees or subscriptions" },
    { icon: <Globe size={28} />, title: "16 Languages", subtitle: "Native language support included" },
    { icon: <Shield size={28} />, title: "100% Secure", subtitle: "Your data is protected & safe" },
    { icon: <Award size={28} />, title: "State Funded", subtitle: "Backed by New York State" }
  ];

  const audiences = [
    { title: "New Immigrants & Refugees", desc: "Tailored resources for individuals adjusting to a new country and needing essential English skills." },
    { title: "Workers", desc: "Sector-specific vocabulary for retail, construction, hospitality, healthcare, and more." },
    { title: "Job Seekers", desc: "Interview preparation, resume building, and professional communication skills." },
    { title: "Parents & Caregivers", desc: "Vocabulary to navigate the school system, communicate with teachers, and handle pediatric care." },
    { title: "Pre-literate Learners", desc: "Audio and icon-first pathways for users who cannot read in their native language." },
    { title: "Non-Smartphone Users", desc: "Accessible SMS and Voice/IVR learning tools that work on any basic mobile phone." }
  ];

  const whyUs = [
    { icon: <Smartphone size={24} />, title: "Mobile-First platform", desc: "Designed for the devices people actually use. No computer or high-speed Wi-Fi required to complete lessons." },
    { icon: <Languages size={24} />, title: "Multi-lingual Support", desc: "Instructions, UI, and live coaching available in Spanish, Chinese, Bengali, Russian, French, and more." },
    { icon: <Accessibility size={24} />, title: "ADA & WCAG Compliant", desc: "Built from the ground up to be fully accessible for users with visual, auditory, or cognitive disabilities." }
  ];

  const partners = [
    { title: "Community Organizations", desc: "Partnering with local non-profits, libraries, and community centers to distribute resources directly to those who need them." },
    { title: "Local Government", desc: "Working alongside city and state agencies to ensure alignment with broader immigrant integration initiatives." },
    { title: "Literacy Coalitions", desc: "Collaborating with adult education experts to ensure our curriculum meets the highest pedagogical standards." }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>About ONA Bridge English™</h1>
        <p className={styles.subtitle}>Free English for adults living and working in New York State</p>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className={styles.missionSection}>
        <div className={styles.missionText}>
          <h2>Our Mission</h2>
          <p>
            ONA Bridge English™ is a groundbreaking digital learning platform designed 
            specifically for the unique needs of adult immigrants in New York.
          </p>
          <p>
            We believe language should never be a barrier to opportunity. By removing the traditional 
            obstacles of cost, time, and access, we empower New Yorkers to learn English on their own 
            terms—whenever and wherever they want.
          </p>
          <p>
            Whether you are a parent wanting to speak with your child's teacher, a worker aiming for a 
            promotion, or a newcomer navigating daily life, this platform was built for you.
          </p>
        </div>
        
        {/* Make sure to save your image in public/pics/about-mission.jpg */}
        <div className={styles.imageWrapper}>
          <img src="/pics/about-mission.jpg" alt="People collaborating" className={styles.missionImg} />
        </div>

        {/* --- STAT CARDS --- */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <h3>{stat.title}</h3>
              <p>{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHO WE SERVE --- */}
      <section className={styles.serveSection}>
        <h2 className={styles.sectionTitle}>Who We Serve</h2>
        <p className={styles.sectionSubtitle}>ONA Bridge English is designed to meet the diverse needs of New York's immigrant communities.</p>
        
        <div className={styles.serveGrid}>
          {audiences.map((item, i) => (
            <div key={i} className={styles.serveCard}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY ONA BRIDGE (with image) --- */}
      <section className={styles.whySection}>
        <h2 className={styles.sectionTitle}>Why ONA Bridge English?</h2>
        
        {/* Make sure to save your image in public/pics/about-why.jpg */}
        <div className={styles.imageWrapper}>
          <img src="/pics/about-why.jpg" alt="People looking at phone" className={styles.missionImg} />
        </div>

        <div className={styles.whyList}>
          {whyUs.map((item, i) => (
            <div key={i} className={styles.whyItem}>
              <div className={styles.whyIconCircle}>{item.icon}</div>
              <div className={styles.whyText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECT STATUS --- */}
      <section className={styles.statusSection}>
        <h2 className={styles.sectionTitle}>Project Status</h2>
        
        <div className={styles.statusGrid}>
          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <Settings size={20} className={styles.statusIcon} />
              <h3>Technology Development</h3>
            </div>
            <ul className={styles.statusList}>
              <li>✓ Core App Platform Built</li>
              <li>✓ SMS Integration Live</li>
              <li>✓ Voice/IVR Testing</li>
              <li className={styles.pending}>• Admin Dashboard (In Progress)</li>
            </ul>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <Accessibility size={20} className={styles.statusIcon} />
              <h3>Accessibility</h3>
            </div>
            <ul className={styles.statusList}>
              <li>✓ Screen Reader Optimization</li>
              <li>✓ High Contrast Modes</li>
              <li>✓ Keyboard Navigation</li>
              <li>✓ WCAG 2.1 AA Certified</li>
            </ul>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <BookOpen size={20} className={styles.statusIcon} />
              <h3>Content Translation</h3>
            </div>
            <ul className={styles.statusList}>
              <li>✓ English & Spanish Complete</li>
              <li className={styles.pending}>• Chinese (In Progress)</li>
              <li className={styles.pending}>• Bengali (In Progress)</li>
              <li className={styles.pending}>• French & Haitian Creole (Upcoming)</li>
            </ul>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusHeader}>
              <Rocket size={20} className={styles.statusIcon} />
              <h3>Pilot Launch</h3>
            </div>
            <ul className={styles.statusList}>
              <li>✓ User Testing Phase 1</li>
              <li>✓ Feedback Integration</li>
              <li className={styles.pending}>• Partner Organization Onboarding</li>
              <li className={styles.pending}>• Official Public Launch (Target: Q3 2026)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PARTNERS --- */}
      <section className={styles.partnersSection}>
        <h2 className={styles.sectionTitle}>Working with Partners</h2>
        <div className={styles.partnersGrid}>
          {partners.map((partner, i) => (
            <div key={i} className={styles.partnerCard}>
              <h3>{partner.title}</h3>
              <p>{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to get started?</h2>
          <p>Improve your English for work, life, and community.</p>
          <div className={styles.btnGroup}>
            <Link href="/how-it-works" className={styles.whiteBtn}>How It Works</Link>
            <Link href="/start" className={styles.orangeBtn}>Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}