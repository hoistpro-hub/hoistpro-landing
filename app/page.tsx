import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import TwoStageSystem from '@/components/TwoStageSystem';
import WhatsAppMockup from '@/components/WhatsAppMockup';
import UBSVideos from '@/components/UBSVideos';
import AboutNeil from '@/components/AboutNeil';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <div className="page-glow" />
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <TwoStageSystem />
      <WhatsAppMockup />
      <UBSVideos />
      <AboutNeil />
      <FinalCTA />
    </>
  );
}
