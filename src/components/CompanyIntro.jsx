import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Award, CheckCircle2, Building2, Users } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function CompanyIntro({ onOpenQuote }) {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100 relative overflow-hidden text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Short Executive Intro */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider"
            >
              <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>About Tomtop Solutions</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
            >
              Accelerating Business Transformation Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
                Modern IT Engineering
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium"
            >
              Established in 2021, Tomtop Solutions partners with businesses to design, implement, and support mission-critical applications. We deliver end-to-end software development, cloud ecosystem consulting, and high-caliber technical talent to drive sustainable growth.
            </motion.p>

            {/* Quick Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Tailored Software &amp; Mobile Architecture</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Dedicated Remote IT Professionals</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link to="/about">
                <button className="px-5 py-2.5 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-xl text-xs flex items-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer">
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Compact Key Metrics Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white p-6 sm:p-7 rounded-3xl shadow-xl shadow-blue-900/10 border border-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Company Overview</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">Est. 2021</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {companyInfo.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-white block">{stat.number}</span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
