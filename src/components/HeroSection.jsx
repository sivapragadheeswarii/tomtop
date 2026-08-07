import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, ChevronDown, Globe, Smartphone, Layers, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Flutter', icon: '📱' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'AWS Cloud', icon: '☁️' }
];

export default function HeroSection({ onOpenQuote }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const floatingCards = [
    {
      title: 'Web Development',
      subtitle: 'React JS & Vite High-Speed Core',
      tag: 'Live Active',
      icon: Globe,
      color: 'text-[#38BDF8]',
      badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      delay: 0,
      hoverBorder: 'hover:border-[#38BDF8]'
    },
    {
      title: 'Mobile App Dev',
      subtitle: 'iOS & Android Cross-Platform',
      tag: 'Flutter Engine',
      icon: Smartphone,
      color: 'text-purple-400',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      delay: 1.2,
      hoverBorder: 'hover:border-purple-400'
    },
    {
      title: 'ERP Solutions',
      subtitle: 'Billing, Inventory & HR Engine',
      tag: 'Custom ERP',
      icon: Layers,
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      delay: 2.4,
      hoverBorder: 'hover:border-amber-400'
    }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-44 lg:pb-20 text-[#111827] overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#FAF5FF]">
      {/* 1. Main Clean Hero Viewport - Soft Violet Gradient Background */}
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-65 filter contrast-115 brightness-105 saturate-120"
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>

        {/* Soft Violet Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5FF]/20 via-[#FAF5FF]/40 to-[#FAF5FF] z-10 pointer-events-none" />

        {/* Soft Radial Spotlight Behind Left Column Hero Text */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl h-[380px] bg-white/75 blur-[75px] rounded-full pointer-events-none z-10 hidden lg:block"></div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6"
            >
              {/* Animated Studio Badge (Desktop/Tablet Only) */}
              <motion.div
                variants={itemVariants}
                className="hidden sm:inline-flex items-center space-x-2 bg-white/95 border border-purple-300 px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] shadow-md backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                </span>
                <span>Top Software Company in Madurai</span>
              </motion.div>

              {/* Business-Focused SEO Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-snug sm:leading-[1.15] drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
              >
                Building Scalable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]">
                  Web Apps, ERP & Cloud
                </span>
              </motion.h1>

              {/* Concise SEO Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-[#1E293B] text-xs sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-bold leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,1)]"
              >
                Engineering high-performance web applications, custom ERP software, mobile apps, and NVMe cloud hosting for modern businesses.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4"
              >
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-2xl shadow-[0_10px_25px_-5px_rgba(124,58,237,0.35)] flex items-center justify-center space-x-2 text-sm sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-purple-300/40"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Request Free Proposal</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white/90 hover:bg-purple-50 border border-purple-200 text-[#111827] font-semibold rounded-2xl transition-all text-center flex items-center justify-center space-x-2 text-sm sm:text-base hover:border-[#C084FC] hover:text-[#7C3AED] active:scale-95 shadow-sm backdrop-blur-sm"
                >
                  <PhoneCall className="w-4 h-4 text-[#7C3AED]" />
                  <span>Contact Technical Team</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Floating White Service Cards (Desktop View) */}
            <div className="hidden lg:block lg:col-span-5 relative mt-4 lg:mt-0">
              
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-2.5 sm:space-y-3.5 max-w-sm sm:max-w-md mx-auto lg:max-w-none relative z-20">
                {floatingCards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -4, 0]
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.3 + idx * 0.15 },
                        y: { duration: 4 + idx * 0.8, repeat: Infinity, ease: 'easeInOut', delay: card.delay }
                      }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenQuote(card.title)}
                      className="p-3.5 sm:p-5 rounded-2xl border border-purple-100 bg-white shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-600/15 hover:border-[#C084FC] transition-all duration-300 cursor-pointer group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] transition-colors duration-300">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C3AED] group-hover:text-white transition-colors" />
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 flex-wrap gap-y-0.5">
                            <h4 className="font-extrabold text-[#111827] text-xs sm:text-sm">
                              {card.title}
                            </h4>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border bg-purple-50 text-[#7C3AED] border-purple-200">
                              {card.tag}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1"
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-purple-700/70 hidden sm:block">Scroll</span>
          <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center hover:border-[#7C3AED] shadow-sm cursor-pointer">
            <ChevronDown className="w-4 h-4 text-[#7C3AED]" />
          </div>
        </motion.div>
      </section>
  );
}

export function TechStackMarquee() {
  return (
    <section className="py-10 sm:py-14 bg-[#F5F3FF] border-y border-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-purple-100/90 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-purple-200 shadow-sm">
            Powered by Enterprise Technical Stacks
          </span>
        </div>
        <div className="overflow-hidden flex relative w-full">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex items-center space-x-8 sm:space-x-14 shrink-0 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 sm:space-x-3 text-slate-600 hover:text-[#111827] transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
