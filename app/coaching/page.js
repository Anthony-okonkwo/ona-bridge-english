"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MessageSquare, Phone, Video, Clock, 
  Globe, Headphones, ChevronDown, ChevronUp,
  HelpCircle 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function CoachingPage() {
  // State for FAQ toggles
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const methods = [
    {
      icon: <MessageSquare size={32} />,
      title: "Chat",
      desc: "Text directly with a coach for quick questions or help.",
      list: ["Instant responses", "Share screenshots", "Ask grammar help", "Fix login issues"]
    },
    {
      icon: <Phone size={32} />,
      title: "Call",
      desc: "Speak directly to a coach for practice or detailed support.",
      list: ["Voice coaching", "Speaking practice", "Pronunciation help", "Tech support call"]
    },
    {
      icon: <Video size={32} />,
      title: "Video",
      desc: "Face-to-face coaching for a classroom-like experience.",
      list: ["Visual learning", "Screen sharing", "Lip reading support", "Personal connection"]
    }
  ];

  const languages = [
    "Spanish", "Chinese", "Russian", "Bengali",
    "Arabic", "French", "Haitian Creole", "Korean",
    "Urdu", "Polish", "Italian", "Punjabi"
  ];

  const faqs = [
    {
      q: "Is coaching really free?",
      a: "Yes, 100% free. It is funded by the New York State Office for New Americans (ONA) to help residents improve their English skills."
    },
    {
      q: "How long can I talk to a coach?",
      a: "Sessions typically last 15-20 minutes, but you can call as many times as you need throughout the day."
    },
    {
      q: "Do I need an appointment?",
      a: "No appointment needed! You can chat or call anytime during our operating hours. For video calls, we recommend a scheduled slot."
    },
    {
      q: "What level do I need to be at?",
      a: "Coaches work with all levels, from complete beginners to advanced speakers. They will adjust their speed and vocabulary for you."
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>Live Coaching & Support</h1>
        <p className={styles.subtitle}>Get personal help from real English coaches whenever you need it</p>
      </section>

      {/* --- 3 WAYS TO CONNECT --- */}
      <section className={styles.methodsSection}>
        <h2 className={styles.sectionTitle}>Three Ways to Connect</h2>
        <div className={styles.methodsGrid}>
          {methods.map((m, i) => (
            <div key={i} className={styles.methodCard}>
              <div className={styles.iconCircle}>{m.icon}</div>
              <h3>{m.title}</h3>
              <p className={styles.methodDesc}>{m.desc}</p>
              <ul className={styles.methodList}>
                {m.list.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- SCHEDULE SECTION --- */}
      <section className={styles.scheduleSection}>
        <h2 className={styles.sectionTitle}>When Coaches are Available</h2>
        <div className={styles.scheduleContainer}>
          <div className={styles.timeCard}>
            <Clock size={24} className={styles.clockIcon} />
            <div className={styles.timeInfo}>
              <strong>Monday - Friday</strong>
              <span>8:00 AM - 10:00 PM ET</span>
            </div>
          </div>
          <div className={styles.timeCard}>
            <Clock size={24} className={styles.clockIcon} />
            <div className={styles.timeInfo}>
              <strong>Saturday</strong>
              <span>9:00 AM - 5:00 PM ET</span>
            </div>
          </div>
          <div className={styles.timeCard}>
            <Clock size={24} className={styles.clockIcon} />
            <div className={styles.timeInfo}>
              <strong>Sunday</strong>
              <span>10:00 AM - 4:00 PM ET</span>
            </div>
          </div>
        </div>
        <p className={styles.timezoneNote}>All times are in Eastern Time (New York)</p>
      </section>

      {/* --- MULTILINGUAL SUPPORT --- */}
      <section className={styles.langSection}>
        <div className={styles.langHeader}>
          <Globe size={40} className={styles.sectionIcon} />
          <h2>Multilingual Support</h2>
          <p>Our coaches speak over 12 languages. Get help in the language you are most comfortable with.</p>
        </div>
        <div className={styles.langGrid}>
          {languages.map((lang, i) => (
            <div key={i} className={styles.langBadge}>{lang}</div>
          ))}
        </div>
      </section>

      {/* --- DEAF SUPPORT (SMILE IMAGE) --- */}
      <section className={styles.accessSupportSection}>
        <div className={styles.accessContainer}>
          <div className={styles.accessText}>
            <div className={styles.headsetIcon}><Headphones size={32} /></div>
            <h2>Support for Deaf & Hard-of-Hearing Users</h2>
            <p>We offer specialized support for deaf and hard-of-hearing learners. </p>
            <ul className={styles.checkList}>
                <li>TTY/TDD access available</li>
              <li>Video chat with ASL interpreters</li>
              <li>Real-time captioning</li>
              <li>Text-based coaching</li>
              <li>Visual learning materials</li>

            </ul>
          </div>
          <div className={styles.accessImageSide}>
        <img src="\pics\SmileTile.jpeg" alt="SMILE tiles" className={styles.coachingImg} />
      </div>
          <div className={styles.accessImageSide}>
            {/* Make sure to save your 'smile-tiles.jpg' or similar 
              image in the public folder 
            */}
            <div className={styles.imagePlaceholder}>
               {/* Use a placeholder div or next/image here */}
               <div className={styles.smileTiles}>
                 <span>S</span><span>M</span><span>I</span><span>L</span><span>E</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
              <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className={styles.ctaSection}>
        <h2>Start Learning with Real Support</h2>
        <p>Join thousands of New Yorkers improving their English for free</p>
        <Link href="/start" className={styles.ctaBtn}>
          Get Started Now
        </Link>
      </section>

      <Footer />
    </main>
  );
}