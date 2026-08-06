import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Code, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { developmentProcess } from '../data/companyData';

const processIcons = [Search, Compass, Palette, Code, Rocket, ShieldCheck];

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-[#FAF5FF] relative overflow-hidden text-[#111827] border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest">Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Our Development Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Discover → Plan → Design → Develop → Deploy → Support
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProcess.map((item, idx) => {
            const IconComp = processIcons[idx % processIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white border border-purple-100 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#C084FC] hover:shadow-2xl hover:shadow-purple-600/10 transition-all duration-300 shadow-xl shadow-purple-900/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#7C3AED] font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5 text-[#7C3AED] group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
