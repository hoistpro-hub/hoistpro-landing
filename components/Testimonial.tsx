export default function Testimonial() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          color: 'var(--copper)',
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
        }}>
          Client Words
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
          color: 'var(--cream)',
          marginBottom: '48px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Don&apos;t take it from Neil.
        </h2>

        <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '340px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(184,115,51,0.2)',
            background: 'rgba(239,239,239,0.02)',
            flexShrink: 0,
          }}>
            <video
              controls
              preload="metadata"
              playsInline
              style={{ width: '100%', display: 'block' }}
            >
              <source src="/josh-testimonial.mp4" type="video/mp4" />
            </video>
          </div>

          <div style={{
            flex: 1,
            minWidth: '260px',
            maxWidth: '340px',
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'var(--cream)',
              lineHeight: 1.5,
              marginBottom: '24px',
            }}>
              &ldquo;Neil handled the whole process for me, from the back end all the way to booking leads into my calendar. I&apos;m only focusing on the sales calls.&rdquo;
            </p>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.9rem',
              color: 'var(--cream-dim)',
            }}>
              Josh, JDebs Media
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
