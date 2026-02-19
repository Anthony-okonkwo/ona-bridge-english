"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react'; // Added icon for success state
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function StartPage() {
  // Form step state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form data states
  const [method, setMethod] = useState('app'); // default to 'app'
  const [inNY, setInNY] = useState(null); // 'yes' or 'no'
  const [formData, setFormData] = useState({
    language: 'English',
    name: '',
    zipCode: '',
    phone: ''
  });

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // The submit logic
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Gather all the data
    const payload = {
      ...formData,
      livesInNY: inNY,
      learningMethod: method
    };

    try {
      // 2. Send the data to our next.js API
      const response = await fetch('/api/learners', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok){
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log("Server responded:", result);
      
      // 3. Show the success screen! (
      setIsSubmitted(true);

    } catch (error) {
      console.error("❌ Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <Navbar />
      
      {/* Hide the header if submitted to match the clean success screen design */}
      {!isSubmitted && (
        <section className={styles.header}>
          <h1 className={styles.title}>Get Started</h1>
          <p className={styles.subtitle}>Sign up in less than 2 minutes</p>
          <div className={styles.badges}>
            <span className={styles.orangeBadge}>100% FREE</span>
            <span className={styles.blueBadge}>New York Only</span>
          </div>
        </section>
      )}

      {/* --- FORM / SUCCESS SECTION --- */}
      <section className={styles.formSection} style={{ marginTop: isSubmitted ? '4rem' : '-2rem' }}>
        <div className={styles.formCard}>
          
          {isSubmitted ? (
            /* --- SUCCESS UI --- */
            <div className={styles.successContainer}>
              <div className={styles.successIconBox}>
                <CheckCircle size={64} strokeWidth={1.5} />
              </div>
              
              <h2 className={styles.successTitle}>Welcome to ONA Bridge English™!</h2>
              <p className={styles.successSubtitle}>Your account has been created successfully.</p>

              <div className={styles.whatsNextBox}>
                <h3>What's Next?</h3>
                <ol className={styles.nextStepsList}>
                  <li>
                    <span>1.</span> Check your phone for a welcome message with login instructions
                  </li>
                  <li>
                    <span>2.</span> Download the app or start learning via SMS/voice
                  </li>
                  <li>
                    <span>3.</span> Take your first 3-minute lesson today
                  </li>
                </ol>
              </div>

              <button className={styles.darkBlueBtn}>
                Open App / Send SMS
              </button>
              
              <p className={styles.successHelpText}>
                Need help? Text HELP to the number we sent you, or contact support.
              </p>
            </div>
          ) : (
            /* --- REGISTRATION FORM --- */
            <>
              <form onSubmit={handleSubmit}>
                {/* Preferred Language */}
                <div className={styles.inputGroup}>
                  <label>Preferred Language *</label>
                  <select 
                    className={styles.selectInput} 
                    name="language" 
                    value={formData.language} 
                    onChange={handleChange}
                    required
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Chinese">Chinese</option>
                  </select>
                  <span className={styles.helperText}>All instructions will be in this language</span>
                </div>

                {/* Name */}
                <div className={styles.inputGroup}>
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="First name or preferred name" 
                    className={styles.textInput} 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <span className={styles.helperText}>You can use any name you prefer</span>
                </div>

                {/* ZIP Code */}
                <div className={styles.inputGroup}>
                  <label>New York ZIP Code *</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    placeholder="10001" 
                    className={styles.textInput} 
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
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
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="(555) 123-4567" 
                    className={styles.textInput} 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <span className={styles.helperText}>For login and lesson delivery. We'll never share this.</span>
                </div>

                {/* Learning Method (Complex Radio Cards) */}
                <div className={styles.inputGroup}>
                  <label>How would you like to learn? *</label>
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
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting || inNY === null}>
                  {isSubmitting ? 'Creating Account...' : 'Start Learning Free'}
                </button>
              </form>
              <p className={styles.helpText}>Need help signing up? <a href="tel:9144465840">Call (914) 446-5840</a></p>
            </>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}