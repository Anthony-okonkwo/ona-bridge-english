"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Globe } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* --- Main Navbar (Always Visible) --- */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>O</div>
        <div className={styles.logoText}>
          <strong>ONA Bridge English™</strong>
          <span>Free English for NY</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.searchBtn} aria-label="Search">
          <Search size={22} color="#003049" />
        </button>
        
        {/* Only show Hamburger if menu is CLOSED */}
        {!isOpen && (
          <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
            <Menu size={30} color="#003049" />
          </button>
        )}
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.show : ''}`}>
        
        {/* Header inside the overlay - This contains the ONLY X button now */}
        <div className={styles.menuHeader}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>O</div>
            <div className={styles.logoText}>
              <strong>ONA Bridge English™</strong>
              <span>Free English for NY</span>
            </div>
          </div>
          
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <X size={30} color="#003049" />
          </button>
        </div>

        {/* Links List */}
        <ul className={styles.menuLinks}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link></li>
          <li><Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link href="/coaching" onClick={() => setIsOpen(false)}>Coaching</Link></li>
          <li><Link href="/accessibility" onClick={() => setIsOpen(false)}>Accessibility</Link></li>
        </ul>

        {/* Footer actions pinned to the bottom */}
        <div className={styles.menuFooter}>
          <div className={styles.langSelector}>
            <Globe size={20} color="#666" />
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          
          <Link href="/start" className={styles.getStartedBtn} onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}