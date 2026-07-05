const problems = [
  {
    title: 'A packed calendar isn\'t a healthy pipeline.',
    body: 'More calls coming in feels like growth. But when most of them are the wrong fit, the close rate quietly drops and no one can explain why.',
  },
  {
    title: 'The close rate problem starts before the call.',
    body: 'Better scripts won\'t fix it. Better objection handling won\'t fix it. The problem is who\'s on the calendar in the first place.',
  },
  {
    title: 'Every wrong call costs more than an hour.',
    body: 'The prep before it. The debrief after. The mental load of pitching someone who was never going to buy. Do that twenty times a month and it becomes a weight problem.',
  },
];

export default function Problem() {
  return (
    <section style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
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
          The Problem
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--cream)',
          marginBottom: '60px',
          maxWidth: '600px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          The agency isn&apos;t broken.<br />The filter is.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              padding: '36px',
              border: '1px solid rgba(184,115,51,0.18)',
              borderRadius: '8px',
              background: 'rgba(184,115,51,0.04)',
            }}>
              <div style={{
                width: '32px',
                height: '2px',
                background: 'var(--copper)',
                marginBottom: '24px',
                borderRadius: '2px',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-raleway)',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: 'var(--cream)',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.95rem',
                color: 'var(--cream-dim)',
                lineHeight: 1.7,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '56px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-space)',
            fontSize: '1rem',
            color: 'var(--cream-dim)',
            marginBottom: '20px',
          }}>
            Want the number for your calendar? It takes 10 seconds.
          </p>
          <a
            href="https://calendar-waste-calculator.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
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
            Run the Calendar Waste Calculator
          </a>
        </div>
      </div>
    </section>
  );
}
