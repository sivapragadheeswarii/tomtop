import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { TechStackMarquee } from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

export default function Home() {
  const { onOpenQuote } = useOutletContext();

  return (
    <div className="bg-[#FAF5FF] text-[#111827]">
      {/* 1. Executive Hero Banner */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* 2. Services Overview */}
      <ServicesSection onOpenQuote={onOpenQuote} limit={3} />

      {/* 3. Powered by Enterprise Technical Stacks */}
      <TechStackMarquee />

      {/* 4. Client Testimonials */}
      <Testimonials />

      {/* 5. Contact Call To Action */}
      <CTASection onOpenQuote={onOpenQuote} />
    </div>
  );
}
