import Image from 'next/image';

export default function AboutNeil() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(184,115,51,0.1)',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <p style={{
          color: 'var(--copper)',
          fontFamily: 'var(--font-space)',
          fontSize: '0.78rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
        }}>
          About
        </p>

        <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          {/* Photo */}
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(184,115,51,0.2)',
            flexShrink: 0,
            position: 'relative',
          }}>
            <Image
              src="/neil.jpg"
              alt="Neil Charles"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
              sizes="160px"
            />
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{
              fontFamily: 'var(--font-raleway)',
              fontWeight: 800,
              fontSize: '1.8rem',
              color: 'var(--cream)',
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}>
              Neil Charles
            </h2>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.85rem',
              color: 'var(--copper)',
              marginBottom: '24px',
              opacity: 0.85,
            }}>
              Founder, HoistPro Co.
            </p>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.97rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.75,
              marginBottom: '16px',
            }}>
              Background in advertising and design. Built companies across property management and lead generation. Spent years watching highly capable consultants and agency owners lose hours every week pitching people who were never going to buy.
            </p>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.97rem',
              color: 'var(--cream-dim)',
              lineHeight: 1.75,
            }}>
              It wasn&apos;t a selling problem. It was a qualification problem. EQS was built to close that gap — so the only people who reach the calendar are the ones already close to a decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
