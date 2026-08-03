import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/companyData';
import { Star, Quote, Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#09132A] via-[#0D1D3A] to-[#070A11] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Cyber Orbs & Glowing Glow Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-blue-600/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-950/90 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#38BDF8] mb-4 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-widest">Client Feedback & Ratings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
              Enterprise Leaders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            See what executives and business managers say about our software engineering, ERP solutions, and 99.9% uptime cloud hosting.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {(testimonialsData || []).map((item, idx) => {
            const authorName = item.name || item.author || "Client Executive";
            const quoteText = item.quote || item.content || "";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0B1A38]/80 border border-white/15 hover:border-[#38BDF8]/60 backdrop-blur-2xl flex flex-col justify-between relative group shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(56,189,248,0.20)] overflow-hidden"
              >
                {/* Glowing Top Beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

                <Quote className="w-10 h-10 text-[#38BDF8]/25 absolute top-6 right-6 group-hover:text-[#38BDF8]/50 transition-colors pointer-events-none" />

                <div>
                  {/* Star Rating & Verified Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-[10px] font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed italic mb-8 font-medium">
                    "{quoteText}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="flex items-center space-x-3.5 pt-5 border-t border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] text-white flex items-center justify-center font-extrabold text-base shadow-xl border border-cyan-400/30 shrink-0 group-hover:scale-105 transition-transform">
                    {authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                      {authorName}
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {item.role}, <span className="text-slate-400">{item.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
