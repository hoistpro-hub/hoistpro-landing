export default function TwoStageSystem() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{
          color: 'var(--copper)',
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
        }}>
          The System
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--cream)',
          marginBottom: '64px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Two stages. Nothing gets through that shouldn&apos;t.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {/* Stage 1 */}
          <div style={{
            padding: '40px',
            border: '1px solid rgba(184,115,51,0.2)',
            borderRadius: '8px',
            background: 'rgba(184,115,51,0.04)',
          }}>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--copper)',
              marginBottom: '16px',
              opacity: 0.8,
            }}>
              Stage 1: Implicit
            </p>
            <h3 style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 700,
              fontSize: '1.35rem',
              color: 'var(--cream)',
              marginBottom: '20px',
              lineHeight: 1.3,
            }}>
              Targeting before outreach
            </h3>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.93rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.75,
            }}>
              Prospects are scored using firmographic data and intent signals before anyone is contacted. Only T1 and T2-tier accounts (the best-fit prospects) enter the outreach sequence. T3s are excluded before the first message is sent.
            </p>
          </div>

          {/* Stage 2 */}
          <div style={{
            padding: '40px',
            border: '1px solid rgba(184,115,51,0.2)',
            borderRadius: '8px',
            background: 'rgba(184,115,51,0.04)',
          }}>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--copper)',
              marginBottom: '16px',
              opacity: 0.8,
            }}>
              Stage 2: Explicit
            </p>
            <h3 style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 700,
              fontSize: '1.35rem',
              color: 'var(--cream)',
              marginBottom: '20px',
              lineHeight: 1.3,
            }}>
              BANT scorecard gate
            </h3>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.93rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.75,
            }}>
              Interested prospects complete a qualification scorecard, scored 0 to 10 on budget, authority, need, and timing. The result determines what happens next automatically.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { range: '7–10', label: 'Calendar access', color: '#2D6A4F', bg: 'rgba(45,106,79,0.12)' },
                { range: '4–6', label: 'Nurture sequence', color: '#B87333', bg: 'rgba(184,115,51,0.1)' },
                { range: '0–3', label: 'Disqualified', color: 'rgba(239,239,239,0.3)', bg: 'rgba(239,239,239,0.04)' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  background: row.bg,
                  border: `1px solid ${row.color}30`,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-raleway)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: row.color,
                    minWidth: '36px',
                  }}>
                    {row.range}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.88rem',
                    color: row.color,
                  }}>
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
