import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Layers, Server, ArrowRight, CheckCircle2, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import { servicesData, techStackData, faqData } from '../data/companyData';
import TechStackShowcase from '../components/TechStackShowcase';

const iconMap = {
  Globe: Globe,
  Layers: Layers,
  Smartphone: Smartphone,
  Server: Server
};

export default function Services() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});
  const [openFaq, setOpenFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#FAF5FF] text-[#111827] min-h-screen">
      
      {/* 1. Viewport Hero Banner (Enterprise SaaS Theme) */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-purple-100 bg-[#FAF5FF]">
        {/* Background Image Overlay: Cloud, AI, Servers & Enterprise Digital Infrastructure */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/services_hero_bg.png"
            alt="Cloud computing, AI technology, software development, servers, enterprise digital infrastructure"
            className="w-full h-full object-cover object-center opacity-70 filter brightness-75 saturate-60 contrast-110 pointer-events-none transition-all duration-700"
          />
          {/* Dual Overlay: Matched Dark Navy/Violet tone blending to #FAF5FF */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#1E1B4B]/75 to-[#FAF5FF] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto w-full">
          {/* Glassmorphism Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/95 border border-purple-300/80 px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] mb-4 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px]">Enterprise IT & Software Services</span>
          </motion.div>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-md"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-purple-400">/</span>
            <span className="text-white font-bold">Services</span>
          </motion.div>

          {/* Large Bold Heading: Pure White (#FFFFFF) with #C084FC Keyword Highlight & Soft Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-[#FFFFFF] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
          >
            Custom Web, Mobile & <span className="text-[#C084FC] font-extrabold drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)]">Cloud ERP Solutions</span>
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-6 text-slate-100 text-sm sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
          >
            End-to-end software engineering: custom web portals, cross-platform mobile apps, industrial ERP platforms, and 99.9% uptime NVMe cloud servers.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-2xl shadow-xl shadow-purple-950/30 flex items-center justify-center space-x-2 text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-purple-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Get Started & Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/95 hover:bg-white text-[#111827] hover:text-[#7C3AED] border border-purple-200 font-semibold rounded-2xl transition-all text-center flex items-center justify-center space-x-2 text-sm shadow-md backdrop-blur-md active:scale-95"
            >
              <span>Explore Capabilities</span>
              <ChevronDown className="w-4 h-4 text-[#7C3AED]" />
            </button>
          </motion.div>
        </div>

        {/* Animated Clickable Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
            Scroll to Explore Services
          </span>
          <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center shadow-sm hover:border-[#7C3AED]">
            <ChevronDown className="w-4 h-4 text-[#7C3AED] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. Primary Services Showcase (White Section) */}
      <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden border-b border-purple-100 bg-white text-[#111827]">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#7C3AED] mb-3 sm:mb-4 shadow-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse" />
              <span className="uppercase tracking-widest">Architectural Solution Stacks</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight"
            >
              Core Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC]">
                Cloud Capabilities
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2.5 sm:mt-4 text-slate-600 text-xs sm:text-lg leading-relaxed"
            >
              High-concurrency web portals, custom ERP platforms, cross-platform mobile apps, and high-availability cloud infrastructure.
            </motion.p>
          </div>

          {/* Central Connecting Laser Line */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-1 bg-gradient-to-b from-[#7C3AED]/20 via-[#7C3AED]/60 to-[#7C3AED]/20 pointer-events-none rounded-full" />

            <div className="space-y-10 lg:space-y-24">
              {servicesData.map((service, index) => {
                const IconComponent = iconMap[service.iconName] || Globe;
                const isEven = index % 2 === 0;
                const stepNum = String(index + 1).padStart(2, '0');

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative group border-b lg:border-none border-purple-100 pb-8 lg:pb-0"
                  >
                    {/* Central Node Pulse Point */}
                    <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-[#7C3AED] items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-ping" />
                    </div>

                    {/* Flow Layout Grid */}
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      
                      {/* Main Content Column */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-7 lg:pl-12'}`}>
                        {/* Service Step Pill */}
                        <div className={`flex items-center space-x-2.5 mb-2.5 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#A855F7] tracking-tighter">
                            #{stepNum}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-purple-50 text-[#7C3AED] rounded-full border border-purple-200 uppercase tracking-widest">
                            {service.badge}
                          </span>
                        </div>

                        {/* Header with Icon */}
                        <div className={`flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#C084FC] text-white flex items-center justify-center shadow-md shadow-purple-500/25 shrink-0 group-hover:scale-105 transition-transform">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h3 className="text-xl sm:text-3xl font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors tracking-tight">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                          {service.shortDesc}
                        </p>

                        {/* Action CTA Button */}
                        <div className={`flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <button
                            onClick={() => onOpenQuote(service.title)}
                            className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold text-xs sm:text-sm px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-purple-600/30 flex items-center space-x-2 group/btn transition-all transform hover:-translate-y-0.5"
                          >
                            <span>Learn More &amp; Request Quote</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Feature Highlights Column */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7 lg:pl-12' : 'lg:col-start-1 lg:row-start-1 lg:pr-12'}`}>
                        <div className="space-y-2 sm:space-y-3">
                          {service.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2.5 sm:space-x-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-[#C084FC] hover:bg-purple-50 backdrop-blur-md transition-all duration-300"
                            >
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[#111827]">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Technologies We Use Section */}
      <TechStackShowcase />

    </div>
  );
}
