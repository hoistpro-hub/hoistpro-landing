export default function Stats() {
  const stats = [
    { value: '10x', label: 'Growth achieved in under 10 months for partner consultants' },
    { value: '0', label: 'Tyre-kickers — no more wasted calls with unqualified prospects' },
    { value: '100%', label: 'Qualified leads — every conversation is with a pre-qualified buyer' },
  ];

  return (
    <section style={{
      padding: '80px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '48px',
        textAlign: 'center',
      }}>
        {stats.map((s) => (
          <div key={s.value}>
            <p style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              color: 'var(--copper)',
              lineHeight: 1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              {s.value}
            </p>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.92rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.65,
              maxWidth: '240px',
              margin: '0 auto',
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
