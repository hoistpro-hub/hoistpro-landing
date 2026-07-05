export default function TheProof() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <p style={{
          color: 'var(--copper)',
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
        }}>
          The Proof
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
          color: 'var(--cream)',
          marginBottom: '28px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          How you got here is the product.
        </h2>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1.02rem',
          color: 'var(--cream-dim)',
          lineHeight: 1.8,
          marginBottom: '18px',
        }}>
          If Neil sent you a shortlist of companies that fit your agency, that was Stage 1, running on you.
          If you&apos;ve scored yourself on the scorecard, that was Stage 2.
        </p>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1.02rem',
          color: 'var(--cream)',
          lineHeight: 1.8,
        }}>
          Nothing on this page is theory. The system that protects your calendar is the same one that found you.
          We don&apos;t describe it. We run it.
        </p>
      </div>
    </section>
  );
}
