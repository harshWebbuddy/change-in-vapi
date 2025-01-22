import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveDemo from '@/components/LiveDemo';
import Deploy from '@/components/Deploy';
import UseCases from '@/components/UseCases';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import TimeToHire from '@/components/TimeToHire';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <LiveDemo />
        <Deploy />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <TimeToHire />
      </main>
      <Footer />
    </div>
  );
};

export default Index;