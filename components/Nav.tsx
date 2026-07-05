'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(184,115,51,0.14)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: 'var(--font-raleway)',
        fontWeight: 800,
        fontSize: '1.1rem',
        color: 'var(--cream)',
        letterSpacing: '0.06em',
      }}>
        HOIST<span style={{ color: 'var(--copper)' }}>PRO</span>
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a
          href="https://calendar-waste-calculator.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-space)',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.03em',
            color: 'var(--cream-dim)',
            textDecoration: 'none',
          }}
        >
          Calculator
        </a>
        <a
          href="https://calendly.com/hoistpro-co/hoistpro-co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 22px',
            background: 'var(--copper)',
            color: '#080808',
            fontFamily: 'var(--font-space)',
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: '0.03em',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
