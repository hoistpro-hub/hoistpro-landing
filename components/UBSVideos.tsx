export default function UBSVideos() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '64px',
        alignItems: 'center',
      }}>
        {/* Text */}
        <div>
          <p style={{
            color: 'var(--copper)',
            fontFamily: 'var(--font-space)',
            fontSize: '0.78rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            opacity: 0.85,
          }}>
            UBS: Unique Branded Strategy
          </p>
          <h2 style={{
            fontFamily: 'var(--font-raleway)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'var(--cream)',
            marginBottom: '24px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            They arrive knowing what you do. The call starts warm.
          </h2>
          <p style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.97rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.75,
            marginBottom: '20px',
          }}>
            Every qualified prospect receives a short, custom-branded strategy video before the call. One to two minutes. Tailored to their business. Sent automatically.
          </p>
          <p style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.97rem',
            color: 'var(--cream-dim)',
            lineHeight: 1.75,
          }}>
            By the time they show up, they already understand what you do, why it matters for them, and what to expect. The call feels like a second meeting, not a first pitch.
          </p>
        </div>

        {/* CSS phone mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '280px',
            height: '480px',
            borderRadius: '32px',
            background: '#111',
            border: '8px solid #1a1a1a',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(184,115,51,0.12)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            {/* Phone top bar */}
            <div style={{
              height: '32px',
              background: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ width: '60px', height: '6px', borderRadius: '4px', background: '#222' }} />
            </div>

            {/* Video area */}
            <div style={{
              flex: 1,
              background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1208 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              padding: '24px',
              position: 'relative',
            }}>
              {/* HoistPro watermark */}
              <p style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                fontFamily: 'var(--font-raleway)',
                fontWeight: 800,
                fontSize: '0.7rem',
                color: 'var(--copper)',
                letterSpacing: '0.08em',
                opacity: 0.7,
              }}>
                HOIST<span style={{ color: 'var(--cream-dim)' }}>PRO</span>
              </p>

              {/* Play button */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '2px solid var(--copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '18px solid var(--copper)',
                  marginLeft: '4px',
                }} />
              </div>

              <p style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.8rem',
                color: 'var(--cream-dim)',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                Strategy Overview<br />
                <span style={{ color: 'var(--copper)', fontSize: '0.72rem' }}>Personalised for Emily @ BrandCo</span>
              </p>

              {/* Progress bar */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '24px',
                right: '24px',
              }}>
                <div style={{
                  height: '2px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: '35%',
                    height: '100%',
                    background: 'var(--copper)',
                    borderRadius: '2px',
                  }} />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '6px',
                }}>
                  <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>0:28</span>
                  <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>1:22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
