"use client";

import { 
  ShieldCheck, Server, UserX, Share2, 
  Settings, User, Activity, AlertOctagon, 
  CheckCircle, XCircle, FileText, Trash2, 
  Edit3, Download, Mail 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function PrivacyPage() {
  const protections = [
    {
      icon: <Server size={28} />,
      title: "State-Level Security",
      desc: "All personal data is encrypted using military-grade AES-256 encryption both in transit and at rest."
    },
    {
      icon: <UserX size={28} />,
      title: "No Immigration Tracking",
      desc: "ONA Bridge English™ will never ask for, record, or track your immigration or citizenship status."
    },
    {
      icon: <Share2 size={28} />,
      title: "No Third-Party Data Sharing",
      desc: "We do not sell, rent, or share your personal information to third-party marketers or advertisers, ever."
    },
    {
      icon: <Settings size={28} />,
      title: "Complete Data Control",
      desc: "You have ultimate control over your data. You can export or permanently delete your account at any time."
    }
  ];

  const rights = [
    { icon: <FileText size={24} />, title: "Right to Access", desc: "Request a copy of all personal data we have collected about you." },
    { icon: <Trash2 size={24} />, title: "Right to Delete", desc: "Request complete deletion of your account and all associated data." },
    { icon: <Edit3 size={24} />, title: "Right to Correct", desc: "Update or fix any inaccurate information in your profile." },
    { icon: <Download size={24} />, title: "Right to Export", desc: "Download your learning history and certificates at any time." }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>Privacy & Security</h1>
        <p className={styles.subtitle}>Your data is protected, secure, and confidential.</p>
      </section>

      {/* --- INTRO BOX --- */}
      <div className={styles.introBox}>
        <p>
          ONA Bridge English™ is fully committed to protecting your personal 
          information and maintaining the highest standards of data security.
        </p>
      </div>

      {/* --- DATA PROTECTION (Stacked Cards) --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Your Data Protection</h2>
        <div className={styles.protectionList}>
          {protections.map((item, index) => (
            <div key={index} className={styles.protectionCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <div className={styles.protectionText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT WE COLLECT --- */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>What Information We Collect</h2>
        <div className={styles.grid3}>
          <div className={styles.infoCard}>
            <User className={styles.cardIcon} />
            <h3>Account Information</h3>
            <ul>
              <li>• Name or preferred name</li>
              <li>• Phone number (for login & SMS)</li>
              <li>• New York ZIP code</li>
              <li>• Preferred language</li>
            </ul>
          </div>
          
          <div className={styles.infoCard}>
            <Activity className={styles.cardIcon} />
            <h3>Learning & App Data</h3>
            <ul>
              <li>• Course progress and scores</li>
              <li>• Coaching session history</li>
              <li>• App usage patterns</li>
              <li>• Certificate completions</li>
            </ul>
          </div>

          <div className={`${styles.infoCard} ${styles.neverCard}`}>
            <AlertOctagon className={styles.cardIconRed} />
            <h3 className={styles.redText}>Never Collected</h3>
            <ul>
              <li>• Immigration or citizenship status</li>
              <li>• Social Security Numbers (SSN)</li>
              <li>• Financial or banking info</li>
              <li>• Medical or health records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- HOW WE USE IT --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        <div className={styles.grid2}>
          <div className={styles.useCard}>
            <h3>To Provide Services</h3>
            <ul>
              <li>• Deliver course content and SMS lessons</li>
              <li>• Connect you with live language coaches</li>
              <li>• Track your learning progress and streaks</li>
              <li>• Send lesson reminders and alerts</li>
            </ul>
          </div>
          <div className={styles.useCard}>
            <h3>To Improve the Platform</h3>
            <ul>
              <li>• Fix bugs and app crashes</li>
              <li>• Understand which courses are most popular</li>
              <li>• Improve accessibility features</li>
              <li>• Ensure system security and prevent fraud</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WHO CAN SEE IT --- */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>Who Can (and Cannot) See Your Data</h2>
        <div className={styles.visibilityContainer}>
          <div className={styles.visBox}>
            <h3 className={styles.greenTitle}><CheckCircle size={20} /> Who CAN see it:</h3>
            <ul>
              <li><strong>You:</strong> Full access to all your data.</li>
              <li><strong>Your Coaches:</strong> Learning progress and history only.</li>
              <li><strong>System Admins:</strong> For technical support only.</li>
            </ul>
          </div>
          
          <div className={styles.visBox}>
            <h3 className={styles.redTitle}><XCircle size={20} /> Who CANNOT see it:</h3>
            <ul>
              <li><strong>ICE:</strong> Immigration & Customs Enforcement.</li>
              <li><strong>Employers:</strong> Your boss or landlord.</li>
              <li><strong>Marketers:</strong> Third-party advertising companies.</li>
              <li><strong>Other Users:</strong> Your profile is entirely private.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- YOUR RIGHTS --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Your Privacy Rights</h2>
        <div className={styles.rightsGrid}>
          {rights.map((right, idx) => (
            <div key={idx} className={styles.rightCard}>
              <div className={styles.rightIcon}>{right.icon}</div>
              <h3>{right.title}</h3>
              <p>{right.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR COMMITMENT --- */}
      <section className={styles.commitmentSection}>
        <ShieldCheck size={48} className={styles.shieldIcon} />
        <h2>Our Commitment to You</h2>
        <p>
          We believe privacy is a fundamental right. This platform was built to 
          serve New Yorkers, not to profit from their data.
        </p>
        
        <div className={styles.promiseAlert}>
          <strong>Important Promise:</strong> We will never ask for your immigration 
          status to use this service. Your participation is completely confidential.
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section className={styles.contactSection}>
        <h3>Questions About Privacy?</h3>
        <p>Contact our data protection officer at anytime.</p>
        <a href="mailto:privacy@onabridgeenglish.org" className={styles.contactBtn}>
          <Mail size={18} /> privacy@onabridgeenglish.org
        </a>
      </section>

      <Footer />
    </main>
  );
}