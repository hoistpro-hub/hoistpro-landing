export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      zIndex: 1,
    }}>
      <p className="anim-fade-up anim-delay-0" style={{
        color: 'var(--copper)',
        fontFamily: 'var(--font-space)',
        fontSize: '0.78rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '24px',
        opacity: 0.85,
      }}>
        Elite Qualification System
      </p>

      <h1 className="anim-fade-up anim-delay-1" style={{
        fontFamily: 'var(--font-raleway)',
        fontWeight: 800,
        fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
        lineHeight: 1.06,
        color: 'var(--cream)',
        maxWidth: '860px',
        marginBottom: '28px',
        letterSpacing: '-0.02em',
      }}>
        Fewer Calls.<br />
        <span style={{ color: 'var(--copper)' }}>Better Clients.</span><br />
        Higher Close Rate.
      </h1>

      <p className="anim-fade-up anim-delay-2" style={{
        fontFamily: 'var(--font-space)',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        color: 'var(--cream-dim)',
        maxWidth: '560px',
        lineHeight: 1.7,
        marginBottom: '48px',
      }}>
        EQS filters your pipeline before anyone reaches your calendar.
        Only pre-qualified, conversion-ready buyers get through.
      </p>

      <div className="anim-fade-up anim-delay-3" style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <a
          href="#how-it-works"
          style={{
            padding: '14px 28px',
            border: '1px solid var(--copper)',
            color: 'var(--copper)',
            fontFamily: 'var(--font-space)',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          See How It Works
        </a>
        <a
          href="https://calendly.com/hoistpro-co/hoistpro-co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '14px 28px',
            background: 'var(--copper)',
            color: '#080808',
            fontFamily: 'var(--font-space)',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
