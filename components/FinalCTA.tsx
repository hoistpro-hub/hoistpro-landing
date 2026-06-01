export default function FinalCTA() {
  return (
    <section style={{
      padding: '120px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          color: 'var(--cream)',
          marginBottom: '20px',
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
        }}>
          Ready to stop selling on every call?
        </h2>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1.05rem',
          color: 'var(--cream-dim)',
          lineHeight: 1.65,
          marginBottom: '48px',
        }}>
          Book a 20-minute conversation. No pitch. Just an honest look at your pipeline and whether EQS makes sense for where you&apos;re trying to get to.
        </p>

        <a
          href="https://calendly.com/hoistpro-co/hoistpro-co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'var(--copper)',
            color: '#080808',
            fontFamily: 'var(--font-space)',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            borderRadius: '4px',
            marginBottom: '32px',
            letterSpacing: '0.02em',
          }}
        >
          Book a Call
        </a>

        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.85rem',
          color: 'rgba(239,239,239,0.28)',
        }}>
          or email{' '}
          <a
            href="mailto:neil@hoistproco.com"
            style={{
              color: 'rgba(184,115,51,0.7)',
              textDecoration: 'none',
            }}
          >
            neil@hoistproco.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '80px',
        paddingTop: '32px',
        borderTop: '1px solid rgba(184,115,51,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        maxWidth: '1100px',
        margin: '80px auto 0',
      }}>
        <span style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: '0.95rem',
          color: 'var(--cream)',
          letterSpacing: '0.06em',
          opacity: 0.6,
        }}>
          HOIST<span style={{ color: 'var(--copper)' }}>PRO</span>
        </span>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          color: 'rgba(239,239,239,0.22)',
        }}>
          © {new Date().getFullYear()} HoistPro Co. All rights reserved.
        </p>
      </div>
    </section>
  );
}
