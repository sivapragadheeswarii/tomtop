import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CompanyIntro from '../components/CompanyIntro';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  const { onOpenQuote } = useOutletContext();

  return (
    <div className="bg-[#F0F7FF] text-[#111827]">
      {/* 1. Executive Hero Banner */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* 2. Short Company Intro */}
      <CompanyIntro onOpenQuote={onOpenQuote} />

      {/* 3. Featured Core Services */}
      <ServicesSection onOpenQuote={onOpenQuote} limit={6} />

      {/* 4. Client Testimonials */}
      <Testimonials />

      {/* 5. Contact Call To Action */}
      <CTASection onOpenQuote={onOpenQuote} />
    </div>
  );
}
