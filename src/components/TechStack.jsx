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
    <section className="py-24 bg-[#F0F7FF] relative overflow-hidden text-[#111827] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold text-[#2563EB] mb-4 shadow-sm"
          >
            <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="uppercase tracking-widest">Engineering Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight"
          >
            Modern Tech Ecosystem
          </motion.h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
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
                  ? 'bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-slate-600 hover:text-[#111827] hover:bg-blue-50 border border-blue-100 shadow-sm'
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
              className="bg-white p-6 rounded-2xl border border-blue-100 text-center flex flex-col items-center justify-center group hover:border-[#60A5FA] shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-600/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center font-bold text-2xl mb-3 shadow-inner group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                {tech.icon || tech.name.charAt(0)}
              </div>
              <div className="text-sm font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors">{tech.name}</div>
              <div className="text-[10px] text-slate-500 font-semibold mt-1">{tech.category} • {tech.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
