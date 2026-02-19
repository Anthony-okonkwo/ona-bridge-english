import { MessageSquare, BookOpen, Video } from 'lucide-react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <MessageSquare size={40} strokeWidth={1.5} />,
      title: "Choose Your Language",
      text: "16 languages supported"
    },
    {
      id: 2,
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: "Learn English",
      text: "Short 3-minute lessons"
    },
    {
      id: 3,
      icon: <Video size={40} strokeWidth={1.5} />,
      title: "Get Live Help",
      text: "Talk to a coach anytime"
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How It Works</h2>
      
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.id} className={styles.card}>
            <div className={styles.numberCircle}>{step.id}</div>
            <div className={styles.iconContainer}>{step.icon}</div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardText}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}