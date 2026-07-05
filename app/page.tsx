import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import TwoStageSystem from '@/components/TwoStageSystem';
import VsCalendly from '@/components/VsCalendly';
import WhatsAppMockup from '@/components/WhatsAppMockup';
import UBSVideos from '@/components/UBSVideos';
import TheProof from '@/components/TheProof';
import Testimonial from '@/components/Testimonial';
import NotFor from '@/components/NotFor';
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
      <Stats />
      <TwoStageSystem />
      <VsCalendly />
      <WhatsAppMockup />
      <UBSVideos />
      <TheProof />
      <Testimonial />
      <NotFor />
      <AboutNeil />
      <FinalCTA />
    </>
  );
}
