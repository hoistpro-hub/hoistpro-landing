export default function VsCalendly() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <p style={{
          color: 'var(--copper)',
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
        }}>
          Better Than Just Calendar Filters
        </p>

        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          color: 'var(--cream)',
          marginBottom: '32px',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          Calendly asks questions.<br />EQS pre-qualifies, educates, scores, segments, and nurtures.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {/* Calendly column */}
          <div style={{
            padding: '28px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.78rem',
              color: 'rgba(239,239,239,0.3)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Calendly
            </p>
            {['Asks intake questions', 'Fills your calendar', 'No scoring or segmentation', 'No education before the call', 'Everyone gets through'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: 'rgba(239,239,239,0.2)', fontSize: '0.85rem', marginTop: '2px' }}>×</span>
                <p style={{ fontFamily: 'var(--font-space)', fontSize: '0.9rem', color: 'rgba(239,239,239,0.35)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* EQS column */}
          <div style={{
            padding: '28px',
            borderRadius: '8px',
            background: 'rgba(184,115,51,0.05)',
            border: '1px solid rgba(184,115,51,0.2)',
          }}>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.78rem',
              color: 'var(--copper)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              opacity: 0.85,
            }}>
              EQS
            </p>
            {['Finds and scores prospects', 'Educates before the call', 'Segments by readiness', 'Nurtures the not-yet-ready', 'Only decision-ready buyers get through'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--copper)', fontSize: '0.85rem', marginTop: '2px' }}>✓</span>
                <p style={{ fontFamily: 'var(--font-space)', fontSize: '0.9rem', color: 'var(--cream-dim)', lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.97rem',
          color: 'var(--cream-dim)',
          lineHeight: 1.75,
          borderLeft: '2px solid rgba(184,115,51,0.4)',
          paddingLeft: '20px',
        }}>
          This isn&apos;t spray and pray. It&apos;s intelligent qualification, education, and segmentation at scale. Your calendar gets decision-ready buyers. Everyone else? We keep them warm until they are.
        </p>

      </div>
    </section>
  );
}
