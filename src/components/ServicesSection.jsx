import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2, Globe, ClipboardCheck, Server,
  ArrowRight, Sparkles, ChevronRight, ChevronDown, CheckCircle2
} from 'lucide-react';

const FEATURED_SERVICES = [
  {
    id: 'software-development',
    num: '01',
    icon: Code2,
    title: 'Software Development',
    category: 'Custom Engineering',
    desc: 'High-performance custom software, enterprise ERP platforms, and scalable web applications.',
    tags: ['Enterprise ERP', 'Custom APIs', 'Cloud Native']
  },
  {
    id: 'website-development',
    num: '02',
    icon: Globe,
    title: 'Website Development',
    category: 'Digital Presence',
    desc: 'Corporate web portals, e-commerce applications, and custom CMS platforms built with optimal speed.',
    tags: ['Corporate Portals', 'E-Commerce', 'Custom CMS']
  },
  {
    id: 'it-project-management',
    num: '03',
    icon: ClipboardCheck,
    title: 'IT Project Management',
    category: 'PMO & Governance',
    desc: 'Executive PMO consulting, agile sprint governance, business analysis, and ERP support.',
    tags: ['Agile PMO', 'Business Analysis', 'ERP Rollout']
  },
  {
    id: 'managed-it-services',
    num: '04',
    icon: Server,
    title: 'Managed IT Services',
    category: 'Cloud & SLA Support',
    desc: 'Cloud web hosting, domain administration, application support, and 24/7 AMC Support.',
    tags: ['Cloud Hosting', '24/7 AMC Support', 'System Security']
  }
];

export default function ServicesSection({ onOpenQuote }) {
  const [activeId, setActiveId] = useState('software-development');

  const activeService = FEATURED_SERVICES.find(s => s.id === activeId) || FEATURED_SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="py-10 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden text-[#0F172A]">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-row items-end justify-between mb-6 sm:mb-12 pb-4 sm:pb-5 border-b border-slate-200/80 gap-3">
          <div className="space-y-1 sm:space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E3A8A] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-2xs"
            >
              <Sparkles className="w-3 h-3 text-[#2563EB]" />
              <span>Core Pillars</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight"
            >
              Enterprise Software &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
                Cloud Ecosystem
              </span>
            </motion.h2>
          </div>

          <Link to="/services" className="shrink-0">
            <button className="text-[11px] sm:text-sm font-extrabold text-slate-600 hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 group cursor-pointer">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* ── MOBILE VIEW ONLY: Show ONLY First 2 Services (sm:hidden) ── */}
        <div className="block sm:hidden space-y-2.5">
          {FEATURED_SERVICES.slice(0, 2).map((svc) => {
            const isExpanded = svc.id === activeId;
            const IconComp = svc.icon;

            return (
              <div
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-blue-200 shadow-md shadow-blue-950/5'
                    : 'bg-white/80 border-slate-200/80'
                }`}
              >
                {/* Accordion Header */}
                <div className="py-3 px-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                      isExpanded ? 'bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className={`text-xs font-extrabold ${isExpanded ? 'text-[#1E3A8A]' : 'text-[#0F172A]'}`}>
                        {svc.title}
                      </h3>
                      <span className="text-[9px] font-semibold text-slate-400 block">
                        {svc.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-400">
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-[#2563EB]" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>

                {/* Compact Expanded Body */}
                {isExpanded && (
                  <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 space-y-2.5">
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {svc.desc}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {svc.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-[#1E3A8A] rounded border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote && onOpenQuote(svc.title);
                      }}
                      className="w-full py-2 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-bold rounded-lg text-[10px] flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer mt-2"
                    >
                      <span>Get Proposal</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP VIEW ONLY: Premium 2-Column Split Showcase (hidden sm:grid) ── */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: 4 Interactive Pillars List */}
          <div className="lg:col-span-6 space-y-2">
            {FEATURED_SERVICES.map((svc) => {
              const isActive = svc.id === activeId;

              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveId(svc.id)}
                  onClick={() => setActiveId(svc.id)}
                  className={`group relative py-4 sm:py-5 px-5 sm:px-6 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between border ${
                    isActive
                      ? 'bg-white border-blue-200/90 shadow-lg shadow-blue-950/5 text-[#1E3A8A]'
                      : 'bg-transparent border-transparent hover:bg-white/70 text-slate-600'
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-r-full transition-all duration-300 ${
                      isActive ? 'h-8 bg-[#2563EB] shadow-xs shadow-blue-500/50' : 'h-0 bg-transparent group-hover:h-4 group-hover:bg-blue-300'
                    }`}
                  />

                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`text-xs font-mono font-extrabold transition-colors ${
                      isActive ? 'text-[#2563EB]' : 'text-slate-400 group-hover:text-[#2563EB]'
                    }`}>
                      {svc.num}
                    </span>

                    <div>
                      <h3 className={`text-base sm:text-xl font-extrabold transition-colors leading-tight ${
                        isActive ? 'text-[#1E3A8A]' : 'text-[#0F172A] group-hover:text-[#2563EB]'
                      }`}>
                        {svc.title}
                      </h3>
                      <span className={`text-[11px] font-semibold transition-colors block mt-0.5 ${
                        isActive ? 'text-blue-600/80' : 'text-slate-400 group-hover:text-slate-500'
                      }`}>
                        {svc.category}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-[#2563EB] translate-x-1' : 'text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Executive Display Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 15, scale: 0.99 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -15, scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[28px] p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden flex flex-col justify-between min-h-[360px]"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]" />

                <div className="space-y-5 relative z-10">
                  {/* Header Row */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                      <ActiveIcon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-blue-50 text-[#1E3A8A] rounded-full border border-blue-200">
                      {activeService.num} / 04
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-snug">
                      {activeService.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2 font-normal">
                      {activeService.desc}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeService.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1.5 bg-blue-50/70 text-[#1E3A8A] rounded-lg border border-blue-100 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                  <button
                    onClick={() => onOpenQuote && onOpenQuote(activeService.title)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#1E3A8A] text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Request Proposal for {activeService.title}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
