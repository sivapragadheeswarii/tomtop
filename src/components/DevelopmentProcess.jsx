import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Code, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { developmentProcess } from '../data/companyData';

const processIcons = [Search, Compass, Palette, Code, Rocket, ShieldCheck];

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-[#0B1F4D] relative overflow-hidden text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#38BDF8] mb-4 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Development Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
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
                className="p-8 rounded-3xl bg-[#090D16]/80 border border-white/15 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#38BDF8] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#38BDF8] font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-white group-hover:bg-[#2563EB] flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5 text-[#38BDF8] group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
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
