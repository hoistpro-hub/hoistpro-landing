import type { Metadata } from 'next';
import { Raleway, Space_Grotesk } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HoistPro — Fewer Calls. Better Clients. Higher Close Rate.',
  description: 'EQS filters your pipeline before anyone reaches your calendar. Only pre-qualified, conversion-ready buyers get through.',
  openGraph: {
    title: 'HoistPro — Fewer Calls. Better Clients. Higher Close Rate.',
    description: 'EQS filters your pipeline before anyone reaches your calendar. Only pre-qualified, conversion-ready buyers get through.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-space), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
