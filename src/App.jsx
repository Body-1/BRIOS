import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandLogos from '@/components/BrandLogos';
import Services from '@/components/Services';
import ExpertSolutions from '@/components/ExpertSolutions';
import OurValues from '@/components/OurValues';
import Stats from '@/components/Stats';
import MarqueeSection from '@/components/MarqueeSection';
import StepByStep from '@/components/StepByStep';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import ClientGrowth from '@/components/ClientGrowth';
import Awards from '@/components/Awards';
import Workflow from '@/components/Workflow';
import RoiCalculator from '@/components/RoiCalculator';
import Industries from '@/components/Industries';
import FreeResources from '@/components/FreeResources';
import Newsletter from '@/components/Newsletter';
import OurPromise from '@/components/OurPromise';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import BackgroundEffects from '@/components/BackgroundEffects';
import Sustainability from '@/components/Sustainability';
import Careers from '@/components/Careers';
import PartnershipProgram from '@/components/PartnershipProgram';
import Security from '@/components/Security';
import MediaKit from '@/components/MediaKit';
import Comparison from '@/components/Comparison';
import CtaBanner from '@/components/CtaBanner';
import TeamShowcase from '@/components/TeamShowcase';

function App() {
  return (
    <>
      <Helmet>
        <title>BRIO'S - A Marketing Agency That Powers Your Digital Growth</title>
        <meta name="description" content="Expert digital marketing solutions for every size business. Specializing in SEO, social media management, and pay-per-click advertising to grow your brand." />
      </Helmet>
      <div className="min-h-screen bg-[#0a2e1f] text-white overflow-x-hidden relative">
        <BackgroundEffects />
        <Header />
        <main>
          <Hero />
          <BrandLogos />
          <Services />
          <ExpertSolutions />
          <OurValues />
          <Stats />
          <MarqueeSection />
          <StepByStep />
          <Benefits />
          <Testimonials />
          <TechStack />
          <ClientGrowth />
          <Awards />
          <Workflow />
          <RoiCalculator />
          <Industries />
          <FreeResources />
          <OurPromise />
          <TeamShowcase />
          <Comparison />
          <Sustainability />
          <CtaBanner />
          <Pricing />
          <FAQ />
          <PartnershipProgram />
          <Careers />
          <Security />
          <MediaKit />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;