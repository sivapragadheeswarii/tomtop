import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function PortfolioCard({ project, onSelectProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-3xl bg-[#0B1F4D]/70 border border-white/15 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#38BDF8] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 shadow-xl text-white"
    >
      <div>
        {/* Project Image & Glass Category Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity"></div>

          {/* Floating Category Badge */}
          <span className="absolute top-3.5 left-3.5 text-[10px] font-bold px-3 py-1 bg-[#070A11]/85 backdrop-blur-md text-[#38BDF8] rounded-full border border-white/15 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Project Name & Description */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors mb-2.5">
          {project.title}
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 font-normal">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2.5 py-1 bg-white/10 text-slate-200 rounded-lg border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* View Details Button */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400">
          Client: {project.client}
        </span>
        <button
          onClick={() => onSelectProject(project)}
          className="text-xs font-bold px-4 py-2 bg-gradient-to-r from-[#1D4ED8] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white rounded-xl shadow-lg flex items-center space-x-1.5 transition-all transform group-hover:translate-x-0.5"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
