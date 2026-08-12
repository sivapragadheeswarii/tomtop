import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Code2, ClipboardCheck, Users, GraduationCap, Server,
  ArrowRight, CheckCircle2, Sparkles, HelpCircle, ChevronDown, Layers,
  Factory, Building2, TrendingUp, ShoppingBag, Briefcase,
  Landmark, Hotel, Home, Truck, ShieldAlert, Cpu
} from 'lucide-react';
import { servicesData, faqData, industriesData } from '../data/companyData';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  ClipboardCheck: ClipboardCheck,
  Users: Users,
  GraduationCap: GraduationCap,
  Server: Server
};

const industryIcons = {
  textile: Factory,
  education: GraduationCap,
  cooperative: Building2,
  smes: TrendingUp,
  retail: ShoppingBag,
  service: Briefcase
};

const SERVICES_INDUSTRIES = [
  { name: "Textile & Manufacturing", icon: Factory, desc: "Specialized inventory tracking, loom allocation, yarn batch control, and factory ERP solutions." },
  { name: "Educational Institutions", icon: GraduationCap, desc: "Comprehensive school and campus management portals, student record systems, and billing engines." },
  { name: "Cooperative Societies", icon: Building2, desc: "Secure financial audit systems, member registries, ledger management, and automated invoicing." },
  { name: "Small & Medium Enterprises (SMEs)", icon: TrendingUp, desc: "Agile, cost-effective digital portals, custom CRM workflows, and operational automation software." },
  { name: "Retail & Trading", icon: ShoppingBag, desc: "High-speed billing systems, barcode POS inventory, multi-location stock sync, and web portals." },
  { name: "Service Organizations", icon: Briefcase, desc: "Client portal platforms, resource scheduling tools, project governance engines, and SLA dashboards." }
];

const SERVICES_INDUSTRY_CARDS = [
  { ...SERVICES_INDUSTRIES[0], img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { ...SERVICES_INDUSTRIES[1], img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" },
  { ...SERVICES_INDUSTRIES[2], img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80" },
  { ...SERVICES_INDUSTRIES[3], img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
  { ...SERVICES_INDUSTRIES[4], img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
  { ...SERVICES_INDUSTRIES[5], img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
];

function ServicesIndustriesCarousel({ onOpenQuote }) {
  const VISIBLE = 4;
  const TOTAL = SERVICES_INDUSTRY_CARDS.length;
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeCardIdx, setActiveCardIdx] = useState(null);
  const timerRef = React.useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % TOTAL);
      setActiveCardIdx(null);
    }, 3000);
  };

  React.useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    SERVICES_INDUSTRY_CARDS[(activeIdx + i) % TOTAL]
  );

  const totalDots = TOTAL;

  return (
    <section className="py-8 sm:py-24 bg-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14 px-2">
          <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mt-1">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">Serve</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Precision-engineered software for 6 specialized enterprise verticals.
          </p>
        </div>

        {/* 4-card single row / 2x2 grid on mobile with slide transition */}
        <div className="relative overflow-hidden">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {visibleCards.map((ind, i) => {
              const IconComp = ind.icon;
              const isRevealed = activeCardIdx === i;

              return (
                <div
                  key={`${activeIdx}-${i}`}
                  onClick={() => {
                    setActiveCardIdx(isRevealed ? null : i);
                    if (onOpenQuote) onOpenQuote(`${ind.name} Solution`);
                  }}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-3xl border backdrop-blur-xl shadow-md sm:shadow-lg shadow-blue-900/5 transition-all duration-500 cursor-pointer ${
                    isRevealed
                      ? 'border-[#2563EB] shadow-xl bg-blue-50'
                      : 'border-blue-100 bg-[#F0F7FF] hover:shadow-xl hover:border-[#60A5FA]'
                  }`}
                >
                  {/* Hover & Tap reveal background image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-600 ${
                      isRevealed ? 'opacity-90 scale-105' : 'opacity-0 group-hover:opacity-90 group-hover:scale-105'
                    }`}
                    style={{ backgroundImage: `url(${ind.img})` }}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      isRevealed
                        ? 'from-[#111827]/90 via-[#111827]/60 to-[#111827]/30'
                        : 'from-[#F0F7FF] via-[#F0F7FF]/80 to-[#F0F7FF]/40 group-hover:from-[#111827]/90 group-hover:via-[#111827]/60 group-hover:to-[#111827]/30'
                    }`}
                  />

                  {/* Top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent transition-opacity duration-500 ${
                      isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-3 sm:p-7 h-full min-h-[175px] sm:min-h-[280px]">
                    {/* Icon circle */}
                    <div
                      className={`w-9 h-9 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] border-2 border-white flex items-center justify-center mb-2 sm:mb-5 transition-all duration-400 shadow-md ${
                        isRevealed
                          ? 'scale-110 shadow-lg shadow-blue-600/40'
                          : 'group-hover:scale-110 group-hover:shadow-lg'
                      }`}
                    >
                      <IconComp className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <h3
                      className={`text-[11px] sm:text-base font-extrabold transition-colors duration-300 mb-1 sm:mb-2 leading-tight ${
                        isRevealed ? 'text-white' : 'text-[#111827] group-hover:text-white'
                      }`}
                    >
                      {ind.name}
                    </h3>

                    <p
                      className={`text-[9px] sm:text-xs leading-tight sm:leading-relaxed transition-colors duration-300 line-clamp-2 sm:line-clamp-none max-w-full sm:max-w-[170px] ${
                        isRevealed ? 'text-blue-200' : 'text-slate-600 group-hover:text-blue-200'
                      }`}
                    >
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-10">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIdx(i); startTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === activeIdx
                  ? "w-5 sm:w-8 h-1.5 sm:h-2 bg-[#2563EB] shadow-xs"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-200 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Services() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});

  return (
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">
      
      {/* 1. HERO BANNER (Full 100dvh Viewport Constraint) */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen flex flex-col justify-between items-center pt-20 pb-4 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
        {/* Background Image: Matched Contact Page Opacity & Filter */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/services_hero_bg.png"
            alt="Professional software engineers and IT consultants working in modern office"
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
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">Enterprise IT Capabilities &amp; Services</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-[#0F172A] max-w-4xl mx-auto drop-shadow-xs px-1"
          >
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">IT Solutions &amp; Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            From custom software and website development to IT project management, talent augmentation, corporate training, and managed IT support.
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
              <span>Explore 6 Core Services</span>
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

      {/* 2. 6 CORE SERVICE CATEGORIES SHOWCASE */}
      <section className="py-8 sm:py-20 lg:py-28 relative overflow-hidden border-b border-blue-100 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-20 px-2">
            <h2 className="text-xl sm:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Technology Capabilities</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-lg leading-relaxed max-w-xl mx-auto">
              Designed to support growing businesses, corporate enterprises, and institutions through every phase of digital evolution.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || Layers;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl sm:rounded-3xl bg-[#F0F7FF]/50 border border-blue-100 p-5 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl shadow-md sm:shadow-lg shadow-blue-900/5 transition-all duration-300 group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] text-white flex items-center justify-center shadow-md shadow-blue-600/20 shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shadow-2xs">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-2xl font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist (Hidden on Mobile for Compact Clean View) */}
                    <div className="hidden sm:block space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-3 border-t border-blue-100/80">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Included Capabilities:
                      </span>
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs font-semibold text-[#111827]">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t sm:border-t border-blue-100/80">
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-white hover:bg-blue-50 border border-blue-200 text-[#111827] hover:text-[#2563EB] font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-2xs active:scale-95 cursor-pointer"
                    >
                      <span className="sm:hidden">Inquire Solution</span>
                      <span className="hidden sm:inline">Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE - AUTO-SLIDE 4-CARD CAROUSEL (Matched with Portfolio Page) */}
      <ServicesIndustriesCarousel onOpenQuote={onOpenQuote} />

    </div>
  );
}

