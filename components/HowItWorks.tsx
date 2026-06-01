const steps = [
  {
    number: '01',
    title: 'Qualify',
    body: 'Every prospect goes through the EQS scorecard — scored 0 to 10 on budget, authority, need, and timing before anyone sees your calendar.',
  },
  {
    number: '02',
    title: 'Connect',
    body: 'Only prospects who score 7 or above get calendar access. Everyone else is either nurtured automatically or filtered out entirely.',
  },
  {
    number: '03',
    title: 'Educate',
    body: 'Qualified prospects receive a short, custom-branded strategy video before the call. By the time they show up, they already know what you do.',
  },
  {
    number: '04',
    title: 'Convert',
    body: 'The call starts like a second meeting, not a first. No positioning from scratch. No wasted time on fit. Just a conversation with someone ready to buy.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
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
          How It Works
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--cream)',
          marginBottom: '64px',
          maxWidth: '560px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Four steps. One outcome.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2px',
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderLeft: i === 0 ? '1px solid rgba(184,115,51,0.18)' : 'none',
              borderRight: '1px solid rgba(184,115,51,0.18)',
              borderTop: '1px solid rgba(184,115,51,0.18)',
              borderBottom: '1px solid rgba(184,115,51,0.18)',
              background: 'rgba(8,8,8,0.6)',
            }}>
              <span style={{
                fontFamily: 'var(--font-raleway)',
                fontWeight: 800,
                fontSize: '2.4rem',
                color: 'rgba(184,115,51,0.2)',
                display: 'block',
                marginBottom: '16px',
                lineHeight: 1,
              }}>
                {step.number}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-raleway)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'var(--copper)',
                marginBottom: '14px',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.93rem',
                color: 'var(--cream-dim)',
                lineHeight: 1.7,
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
