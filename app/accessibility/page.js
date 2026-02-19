"use client";

import { 
  Monitor, Volume2, Phone, Eye, Ear, 
  Type, Captions, Keyboard, BookOpen, 
  FileText, CheckCircle, HelpCircle 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function AccessibilityPage() {
  const features = [
    {
      icon: <Monitor />,
      title: "Screen Reader Compatibility",
      desc: "Fully compatible with JAWS, NVDA, and VoiceOver screen readers.",
      list: ["Semantic HTML structure", "ARIA labels on all elements", "Keyboard navigability", "Alt text for images"]
    },
    {
      icon: <Volume2 />,
      title: "Text-to-Speech",
      desc: "Native support for reading site content aloud for low-literacy users.",
      list: ["One-click audio player", "Adjustable speed", "Highlights text as it reads", "Male/Female voice options"]
    },
    {
      icon: <Phone />,
      title: "TTY / TDD Support",
      desc: "Direct integration with telecommunication devices for the deaf.",
      list: ["711 Relay compatible", "Real-time text (RTT)", "Video relay support", "Easy-to-read transcripts"]
    },
    {
      icon: <Eye />,
      title: "High Contrast Mode",
      desc: "Features a dedicated mode for users with low vision or color blindness.",
      list: ["wcag AAA contrast ratio", "Yellow on Black option", "White on Black option", "Color-blind safe palette"]
    },
    {
      icon: <Ear />,
      title: "Deaf / Hearing Impaired",
      desc: "Tools ensuring full access to audio content.",
      list: ["Visual notifications", "Sign language videos", "Transcript availability", "Vibration alerts (Mobile)"]
    },
    {
      icon: <Type />,
      title: "Large Text & Zoom",
      desc: "Layouts that scale perfectly up to 200% without breaking.",
      list: ["Scalable vector icons", "Relative font sizing", "No horizontal scrolling", "Reflowable text"]
    },
    {
      icon: <Captions />,
      title: "Closed Captions",
      desc: "All video content comes with accurate, synchronized captions.",
      list: ["English & Spanish CC", "Customizable size/color", "Background opacity", "Searchable transcripts"]
    },
    {
      icon: <Keyboard />,
      title: "Flexible Input Methods",
      desc: "Navigate the entire site using the tool that works best for you.",
      list: ["Full keyboard support", "Voice command ready", "Switch device support", "Touchscreen friendly"]
    }
  ];

  const languages = [
    "English", "Spanish", "French", "Chinese", 
    "Russian", "Bengali", "Arabic", "Haitian Creole"
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>Accessibility & Inclusion</h1>
        <p className={styles.subtitle}>Built for everyone — ensuring full WCAG compliance</p>
      </section>

      {/* --- INTRO TEXT --- */}
      <div className={styles.introBox}>
        <p>
          ONA Bridge English™ is dedicated to creating an inclusive digital learning experience 
          regardless of ability, language, or device type.
        </p>
      </div>

      {/* --- ACCESSIBILITY FEATURES LIST --- */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionHeader}>Accessibility Features</h2>
        <div className={styles.featuresList}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <div className={styles.featureContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul>
                  {item.list.map((li, i) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRE-LITERATE SECTION --- */}
      <section className={styles.preLiterateSection}>
        <div className={styles.preContent}>
          <div className={styles.bookIcon}><BookOpen size={40} /></div>
          <div className={styles.textSide}>
            <h2>Pre-Literate Learning Tools</h2>
            <p>Tools designed for users with limited or no literacy in their native language.</p>
            <ul className={styles.checkList}>
              <li><CheckCircle size={16} /> Icon-based navigation</li>
              <li><CheckCircle size={16} /> Picture-based login</li>
              <li><CheckCircle size={16} /> Audio instructions on hover</li>
              <li><CheckCircle size={16} /> Microphone input enabled</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- MULTI-LINGUAL GUIDES --- */}
      <section className={styles.langSection}>
        <h2>Multi-Lingual User Guides</h2>
        <p>Complete accessibility guides available in the following languages:</p>
        <div className={styles.langGrid}>
          {languages.map((lang, i) => (
            <button key={i} className={styles.langBtn}>{lang}</button>
          ))}
        </div>
      </section>

      {/* --- COMPLIANCE STANDARDS --- */}
      <section className={styles.complianceSection}>
        <h2>Standards Compliance</h2>
        <div className={styles.complianceGrid}>
          <div className={styles.compCard}>
            <FileText size={32} />
            <h3>WCAG 2.1 AA</h3>
            <p>Adheres to Web Content Accessibility Guidelines Level AA.</p>
          </div>
          <div className={styles.compCard}>
            <CheckCircle size={32} />
            <h3>ADA Compliant</h3>
            <p>Meets Americans with Disabilities Act standards.</p>
          </div>
          <div className={styles.compCard}>
            <Monitor size={32} />
            <h3>Section 508</h3>
            <p>Compliant with federal electronic accessibility laws.</p>
          </div>
        </div>
      </section>

      {/* --- NEED HELP CTA --- */}
      <section className={styles.helpSection}>
        <h3>Need Accessibility Help?</h3>
        <p>Contact our dedicated support team for assistance.</p>
        <button className={styles.contactBtn}>Contact Support</button>
      </section>

      <Footer />
    </main>
  );
}