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
      className="p-6 rounded-3xl bg-white border border-purple-100 flex flex-col justify-between group hover:border-[#C084FC] hover:shadow-xl hover:shadow-purple-600/15 transition-all duration-300 shadow-lg shadow-purple-900/5 text-[#111827]"
    >
      <div>
        {/* Project Image & Category Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-purple-50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

          {/* Floating Category Badge */}
          <span className="absolute top-3.5 left-3.5 text-[10px] font-bold px-3 py-1 bg-white/90 backdrop-blur-md text-[#7C3AED] rounded-full border border-purple-200 uppercase tracking-widest shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Project Name & Description */}
        <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors mb-2.5">
          {project.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 font-normal">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2.5 py-1 bg-purple-50 text-[#7C3AED] rounded-lg border border-purple-100"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* View Details Button */}
      <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-500">
          Client: {project.client}
        </span>
        <button
          onClick={() => onSelectProject(project)}
          className="text-xs font-bold px-4 py-2 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white rounded-xl shadow-md shadow-purple-500/25 flex items-center space-x-1.5 transition-all transform group-hover:translate-x-0.5"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
