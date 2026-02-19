"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false); // Added mobile state
  const [currentLang, setCurrentLang] = useState('English');
  const langRef = useRef(null);

  const languages = [
    "English", "Español", "中文", "বাংলা", "Русский", 
    "العربية", "Français", "Kreyòl Ayisyen", "한국어", 
    "Polski", "اردو", "Italiano", "ਪੰਜਾਬੀ", "עברית", 
    "தமிழ்", "Tagalog"
  ];

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <img 
            src="/pics/logo.jpg" 
            alt="ONA Bridge Logo" 
            className={styles.logoImg} 
          />
        </div>
        <div className={styles.logoText}>
          <span className={styles.brandName}>ONA Bridge English™</span>
          <span className={styles.tagline}>Free English For NY</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/coaching">Coaching</Link>
        <Link href="/accessibility">Accessibility</Link>
      </div>

      {/* Right Side: Language + CTA */}
      <div className={styles.rightActions}>
        
        {/* Desktop Language Dropdown */}
        <div className={styles.langWrapper} ref={langRef}>
          <button 
            className={styles.langToggle} 
            onClick={() => setLangOpen(!langOpen)}
          >
            <Globe size={18} className={styles.globeIcon} />
            <span className={styles.langText}>{currentLang}</span>
            <ChevronDown size={16} className={styles.chevronIcon} />
          </button>

          {langOpen && (
            <div className={styles.langDropdown}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`${styles.langOption} ${currentLang === lang ? styles.activeLang : ''}`}
                  onClick={() => {
                    setCurrentLang(lang);
                    setLangOpen(false);
                  }}
                >
                  <span className={styles.langName}>{lang}</span>
                  {currentLang === lang && <Check size={16} className={styles.checkIcon} />}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link href="/start" className={styles.ctaBtn}>Get Started</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/coaching" onClick={() => setIsOpen(false)}>Coaching</Link>
          <Link href="/accessibility" onClick={() => setIsOpen(false)}>Accessibility</Link>
          
          <div className={styles.mobileActions}>
            
            {/* Mobile Language Dropdown */}
            <div className={styles.mobileLangWrapper}>
              <button 
                className={styles.mobileLangBtn} 
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
              >
                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                  <Globe size={18} className={styles.globeIcon} /> 
                  {currentLang}
                </div>
                <ChevronDown size={16} className={styles.chevronIcon} />
              </button>

              {mobileLangOpen && (
                <div className={styles.mobileLangDropdown}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`${styles.langOption} ${currentLang === lang ? styles.activeLang : ''}`}
                      onClick={() => {
                        setCurrentLang(lang);
                        setMobileLangOpen(false);
                        // Optional: remove setIsOpen(false) if you want them to keep seeing the menu after picking a language
                      }}
                    >
                      <span className={styles.langName}>{lang}</span>
                      {currentLang === lang && <Check size={16} className={styles.checkIcon} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/start" className={styles.ctaBtn} onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}