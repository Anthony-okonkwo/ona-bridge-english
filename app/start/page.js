"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function StartPage() {
  // Simple state to handle the "radio" button selection visuals
  const [method, setMethod] = useState('app'); // default to 'app'
  const [inNY, setInNY] = useState(null); // 'yes' or 'no'

  return (
    <main className={styles.pageWrapper}>
      <Navbar />
      
      {/* --- HEADER SECTION --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>Get Started</h1>
        <p className={styles.subtitle}>Sign up in less than 2 minutes</p>
        <div className={styles.badges}>
          <span className={styles.orangeBadge}>100% FREE</span>
          <span className={styles.blueBadge}>New York Only</span>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <form>
            {/* Preferred Language */}
            <div className={styles.inputGroup}>
              <label>Preferred Language *</label>
              <select className={styles.selectInput}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Chinese</option>
              </select>
              <span className={styles.helperText}>All instructions will be in this language</span>
            </div>

            {/* Name */}
            <div className={styles.inputGroup}>
              <label>Your Name *</label>
              <input type="text" placeholder="First name or preferred name" className={styles.textInput} />
              <span className={styles.helperText}>You can use any name you prefer</span>
            </div>

            {/* ZIP Code */}
            <div className={styles.inputGroup}>
              <label>New York ZIP Code *</label>
              <input type="text" placeholder="10001" className={styles.textInput} />
              <span className={styles.helperText}>To verify you live or work in New York State</span>
            </div>

            {/* Live in NY Question (Radio Cards) */}
            <div className={styles.inputGroup}>
              <label>Do you live or work in New York State? *</label>
              
              <div 
                className={`${styles.radioCard} ${inNY === 'yes' ? styles.selected : ''}`}
                onClick={() => setInNY('yes')}
              >
                <div className={`${styles.radioCircle} ${inNY === 'yes' ? styles.activeRadio : ''}`}></div>
                <span>Yes, I live or work in New York</span>
              </div>

              <div 
                className={`${styles.radioCard} ${inNY === 'no' ? styles.selected : ''}`}
                onClick={() => setInNY('no')}
              >
                <div className={`${styles.radioCircle} ${inNY === 'no' ? styles.activeRadio : ''}`}></div>
                <span>No, I'm outside New York</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className={styles.inputGroup}>
              <label>Phone Number *</label>
              <input type="tel" placeholder="(555) 123-4567" className={styles.textInput} />
              <span className={styles.helperText}>For login and lesson delivery. We'll never share this.</span>
            </div>

            {/* Learning Method (Complex Radio Cards) */}
            <div className={styles.inputGroup}>
              <label>How would you like to learn? *</label>
              
              {/* Option 1: App */}
              <div 
                className={`${styles.methodCard} ${method === 'app' ? styles.selected : ''}`}
                onClick={() => setMethod('app')}
              >
                <div className={`${styles.radioCircle} ${method === 'app' ? styles.activeRadio : ''}`}></div>
                <div className={styles.methodText}>
                  <strong>Smartphone App</strong>
                  <p>Full-featured app with video, audio, and interactive lessons</p>
                </div>
              </div>

              {/* Option 2: SMS */}
              <div 
                className={`${styles.methodCard} ${method === 'sms' ? styles.selected : ''}`}
                onClick={() => setMethod('sms')}
              >
                <div className={`${styles.radioCircle} ${method === 'sms' ? styles.activeRadio : ''}`}></div>
                <div className={styles.methodText}>
                  <strong>SMS / Text Message</strong>
                  <p>Learn via text on any phone (no smartphone needed)</p>
                </div>
              </div>

              {/* Option 3: Voice */}
              <div 
                className={`${styles.methodCard} ${method === 'voice' ? styles.selected : ''}`}
                onClick={() => setMethod('voice')}
              >
                <div className={`${styles.radioCircle} ${method === 'voice' ? styles.activeRadio : ''}`}></div>
                <div className={styles.methodText}>
                  <strong>Voice / Phone Call</strong>
                  <p>Interactive voice lessons via phone call</p>
                </div>
              </div>
            </div>

            {/* Privacy Box */}
            <div className={styles.privacyBox}>
              <p>
                <strong>Privacy Promise:</strong> We will never collect or share your immigration status. 
                Your information is secure and confidential. <Link href="/privacy">Read our privacy policy</Link>
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              Start Learning Free
            </button>

          </form>

          <p className={styles.helpText}>Need help signing up? <a href="tel:9144465840">Call (914) 446-5840</a></p>
        </div>
      </section>

      <Footer />
    </main>
  );
}