import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code2, ClipboardCheck, Users, GraduationCap, Server, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/companyData';

const iconMap = { Code2, Globe, ClipboardCheck, Users, GraduationCap, Server };

const CARD_STYLES = [
  { bg: 'from-blue-600 to-indigo-600', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  { bg: 'from-indigo-600 to-blue-700', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { bg: 'from-blue-700 to-slate-800', badge: 'bg-slate-50 text-slate-700 border-slate-200' },
  { bg: 'from-sky-600 to-blue-600', badge: 'bg-sky-50 text-sky-700 border-sky-200' },
  { bg: 'from-blue-800 to-indigo-900', badge: 'bg-blue-50 text-blue-800 border-blue-200' },
  { bg: 'from-blue-600 to-cyan-600', badge: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
];

export default function ServicesSection({ onOpenQuote, limit }) {
  const services = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] relative overflow-hidden text-[#0F172A]">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto space-y-2.5">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Core Pillars</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Enterprise Software &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
              Cloud Ecosystem
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xs sm:text-sm font-medium"
          >
            Custom software, cloud infrastructure, and IT consulting engineered to scale.
          </motion.p>
        </div>

        {/* ── 📱 / 💻 SLEEK MINIMALIST EXECUTIVE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((svc, idx) => {
            const ActiveIcon = iconMap[svc.iconName] || Globe;
            const style = CARD_STYLES[idx % CARD_STYLES.length];

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => onOpenQuote(svc.title)}
                className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="space-y-3.5">
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center text-white shadow-md shadow-blue-900/15 group-hover:scale-105 transition-transform`}>
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${style.badge}`}>
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1.5 font-normal line-clamp-2">
                      {svc.shortDesc || svc.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Arrow Bar */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#2563EB] group-hover:text-[#1E3A8A] transition-colors inline-flex items-center gap-1">
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <Link to="/services" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Centered Footer CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link to="/services">
            <button className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-[#1E3A8A] font-extrabold rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 group cursor-pointer">
              <span>View All IT Services &amp; Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
