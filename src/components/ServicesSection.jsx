import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, Database, Code, ShieldCheck, Server,
  ArrowRight, CheckCircle2, Sparkles, Cpu, Terminal, Zap, Shield, Layers
} from 'lucide-react';
import { servicesData } from '../data/companyData';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Database: Database,
  Code: Code,
  ShieldCheck: ShieldCheck,
  Server: Server
};

export default function ServicesSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = servicesData[activeTab] || servicesData[0];
  const ActiveIcon = iconMap[activeService.iconName] || Globe;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#F0F7FF] relative overflow-hidden text-[#111827] border-b border-blue-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100/90 border border-blue-200 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#2563EB] mb-3 sm:mb-5 shadow-sm"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest">Engineering Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight"
          >
            Enterprise Software &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">
              Cloud Ecosystem
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 sm:mt-4 text-slate-600 text-xs sm:text-lg leading-relaxed hidden sm:block"
          >
            Select a service domain below to explore live architectural specs, feature capabilities, and enterprise SLAs.
          </motion.p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-3 mb-6 sm:mb-12 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {servicesData.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Globe;
            const isActive = activeTab === idx;

            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-sm font-bold flex items-center space-x-2 transition-all duration-300 whitespace-nowrap shrink-0 shadow-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-md shadow-blue-500/25 border border-blue-300'
                    : 'bg-white text-slate-700 border border-blue-100 hover:border-[#60A5FA] hover:text-[#2563EB]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-[#2563EB]'}`} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card (White Card with Soft Shadow) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            {/* Main Spotlight Box */}
            <div className="lg:col-span-7 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between relative overflow-hidden group">
              {/* Ambient Glow */}
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />

              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shadow-md shrink-0">
                      <ActiveIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest block">
                        Featured Architecture
                      </span>
                      <h3 className="text-base sm:text-3xl font-extrabold text-[#111827] leading-tight">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-extrabold px-3.5 py-1.5 bg-blue-50 text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shadow-sm shrink-0">
                    {activeService.badge}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-8">
                  {activeService.shortDesc || activeService.description}
                </p>

                {/* Key Capabilities Checklist */}
                <h4 className="text-[10px] sm:text-xs font-bold text-[#2563EB] uppercase tracking-widest mb-2.5 sm:mb-4 flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Engineering Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5 mb-4 sm:mb-8">
                  {activeService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-blue-50/60 border border-blue-100 flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#111827]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3.5 sm:pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
                <div className="hidden sm:flex items-center space-x-2 text-xs font-bold text-slate-500">
                  <Cpu className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Enterprise SLA Included</span>
                </div>
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 text-xs sm:text-sm group/btn transition-all active:scale-95"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side Overview Grid Cards */}
            <div className="hidden lg:flex lg:col-span-5 space-y-4 flex-col justify-between">
              {servicesData
                .filter((_, idx) => idx !== activeTab)
                .slice(0, 3)
                .map((service) => {
                  const Icon = iconMap[service.iconName] || Globe;

                  return (
                    <div
                      key={service.id}
                      onClick={() => setActiveTab(servicesData.findIndex((s) => s.id === service.id))}
                      className="p-6 rounded-3xl bg-white border border-blue-100 hover:border-[#60A5FA] shadow-lg shadow-blue-900/5 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-blue-600/10"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1 gap-2">
                            <h4 className="text-base font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors truncate">
                              {service.title}
                            </h4>
                            <span className="text-[9px] font-extrabold px-2 py-0.5 bg-blue-50 text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shrink-0">
                              {service.badge}
                            </span>
                          </div>
                          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <Link
                to="/services"
                className="block p-5 text-center rounded-2xl bg-white hover:bg-blue-50 border border-blue-200 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-all shadow-sm"
              >
                Explore All Corporate Services Specifications →
              </Link>
            </div>

            {/* Mobile View All Services Link */}
            <div className="lg:hidden mt-1">
              <Link
                to="/services"
                className="block p-3.5 text-center rounded-xl bg-white hover:bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] transition-all shadow-sm active:scale-95"
              >
                View All Corporate Services →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
