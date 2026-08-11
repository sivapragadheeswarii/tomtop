import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Award, DollarSign, UserCheck, LifeBuoy,
  Globe2, Handshake, Sparkles, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { whyChoosePoints } from '../data/companyData';

const iconMap = [
  Users, Award, DollarSign, UserCheck, LifeBuoy, Globe2, Handshake
];

const GRADIENTS = [
  'from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]',
  'from-[#2563EB] via-[#3B82F6] to-[#60A5FA]',
  'from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]',
  'from-[#3B82F6] via-[#38BDF8] to-[#60A5FA]',
  'from-[#60A5FA] via-[#3B82F6] to-[#93C5FD]',
  'from-[#2563EB] via-[#60A5FA] to-[#38BDF8]',
  'from-[#3B82F6] via-[#60A5FA] to-[#38BDF8]',
];

const AUTOPLAY_DELAY = 2000;

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const total = whyChoosePoints.length;

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
  };

  const getCardStyle = (index) => {
    let diff = index - active;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;
    const peekX = isSmallScreen ? '36%' : '62%';

    if (diff === 0) {
      // Active center card
      return {
        zIndex: 30,
        scale: isSmallScreen ? 0.98 : 1.08,
        opacity: 1,
        x: '0%',
        filter: 'brightness(1)',
        pointerEvents: 'auto',
      };
    } else if (diff === -1) {
      // Left peek card
      return {
        zIndex: 15,
        scale: isSmallScreen ? 0.8 : 0.88,
        opacity: 0.45,
        x: `-${peekX}`,
        filter: 'brightness(0.95)',
        pointerEvents: 'auto',
      };
    } else if (diff === 1) {
      // Right peek card
      return {
        zIndex: 15,
        scale: isSmallScreen ? 0.8 : 0.88,
        opacity: 0.45,
        x: peekX,
        filter: 'brightness(0.95)',
        pointerEvents: 'auto',
      };
    } else {
      // Hidden off-screen cards
      return {
        zIndex: 0,
        scale: 0.7,
        opacity: 0,
        x: diff < 0 ? '-120%' : '120%',
        filter: 'brightness(0.8)',
        pointerEvents: 'none',
      };
    }
  };

  return (
    <section 
      className="py-8 sm:py-24 bg-[#F0F7FF] relative overflow-hidden text-[#0B1120] border-b border-blue-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Light Background Pattern & Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="light-coverflow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-coverflow-grid)"/>
        </svg>
      </div>

      <motion.div 
        className="absolute rounded-full pointer-events-none"
        style={{ width: 650, height: 650, background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '-10%', left: '30%' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-5xl lg:text-6xl font-black text-[#0B1120] tracking-tight leading-tight"
          >
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]">
              Tomtop Solutions
            </span>
          </motion.h2>
        </div>

        {/* ── 3D COVERFLOW CAROUSEL CONTAINER WITH TOUCH SWIPE ── */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[440px] sm:min-h-[540px] flex items-center justify-center touch-pan-y"
        >
          
          {/* Circular Left Control Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-6 lg:left-12 z-40 w-9 h-9 sm:w-14 sm:h-14 rounded-full border border-blue-200 bg-white/90 sm:bg-white text-[#2563EB] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Circular Right Control Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-6 lg:right-12 z-40 w-9 h-9 sm:w-14 sm:h-14 rounded-full border border-blue-200 bg-white/90 sm:bg-white text-[#2563EB] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full max-w-[275px] xs:max-w-[310px] sm:max-w-md h-[410px] sm:h-[490px] flex items-center justify-center">
            {whyChoosePoints.map((item, idx) => {
              const IconComp = iconMap[idx % iconMap.length];
              const gradTheme = GRADIENTS[idx % GRADIENTS.length];
              const isActive = active === idx;
              const cardStyle = getCardStyle(idx);

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActive(idx)}
                  animate={cardStyle}
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-blue-100 cursor-pointer flex flex-col bg-white text-[#0B1120] select-none"
                  style={{
                    boxShadow: isActive 
                      ? '0 20px 50px -10px rgba(37,99,235,0.2), 0 0 20px rgba(59,130,246,0.1)'
                      : '0 8px 24px rgba(37,99,235,0.05)',
                  }}
                >
                  {/* Top Gradient Header Block */}
                  <div className={`h-36 sm:h-48 bg-gradient-to-br ${gradTheme} p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden`}>
                    {/* Background Decorative Rings */}
                    <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-white/15 pointer-events-none" />
                    <div className="absolute right-12 -bottom-6 w-24 h-24 rounded-full border border-white/10 pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] sm:text-[11px] font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 text-white uppercase tracking-widest backdrop-blur-md border border-white/25">
                        Pillar 0{idx + 1}
                      </span>
                      <span className="text-white/80 font-mono font-black text-xs sm:text-sm">
                        0{idx + 1} / 0{total}
                      </span>
                    </div>

                    {/* Centered Floating Icon */}
                    <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                      <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white text-[#2563EB] flex items-center justify-center shadow-lg shadow-black/15 shrink-0">
                        <IconComp className="w-5 h-5 sm:w-8 sm:h-8 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-[9px] sm:text-[10px] font-black text-blue-100 uppercase tracking-widest">Tomtop Advantage</p>
                        <h4 className="text-white text-sm sm:text-lg font-black leading-tight truncate max-w-[150px] sm:max-w-none">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Bottom White Card Content */}
                  <div className="p-4 sm:p-8 flex-1 flex flex-col justify-between bg-white text-center items-center">
                    <div>
                      <h3 className="text-base sm:text-2xl font-black text-[#0B1120] leading-snug mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto line-clamp-3 sm:line-clamp-4">
                        {item.desc}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="w-full pt-3 sm:pt-4">
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(59,130,246,0.35)' }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3.5 px-5 sm:px-6 rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                      >
                        <span>Partner With Us</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── PAGINATION DOTS ── */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {whyChoosePoints.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  active === idx
                    ? 'w-7 sm:w-8 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]'
                    : 'w-2 sm:w-2.5 bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
