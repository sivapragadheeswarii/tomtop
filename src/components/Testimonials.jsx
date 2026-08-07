import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/companyData';
import { Star, Quote, Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden text-[#111827] border-b border-blue-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-blue-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold text-[#2563EB] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest">Client Feedback & Ratings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight"
          >
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">
              Enterprise Leaders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
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
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-blue-100 hover:border-[#60A5FA] flex flex-col justify-between relative group shadow-lg shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/15 overflow-hidden"
              >
                {/* Glowing Top Beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

                {/* Subtle Quote Watermark placed nicely in bottom right behind text */}
                <Quote className="w-12 h-12 text-blue-100/70 absolute bottom-20 right-5 group-hover:text-blue-200/80 transition-colors pointer-events-none" />

                <div className="relative z-10">
                  {/* Star Rating & Verified Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-[10px] font-extrabold text-[#2563EB] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-8 font-medium relative z-10">
                    "{quoteText}"
                  </p>
                </div>

                {/* Author Footer */}
                <div className="flex items-center space-x-3.5 pt-5 border-t border-blue-100 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1E40AF] via-[#2563EB] to-[#60A5FA] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-blue-500/25 shrink-0 group-hover:scale-105 transition-transform">
                    {authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                      {authorName}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.role}, <span className="text-slate-600">{item.company}</span>
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
