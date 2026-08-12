import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

export default function CompanyIntro({ onOpenQuote }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-100 relative overflow-hidden text-[#0F172A]">
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── 1. Centered Executive Header & Overview ── */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E3A8A] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest"
          >
            <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>About Tomtop Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight"
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
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto px-1 sm:px-0"
          >
            Established in 2021, Tomtop Solutions partners with organizations to design, implement, and support mission-critical software applications, resilient cloud ecosystem architectures, and dedicated technical talent.
          </motion.p>
        </div>

        {/* ── 2. Value Badges (Hidden on Mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 sm:mt-10 hidden sm:flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>Tailored Software Architecture</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>Dedicated Remote IT Talent</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>Enterprise PMO Governance</span>
          </span>
        </motion.div>

        {/* ── 3. Centered CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex justify-center"
        >
          <Link to="/about">
            <button className="px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-xl text-xs sm:text-sm flex items-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
