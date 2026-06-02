export default function WhatsAppMockup() {
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
          What You Receive
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--cream)',
          marginBottom: '16px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          This is what a qualified lead looks like.
        </h2>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1rem',
          color: 'var(--cream-dim)',
          marginBottom: '56px',
          maxWidth: '520px',
          lineHeight: 1.65,
        }}>
          Every time a prospect clears the scorecard, you get a WhatsApp notification with everything you need. Before you even pick up the phone.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {/* Phone frame */}
          <div style={{
            width: '340px',
            borderRadius: '36px',
            background: '#111',
            border: '8px solid #222',
            padding: '16px 0',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,115,51,0.1)',
          }}>
            {/* WhatsApp header */}
            <div style={{
              background: '#075E54',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '8px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-raleway)',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: '#080808',
              }}>
                HP
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-space)', fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>HoistPro</p>
                <p style={{ fontFamily: 'var(--font-space)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>online</p>
              </div>
            </div>

            {/* Message bubble */}
            <div style={{ padding: '8px 12px' }}>
              <div style={{
                background: '#1F2C34',
                borderRadius: '12px 12px 12px 4px',
                padding: '14px 16px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-space)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  color: '#25D366',
                  marginBottom: '12px',
                  letterSpacing: '0.04em',
                }}>
                  ✅ New Qualified Lead. Score 8/10
                </p>
                {[
                  ['Name', 'Emily Johnson'],
                  ['Email', 'emily@brandco.com'],
                  ['Decision maker', 'Yes'],
                  ['Company size', '10–50 employees'],
                  ['Challenge', 'Not enough qualified leads'],
                  ['Timeline', '30 days'],
                  ['Budget', '£5–10K/month'],
                ].map(([label, value], i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '8px',
                    padding: '5px 0',
                    borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.73rem', color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.73rem', color: 'rgba(255,255,255,0.85)', textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
                <p style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.68rem',
                  color: 'rgba(255,255,255,0.28)',
                  marginTop: '10px',
                  textAlign: 'right',
                }}>
                  09:14 ✓✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
