import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, ShieldCheck, Cpu, Users, Award } from 'lucide-react';

export default function CompanyIntro({ onOpenQuote }) {
  const HIGHLIGHTS = [
    { icon: Cpu, value: "15+", label: "Software Deployments", desc: "Custom ERPs, Web & Mobile Portals" },
    { icon: ShieldCheck, value: "99.9%", label: "Cloud SLA Uptime", desc: "Resilient AWS & Cloud Ecosystems" },
    { icon: Users, value: "24/7", label: "Dedicated IT Support", desc: "Managed Remote Talent & PMO" },
    { icon: Award, value: "2021", label: "Est. In Madurai", desc: "Serving Global Enterprises" }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-y border-slate-100 relative overflow-hidden text-[#0F172A]">
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Text & Intro (7 cols on desktop) ── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E3A8A] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest"
            >
              <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>About Tomtop Solutions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]"
            >
              Accelerating Business Transformation Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
                Modern IT Engineering
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Established in 2021, Tomtop Solutions partners with growth-oriented organizations to design, implement, and support mission-critical software applications, resilient cloud ecosystem architectures, and dedicated technical talent.
            </motion.p>

            {/* Feature Checkmark Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 pt-1"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Tailored Software Architecture</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Dedicated Remote IT Talent</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Enterprise PMO Governance</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 border border-blue-300/30">
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#2563EB] font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 border border-slate-200 hover:border-blue-200 transition-all active:scale-95">
                  <span>Explore Capabilities</span>
                </button>
              </Link>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: High-Impact Metric Cards Grid (Desktop Only) ── */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-3.5 sm:gap-4">
            {HIGHLIGHTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="bg-gradient-to-b from-blue-50/60 via-white to-blue-50/30 rounded-2xl border border-blue-100 p-4 sm:p-5 shadow-md shadow-blue-900/5 hover:border-[#60A5FA] hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 text-[#2563EB] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-[#1E3A8A] block tracking-tight">
                    {item.value}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5 leading-snug">
                    {item.label}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
