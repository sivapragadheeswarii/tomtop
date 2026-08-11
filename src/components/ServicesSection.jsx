import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code2, ClipboardCheck, Users, GraduationCap, Server, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/companyData';

const iconMap = { Code2, Globe, ClipboardCheck, Users, GraduationCap, Server };

const CARD_ACCENTS = [
  { bg: 'from-blue-600 to-indigo-600', lightBg: 'bg-blue-50/70', border: 'hover:border-blue-300', text: 'text-blue-600' },
  { bg: 'from-blue-700 to-[#1E3A8A]', lightBg: 'bg-blue-50/70', border: 'hover:border-blue-400', text: 'text-[#1E3A8A]' },
  { bg: 'from-indigo-600 to-blue-700', lightBg: 'bg-indigo-50/70', border: 'hover:border-indigo-300', text: 'text-indigo-600' },
  { bg: 'from-sky-600 to-blue-600', lightBg: 'bg-sky-50/70', border: 'hover:border-sky-300', text: 'text-sky-600' },
  { bg: 'from-blue-800 to-indigo-800', lightBg: 'bg-slate-50', border: 'hover:border-slate-300', text: 'text-slate-800' },
  { bg: 'from-blue-600 to-cyan-600', lightBg: 'bg-cyan-50/70', border: 'hover:border-cyan-300', text: 'text-cyan-600' },
];

export default function ServicesSection({ onOpenQuote, limit }) {
  const services = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC] relative overflow-hidden text-[#0F172A]">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <svg width="100%" height="100%"><defs><pattern id="bento-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" fill="none" stroke="#1E3A8A" strokeWidth="0.8"/>
        </pattern></defs><rect width="100%" height="100%" fill="url(#bento-grid-pattern)"/></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Corporate Section Header ── */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold tracking-wide uppercase shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span>End-To-End Enterprise Capabilities</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
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
            className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto"
          >
            Architecting scalable custom software, cloud infrastructure, and consulting frameworks engineered for modern business growth.
          </motion.p>
        </div>

        {/* ── 💻 6-CARD ULTRA-PREMIUM EXECUTIVE BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => {
            const ActiveIcon = iconMap[svc.iconName] || Globe;
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-3xl border border-slate-200/90 ${accent.border} shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accent.bg} flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300`}>
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200/80 uppercase tracking-widest group-hover:bg-blue-50 group-hover:text-[#1E3A8A] group-hover:border-blue-200 transition-colors">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal line-clamp-2">
                      {svc.shortDesc || svc.description}
                    </p>
                  </div>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Capabilities Included:
                    </span>
                    <div className="space-y-1.5">
                      {svc.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="pt-5 mt-4 border-t border-slate-100 relative z-10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuote(svc.title)}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-[#2563EB] group-hover:text-[#1E3A8A] transition-colors cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link to="/services">
                    <span className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors">
                      Details
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-950/20"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-xl font-extrabold text-white">
              Need a Tailored Enterprise Software Architecture?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              Our expert technical consultants are available to build custom project blueprints for your business.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Enterprise Consulting')}
            className="px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-xl flex items-center gap-2 shrink-0 transition-all active:scale-95 cursor-pointer border border-blue-300/30"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Consult Technical Lead</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
