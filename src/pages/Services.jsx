import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
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
  const { onOpenQuote } = useOutletContext();
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
    <div className="bg-[#070A11] text-white min-h-screen">
      
      {/* 1. Viewport Hero Banner (Full Screen Mobile & Desktop Viewport) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden border-b border-white/10 bg-[#070A11]">
        {/* Generated High-Contrast Purple & Indigo Cybernetic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/services_hero_contrast_bg.png"
            alt="Enterprise Cloud & Software Architecture"
            className="w-full h-full object-cover object-center opacity-75 filter contrast-125 brightness-110 saturate-125"
          />
          {/* Subtle Overlay for maximum text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/80 via-[#0B1528]/50 to-[#070A11]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(147,51,234,0.25),transparent)]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-4 sm:mb-6 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-widest">Our Digital Expertise</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-6xl font-extrabold tracking-tight leading-snug sm:leading-[1.12] text-white max-w-4xl mx-auto"
          >
            Enterprise Software &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
              Cloud Solutions Architecture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-3 sm:mt-6 text-slate-200/90 text-xs sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
          >
            We engineer custom web portals, industrial ERP software, mobile applications, and 99.9% uptime NVMe cloud infrastructure.
          </motion.p>
        </div>

        {/* Animated Clickable Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
            Scroll to Explore Services
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-[#38BDF8]">
            <ChevronDown className="w-4 h-4 text-[#38BDF8] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. Primary Services Showcase (Refactored to Borderless Flow Design) */}
      <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11]">
        {/* Ambient High-Tech Grid & Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Ambient Light Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-blue-950/90 border border-blue-500/30 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-3 sm:mb-4 shadow-xl backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
              <span className="uppercase tracking-widest">Architectural Solution Stacks</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Core Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
                Cloud Capabilities
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2.5 sm:mt-4 text-slate-300 text-xs sm:text-lg leading-relaxed"
            >
              High-concurrency web portals, custom ERP platforms, cross-platform mobile apps, and high-availability cloud infrastructure.
            </motion.p>
          </div>

          {/* Central Connecting Laser Line (Desktop Only) */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-1 bg-gradient-to-b from-[#38BDF8]/20 via-[#38BDF8]/60 to-[#38BDF8]/20 pointer-events-none rounded-full" />

            {/* Borderless Service Nodes (No Box Containers!) */}
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
                    className="relative group border-b lg:border-none border-white/10 pb-8 lg:pb-0"
                  >
                    {/* Central Node Pulse Point (Desktop Only) */}
                    <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-[#0B1733] border-2 border-[#38BDF8] items-center justify-center shadow-[0_0_20px_#38BDF8] group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-ping" />
                    </div>

                    {/* Flow Layout Grid */}
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      
                      {/* Main Content Column */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-7 lg:pl-12'}`}>
                        {/* Service Step Pill */}
                        <div className={`flex items-center space-x-2.5 mb-2.5 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-cyan-400 tracking-tighter">
                            #{stepNum}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-blue-950/80 text-[#38BDF8] rounded-full border border-blue-500/30 uppercase tracking-widest">
                            {service.badge}
                          </span>
                        </div>

                        {/* Header with Icon */}
                        <div className={`flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] text-white flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <h3 className="text-xl sm:text-3xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors tracking-tight">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                          {service.shortDesc}
                        </p>

                        {/* Action CTA Button */}
                        <div className={`flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <button
                            onClick={() => onOpenQuote(service.title)}
                            className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-bold text-xs sm:text-sm px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center space-x-2 group/btn transition-all transform hover:-translate-y-0.5"
                          >
                            <span>Learn More &amp; Request Quote</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Feature Highlights Column (Seamless Floating Spec Bars, No Box Container) */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7 lg:pl-12' : 'lg:col-start-1 lg:row-start-1 lg:pr-12'}`}>
                        <div className="space-y-2 sm:space-y-3">
                          {service.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2.5 sm:space-x-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#38BDF8]/40 hover:bg-white/[0.07] backdrop-blur-md transition-all duration-300"
                            >
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500/20 text-[#38BDF8] flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-slate-200">
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
