"use client";

import { 
  UserPlus, LayoutDashboard, Megaphone, 
  LifeBuoy, Mail, CheckCircle2 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function PartnersPage() {
  const benefits = [
    {
      icon: <UserPlus size={28} />,
      title: "Easy Onboarding & Support",
      desc: "Dedicated account managers help you set up and train your staff in minutes."
    },
    {
      icon: <LayoutDashboard size={28} />,
      title: "Program Dashboard",
      desc: "Track learner progress, engagement, and completion rates for your organization."
    },
    {
      icon: <Megaphone size={28} />,
      title: "Marketing Materials",
      desc: "Receive digital and print assets in multiple languages to promote the program."
    },
    {
      icon: <LifeBuoy size={28} />,
      title: "Dedicated Assistance",
      desc: "Priority technical support and coaching assistance for your clients."
    }
  ];

  const steps = [
    { num: "1", title: "Sign Partner Agreement", desc: "Complete a simple MOU to register your organization." },
    { num: "2", title: "Get Onboarded by ONA", desc: "Join a 30-minute training session for your staff and volunteers." },
    { num: "3", title: "Receive Promotional Materials", desc: "Get custom flyers, digital assets, and info packets." },
    { num: "4", title: "Start Enrolling Clients", desc: "Use your partner portal to enroll students instantly." }
  ];

  const partnersList = [
    "Community-based organizations",
    "Public libraries",
    "Workforce development centers",
    "Immigrant service providers",
    "Adult education programs",
    "Faith-based organizations",
    "Public school districts",
    "Job placement agencies",
    "Local governments",
    "Healthcare providers",
    "Refugee centers",
    "Employment services"
  ];

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* --- HEADER --- */}
      <section className={styles.header}>
        <h1 className={styles.title}>For Partner Organizations</h1>
        <p className={styles.subtitle}>Help your community access free English learning</p>
      </section>

      {/* --- INTRO --- */}
      <section className={styles.introSection}>
        <p>
          ONA Bridge English™ partners with community organizations, libraries, 
          workforce development centers, and local governments to provide access 
          across New York State.
        </p>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Partner Benefits</h2>
        <div className={styles.benefitsList}>
          {benefits.map((item, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <div className={styles.benefitText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS (STEPS) --- */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>How Partnering Works</h2>
        <div className={styles.stepsList}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepText}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Partner Dashboard</h2>
        <p className={styles.textCenter}>Track engagement, learner progress, and generate reports.</p>
        
        <div className={styles.dashboardMockup}>
          <div className={styles.mockStatCard}>
            <h4>247</h4>
            <span>Active Learners</span>
          </div>
          <div className={styles.mockStatCard}>
            <h4 className={styles.textTeal}>1,432</h4>
            <span>Lessons Completed</span>
          </div>
          <div className={styles.mockStatCard}>
            <h4 className={styles.textOrange}>89</h4>
            <span>Certificates Earned</span>
          </div>
          <p className={styles.mockFooter}>Data is anonymized and compliant with privacy standards.</p>
        </div>
      </section>

      {/* --- WHO CAN PARTNER --- */}
      <section className={styles.sectionGray}>
        <h2 className={styles.sectionTitle}>Who Can Partner with Us?</h2>
        <div className={styles.partnerGrid}>
          {partnersList.map((partner, idx) => (
            <div key={idx} className={styles.partnerPill}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <Mail size={32} className={styles.mailIcon} />
            <h2>Request Partner Access</h2>
            <p>Fill out the form below and our team will contact you shortly.</p>
          </div>

          <form className={styles.partnerForm}>
            <div className={styles.inputGroup}>
              <label>Organization Name *</label>
              <input type="text" className={styles.inputField} />
            </div>

            <div className={styles.inputGroup}>
              <label>Organization Type *</label>
              <select className={styles.selectField}>
                <option>Select type...</option>
                <option>Community-based Organization</option>
                <option>Public library</option>
                <option>Workforce development</option>
                <option>Immigrant services</option>
                <option>Adult education</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Contact Name *</label>
              <input type="text" className={styles.inputField} />
            </div>

            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input type="email" className={styles.inputField} />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="tel" className={styles.inputField} />
            </div>

            <div className={styles.inputGroup}>
              <label>How many learners do you serve annually?</label>
              <select className={styles.selectField}>
                <option>Select range...</option>
                <option>1 - 50</option>
                <option>51 - 200</option>
                <option>201 - 500</option>
                <optio>501 - 1000</optio>
                <option>1000+</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Additional Information</label>
              <textarea 
                className={styles.textareaField} 
                rows="4" 
                placeholder="Tell us a bit about your organization and how you plan to use ONA Bridge English..."
              ></textarea>
            </div>

            <button type="button" className={styles.submitBtn}>
              Submit Partnership Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}