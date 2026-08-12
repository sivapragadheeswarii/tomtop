import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target, Compass, Sparkles, Building2, Server, Phone, Mail,
  Globe, Navigation, ArrowRight, CheckCircle2, ChevronDown,
  Factory, GraduationCap, TrendingUp, ShoppingBag, Briefcase, Award, Users, Quote, Globe2
} from 'lucide-react';
import { companyInfo, industriesData } from '../data/companyData';
import WhyChooseUs from '../components/WhyChooseUs';

const industryIcons = {
  textile: Factory,
  education: GraduationCap,
  cooperative: Building2,
  smes: TrendingUp,
  retail: ShoppingBag,
  service: Briefcase
};

const timelineEvents = [
  { year: "2021", title: "Establishment in Madurai", desc: "Founded to deliver business-critical applications, IT consulting, and software services." },
  { year: "2022", title: "Enterprise & ERP Solutions", desc: "Expanded core capabilities into custom ERP platforms, billing automation, and PMO services." },
  { year: "2023", title: "Resource Augmentation & Cloud", desc: "Launched dedicated remote IT talent solutions and high-speed cloud infrastructure management." },
  { year: "2024+", title: "Global Technology Partner", desc: "Serving clients across India, the UK, Europe, and international markets with full-stack IT capabilities." }
];

export default function About() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});

  return (
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">
      
      {/* 1. HERO BANNER (Full 100dvh Viewport Constraint) */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen flex flex-col justify-between items-center pt-20 pb-4 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about_hero_bg.png"
            alt="Tomtop Solutions IT consultants and engineers in modern office"
            className="w-full h-full object-cover object-center opacity-90 sm:opacity-95 filter contrast-110 brightness-105 saturate-110 pointer-events-none transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0F7FF]/75 to-[#F8FAFC] z-10 pointer-events-none" />
        </div>

        {/* Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-[250px] sm:h-[350px] bg-blue-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-10" />

        {/* Hero Content Container (Centered Vertically) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center space-y-3 sm:space-y-8 my-auto">
          
          {/* Top Centered Pill Badge (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 shadow-md shadow-blue-900/5 text-[#1E3A8A] text-[10px] sm:text-xs font-black uppercase tracking-wide sm:tracking-wider max-w-[95%] mx-auto"
          >
            <Building2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">Global IT Consulting &amp; Software Engineering</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.1] text-[#0F172A] max-w-4xl mx-auto drop-shadow-xs px-1"
          >
            Emerging IT Solutions &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
              Consulting Partner
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Helping organizations accelerate digital transformation through innovative technology solutions, professional consulting services, and skilled IT talent.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-xs xs:max-w-sm sm:max-w-none mx-auto w-full"
          >
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 sm:space-x-2.5 text-xs sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-blue-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Get Free Proposal</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-white/95 hover:bg-blue-50 border border-blue-200 text-[#0F172A] font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 text-xs sm:text-base hover:border-[#3B82F6] hover:text-[#2563EB] active:scale-95 shadow-sm backdrop-blur-md"
            >
              <span>Explore Positioning</span>
              <ChevronDown className="w-4 h-4 text-[#2563EB]" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="mt-auto pt-2 flex flex-col items-center space-y-1 relative z-20 cursor-pointer"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700/70 hidden sm:block">Scroll</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center hover:border-[#2563EB] shadow-sm">
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
          </div>
        </motion.div>
      </section>

      {/* 2. COMPANY POSITIONING & MISSION - Compact High-Density Executive Hub */}
      <section className="py-8 sm:py-16 bg-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
        {/* Subtle Glow Background */}
        <motion.div 
          className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', top: '5%', right: '5%' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14 px-2">
            <h2 className="text-xl sm:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Empowering Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Technology Excellence</span>
            </h2>
            <p className="mt-2.5 sm:mt-3 text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Learn about our strategic positioning, mission-driven approach, and registered corporate office in Madurai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            
            {/* Left Column: Positioning & Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(37,99,235,0.08)' }}
              className="lg:col-span-7 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-white to-[#F0F7FF] border border-blue-100 shadow-md sm:shadow-lg shadow-blue-900/5 flex flex-col justify-between gap-4 sm:gap-5"
            >
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span className="text-[#2563EB] font-black text-[9px] sm:text-[10px] uppercase tracking-widest bg-blue-100/80 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#2563EB] animate-pulse" />
                    COMPANY POSITIONING
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Est. 2021 · Madurai, India
                  </span>
                </div>

                <h3 className="text-lg sm:text-3xl font-black text-[#0B1120] tracking-tight leading-tight mb-2.5 sm:mb-3">
                  Accelerating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Digital Transformation</span> for Modern Enterprises
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3">
                  Tomtop Solutions is an emerging IT Solutions &amp; Consulting company dedicated to helping businesses accelerate their digital transformation through innovative technology solutions, professional consulting services, and skilled IT talent.
                </p>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Established in 2021, Tomtop Solutions partners with organizations to design, develop, implement, and support business-critical applications while delivering high-quality project management and consulting services.
                </p>
              </div>
            </motion.div>

            {/* Right Column: HQ Specs & Address Card (Hidden on Mobile) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(37,99,235,0.08)' }}
              className="hidden sm:flex lg:col-span-5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-blue-200/80 shadow-md sm:shadow-lg flex-col justify-between gap-3.5 sm:gap-4"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200 shrink-0 shadow-sm">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm sm:text-lg text-[#0B1120] leading-tight">{companyInfo.name}</h3>
                    <p className="text-[9px] sm:text-[10px] text-[#2563EB] font-bold uppercase tracking-wider">Registered Office &amp; HQ</p>
                  </div>
                </div>

                {/* Address pill */}
                <p className="text-slate-600 text-xs leading-relaxed bg-blue-50/60 p-2.5 sm:p-3 rounded-xl border border-blue-100 mb-3">
                  {companyInfo.address}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 gap-0.5 sm:gap-2">
                    <span className="font-semibold text-slate-500 text-[10px] sm:text-[11px]">Phone:</span>
                    <a href={`tel:${companyInfo.phone}`} className="font-bold text-[#2563EB] hover:underline text-[11px] truncate">{companyInfo.phone}</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 gap-0.5 sm:gap-2">
                    <span className="font-semibold text-slate-500 text-[10px] sm:text-[11px]">Email:</span>
                    <a href={`mailto:${companyInfo.email}`} className="font-bold text-[#2563EB] hover:underline text-[11px] break-all sm:truncate">{companyInfo.email}</a>
                  </div>
                </div>
              </div>

              {/* Compact Map Preview Frame */}
              <div className="rounded-xl border border-blue-200 overflow-hidden shadow-sm h-28 sm:h-32 bg-blue-50 relative group mt-1">
                <iframe
                  title="Tomtop Solutions HQ Location"
                  src="https://maps.google.com/maps?q=Madurai,TamilNadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. UNIFIED MISSION & VISION SECTION */}
      <section className="py-8 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0F7FF] border-b border-blue-100 relative overflow-hidden text-[#111827]">
        {/* Ambient Glow Background Elements */}
        <motion.div 
          className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-4xl font-black text-[#0B1120] tracking-tight leading-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Mission</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]">Vision</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-2 text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed"
            >
              The core principles driving our technology solutions, client relationships, and global digital transformation.
            </motion.p>
          </div>

          {/* Dual Split Cards: Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            
            {/* OUR MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '0 16px 36px -10px rgba(37,99,235,0.15)' }}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              {/* Shimmering Top Gradient Line */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Watermark Quote Icon Animation */}
              <motion.div 
                className="absolute -right-4 -bottom-4 text-blue-100/35 pointer-events-none group-hover:text-blue-200/45 transition-colors"
                animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Quote className="w-24 h-24 sm:w-28 sm:h-28" />
              </motion.div>

              <div>
                {/* Card Header with Glowing Icon Box */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="relative">
                    {/* Pulsing Ripple Halo */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-blue-500/20 blur-sm"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.08 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center shadow-md shadow-blue-600/25 relative z-10 cursor-pointer"
                    >
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-black text-[#2563EB] bg-blue-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200 uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
                    OUR MISSION
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-black text-[#0B1120] group-hover:text-[#2563EB] transition-colors leading-tight mb-2 sm:mb-2.5 relative z-10">
                  Empowering Businesses Through Technology
                </h3>

                <blockquote className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium bg-gradient-to-br from-blue-50/70 to-slate-50/40 p-3 sm:p-4 rounded-xl border border-blue-100/70 relative z-10 shadow-xs">
                  "{companyInfo.mission}"
                </blockquote>

                {/* Key Mission Highlights / Chips (Hidden on Mobile) */}
                <div className="hidden sm:flex mt-3 sm:mt-3.5 flex-wrap gap-1.5 relative z-10">
                  {[
                    "Reliable Technology",
                    "Skilled IT Talent",
                    "Operational Efficiency",
                    "Sustainable Growth"
                  ].map((chip, idx) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.04, backgroundColor: '#EFF6FF' }}
                      className="text-[10px] sm:text-[11px] font-bold text-[#1E40AF] bg-white border border-blue-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg shadow-2xs flex items-center gap-1 transition-all"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-500 relative z-10">
                <span className="flex items-center gap-1.5 text-[#2563EB]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Client-Centric Excellence
                </span>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Pillar 01 <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>

            {/* OUR VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '0 16px 36px -10px rgba(37,99,235,0.15)' }}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-md shadow-blue-900/5 relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              {/* Shimmering Top Gradient Line */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Watermark Quote Icon Animation */}
              <motion.div 
                className="absolute -right-4 -bottom-4 text-indigo-100/35 pointer-events-none group-hover:text-indigo-200/45 transition-colors"
                animate={{ y: [3, -3, 3], rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Compass className="w-24 h-24 sm:w-32 sm:h-32" />
              </motion.div>

              <div>
                {/* Card Header with Rotating Compass Box */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="relative">
                    {/* Pulsing Ripple Halo */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-indigo-500/20 blur-sm"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    />
                    <motion.div 
                      whileHover={{ rotate: 180, scale: 1.08 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-900/25 relative z-10 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      >
                        <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-black text-[#2563EB] bg-blue-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200 uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping" />
                    OUR VISION
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-black text-[#0B1120] group-hover:text-[#2563EB] transition-colors leading-tight mb-2 sm:mb-2.5 relative z-10">
                  Becoming a Trusted Global Tech Partner
                </h3>

                <blockquote className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium bg-gradient-to-br from-indigo-50/60 to-slate-50/40 p-3 sm:p-4 rounded-xl border border-blue-100/70 relative z-10 shadow-xs">
                  "To become a <strong className="text-[#2563EB]">trusted global technology partner</strong> recognized for software innovation, professional IT consulting, PMO excellence, and skilled remote talent."
                </blockquote>

                {/* Key Vision Highlights / Chips (Hidden on Mobile) */}
                <div className="hidden sm:flex mt-3 sm:mt-3.5 flex-wrap gap-1.5 relative z-10">
                  {[
                    "Global Technology Leader",
                    "Software Innovation",
                    "PMO Excellence",
                    "Remote IT Talent"
                  ].map((chip, idx) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.04, backgroundColor: '#EFF6FF' }}
                      className="text-[10px] sm:text-[11px] font-bold text-[#1E40AF] bg-white border border-blue-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg shadow-2xs flex items-center gap-1 transition-all"
                    >
                      <Globe2 className="w-3 h-3 text-[#2563EB]" />
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-500 relative z-10">
                <span className="flex items-center gap-1.5 text-[#2563EB]">
                  <Globe2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  International Operations
                </span>
                <span className="text-[#2563EB] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Pillar 02 <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>

          </div>

          {/* Core Values / Strategic Pillars Ribbon (Hidden on Mobile) */}
          <div className="hidden sm:grid mt-8 sm:mt-10 grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Sparkles,
                title: "Innovation First",
                desc: "Modern software architecture & high-efficiency digital tools."
              },
              {
                icon: CheckCircle2,
                title: "Quality Assurance",
                desc: "Standardized QA protocols for zero-downtime reliability."
              },
              {
                icon: Globe2,
                title: "Global Reach",
                desc: "Partnering across India, UK, Europe, & global markets."
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-4 rounded-xl bg-white/90 border border-blue-100 shadow-sm flex items-center gap-3.5 group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] border border-blue-200/80 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors shadow-2xs">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#0B1120] group-hover:text-[#2563EB] transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>



      {/* 4. COMPANY TIMELINE - Interactive Connecting Roadmap */}
      <section className="py-8 sm:py-24 bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
        {/* Ambient Glow background */}
        <motion.div 
          className="absolute rounded-full pointer-events-none"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', top: '20%', left: '50%', transform: 'translateX(-50%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-20 px-2">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-5xl font-black text-[#0B1120] tracking-tight leading-tight"
            >
              Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Milestone Timeline</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-xl mx-auto"
            >
              Our strategic evolution from a local IT startup in Madurai to an international technology partner.
            </motion.p>
          </div>

          {/* Timeline Container with Horizontal Scroll on Mobile */}
          <div className="relative">
            
            {/* Horizontal Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] rounded-full z-0 opacity-80" />

            {/* Mobile Swipe Prompt Indicator */}
            <div className="flex md:hidden items-center justify-center gap-1.5 text-[10px] font-extrabold text-[#2563EB] mb-3.5 bg-blue-50/90 py-1 px-3.5 rounded-full border border-blue-200/90 w-fit mx-auto shadow-2xs">
              <span>Swipe side to side to view milestones</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
            </div>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              {[
                { year: "2021", title: "Establishment in Madurai", desc: "Founded to deliver business-critical applications, IT consulting, and software services.", icon: Building2 },
                { year: "2022", title: "Enterprise & ERP Solutions", desc: "Expanded core capabilities into custom ERP platforms, billing automation, and PMO services.", icon: Server },
                { year: "2023", title: "Resource Augmentation & Cloud", desc: "Launched dedicated remote IT talent solutions and high-speed cloud infrastructure management.", icon: Users },
                { year: "2024+", title: "Global Technology Partner", desc: "Serving clients across India, the UK, Europe, and international markets with full-stack IT capabilities.", icon: Globe2 }
              ].map((evt, idx) => {
                const EvtIcon = evt.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(37,99,235,0.18)' }}
                    className="w-[82vw] max-w-[285px] md:w-auto shrink-0 snap-center p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-blue-100 shadow-md sm:shadow-xl shadow-blue-900/5 relative flex flex-col justify-between group transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Gradient Shimmer Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Header Node */}
                      <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center shadow-md sm:shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                          <EvtIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm font-black font-mono text-[#2563EB] bg-blue-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200 shadow-2xs">
                          {evt.year}
                        </span>
                      </div>

                      <h4 className="font-black text-base sm:text-lg text-[#0B1120] group-hover:text-[#2563EB] transition-colors leading-tight mb-1.5 sm:mb-2">
                        {evt.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {evt.desc}
                      </p>
                    </div>

                    {/* Step indicator footer */}
                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-400">
                      <span>Phase 0{idx + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-[#2563EB] group-hover:scale-150 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE TOMTOP SOLUTIONS */}
      <WhyChooseUs />

    </div>
  );
}
