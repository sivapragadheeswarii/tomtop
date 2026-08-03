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
    <>
      {/* 1. Main Clean Hero Viewport */}
      <section className="relative min-h-screen pt-28 pb-16 lg:pt-44 lg:pb-20 text-white overflow-hidden flex items-center justify-center bg-[#0B1F4D]">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-90"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay — stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F4D]/95 via-[#0B1F4D]/80 to-[#070A11]/70 lg:bg-gradient-to-r lg:from-[#0B1F4D]/90 lg:via-[#0B1F4D]/70 lg:to-[#070A11]/60 z-10 pointer-events-none" />

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
              {/* Animated Studio Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
                </span>
                <span>Enterprise Software Studio • Madurai HQ</span>
              </motion.div>

              {/* Business-Focused Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-[2.1rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md"
              >
                Transforming Ideas Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
                  Powerful Digital Solutions
                </span>
              </motion.h1>

              {/* Concise Description */}
              <motion.p
                variants={itemVariants}
                className="text-slate-200 text-xs sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed text-slate-300/90"
              >
                {companyInfo.shortDesc}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4"
              >
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-2 text-sm sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Request Free Proposal</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-white font-semibold rounded-2xl transition-all text-center flex items-center justify-center space-x-2 text-sm sm:text-base hover:border-[#38BDF8] active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#38BDF8]" />
                  <span>Contact Technical Team</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Floating Glassmorphism Service Cards */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

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
                      className={`p-3.5 sm:p-5 rounded-2xl border border-white/15 bg-[#0B1F4D]/85 backdrop-blur-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 ${card.hoverBorder} transition-all duration-300 cursor-pointer group flex items-center justify-between`}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors duration-300">
                          <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${card.color} group-hover:text-white transition-colors`} />
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 flex-wrap gap-y-0.5">
                            <h4 className="font-extrabold text-white text-xs sm:text-sm group-hover:text-[#38BDF8] transition-colors">
                              {card.title}
                            </h4>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${card.badgeBg}`}>
                              {card.tag}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator — visible on all screens */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1"
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">Scroll</span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-[#38BDF8] cursor-pointer">
            <ChevronDown className="w-4 h-4 text-[#38BDF8]" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export function TechStackMarquee() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-r from-[#070A11] via-[#0B162C] to-[#070A11] border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#38BDF8] bg-blue-950/80 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/30 shadow-lg">
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
                className="flex items-center space-x-2 sm:space-x-3 text-slate-300 hover:text-white filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-200 group-hover:text-[#38BDF8] transition-colors">
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
