"use client";

import { 
  Globe, Clock, TrendingUp, Award, Phone, 
  Check, Smartphone, MessageSquare 
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function HowItWorksPage() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Language",
      desc: "Select from 16 supported languages including Spanish, Chinese, Bengali, Russian, Arabic, French, Haitian Creole, Korean, Polish, Urdu, Italian, Punjabi, Hebrew, Tamil, and Tagalog.",
      icon: <Globe size={16} />,
      tag: "16 languages available"
    },
    {
      id: 2,
      title: "Take Quick 3-Minute Lessons",
      desc: "Learn English in bite-sized lessons designed to fit your schedule. Perfect for busy workers, parents, and job seekers.",
      icon: <Clock size={16} />,
      tag: "3-minute lessons"
    },
    {
      id: 3,
      title: "Track Your Progress",
      desc: "See how far you've come with progress tracking, streaks, and achievement badges. Stay motivated as you advance.",
      icon: <TrendingUp size={16} />,
      tag: "Visual progress tracking"
    },
    {
      id: 4,
      title: "Get Your Certificate",
      desc: "Complete courses and earn certificates you can share with employers, schools, and community organizations.",
      icon: <Award size={16} />,
      tag: "Official certificates"
    },
    {
      id: 5,
      title: "Access Coaching Anytime",
      desc: "Connect with live English coaches via chat, call, or video. Get help when you need it, 8am-10pm ET, seven days a week.",
      icon: <Phone size={16} />,
      tag: "Live support available"
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>How ONA Bridge English Works</h1>
        <p className={styles.subtitle}>Simple, flexible, and designed for busy New Yorkers</p>
      </section>

      {/* --- 5 STEPS SECTION --- */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className={styles.stepTag}>
                  {step.icon} <span>{step.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3 WAYS TO LEARN SECTION --- */}
      <section className={styles.methodsSection}>
        <h2 className={styles.sectionTitle}>Three Ways to Learn</h2>
        
        <div className={styles.methodsGrid}>
          {/* Card 1: Smartphone App */}
          <div className={styles.methodCard}>
            <h3>Smartphone App</h3>
            <p className={styles.methodDesc}>Full-featured mobile app with interactive lessons, progress tracking, and coaching.</p>
            <ul className={styles.featureList}>
              <li><Check size={14} /> Rich multimedia content</li>
              <li><Check size={14} /> Offline mode available</li>
              <li><Check size={14} /> Push notifications</li>
              <li><Check size={14} /> Video coaching</li>
            </ul>
          </div>

          {/* Card 2: SMS / Text */}
          <div className={styles.methodCard}>
            <h3>SMS / Text</h3>
            <p className={styles.methodDesc}>Learn via text message on any phone. No smartphone or internet required.</p>
            <ul className={styles.featureList}>
              <li><Check size={14} /> Works on basic phones</li>
              <li><Check size={14} /> No data plan needed</li>
              <li><Check size={14} /> Menu-driven lessons</li>
              <li><Check size={14} /> Text-based support</li>
            </ul>
          </div>

          {/* Card 3: Voice / IVR */}
          <div className={styles.methodCard}>
            <h3>Voice / IVR</h3>
            <p className={styles.methodDesc}>Call in and learn through interactive voice response system.</p>
            <ul className={styles.featureList}>
              <li><Check size={14} /> Audio lessons</li>
              <li><Check size={14} /> Speaking practice</li>
              <li><Check size={14} /> Pronunciation help</li>
              <li><Check size={14} /> Live coach option</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of New Yorkers improving their English for free</p>
        <Link href="/start" className={styles.ctaBtn}>
          Get Started Now
        </Link>
      </section>

      <Footer />
    </main>
  );
}