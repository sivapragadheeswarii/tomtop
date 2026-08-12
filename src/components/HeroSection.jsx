import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';

export default function HeroSection({ onOpenQuote }) {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-6 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 text-[#0F172A] overflow-hidden flex flex-col justify-between items-center bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-35 sm:opacity-40 filter contrast-110 brightness-105"
      >
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>

      {/* Soft Gradient Mask Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/40 via-[#F0F7FF]/70 to-[#F8FAFC] z-10 pointer-events-none" />

      {/* Ambient Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-[250px] sm:h-[350px] bg-blue-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-10" />

      {/* Hero Content Container (Centered Vertically) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center space-y-4 sm:space-y-8 my-auto">
        
        {/* Top Centered Pill Badge (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 shadow-md shadow-blue-900/5 text-[#1E3A8A] text-[10px] sm:text-xs font-black uppercase tracking-wide sm:tracking-wider max-w-[95%] mx-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse shrink-0" />
          <span className="truncate">Next-Gen Enterprise IT &amp; Cloud Solutions</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] tracking-tight leading-[1.15] sm:leading-[1.1] max-w-4xl mx-auto drop-shadow-xs px-1"
        >
          Accelerating Business{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
            Digital Transformation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
        >
          Innovative software solutions, professional IT consulting services, and skilled remote IT talent engineered for growing enterprises.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 pt-1 sm:pt-2 max-w-xs xs:max-w-sm sm:max-w-none mx-auto w-full"
        >
          <button
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 sm:space-x-2.5 text-xs sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-blue-300/30"
          >
            <span>Request Free Proposal</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white/95 hover:bg-blue-50 border border-blue-200 text-[#0F172A] font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 text-xs sm:text-base hover:border-[#3B82F6] hover:text-[#2563EB] active:scale-95 shadow-sm backdrop-blur-md"
          >
            <PhoneCall className="w-4 h-4 text-[#2563EB]" />
            <span>Contact Technical Team</span>
          </Link>
        </motion.div>

      </div>

      {/* Scroll Down Indicator (At Bottom Edge of Viewport) */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-auto pt-4 flex flex-col items-center space-y-1 relative z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700/70 hidden sm:block">Scroll</span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center hover:border-[#2563EB] shadow-sm">
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
        </div>
      </motion.div>
    </section>
  );
}
