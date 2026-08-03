import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/companyData';
import { Code2 } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database & Cloud'];

  const techList = techStackData || [];

  const filteredTech = activeCategory === 'All'
    ? techList
    : techList.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-[#070A11] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#38BDF8] mb-4 shadow-lg"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Engineering Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Modern Tech Ecosystem
          </motion.h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            We use cutting-edge frameworks, high-performance databases, and enterprise hosting environments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/40'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -5 }}
              className="dark-glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center group hover:border-[#38BDF8]/40"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#38BDF8] flex items-center justify-center font-bold text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform">
                {tech.icon || tech.name.charAt(0)}
              </div>
              <div className="text-sm font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">{tech.name}</div>
              <div className="text-[10px] text-slate-500 font-semibold mt-1">{tech.category} • {tech.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
