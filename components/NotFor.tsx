const disqualifiers = [
  {
    title: 'You want to test if outbound works.',
    body: 'EQS amplifies an offer that already sells. It doesn\'t validate one that hasn\'t. If you\'re still proving the offer, prove it first.',
  },
  {
    title: 'You\'re pre-revenue.',
    body: 'The system models your best-fit buyer from the clients you already have. No paying clients, nothing to model.',
  },
  {
    title: 'You want more calls, not better ones.',
    body: 'Volume is easy to buy, and it\'s also the problem. If a packed calendar is the goal, plenty of agencies will happily sell you one.',
  },
  {
    title: 'You\'re referral-only and happy staying that way.',
    body: 'Referrals are a gift, not a system. If the gifts are enough for where you\'re headed, you genuinely don\'t need this.',
  },
  {
    title: 'You won\'t stay visible alongside it.',
    body: 'EQS runs the outbound. Showing up, on LinkedIn, in your market, is your half of the deal. Filtered outreach lands harder when they\'ve seen your face before.',
  },
];

export default function NotFor() {
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
          Who It&apos;s Not For
        </p>
        <h2 style={{
          fontFamily: 'var(--font-raleway)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--cream)',
          marginBottom: '20px',
          maxWidth: '640px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          We filter our own pipeline too.
        </h2>
        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1rem',
          color: 'var(--cream-dim)',
          lineHeight: 1.7,
          maxWidth: '560px',
          marginBottom: '56px',
        }}>
          EQS is built on saying no early. That applies here as much as anywhere. It&apos;s not a fit if:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {disqualifiers.map((d, i) => (
            <div key={i} style={{
              padding: '32px',
              border: '1px solid rgba(239,239,239,0.08)',
              borderRadius: '8px',
              background: 'rgba(239,239,239,0.02)',
            }}>
              <p style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.8rem',
                color: 'rgba(239,239,239,0.3)',
                marginBottom: '16px',
                letterSpacing: '0.08em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-raleway)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--cream)',
                marginBottom: '14px',
                lineHeight: 1.35,
              }}>
                {d.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.93rem',
                color: 'var(--cream-dim)',
                lineHeight: 1.7,
              }}>
                {d.body}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-space)',
          fontSize: '1.05rem',
          color: 'var(--cream)',
          marginTop: '56px',
          textAlign: 'center',
        }}>
          Still here? Then you&apos;re probably exactly who this was built for.
        </p>
      </div>
    </section>
  );
}
