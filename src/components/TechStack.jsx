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
    <section className="py-24 bg-[#FAF5FF] relative overflow-hidden text-[#111827] border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] mb-4 shadow-sm"
          >
            <Code2 className="w-3.5 h-3.5 text-[#7C3AED]" />
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
                  ? 'bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white text-slate-600 hover:text-[#111827] hover:bg-purple-50 border border-purple-100 shadow-sm'
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
              className="bg-white p-6 rounded-2xl border border-purple-100 text-center flex flex-col items-center justify-center group hover:border-[#C084FC] shadow-md shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-600/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED] flex items-center justify-center font-bold text-2xl mb-3 shadow-inner group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                {tech.icon || tech.name.charAt(0)}
              </div>
              <div className="text-sm font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors">{tech.name}</div>
              <div className="text-[10px] text-slate-500 font-semibold mt-1">{tech.category} • {tech.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
