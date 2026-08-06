import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock, Building, ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] via-[#0B1F4D]/40 to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-[#7C3AED] text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
              <div className="flex items-center space-x-3 text-slate-700 text-sm">
                <Building className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Client</div>
                  <div className="font-bold text-[#111827]">{project.client}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 text-sm">
                <Clock className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Development Duration</div>
                  <div className="font-bold text-[#111827]">{project.timeline}</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-2">
                Project Overview
              </h4>
              <p className="text-slate-600 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-2">
                Key Deliverables & Architectural Highlights
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                {project.details}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-purple-50 text-[#7C3AED] border border-purple-200 font-bold text-xs rounded-xl"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-slate-50 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(`Project Inquiry: ${project.title}`);
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-600/25 flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <span>Build a Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
